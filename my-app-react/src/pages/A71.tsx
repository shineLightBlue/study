import StudentStore from '../store/StudentStore'
import { observer } from 'mobx-react-lite'

function A71() {
    return (
        <h3 style={{ color: 'red' }}>组件1 {StudentStore.student.name}</h3>
    )
}

export default observer(A71)
