import React from 'react';

function Reports() {
    return (
        <main className="flex-1 p-8 bg-gray-50 min-h-screen">
            <div className="mb-8 flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
            </div>

            {/* Training Statistics */}
            <section className="mb-8">
                <h2 className="mb-4 text-xl font-bold text-gray-900">Training Statistics</h2>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Completion Rate */}
                    <div className="rounded-xl bg-white p-6 shadow-sm">
                        <p className="text-base font-medium text-gray-700">Training Completion Rate</p>
                        <p className="text-4xl font-bold text-cyan-500">85%</p>
                        <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                            <p>Last 30 Days</p>
                            <p className="text-green-500 font-medium">+5%</p>
                        </div>
                        <div className="mt-6 grid h-48 grid-cols-6 items-end gap-4">
                            {[60, 40, 80, 70, 100, 40].map((h, idx) => (
                                <div
                                    key={idx}
                                    className={`w-full rounded-t bg-cyan-400 ${h === 100 ? 'bg-cyan-500' : ''}`}
                                    style={{ height: `${h}%` }}
                                />
                            ))}
                        </div>
                        <div className="mt-2 grid grid-cols-6 gap-4 text-center text-xs text-gray-500 font-medium">
                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month) => (
                                <p key={month}>{month}</p>
                            ))}
                        </div>
                    </div>

                    {/* Hours Delivered */}
                    <div className="rounded-xl bg-white p-6 shadow-sm">
                        <p className="text-base font-medium text-gray-700">Training Hours Delivered</p>
                        <p className="text-4xl font-bold text-cyan-500">12,500</p>
                        <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                            <p>Last 30 Days</p>
                            <p className="text-green-500 font-medium">+10%</p>
                        </div>
                        <div className="mt-6 h-48">
                            {/* Simple wave svg */}
                            <svg
                                fill="none"
                                height="100%"
                                preserveAspectRatio="none"
                                viewBox="0 0 472 150"
                                width="100%"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 109 C 18.1538 109 18.1538 21 36.3077 21 C 54.4615 21 54.4615 41 72.6154 41 C 90.7692 41 90.7692 93 108.923 93 C 127.077 93 127.077 33 145.231 33 C 163.385 33 163.385 101 181.538 101 C 199.692 101 199.692 61 217.846 61 C 236 61 236 45 254.154 45 C 272.308 45 272.308 121 290.462 121 C 308.615 121 308.615 149 326.769 149 C 344.923 149 344.923 1 363.077 1 C 381.231 1 381.231 81 399.385 81 C 417.538 81 417.538 129 435.692 129 C 453.846 129 453.846 25 472 25"
                                    stroke="#06e0e0"
                                    strokeWidth={3}
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        <div className="mt-2 grid grid-cols-6 gap-4 text-center text-xs text-gray-500 font-medium">
                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month) => (
                                <p key={month}>{month}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Instructor Engagement */}
            <section className="mb-8">
                <h2 className="mb-4 text-xl font-bold text-gray-900">Instructor Engagement</h2>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Top Performing Instructors */}
                    <div className="rounded-xl bg-white p-6 shadow-sm">
                        <p className="text-base font-medium text-gray-700">Top Performing Instructors</p>
                        <p className="text-4xl font-bold text-cyan-500">5 Instructors</p>
                        <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                            <p>Last 30 Days</p>
                            <p className="text-green-500 font-medium">+10%</p>
                        </div>
                        <div className="mt-6 space-y-4">
                            {[
                                { name: 'Instructor A', value: '95%' },
                                { name: 'Instructor B', value: '80%' },
                                { name: 'Instructor C', value: '70%' },
                                { name: 'Instructor D', value: '65%' },
                                { name: 'Instructor E', value: '50%' },
                            ].map((inst) => (
                                <div
                                    key={inst.name}
                                    className="grid grid-cols-[100px_1fr] items-center gap-4"
                                >
                                    <p className="text-sm font-medium text-gray-600 truncate">{inst.name}</p>
                                    <div className="w-full h-2 rounded-full bg-cyan-100">
                                        <div
                                            className="h-2 rounded-full bg-cyan-500"
                                            style={{ width: inst.value }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Instructor Activity Over Time */}
                    <div className="rounded-xl bg-white p-6 shadow-sm">
                        <p className="text-base font-medium text-gray-700">Instructor Activity Over Time</p>
                        <p className="text-4xl font-bold text-cyan-500">1000+ Activities</p>
                        <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                            <p>Last 30 Days</p>
                            <p className="text-green-500 font-medium">+15%</p>
                        </div>
                        <div className="mt-6 h-48">
                            <svg
                                fill="none"
                                height="100%"
                                preserveAspectRatio="none"
                                viewBox="0 0 472 150"
                                width="100%"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 109 C 18.1538 109 18.1538 21 36.3077 21 C 54.4615 21 54.4615 41 72.6154 41 C 90.7692 41 90.7692 93 108.923 93 C 127.077 93 127.077 33 145.231 33 C 163.385 33 163.385 101 181.538 101 C 199.692 101 199.692 61 217.846 61 C 236 61 236 45 254.154 45 C 272.308 45 272.308 121 290.462 121 C 308.615 121 308.615 149 326.769 149 C 344.923 149 344.923 1 363.077 1 C 381.231 1 381.231 81 399.385 81 C 417.538 81 417.538 129 435.692 129 C 453.846 129 453.846 25 472 25"
                                    stroke="#06e0e0"
                                    strokeWidth={3}
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        <div className="mt-2 grid grid-cols-6 gap-4 text-center text-xs text-gray-500 font-medium">
                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month) => (
                                <p key={month}>{month}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Regional Data */}
            <section>
                <h2 className="mb-4 text-xl font-bold text-gray-900">Regional Data</h2>
                <div className="grid grid-cols-1 gap-6">
                    <div className="rounded-xl bg-white p-6 shadow-sm">
                        <p className="text-base font-medium text-gray-700">Training Events by Region</p>
                        <p className="text-4xl font-bold text-cyan-500">5 Regions</p>
                        <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                            <p>Last 30 Days</p>
                            <p className="text-green-500 font-medium">+8%</p>
                        </div>
                        <div className="mt-6 grid h-48 grid-cols-5 items-end gap-4">
                            {[70, 50, 80, 10, 40].map((h, idx) => (
                                <div
                                    key={idx}
                                    className={`w-full rounded-t ${h === 80 ? 'bg-cyan-500' : 'bg-cyan-400/70'}`}
                                    style={{ height: `${h}%` }}
                                />
                            ))}
                        </div>
                        <div className="mt-2 grid grid-cols-5 gap-4 text-center text-xs text-gray-500 font-medium">
                            {['North', 'South', 'East', 'West', 'Central'].map((region) => (
                                <p key={region}>{region}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Reports;
