import P1 from './P1'
interface Student {
    id: number,
    name: string,
    sex?: string,
    age?: number,
    photo?: string
}

export default function P2({
    students, hideAge = false
}: { students: Student[], hideAge?: boolean }) {
    const jsx = students.map(
        (s) => <P1 student={s} key={s.id} hideAge={hideAge}></P1>
    )
    return <>{jsx}</>
}