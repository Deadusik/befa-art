import { routes } from './routes'
import {
    Route,
    Routes
} from 'react-router-dom'
import Error from '../components/pages/Error';

const AppRouter = () => {
    return (
        <>
            <Routes>
                {
                    routes.map(route =>
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element} />
                    )
                }
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
}

export default AppRouter;