import React, { useState } from 'react';

// SVGs
const SearchIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

const Dropdown = ({ label, options, selected, onSelect }) => {
    const [open, setOpen] = useState(false);

    const handleSelect = (option) => {
        onSelect(option);
        setOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-100"
            >
                <span>{selected || label}</span>
                <ChevronDownIcon />
            </button>
            {open && (
                <div className="absolute z-10 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
                    {options.map((option) => (
                        <button
                            key={option}
                            onClick={() => handleSelect(option)}
                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

function Users() {
    // Filter selections
    const [availability, setAvailability] = useState(null);
    const [specialty, setSpecialty] = useState(null);
    const [location, setLocation] = useState(null);

    return (
        <main className="flex-1 p-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Instructors</h2>
                    <p className="text-gray-500 mt-1">Manage and assign instructors to events</p>
                </div>

                {/* Search & Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-grow">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                            <SearchIcon />
                        </div>
                        <input
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:outline-none placeholder-gray-400"
                            placeholder="Search instructors by name, specialty..."
                            type="text"
                        />
                    </div>
                    <div className="flex gap-2">
                        <Dropdown
                            label="Availability"
                            options={["Available", "Unavailable"]}
                            selected={availability}
                            onSelect={setAvailability}
                        />
                        <Dropdown
                            label="Specialty"
                            options={["Cardiology", "Neurology", "General Surgery"]}
                            selected={specialty}
                            onSelect={setSpecialty}
                        />
                        <Dropdown
                            label="Location"
                            options={["Mumbai", "Delhi", "Chennai"]}
                            selected={location}
                            onSelect={setLocation}
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="rounded-xl overflow-hidden border border-gray-200">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50">
                                <tr>
                                    {["Instructor", "Availability", "Specialty", "Location", "Actions"].map((col, idx) => (
                                        <th
                                            key={idx}
                                            className={`px-6 py-4 font-semibold text-gray-500 uppercase tracking-wider ${col === "Actions" ? "text-right" : ""}`}
                                        >
                                            {col}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    {
                                        name: "Dr. Arjun Sharma",
                                        available: true,
                                        specialty: "Cardiology",
                                        location: "Mumbai",
                                    },
                                    {
                                        name: "Dr. Priya Verma",
                                        available: false,
                                        specialty: "Emergency Medicine",
                                        location: "Delhi",
                                    },
                                    {
                                        name: "Dr. Rohan Kapoor",
                                        available: true,
                                        specialty: "Pediatrics",
                                        location: "Bangalore",
                                    },
                                    {
                                        name: "Dr. Neha Singh",
                                        available: true,
                                        specialty: "General Surgery",
                                        location: "Chennai",
                                    },
                                    {
                                        name: "Dr. Vikram Joshi",
                                        available: false,
                                        specialty: "Neurology",
                                        location: "Kolkata",
                                    },
                                ].map(({ name, available, specialty, location }, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 font-medium text-gray-900">{name}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${available
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-100 text-red-800"
                                                }`}>
                                                <span className={`w-2 h-2 mr-2 rounded-full ${available ? "bg-green-500" : "bg-red-500"}`} />
                                                {available ? "Available" : "Unavailable"}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">{specialty}</td>
                                        <td className="px-6 py-4 text-gray-600">{location}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                className={`px-4 py-2 rounded-lg font-semibold text-white ${available
                                                    ? "bg-teal-600 hover:bg-teal-700"
                                                    : "bg-gray-300 cursor-not-allowed"
                                                    }`}
                                                disabled={!available}
                                            >
                                                Assign
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Users;
