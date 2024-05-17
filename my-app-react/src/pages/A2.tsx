import { Table } from 'antd'
import { ColumnsType } from "antd/lib/table"
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
    const [students, setStudents] = useState<Student[]>([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function getStudents() {
            const resp = await axios.get<R<Student[]>>('http://localhost:8080/api/students')
            console.log(resp)
            setStudents(resp.data.data)
            setLoading(false)
        }
        getStudents()
    }, [])
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
    return <Table columns={columns} dataSource={students} loading={loading} rowKey="id"></Table>
}