import Home from '../componenets/Home'
import Create from '../componenets/Create'
import Login from '../componenets/Login'
import Status from '../componenets/Status'
import { Navigate } from 'react-router-dom'
import Dashboard from '../componenets/admin/Dashboard'
import Service from '../componenets/admin/Service'
import Users from '../componenets/admin/Users'
import SuperAdminProtectedRoute from './SuperAdminProtectedRoute'
import AdminRoutes from './AdminRoutes'

const AppRouter = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/create",
        element: <Create />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/status",
        element: <Status />
    },
    {
        path: '/admin/dashboard',
        element: <AdminRoutes><Dashboard /></AdminRoutes>
    },
    {
        path: '/admin/service/:id',
        element: <AdminRoutes><Service /></AdminRoutes>
    },
    {
        path: '/admin/users',
        element: <Users />
    },
    {
        path: '/admin/*',
        element: <Navigate to='/admin/dashboard' />
    },
    {
        path: "*",
        element: <Navigate to="/" />
    },

]

export default AppRouter