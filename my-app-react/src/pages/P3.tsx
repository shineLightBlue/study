import axios from 'axios'
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
export default function P3({ id }: { id: number }) {
    async function updateStudent() {
        const resp = await axios.get<R<Student>>(
            `http://localhost:8080/api/students/${id}`
        )
        console.log(resp)
    }
    updateStudent()
    return null
}