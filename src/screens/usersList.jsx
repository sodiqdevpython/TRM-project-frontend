import React, { useState, useEffect } from 'react'
import Layout from '../Layout'
import UsersTable from '../components/tables/usersTable'
import axios from 'axios'
import { baseURL } from '../api'
import Loader from '../components/loader'
import { Link } from 'react-router-dom'

import { AiOutlineUserAdd } from "react-icons/ai";

import Search from '../components/search'
import DefaultButton from '../components/defaultButton'

function UsersListScreen() {

    const [profilesReady, setProfilesReady] = useState(false)

    const fields = [
        { name: "ID" },
        { name: "Ism, familiya" },
        { name: "Telefon raqam" },
        { name: "Aktivligi" },
        { name: "Biriktirilganligi" },
        { name: "Ro'yxatdan o'tgan" }
    ]

    const [tableData, setTableData] = useState(null)

    useEffect(() => {

        async function getProfiles() {
            const response = await axios.get(`${baseURL}/profile/?is_active=&is_selected=&is_super_admin=false`)
            setTableData(response.data)
            console.log(response.data)
            setProfilesReady(true)
        }
        getProfiles()


    }, [])

    return (
        <div className='flex flex-col'>
            <div className='flex flex-row justify-between py-10'>
                <div className='w-1/5'>
                    <Search placeholder={"Foydalanuvchi qidirish"} />
                </div>
                <div className='px-[10%]'>
                    <Link to={'/add-user'}>
                        <DefaultButton icon={<AiOutlineUserAdd size={24} />} label={"Foydalanuvchi qo'shish"} />
                    </Link>
                </div>
            </div>
            <div className='shadow-xl hover:shadow-2xl rounded-xl transition-all duration-500'>
                {profilesReady ? (
                    <UsersTable fields={fields} tableData={tableData} />
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    )
}

export default function UsersList() {
    return <Layout content={UsersListScreen} />
}