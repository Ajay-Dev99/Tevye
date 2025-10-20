import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function Sidebar() {
    const navigate = useNavigate()
    const { logout } = useAuth()

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <aside className="w-64 bg-white flex flex-col shadow-md">
            <div className="h-20 flex items-center px-6">
                <h1 className="text-2xl font-bold text-text-primary-light">
                    Tevye
                </h1>
            </div>
            <nav className="flex-1 px-4 py-2 space-y-2">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-lg font-bold ${isActive
                            ? 'bg-primary/10 text-primary'
                            : 'text-text-tertiary-light hover:bg-primary/10 hover:text-primary'
                        }`
                    }
                >
                    <svg
                        fill="currentColor"
                        height={24}
                        viewBox="0 0 256 256"
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z" />
                    </svg>
                    <span>Dashboard</span>
                </NavLink>
                <NavLink
                    to="/events"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-lg font-medium ${isActive
                            ? 'bg-primary/10 text-primary'
                            : 'text-text-tertiary-light hover:bg-primary/10 hover:text-primary'
                        }`
                    }
                >
                    <svg
                        fill="currentColor"
                        height={24}
                        viewBox="0 0 256 256"
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z" />
                    </svg>
                    <span>Events</span>
                </NavLink>
                <NavLink
                    to="/users"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-lg font-medium ${isActive
                            ? 'bg-primary/10 text-primary'
                            : 'text-text-tertiary-light hover:bg-primary/10 hover:text-primary'
                        }`
                    }
                >
                    <svg
                        fill="currentColor"
                        height={24}
                        viewBox="0 0 256 256"
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z" />
                    </svg>
                    <span>Users</span>
                </NavLink>
                <NavLink
                    to="/reports"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-lg font-medium ${isActive
                            ? 'bg-primary/10 text-primary'
                            : 'text-text-tertiary-light hover:bg-primary/10 hover:text-primary'
                        }`
                    }
                >
                    <svg
                        fill="currentColor"
                        height={24}
                        viewBox="0 0 256 256"
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM216,136H40V56H216v80Z" />
                    </svg>
                    <span>Reports</span>
                </NavLink>

            </nav>

            {/* Logout Button */}
            <div className="p-4 border-t border-primary/10">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-text-tertiary-light hover:bg-accent-negative/10 hover:text-accent-negative font-medium transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    )
}

export default Sidebar
