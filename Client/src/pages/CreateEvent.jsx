import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateEvent() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        eventName: '',
        location: '',
        teamLead: '',
        description: '',
        files: []
    })
    const [selectedTeamLead, setSelectedTeamLead] = useState('')
    const [locationType, setLocationType] = useState('manual') // 'manual' or 'map'
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const [uploadedFiles, setUploadedFiles] = useState([
        { name: 'Training_Manual_v2.pdf', progress: 100, status: 'Done', type: 'pdf' },
        { name: 'ACLS_Presentation.pptx', progress: 65, status: '65%', type: 'slideshow' }
    ])

    const teamLeads = [
        { id: 1, name: 'Aarav Sharma', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChwIWvs48RkX6c9KmnBcrJSKo9tHZB3IwqWRzeAim-zxuxUfm3dnbSMS6LLq3tSG7nMokzRZM_GA_ttbIfsFYCgAyR7RvH6F1MV7ji752VsWuFu7pvKwLN7hH79aBwGCTcqvfv7D2KTDbBiTUVqfEc8FCeZPJs90uvS3kkttGg6YSoPl1lJNLzToUvWGVdj7jL7jQZi0synoUrz37pULhjfmint_croY1cQFF-RgmFoTc8girELnAimCveJ3SECWUIsmzr9VVpYHI' },
        { id: 2, name: 'Priya Patel', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPu0WfCFxmueodZbx8kLO-7sZ2WkzcsbbetJKO3mRWqb5jjhBGjVJTub7YPRZc1gnqliJ1BRjAvb2zNikNAW3Z0iKnins5RsHJYzTbhbe2HWp3-eg9eJEVfXpUO4-4M_5kb-zPh0H8R81mS7dFRJB33FOnexNqCaybxpybHNx3AYqdy--ffSSsokuzACnrNs2gjQeNhyOZzjvN2HaSraGEolfBs7UQPAhvPYcFn4aveYquzltjj-lvOtCiB5si3QIwh2-5PLsnM4k' },
        { id: 3, name: 'Rohan Das', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgKtheRKjm8a_lVG1JVVoZxE9Qtmnkkwz9nDMt39HPk2jzAYNwWhDMLIOW513KtvbfLNJrDDnIHPn57NzBY0xAjgD7r7sqt_j3QqshoCwmBKuv03ROO5MuJskhuqfS5UaSh7vo_XNqAceYNAoaayhrdovOlo5wjeWfzVaIwAUfmNiaiHxQDtNhQgMRw2-sI2LWYW5odA3uzWiiNDgEB_yq8iNMIrSk1g4pwq4FoHNzF-YulQNdOxHPR-YVdQWo0lc7FqwxY4onMVI' }
    ]

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleTeamLeadSelect = (teamLead) => {
        setSelectedTeamLead(teamLead.name)
        setFormData(prev => ({
            ...prev,
            teamLead: teamLead.name
        }))
    }

    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files)
        // Handle file upload logic here
        console.log('Files uploaded:', files)
    }

    const removeFile = (index) => {
        setUploadedFiles(prev => prev.filter((_, i) => i !== index))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000))

            console.log('Form submitted:', formData)

            // Show success toast
            setShowToast(true)

            // Navigate back to events page after 2 seconds
            setTimeout(() => {
                navigate('/events')
            }, 2000)

        } catch (error) {
            console.error('Error creating event:', error)
            // Handle error here
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="p-8">
            {/* Toast Notification */}
            {showToast && (
                <div className="fixed top-4 right-4 z-50 bg-accent-positive text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-slide-in">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                        <p className="font-semibold">Event Created Successfully!</p>
                        <p className="text-sm opacity-90">Redirecting to events page...</p>
                    </div>
                </div>
            )}
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-4xl font-bold text-text-primary-light">
                        Create New Class / Event
                    </h2>
                </div>

                <div className="bg-white rounded-xl shadow-md">

                    <form onSubmit={handleSubmit} className="p-8 space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Left Column */}
                            <div className="space-y-6">
                                {/* Event Name */}
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary-light mb-2" htmlFor="event-name">
                                        Event Name
                                    </label>
                                    <input
                                        className="w-full bg-background-light border-2 border-transparent focus:border-primary focus:ring-primary rounded-lg h-12 px-4 text-text-primary-light placeholder-text-tertiary-light shadow-sm transition"
                                        id="event-name"
                                        name="eventName"
                                        placeholder="e.g., Advanced Cardiac Life Support"
                                        type="text"
                                        value={formData.eventName}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                {/* Event Description */}
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary-light mb-2" htmlFor="description">
                                        Event Description
                                    </label>
                                    <textarea
                                        className="w-full bg-background-light border-2 border-transparent focus:border-primary focus:ring-primary rounded-lg p-4 text-text-primary-light placeholder-text-tertiary-light shadow-sm transition"
                                        id="description"
                                        name="description"
                                        placeholder="Describe the training event..."
                                        rows="4"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                {/* Assign Team Lead */}
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary-light mb-2">
                                        Assign Team Lead
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg className="w-5 h-5 text-text-tertiary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>
                                        <input
                                            className="w-full bg-background-light border-2 border-transparent focus:border-primary focus:ring-primary rounded-lg h-12 pl-10 pr-4 text-text-primary-light placeholder-text-tertiary-light shadow-sm transition"
                                            placeholder="Search for a team lead..."
                                            type="text"
                                        />
                                    </div>
                                    <div className="mt-2 space-y-2 max-h-40 overflow-y-auto">
                                        {teamLeads.map((teamLead) => (
                                            <div
                                                key={teamLead.id}
                                                className={`flex items-center gap-3 p-2 rounded-lg hover:bg-primary/10 cursor-pointer transition ${selectedTeamLead === teamLead.name ? 'bg-primary/10' : ''
                                                    }`}
                                                onClick={() => handleTeamLeadSelect(teamLead)}
                                            >
                                                <img
                                                    alt={teamLead.name}
                                                    className="w-8 h-8 rounded-full"
                                                    src={teamLead.avatar}
                                                />
                                                <span className={`font-medium ${selectedTeamLead === teamLead.name ? 'text-primary' : 'text-text-primary-light'
                                                    }`}>
                                                    {teamLead.name}
                                                </span>
                                                {selectedTeamLead === teamLead.name && (
                                                    <svg className="w-5 h-5 text-primary ml-auto" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-6">
                                {/* Location (Optional) */}
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary-light mb-2">
                                        Location (Optional)
                                    </label>
                                    <div className="space-y-3">
                                        {/* Location Type Toggle */}
                                        <div className="flex gap-2">
                                            <button
                                                type="button"
                                                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${locationType === 'manual'
                                                    ? 'bg-primary text-white'
                                                    : 'bg-background-light text-text-tertiary-light hover:bg-primary/10'
                                                    }`}
                                                onClick={() => setLocationType('manual')}
                                            >
                                                Manual Entry
                                            </button>
                                            <button
                                                type="button"
                                                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${locationType === 'map'
                                                    ? 'bg-primary text-white'
                                                    : 'bg-background-light text-text-tertiary-light hover:bg-primary/10'
                                                    }`}
                                                onClick={() => setLocationType('map')}
                                            >
                                                Map Selection
                                            </button>
                                        </div>

                                        {/* Manual Entry */}
                                        {locationType === 'manual' && (
                                            <input
                                                className="w-full bg-background-light border-2 border-transparent focus:border-primary focus:ring-primary rounded-lg h-12 px-4 text-text-primary-light placeholder-text-tertiary-light shadow-sm transition"
                                                placeholder="Enter location manually (e.g., Mumbai, Delhi)"
                                                type="text"
                                                value={formData.location}
                                                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                                            />
                                        )}

                                        {/* Map Selection */}
                                        {locationType === 'map' && (
                                            <div className="aspect-video bg-background-light rounded-lg shadow-sm overflow-hidden relative">
                                                <img
                                                    alt="Map of India showing various locations"
                                                    className="w-full h-full object-cover"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7dKq3_zg8_nky2lRThhqZScilqlTJ9RCf79DA7XBeNRnE5frOQ4XUn93VA9TPY9ZMV7Pr4uM2LAPFSz52103exTD19kD5nNzzyXYjRrjiex_wi7kjuwzdFA0Ugp7oBbTmSd_fgHPud0-Z186otb_OJgXglEmbgROs7XS0FRWHNz4YYwByPaPom4ugxRFNRDFK2ya1JlsZnXeAhKdYj3_Qx5t2kLvyZPY_2dEPFb2qn8eTKNXgCaE0EEH7nmdYvagpaeMdaIzGjxM"
                                                />
                                                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                                    <svg className="w-12 h-12 text-red-500 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Upload Materials */}
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary-light mb-2">
                                        Upload Materials
                                    </label>
                                    <div className="mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed border-primary/20 rounded-xl bg-background-light/50">
                                        <div className="space-y-1 text-center">
                                            <svg className="mx-auto h-16 w-16 text-text-tertiary-light" fill="none" stroke="currentColor" viewBox="0 0 48 48">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                            </svg>
                                            <div className="flex text-sm text-text-tertiary-light">
                                                <label className="relative cursor-pointer bg-transparent rounded-md font-medium text-primary hover:text-primary/80 focus-within:outline-none" htmlFor="file-upload">
                                                    <span>Click to upload</span>
                                                    <input
                                                        className="sr-only"
                                                        id="file-upload"
                                                        multiple
                                                        name="file-upload"
                                                        type="file"
                                                        onChange={handleFileUpload}
                                                    />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-text-tertiary-light">PDF, DOCX, PPTX up to 25MB</p>
                                        </div>
                                    </div>

                                    {/* Uploaded Files List */}
                                    <div className="mt-4 space-y-3">
                                        {uploadedFiles.map((file, index) => (
                                            <div key={index} className="flex items-center gap-3 p-3 bg-background-light rounded-lg">
                                                <svg className={`w-6 h-6 ${file.type === 'pdf' ? 'text-accent-positive' : 'text-primary'
                                                    }`} fill="currentColor" viewBox="0 0 20 20">
                                                    {file.type === 'pdf' ? (
                                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                                    ) : (
                                                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                                    )}
                                                </svg>
                                                <div className="flex-1">
                                                    <p className="text-sm font-medium text-text-primary-light">{file.name}</p>
                                                    <div className="w-full bg-primary/10 rounded-full h-1.5 mt-1">
                                                        <div className={`h-1.5 rounded-full ${file.type === 'pdf' ? 'bg-accent-positive' : 'bg-primary'
                                                            }`} style={{ width: `${file.progress}%` }}></div>
                                                    </div>
                                                </div>
                                                <span className={`text-sm font-medium ${file.type === 'pdf' ? 'text-accent-positive' : 'text-primary'
                                                    }`}>
                                                    {file.status}
                                                </span>
                                                <button
                                                    type="button"
                                                    className="text-text-tertiary-light hover:text-accent-negative"
                                                    onClick={() => removeFile(index)}
                                                >
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end pt-6 border-t border-primary/10">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`flex items-center justify-center gap-2 px-8 py-3.5 border border-transparent text-base font-semibold rounded-lg text-white shadow-lg transition-transform transform hover:scale-105 ${isSubmitting
                                    ? 'bg-primary/70 cursor-not-allowed'
                                    : 'bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span>Creating Event...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Create Event</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateEvent
