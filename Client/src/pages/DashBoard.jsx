import React from 'react'
import Layout from '../components/Layout'

function DashBoard() {
    return (
        <Layout>
            <div className="p-8">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold text-text-primary-light">
                        Dashboard
                    </h1>
                    <p className="text-text-tertiary-light mt-1">
                        Welcome back, Priya Sharma
                    </p>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <p className="text-text-secondary-light font-medium">
                            Total Events
                        </p>
                        <p className="text-3xl font-bold text-text-primary-light mt-2">
                            245
                        </p>
                        <p className="text-accent-positive font-medium mt-1">+10%</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <p className="text-text-secondary-light font-medium">
                            Active Users
                        </p>
                        <p className="text-3xl font-bold text-text-primary-light mt-2">
                            150
                        </p>
                        <p className="text-accent-positive font-medium mt-1">+5%</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <p className="text-text-secondary-light font-medium">
                            Pending Approvals
                        </p>
                        <p className="text-3xl font-bold text-text-primary-light mt-2">
                            12
                        </p>
                        <p className="text-accent-negative font-medium mt-1">-2%</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-lg font-bold text-text-primary-light">
                            Event Completion Rate
                        </h3>
                        <div className="flex items-baseline gap-2 mt-2">
                            <p className="text-3xl font-bold text-text-primary-light">
                                85%
                            </p>
                            <p className="text-accent-positive font-medium">+5%</p>
                        </div>
                        <p className="text-sm text-text-tertiary-light mt-1">
                            Last 30 Days
                        </p>
                        <div className="mt-6 h-48 flex items-end justify-between px-2">
                            <div className="flex flex-col items-center space-y-1">
                                <div
                                    className="w-8 bg-primary/20 dark:bg-primary/30 rounded-t"
                                    style={{ height: "75%" }}
                                />
                                <span className="text-xs text-text-tertiary-light">
                                    Jan
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-1">
                                <div
                                    className="w-8 bg-primary/20 dark:bg-primary/30 rounded-t"
                                    style={{ height: "30%" }}
                                />
                                <span className="text-xs text-text-tertiary-light">
                                    Feb
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-1">
                                <div
                                    className="w-8 bg-primary/20 dark:bg-primary/30 rounded-t"
                                    style={{ height: "50%" }}
                                />
                                <span className="text-xs text-text-tertiary-light">
                                    Mar
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-1">
                                <div
                                    className="w-8 bg-primary/20 dark:bg-primary/30 rounded-t"
                                    style={{ height: "60%" }}
                                />
                                <span className="text-xs text-text-tertiary-light">
                                    Apr
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-1">
                                <div
                                    className="w-8 bg-primary/20 dark:bg-primary/30 rounded-t"
                                    style={{ height: "85%" }}
                                />
                                <span className="text-xs text-text-tertiary-light">
                                    May
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-1">
                                <div
                                    className="w-8 bg-primary rounded-t"
                                    style={{ height: "90%" }}
                                />
                                <span className="text-xs text-text-tertiary-light">
                                    Jun
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-lg font-bold text-text-primary-light">
                            User Engagement Over Time
                        </h3>
                        <div className="flex items-baseline gap-2 mt-2">
                            <p className="text-3xl font-bold text-text-primary-light">
                                72%
                            </p>
                            <p className="text-accent-positive font-medium">+3%</p>
                        </div>
                        <p className="text-sm text-text-tertiary-light mt-1">
                            Last 90 Days
                        </p>
                        <div className="mt-6 h-48 relative">
                            <svg
                                className="w-full h-full"
                                preserveAspectRatio="none"
                                viewBox="0 0 400 150"
                            >
                                <defs>
                                    <linearGradient
                                        id="area-gradient"
                                        x1={0}
                                        x2={0}
                                        y1={0}
                                        y2={1}
                                    >
                                        <stop offset="0%" stopColor="#008080" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="#008080" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M0 80 C40 20, 80 120, 120 80 S200 0, 240 60 S320 140, 400 100 V150 H0 Z"
                                    fill="url(#area-gradient)"
                                />
                                <path
                                    d="M0 80 C40 20, 80 120, 120 80 S200 0, 240 60 S320 140, 400 100"
                                    fill="none"
                                    stroke="#007f80"
                                    strokeLinecap="round"
                                    strokeWidth={3}
                                />
                            </svg>
                            <div className="absolute bottom-0 w-full flex justify-between px-2">
                                <span className="text-xs text-text-tertiary-light">
                                    Q1
                                </span>
                                <span className="text-xs text-text-tertiary-light">
                                    Q2
                                </span>
                                <span className="text-xs text-text-tertiary-light">
                                    Q3
                                </span>
                                <span className="text-xs text-text-tertiary-light">
                                    Q4
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-text-primary-light mb-4">
                        Pending Approvals
                    </h2>
                    <div className="bg-white rounded-lg shadow overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="border-b border-primary/20">
                                <tr>
                                    <th className="p-4 text-sm font-bold text-text-secondary-light">
                                        Event Name
                                    </th>
                                    <th className="p-4 text-sm font-bold text-text-secondary-light">
                                        Date
                                    </th>
                                    <th className="p-4 text-sm font-bold text-text-secondary-light">
                                        Location
                                    </th>
                                    <th className="p-4 text-sm font-bold text-text-secondary-light">
                                        Status
                                    </th>
                                    <th className="p-4 text-sm font-bold text-text-secondary-light">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-primary/10">
                                    <td className="p-4 text-text-primary-light font-medium">
                                        Advanced Cardiac Life Support
                                    </td>
                                    <td className="p-4 text-text-tertiary-light">
                                        2024-07-15
                                    </td>
                                    <td className="p-4 text-text-tertiary-light">
                                        Mumbai
                                    </td>
                                    <td className="p-4">
                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-yellow-100 text-yellow-800">
                                            Pending
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <button className="px-4 py-2 text-sm font-bold text-white bg-primary rounded hover:bg-primary/90">
                                            Approve
                                        </button>
                                    </td>
                                </tr>
                                <tr className="border-b border-primary/10">
                                    <td className="p-4 text-text-primary-light font-medium">
                                        Pediatric Advanced Life Support
                                    </td>
                                    <td className="p-4 text-text-tertiary-light">
                                        2024-08-20
                                    </td>
                                    <td className="p-4 text-text-tertiary-light">
                                        Delhi
                                    </td>
                                    <td className="p-4">
                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-yellow-100 text-yellow-800">
                                            Pending
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <button className="px-4 py-2 text-sm font-bold text-white bg-primary rounded hover:bg-primary/90">
                                            Approve
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-text-primary-light font-medium">
                                        Basic Life Support
                                    </td>
                                    <td className="p-4 text-text-tertiary-light">
                                        2024-09-10
                                    </td>
                                    <td className="p-4 text-text-tertiary-light">
                                        Chennai
                                    </td>
                                    <td className="p-4">
                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-yellow-100 text-yellow-800">
                                            Pending
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <button className="px-4 py-2 text-sm font-bold text-white bg-primary rounded hover:bg-primary/90">
                                            Approve
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default DashBoard
