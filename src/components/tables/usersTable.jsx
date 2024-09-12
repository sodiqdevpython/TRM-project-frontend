import { Link } from 'react-router-dom'

export default function UsersTable({ fields, tableData }) {
    return (
        <div className="overflow-x-auto rounded-2xl">
            <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
                <thead className="bg-gray-50">
                    <tr>
                        {fields.map((item, index) => (
                            <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{item.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 rounded-2xl">
                    {tableData.map((item, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <Link className="text-blue-600 hover:underline">{item.first_name} {item.last_name}</Link>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <p className="text-blue-600">+998 {item.tel_number.slice(0, 2) + " " + item.tel_number.slice(2, 5) + " " + item.tel_number.slice(5, 7) + " " + item.tel_number.slice(7, 9)} </p>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {
                                    item.is_active ? (
                                        <p className='text-center w-1/3 py-1 bg-green-400 rounded-2xl text-Light'>Aktiv</p>
                                    ) : (
                                        <p className='text-center w-1/2 py-1 rounded-2xl text-Light bg-red-500'>Aktiv emas</p>
                                    )
                                }
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{
                                item.is_selected ? (
                                    <p className='text-center w-1/3 py-1 bg-green-400 rounded-2xl text-Light'>Ha, biriktirilgan</p>
                                ) : (
                                    <p className='text-center w-1/2 py-1 rounded-2xl text-Light bg-red-500'>Yo'q, biriktirilmagan</p>
                                )
                            }</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.created}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
