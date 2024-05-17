import { action, computed, makeAutoObservable, makeObservable, observable, runInAction } from 'mobx'
import axios from "axios";

interface Student {
    id: number,
    name: string,
    sex?: string,
    age?: number,
    photo?: string
}
interface R<T> {
    code: number,
    data: T,
    message?: string
}
class StudentStore {
    // 属性 - 对应状态数据 observable state
    @observable student: Student = { id: 0, name: '' }
    // 方法 - 对应 action 方法
    @action setName(name: string) {
        this.student.name = name
    }
    @action async fetch(id: number) {
        const resp = await axios.get<R<Student>>(`http://localhost:8080/api/students/${id}`)
        runInAction(() => {
            this.student = resp.data.data
        })
    }
    // get 方法 - 对应 derived value
    @computed get displayName() {
        const first = this.student.name.charAt(0)
        if (this.student.sex === '男') {
            return first + '大侠'
        } else if (this.student.sex === '女') {
            return first + '女侠'
        } else {
            return ''
        }
    }
    // 构造器
    constructor() {
        makeObservable(this)
        // makeAutoObservable(this)
    }
}

export default new StudentStore()