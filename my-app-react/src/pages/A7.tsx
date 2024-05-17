import { Input } from 'antd'
import StudentStore from '../store/StudentStore'
import { observer } from 'mobx-react-lite'
import Search from 'antd/lib/input/Search'
import A71 from './A71'
import A72 from './A72'
function A7() {
    return (
        <>
            <Input style={{ width: 100 }} onChange={(e) => {
                StudentStore.setName(e.target.value)
            }}></Input>
            <Search style={{ width: 150 }} placeholder='请输入编号' onSearch={(v) => {
                StudentStore.fetch(Number(v))
            }}></Search>
            <h3>组件0{StudentStore.displayName}</h3>
            <A71></A71>
            <A72></A72>
        </>)
}
export default observer(A7)