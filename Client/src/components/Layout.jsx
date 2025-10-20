import React from 'react'
import Sidebar from './Sidebar'

function Layout({ children }) {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 overflow-y-auto bg-background-light">
                {children}
            </main>
        </div>
    )
}

export default Layout
