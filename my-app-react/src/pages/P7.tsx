import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
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

const HiddenContext = createContext(false)
export default function P7() {
    const [students, setStudents] = useState<Student[]>([])
    const [hidden, setHidden] = useState(false)
    useEffect(() => {
        async function updateStudents() {
            const resp = await axios.get<R<Student[]>>('http://localhost:8080/api/students')
            setStudents(resp.data.data)
            console.log(resp)
        }
        updateStudents()
    }, [])
    function hideOrShow() {
        setHidden((old) => {
            return !old
        })
    }
    return <HiddenContext.Provider value={hidden}>
        <input type='button' value={hidden ? '显示' : '隐藏'} onClick={hideOrShow}></input>
        <P71 students={students}></P71>
    </HiddenContext.Provider>
}
function P71({ students }: { students: Student[] }) {
    const list = students.map(s => <P72 student={s} key={s.id}></P72>)
    return <>{list}</>
}
function P72({ student }: { student: Student }) {
    const hidden = useContext(HiddenContext)
    const jsx = !hidden && <span>{student.age}</span>
    return <div>{student.name}{jsx}</div>
}