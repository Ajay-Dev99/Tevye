import React from 'react'
import Layout from '../components/Layout'

function Settings() {
    return (
        <Layout>
            <div className="p-8">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold text-text-primary-light">
                        Settings
                    </h1>
                    <p className="text-text-tertiary-light mt-1">
                        Configure application settings
                    </p>
                </header>
                <div className="bg-white p-6 rounded-lg shadow">
                    <p className="text-text-primary-light">Settings content will go here...</p>
                </div>
            </div>
        </Layout>
    )
}

export default Settings
