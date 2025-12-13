import React from 'react'
import { Link } from 'react-router-dom'

const AdminUi = () => {
  return (
    <>

    <div className="flex min-h-screen ">

  <div className="w-64 bg-black text-white p-5 space-y-4">
    <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

    <nav className="space-y-3">
      <Link className=" text-white text-decoration-none block p-2  rounded hover:bg-gray-700" href="/admin/dashboard">Dashboard</Link>
      <Link className=" text-white text-decoration-none block p-2 rounded hover:bg-gray-700" href="/admin/users">Manage Users</Link>
      <Link className=" text-white text-decoration-none  block p-2 rounded hover:bg-gray-700" href="/admin/turfs">Manage Turfs</Link>
      <Link className="  block p-2 rounded  text-white text-decoration-none hover:bg-gray-700" href="/admin/events">Manage Events</Link>
      <Link className="block p-2  text-white text-decoration-none rounded hover:bg-gray-700" href="/admin/settings">Settings</Link>
    </nav>
  </div>

  <div className="flex-1 p-8 bg-gray-100">
    <h1 className="text-2xl text-center  mb-6">Admin Dashboard</h1>

    <div className="grid grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <p className="text-gray-500">Total Users</p>
        <h3 className="text-3xl font-bold">899</h3>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <p className="text-gray-500">Total Turfs</p>
        <h3 className="text-3xl font-bold">67</h3>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <p className="text-gray-500">Total Events</p>
        <h3 className="text-3xl font-bold">18</h3>
      </div>
    </div>

    <div className="mt-10 bg-black p-6 rounded-xl shadow-md">
      <h2 className="text-xl text-white font-semibold mb-4">Recent Users</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-black">
            <th className="p-2 border text-white">Name</th>
            <th className="p-2 border  text-white">Email</th>
            <th className="p-2 border  text-white">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border  text-white">Arjun</td>
            <td className="p-2 border  text-white">Arjun@gmal.com</td>
            <td className="p-2 border  text-white">User</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</div>






    </>
  )
}

export default AdminUi