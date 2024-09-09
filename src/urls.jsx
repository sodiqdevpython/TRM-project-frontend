import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Test from './screens/test'
import Dashboard from './screens/dashboard'
import Rated from './screens/rated'
import AddOrganization from './screens/addOrganization'
import UsersList from './screens/usersList'
import AddUser from './screens/addUser'
import OrganizationList from './screens/organizationList'

export default function Urls() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/test' element={<Test />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/rated-school' element={<Rated />} />
                <Route path='/add-organization' element={<AddOrganization />} />
                <Route path='/users-list' element={<UsersList />} />
                <Route path='/add-user' element={<AddUser />} />
                <Route path='/organizations-list' element={<OrganizationList />} />
            </Routes>
        </BrowserRouter>
    )
}
