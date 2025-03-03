import React from 'react'
import MainNav from './components/MainNav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <MainNav />
            <Outlet />
        </>
    )
}

export default Layout
