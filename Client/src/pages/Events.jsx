import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Events() {
    const navigate = useNavigate()
    return (
        <div className="p-8 bg-white min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Events</h1>
                    <p className="text-gray-500 mt-1">
                        Manage and view all training events.
                    </p>
                </div>

                <Link
                    to="/events/create"
                    className="flex items-center gap-2 px-5 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium shadow-sm"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                    Create Event
                </Link>
            </div>

            {/* Tabs */}
            <div className="mb-6 border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                    {["Upcoming", "Ongoing", "Completed"].map((tab, i) => (
                        <a
                            key={i}
                            href="#"
                            className={`px-1 pb-3 text-sm font-medium ${i === 0
                                ? "border-b-2 border-teal-600 text-teal-600"
                                : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                }`}
                        >
                            {tab}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Event Table */}
            <div className="overflow-x-auto rounded-lg bg-white shadow-md border border-gray-200">
                <table className="w-full table-auto divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            {[
                                "Event Name",
                                "Date",
                                "Location",
                                "Team Lead",
                                "Instructor",
                                "Status",
                            ].map((header) => (
                                <th
                                    key={header}
                                    className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100 bg-white">
                        {[
                            {
                                name: "Advanced Cardiac Life Support",
                                date: "2024-07-15",
                                location: "City Hospital, Mumbai",
                                lead: "Dr. Sharma",
                                instructor: "Dr. Patel",
                                status: "Scheduled",
                                color: "blue",
                            },
                            {
                                name: "Pediatric First Aid",
                                date: "2024-07-20",
                                location: "Community Center, Delhi",
                                lead: "Dr. Verma",
                                instructor: "Dr. Singh",
                                status: "Confirmed",
                                color: "accent",
                            },
                            {
                                name: "Emergency Response Training",
                                date: "2024-08-05",
                                location: "Regional Medical Center, Bangalore",
                                lead: "Dr. Rao",
                                instructor: "Dr. Kumar",
                                status: "Planning",
                                color: "yellow",
                            },
                            {
                                name: "Surgical Skills Workshop",
                                date: "2024-08-10",
                                location: "Apollo Hospital, Chennai",
                                lead: "Dr. Iyer",
                                instructor: "Dr. Menon",
                                status: "Scheduled",
                                color: "blue",
                            },
                            {
                                name: "Mental Health First Aid",
                                date: "2024-08-15",
                                location: "Wellness Center, Kolkata",
                                lead: "Dr. Bose",
                                instructor: "Dr. Das",
                                status: "Confirmed",
                                color: "accent",
                            },
                        ].map((event, idx) => (
                            <tr key={idx} className="hover:bg-gray-50 transition cursor-pointer" onClick={() => navigate(`/events/2024-ACLS-001`)}>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                                    {event.name}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                                    {event.date}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                                    {event.location}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                                    {event.lead}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                                    {event.instructor}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm">
                                    {event.status === "Confirmed" ? (
                                        <span className="inline-flex rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold leading-5 text-green-700">
                                            {event.status}
                                        </span>
                                    ) : event.status === "Planning" ? (
                                        <span className="inline-flex rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-semibold leading-5 text-yellow-700">
                                            {event.status}
                                        </span>
                                    ) : (
                                        <span className="inline-flex rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold leading-5 text-blue-700">
                                            {event.status}
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Events
