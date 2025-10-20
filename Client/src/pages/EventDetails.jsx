// src/components/EventDetails.jsx
import React from "react";

const EventDetails = () => {
    return (
        <main className="flex-1 overflow-y-auto">
            <div className="p-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                    <a href="#" className="hover:text-blue-600">Events</a>
                    <span>/</span>
                    <span className="text-gray-700">Event Details</span>
                </div>

                {/* Title */}
                <div className="mb-8">
                    <h2 className="text-4xl font-bold text-black">
                        Advanced Cardiac Life Support (ACLS) Training
                    </h2>
                    <p className="text-base text-gray-600 mt-1">
                        Event ID: 2024-ACLS-001
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 flex flex-col gap-8">
                        {/* Class Information */}
                        <div className="p-6 rounded-lg border border-gray-200">
                            <h3 className="text-2xl font-bold mb-6 text-black">Class Information</h3>
                            <div className="divide-y divide-gray-100">
                                {[
                                    ["Course", "Advanced Cardiac Life Support (ACLS)"],
                                    ["Start Date", "July 15, 2024"],
                                    ["End Date", "July 16, 2024"],
                                    ["Location", "Apollo Hospital, Chennai"],
                                    ["Capacity", "20 participants"],
                                ].map(([label, value], index) => (
                                    <div key={index} className="py-4 grid grid-cols-3 gap-4">
                                        <p className="text-sm font-medium text-gray-600">{label}</p>
                                        <p className="col-span-2 text-sm text-gray-900">{value}</p>
                                    </div>
                                ))}

                                <div className="py-4 grid grid-cols-3 gap-4 items-center">
                                    <p className="text-sm font-medium text-gray-600">Status</p>
                                    <div className="col-span-2">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                            Scheduled
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="p-6 rounded-lg border border-gray-200">
                            <h3 className="text-2xl font-bold mb-4 text-black">Location</h3>
                            <div
                                className="w-full h-64 bg-center bg-no-repeat bg-cover rounded-lg"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBwCB_6p8aadCBlmp1UwooXW3-ixn_ia-5_QQo5fArEzBvIlgXQuqtBbg7vdLZ3tmuaPg-dPXg-sR3AiumL-Fh34DwrwMt__dNhDraZxuHiVXguj4BMbU_FYSCh3rY79krH9WIFYtQ02u-aEkZTVv-q0SMBc-F3UFblJ8ZhxvGxcuInd6QbOub2XDFf9MKRElL3U_GfmODOzOu73Ks89n8LbxVxzF4Amod2CIOhOoxfQCguq8YuQA0mOdaKSPGdnmxDJ6k8qbVcb68')",
                                }}
                            ></div>
                            <div className="mt-4 p-4 rounded-lg border border-gray-100">
                                <p className="text-sm font-medium text-black">Route Details</p>
                                <p className="text-xs text-gray-600 mt-1">
                                    Approx. 15km from Chennai Central Station, 30 min drive.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="lg:col-span-1 flex flex-col gap-8">
                        {/* Team Details */}
                        <div className="p-6 rounded-lg border border-gray-200">
                            <h3 className="text-2xl font-bold mb-6 text-black">Team Details</h3>
                            <div className="divide-y divide-gray-100">
                                <div className="py-4">
                                    <p className="text-sm font-medium text-gray-600 mb-1">Team Lead</p>
                                    <p className="text-sm text-gray-900">Dr. Priya Sharma</p>
                                </div>
                                <div className="py-4">
                                    <p className="text-sm font-medium text-gray-600 mb-1">Instructors</p>
                                    <p className="text-sm text-gray-900">
                                        Dr. Rajesh Kumar, Dr. Anjali Mehta
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Attachments */}
                        <div className="p-6 rounded-lg border border-gray-200">
                            <h3 className="text-2xl font-bold mb-4 text-black">Attachments</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="border-b border-gray-100">
                                        <tr>
                                            <th className="py-2 font-medium text-gray-600">File Name</th>
                                            <th className="py-2 font-medium text-gray-600">Uploaded By</th>
                                            <th className="py-2 font-medium text-gray-600">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ["ACLS_Course_Outline.pdf", "Admin User", "20/06/24"],
                                            ["Participant_List.xlsx", "Admin User", "22/06/24"],
                                        ].map(([file, uploader, date], index) => (
                                            <tr key={index} className="border-b border-gray-100">
                                                <td className="py-3 text-blue-600 font-medium">{file}</td>
                                                <td className="py-3 text-gray-900">{uploader}</td>
                                                <td className="py-3 text-gray-600">{date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default EventDetails;
