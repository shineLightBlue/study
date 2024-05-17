import logo from './imgs/0.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../app/store'
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice'
import { incrementAsync } from '../features/counter/counterSlice'
interface Student {
    id: number,
    name: string,
    sex?: string,
    age?: number,
    photo?: string
}
export default function P1({ student, hideAge = false }: { student: Student, hideAge?: boolean }) {
    function handleClick(e: React.MouseEvent) {
        console.log(e)
        console.log(student)
    }
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch();
    const ageFragment = !hideAge && <span>年龄 {student.age}</span>
    const handleIncrementAsync = () => {
        let s = dispatch(incrementAsync(5) as any)
        console.log(s)
    }
    return (
        <div>
            <div>
                <img src={logo} width={20} onClick={handleClick} />
            </div>
            <h1>{student.name}</h1>
            <h2>{student.id}</h2>
            <p>
                性别{student.sex}{ageFragment}
            </p>
            <p>Count:{count}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(2))}>Decrement</button>
            <button onClick={handleIncrementAsync}>Decrement</button>
        </div>
    )
}