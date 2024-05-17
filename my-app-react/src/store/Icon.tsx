import * as icons from '@ant-design/icons'
interface Module {
    [a: string]: any
}
console.log(icons)
const all: Module = icons
export default function Icon({ name }: { name: string }) {
    console.log(name)
    const Icon = all[name]
    return <Icon></Icon>
}