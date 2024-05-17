import { useRoutes } from "react-router-dom";
import RoutesStore from "../store/RoutesStore";
import { observer } from "mobx-react-lite";

function MyRouter() {
    const router = useRoutes(RoutesStore.routes)
    return router
}
export default observer(MyRouter)