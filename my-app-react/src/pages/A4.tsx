import { Table } from 'antd'
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
    }, [pagination.current, pagination.pageSize])
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
    return <Table columns={columns} dataSource={students} onChange={onTableChange} pagination={pagination} loading={loading} rowKey="id"></Table>
}