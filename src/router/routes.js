import Home from "../components/pages/Home"
import Error from '../components/pages/Error'

export const routes = [
    {
        path: '/',
        element: <Home />,
        error: <Error />
    }
];