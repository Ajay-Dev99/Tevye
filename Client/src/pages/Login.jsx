import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function Login() {
    const navigate = useNavigate()
    const { login } = useAuth()
    const [formData, setFormData] = useState({ email: '', password: '' })
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (error) setError('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')

        try {
            await new Promise(resolve => setTimeout(resolve, 1500))
            if (formData.email === 'admin@tevye.com' && formData.password === 'password') {
                login('dummy-token')
                navigate('/')
            } else {
                setError('Invalid email or password')
            }
        } catch {
            setError('Login failed. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#F7FAFC]">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-md">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-[#008C95]">Tevye</h1>
                    <p className="mt-2 text-[#1E2A39]">Welcome back to your training dashboard</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Input */}
                    <div>
                        <input
                            autoComplete="email"
                            className="block w-full px-4 py-3 border border-gray-200 rounded-lg bg-[#F5F8FA] text-[#1E2A39] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#008C95]"
                            id="email"
                            name="email"
                            placeholder="Username or Email"
                            required
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <input
                            autoComplete="current-password"
                            className="block w-full px-4 py-3 border border-gray-200 rounded-lg bg-[#F5F8FA] text-[#1E2A39] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#008C95]"
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                            type="password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="text-[#D93025] text-sm text-center bg-[#FDECEC] p-3 rounded-lg">
                            {error}
                        </div>
                    )}

                    {/* Forgot Password */}
                    <div className="flex items-center justify-end">
                        <a
                            href="#"
                            className="text-sm font-medium text-[#006B75] hover:underline"
                        >
                            Forgot password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full flex justify-center py-3 px-4 text-sm font-bold rounded-lg text-white transition-all duration-300 shadow-sm ${isLoading
                                ? 'bg-[#008C95]/70 cursor-not-allowed'
                                : 'bg-gradient-to-r from-[#008C95] to-[#00A8B0] hover:from-[#009EA6] hover:to-[#00BCC5]'
                                }`}
                        >
                            {isLoading ? (
                                <>
                                    <svg
                                        className="animate-spin w-5 h-5 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Logging in...
                                </>
                            ) : (
                                'Log in'
                            )}
                        </button>
                    </div>
                </form>

                {/* Demo Credentials */}
                <div className="text-center text-xs text-gray-400">
                    <p className="mb-1">Demo Credentials:</p>
                    <p>Email: admin@tevye.com</p>
                    <p>Password: password</p>
                </div>
            </div>
        </div>
    )
}

export default Login
