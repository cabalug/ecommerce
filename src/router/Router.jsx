import { createBrowserRouter } from "react-router-dom";
import App from "../components/pages/App";
import Error404 from "../components/pages/Error404";

const router = createBrowserRouter([{
    path: "/ecommerce/",
    element: <App />,
    errorElement: <Error404 />
}])

export default router