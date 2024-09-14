import React, { useState, useEffect } from 'react'
import Layout from '../Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { baseURL } from '../api'
import Loader from '../components/loader'
import { profile } from '../assets/idex'

function UpdateUserProfileScreen() {

    const { id } = useParams()

    const [profileInfo, setProfileInfo] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        async function getProfileInfo(id) {
            const response = await axios.get(`${baseURL}/profile/${id}/`)
            setProfileInfo(response.data)
            setIsLoading(false)
        }
        getProfileInfo(id)
    }, [id])

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                <div className='flex flex-col'>
                    <div className='flex flex-row p-2 mt-20 gap-x-10'>
                        <div className='flex flex-col w-1/4 shadow-lg rounded-xl border bg-[#e1e8ee] hover:shadow-xl transition-all duration-700'>
                            <img className='rounded-xl h-[80%]' src={profile} alt="Profil rasmi topilmadi..." />
                            <div className='font-rubik text-xl text-[#696969]'>
                                <h1 className='text-center'>{profileInfo.first_name} {profileInfo.last_name}</h1>
                                <p className='text-center'>{profileInfo.position}</p>
                            </div>
                        </div>
                        <div className='flex flex-col text-xl md:flex-row w-full shadow rounded border p-10 bg-[#e1e8ee] text-[#696969] hover:shadow-xl transition-all duration-700'>
                            <div className='w-1/2 space-y-7'>
                                <h1>Ism: {profileInfo.first_name}</h1>
                                <h1>Familiya: {profileInfo.last_name}</h1>
                                <h1>Otasining ismi: {profileInfo.father_name}</h1>
                                <h1>Karta raqami: {profileInfo.passport_id}</h1>
                                <h1>Tug'ilgan yili: {profileInfo.born_in}</h1>
                                <h1><a
                                    href={profileInfo.command_pdf}
                                    download={profileInfo.first_name}
                                >
                                    <button className="btn bg-green-400 text-Light px-3 py-1 shadow-xl rounded-md hover:shadow-2xl duration-500 transition-all">
                                        <i className="fa fa-download"></i> Buyruqni yuklab olish
                                    </button>
                                </a></h1>
                            </div>
                            <div className='w-1/2 space-y-7'>
                                <h1>Biriktirilganligi: {profileInfo.is_selected ? (<span className='px-3 py-1 bg-green-500 text-Light rounded-md shadow-xl'>Ha</span>) : (<span className='px-3 py-1 bg-red-500 text-Light rounded-md shadow-xl'>Yo'q</span>)}</h1>
                                <h1>JSHIR: {profileInfo.pinfl}</h1>
                                <h1>Telefon raqam: +998 {profileInfo.tel_number.slice(0, 2) + ' ' + profileInfo.tel_number.slice(2, 5) + ' ' + profileInfo.tel_number.slice(5, 7) + ' ' + profileInfo.tel_number.slice(7, 9)}</h1>
                                <h1>Manzil: {profileInfo.manzil}</h1>
                                <h1>Ro'yxatdan o'tgan vaqt: {profileInfo.created}</h1>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            )}
        </div>
    )
}


export default function UpdateUserProfile() {
    return <Layout content={UpdateUserProfileScreen} />
}