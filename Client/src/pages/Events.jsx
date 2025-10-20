import React from 'react'
import Layout from '../components/Layout'

function Events() {
    return (
        <Layout>
            <div className="p-8">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold text-text-primary-light">
                        Events
                    </h1>
                    <p className="text-text-tertiary-light mt-1">
                        Manage and view all events
                    </p>
                </header>
                <div className="bg-white p-6 rounded-lg shadow">
                    <p className="text-text-primary-light">Events content will go here...</p>
                </div>
            </div>
        </Layout>
    )
}

export default Events
