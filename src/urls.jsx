import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Test from './screens/test'
import Dashboard from './screens/dashboard'
import Rated from './screens/rated'
import AddOrganization from './screens/addOrganization'
import UsersList from './screens/usersList'

export default function Urls() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/test' element={<Test />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/rated-school' element={<Rated />} />
                <Route path='/add-organization' element={<AddOrganization />} />
                <Route path='/users-list' element={<UsersList />} />
            </Routes>
        </BrowserRouter>
    )
}
