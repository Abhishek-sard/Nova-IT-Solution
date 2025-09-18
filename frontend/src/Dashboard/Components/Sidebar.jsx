import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <aside className='w-64 bg-green-700 text-white h-screen p-6 fixed' >
            <h2 className='text-2xl font-bold mb-8'>Admin Dashboard</h2>
            <nav className='flex flex-col gap-4'>
                <Link to="/dashboard" className='hover:text-gray-200'>Dashboard</Link>
                <Link to="/trusted" className='hover:text-gray-200'>Trusted Organization</Link>
                <Link to="/course" className='hover:text-gray-200'>Courses</Link>
                <Link to="/blogs" className='hover:text-gray-200'>Blogs</Link>
                <Link to="/gallery" className='hover:text-gray-200'>Gallery</Link>

            </nav>

        </aside>
    )
}
export default Sidebar;