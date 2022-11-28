import React from 'react'
import { routes } from './routes'
import {
    Route,
    Routes
} from 'react-router-dom'

const AppRouter = () => {
    return (
        <>
            <Routes>
                {
                    routes.map(route =>
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                            errorElement={route.error} />
                    )
                }
            </Routes>
        </>
    );
}

export default AppRouter;