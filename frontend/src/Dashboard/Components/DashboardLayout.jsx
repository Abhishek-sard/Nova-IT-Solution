import React from 'react'
import Sidebar from './Sidebar'

const DashboardLayout = ({ children }) => {
    return (
        <div className='flex'>
            <Sidebar />
            <main className="ml-64 w-full p-6 bg-gray-50 min-h-screen">{children}</main>

        </div>
    )
}

export default DashboardLayout
