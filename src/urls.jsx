import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Test from './screens/test'
import Dashboard from './screens/dashboard'
import Rated from './screens/rated'
import AddOrganization from './screens/addOrganization'
import UsersList from './screens/usersList'
import OrganizationList from './screens/organizationList'
import UserProfileDetail from './screens/userProfileDetail'
import UpdateUserProfile from './screens/updateUserProfile'

import Login from './screens/Login'

import Protect from './protect'

export default function Urls() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/test' element={<Test />} />
                <Route path='/login' element={<Login />} />
                <Route path='/dashboard' element={
                    <Protect>
                        <Dashboard />
                    </Protect>
                } />
                <Route path='/rated-school' element={
                    <Protect>
                        <Rated />
                    </Protect>
                } />
                <Route path='/add-organization' element={
                    <Protect>
                        <AddOrganization />
                    </Protect>
                } />
                <Route path='/users-list' element={
                    <Protect>
                        <UsersList />
                    </Protect>
                } />
                <Route path='/organizations-list' element={
                    <Protect>
                        <OrganizationList />
                    </Protect>
                } />
                <Route path='/user/:id' element={
                    <Protect>
                        <UserProfileDetail />
                    </Protect>
                } />
                <Route path='/user/:id/edit' element={
                    <Protect>
                        <UpdateUserProfile />
                    </Protect>
                } />
            </Routes>
        </BrowserRouter>
    )
}
