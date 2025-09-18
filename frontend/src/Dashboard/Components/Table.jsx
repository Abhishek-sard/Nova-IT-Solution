import React from 'react'

const Table = ({ columns, data }) => {
    return (
        <table className='w-full border-collapse border border-gray-200 bg-white shadow'>
            <thead className='bg-green-600 text-white'>
                <tr>
                    {columns.map((col, idx) => (
                        <th key={idx} className='border border-gray-200 px-4 py-2 text-left'>
                            {col}
                        </th>


                    ))}
                    <th className='border px-4 py-2'>Action</th>

                </tr>
            </thead>
            <tbody>
                {data.map((row, idx)=> (
                    <tr key={idx} className='hover:bg-gray-100'>
                        {Object.values(row).map((val, i) => (
                            <td key={i} className='border px-4 py-2'>{val}</td>
                        ))}
                    </tr>
                ))}
            </tbody>

        </table>
        
    )
}

export default Table;
