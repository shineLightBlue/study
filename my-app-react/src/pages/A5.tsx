import { Input, Select, Table } from 'antd'
import { ColumnsType, TablePaginationConfig } from "antd/lib/table"
import { useEffect, useState } from "react"
import axios from 'axios'
export default function A2() {
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
    interface PageResp<T> {
        list: T[],
        total: number
    }
    interface StudentQueryForm {
        name?: string,
        sex?: string,
        age?: string
    }
    const { Option } = Select
    const [form, setForm] = useState<StudentQueryForm>({})
    const [students, setStudents] = useState<Student[]>([])
    const [loading, setLoading] = useState(true)
    const [pagination, setPagination] = useState<TablePaginationConfig>({ current: 1, pageSize: 5 })
    function onTableChange(newPagination: TablePaginationConfig) {
        console.log(newPagination)
        setPagination(newPagination)
    }
    useEffect(() => {
        async function getStudents() {
            const resp = await axios.get<R<PageResp<Student>>>('http://localhost:8080/api/students/q',
                {
                    params: {
                        page: pagination.current,
                        size: pagination.pageSize,
                        ...form
                    },
                })
            console.log(resp)
            setStudents(resp.data.data.list)
            setPagination((old) => {
                console.log(old)
                return { ...old, total: resp.data.data.total }
            })
            setLoading(false)
        }
        getStudents()
    }, [pagination.current, pagination.pageSize, form.name, form.sex, form.age])
    function onNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm((old) => {
            console.log(old)
            return { ...old, name: e.target.value }
        })
    }
    function onSexChange(value: string) {
        console.log(value)
        setForm((old) => {
            return { ...old, sex: value }
        })
    }
    function onAgeChange(value: string) {
        setForm((old) => {
            return { ...old, age: value }
        })
    }

    const columns: ColumnsType<Student> = [
        {
            title: '编号',
            dataIndex: 'id'
        },
        {
            title: '姓名',
            dataIndex: 'name'
        },
        {
            title: '性别',
            dataIndex: 'sex'
        },
        {
            title: '年龄',
            dataIndex: 'age'
        }
    ]
    return (
        <div>
            <div>
                <Input style={{ width: 120 }} placeholder='请输入姓名' value={form.name} onChange={onNameChange}></Input>
                <Select style={{ width: 120 }} placeholder="请选择性别" value={form.sex} allowClear={true} onChange={onSexChange}>
                    <Option value="男">男</Option>
                    <Option value="女">女</Option>
                </Select>
                <Select
                    style={{ width: 120 }}
                    placeholder='请选择年龄'
                    allowClear={true}
                    value={form.age}
                    onChange={onAgeChange}>
                    <Option value='1,19'>20以下</Option>
                    <Option value='20,29'>20左右</Option>
                    <Option value='30,39'>30左右</Option>
                    <Option value='40,120'>40以上</Option>
                </Select>
            </div>
            <Table columns={columns} dataSource={students} onChange={onTableChange} pagination={pagination} loading={loading} rowKey="id"></Table>
        </div>
    )
}