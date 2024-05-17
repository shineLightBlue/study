import axios from 'axios'
import { useState } from 'react'
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
export default function P5({ id }: { id: number }) {
    async function updateStudent() {
        const resp = await axios.get<R<Student>>(
            `http://localhost:8080/api/students/${id}`
        )
        console.log(resp.data.data)
        setStudent(resp.data.data)
        console.log(student)
    }
    const [student, setStudent] = useState({ name: 'xx' })
    const [fetch, setFetch] = useState(false)
    if (!fetch) {
        setFetch(true)
        updateStudent()
    }
    console.log(student)
    return <h3>{student.name}</h3>
}