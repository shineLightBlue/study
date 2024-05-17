import StudentStore from '../store/StudentStore'
import { observer } from 'mobx-react-lite'

function A72() {
    return (
        <h3 style={{ color: 'blue' }}>组件2 {StudentStore.student.name}</h3>
    )
}

export default observer(A72)
