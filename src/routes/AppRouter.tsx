import Home from "@page/home"
import MyAppBar from "@component/MyAppBar"
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'


export default function AppRouter() {
     const Layout = () => {
        return (
            <>
            <MyAppBar />
            <Outlet />
            </>
        )
    }

    const BrowserRoutes = () => {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
    return(
        <BrowserRoutes />
    )
}