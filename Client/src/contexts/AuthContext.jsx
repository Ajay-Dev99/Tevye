import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Check if user is already logged in
        const token = localStorage.getItem('authToken')
        if (token) {
            setIsAuthenticated(true)
        }
        setIsLoading(false)
    }, [])

    const login = (token) => {
        localStorage.setItem('authToken', token)
        setIsAuthenticated(true)
    }

    const logout = () => {
        localStorage.removeItem('authToken')
        setIsAuthenticated(false)
    }

    const value = {
        isAuthenticated,
        isLoading,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
