import { ItemType } from 'antd/lib/menu/hooks/useItems'
import axios from 'axios'
import { makeAutoObservable, runInAction } from 'mobx'
import { lazy } from 'react'
import Icon from './Icon'

import { Link, Navigate, RouteObject } from 'react-router-dom'
function load(name: string) {
    const Page = lazy(() => import(`../pages/${name}`))
    return <Page></Page>
}
interface Route {
    path: string,
    element: string
}
interface Menu {
    key: string,
    label: string,
    children?: Menu[],
    icon: string,
    routePath: string
}
interface LoginReq {
    username: string,
    password: string
}
interface LoginResp {
    token: string
}
interface R<T> {
    code: number,
    data: T,
    message?: string
}
interface MenuAndRoute {
    routeList: Route[]
    menuTree: Menu[]
}
function convertMenu(m: Menu): ItemType {
    const Label = m.routePath ? <Link to={m.routePath}>{m.label}</Link> : m.label
    return {
        key: m.key,
        label: Label,
        icon: <Icon name={m.icon}></Icon>,
        children: m.children && m.children.map(convertMenu)
    }
}
class RoutesStore {
    constructor() {
        makeAutoObservable(this)
    }
    dynamicRoutes: Route[] = []
    dynamicMenus: Menu[] = []
    token: string = ''
    state: string = 'pending'
    message: string = ''
    async login(loginReq: LoginReq) {
        this.state = 'pending'
        const resp1 = await axios.post<R<LoginResp>>(
            'http://localhost:8080/api/loginJwt', loginReq
        )
        if (resp1.data.code === 999) {
            const resp2 = await axios.get<R<MenuAndRoute>>(
                `http://localhost:8080/api/menu/${loginReq.username}`
            )
            runInAction(() => {
                this.dynamicRoutes = resp2.data.data.routeList
                localStorage.setItem('dynamicRoutes', JSON.stringify(this.dynamicRoutes))
                this.dynamicMenus = resp2.data.data.menuTree
                localStorage.setItem('dynamicMenus', JSON.stringify(this.dynamicMenus))
                this.token = resp1.data.data.token
                localStorage.setItem('token', this.token)
                this.state = 'done'
            })
        } else {
            runInAction(() => {
                this.message = resp1.data.message || '未知错误'
                this.state = 'error'
            })
        }
    }
    get username() {
        if (this.token.length === 0) {
            return ''
        }
        const json = atob(this.token.split('.')[1])
        return JSON.parse(json).sub
    }
    get menus() {
        return this.dynamicMenus.map(convertMenu)
    }
        get routes() {
            const staticRoutes: RouteObject[] = [
                { path: '/login', element: load('A8Login') },
                { path: '/', element: load('A8Main'), children: [] },
                { path: '/404', element: load('A8Notfound') },
                { path: '/*', element: <Navigate to={'/404'}></Navigate> }
            ]
            staticRoutes[1].children = this.dynamicRoutes.map((r) => {
                return {
                    path: r.path,
                    element: load(r.element)
                }
            })
            return staticRoutes
        }
    reset() {
        localStorage.removeItem('dynamicRoutes')
        this.dynamicRoutes = []
        localStorage.removeItem('dynamicMenus')
        this.dynamicMenus = []
        localStorage.removeItem('token')
        this.token = ''
        this.message = ''
        this.state = 'pending'
    }
}
export default new RoutesStore()