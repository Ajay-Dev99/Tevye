import React from 'react'
import Layout from '../components/Layout'

function Reports() {
    return (
        <Layout>
            <div className="p-8">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold text-text-primary-light">
                        Reports
                    </h1>
                    <p className="text-text-tertiary-light mt-1">
                        View analytics and generate reports
                    </p>
                </header>
                <div className="bg-white p-6 rounded-lg shadow">
                    <p className="text-text-primary-light">Reports content will go here...</p>
                </div>
            </div>
        </Layout>
    )
}

export default Reports
