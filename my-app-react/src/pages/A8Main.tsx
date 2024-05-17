import { Navigate, useNavigate, Outlet } from "react-router-dom";
import RoutesStore from "../store/RoutesStore";
import { Button, Layout, Menu } from 'antd'
import { observer } from "mobx-react-lite";

function A8Main() {
    const nav = useNavigate()
    function onClick() {
        RoutesStore.reset()
        nav('/login')
    }
    if (RoutesStore.username === '') {
        return <Navigate to='/login'></Navigate>
    }
    return (
        <Layout>
            <Layout.Header>
                <span>欢迎您【{RoutesStore.username}】</span>
                <Button size='small' onClick={onClick}>注销</Button>
            </Layout.Header>
            <Layout>
                <Layout.Sider>
                    <Menu items={RoutesStore.menus} theme='dark' mode='inline'></Menu>
                </Layout.Sider>
                <Layout.Content>
                    <Outlet></Outlet>
                </Layout.Content>
            </Layout>
        </Layout>
    )
}
export default observer(A8Main)