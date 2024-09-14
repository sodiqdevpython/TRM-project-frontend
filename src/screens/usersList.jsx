import React, { useState, useEffect } from 'react'
import Layout from '../Layout'
import UsersTable from '../components/tables/usersTable'
import axios from 'axios'
import { baseURL } from '../api'
import Loader from '../components/loader'
import { HiUserAdd } from "react-icons/hi";

import { AiOutlineUserAdd } from "react-icons/ai";

import Search from '../components/search'
import DefaultButton from '../components/defaultButton'

function UsersListScreen() {

    const [profilesReady, setProfilesReady] = useState(false)

    const [modal, setModal] = useState(false)

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

    useEffect(() => {
        console.log(modal)
    }, [modal])


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [idCard, setIdCard] = useState('')
    const [pinfl, setPinfl] = useState('')
    const [profession, setProfession] = useState('')
    const [telNumber, setTelNumber] = useState('')
    const [born, setBorn] = useState('')
    const [manzil, setManzil] = useState('')
    const [expireCommand, setExpireCommand] = useState('')

    const [file, setFile] = useState(null)

    const [password, setPassword] = useState('')

    // const [userID, setUserID] = useState(null)

    const [creatingUser, setCreatingUser] = useState(false)

    // async function postData(e) {

    //     e.preventDefault()



    //     let form = new FormData()

    //     form.append('username', pinfl)
    //     form.append('password1', password)
    //     form.append('password2', password)

    //     let form2 = new FormData()

    //     form2.append('first_name', firstName)
    //     form2.append('last_name', lastName)
    //     form2.append('father_name', fatherName)
    //     form2.append('passport_id', idCard)
    //     form2.append('manzil', manzil)
    //     form2.append('pinfl', pinfl)
    //     form2.append('position', profession)
    //     form2.append('tel_number', telNumber)
    //     form2.append('is_active')

    //     form2.append('born_in', born)
    //     form2.append('command_expire', expireCommand)

    //     if (file !== null) {
    //         form2.append('command_pdf', file)
    //     }

    //     try {
    //         setCreatingUser(true)

    //         const authResponse = await axios.post(`${baseURL}/user/register/`, form)

    //         console.log(authResponse.status)

    //         setUserID(authResponse.data.id)

    //         const userData = {
    //             username: pinfl,
    //             password1: password,
    //             password2: password
    //         };

    //         try {

    //             const response = await axios.post(`${baseURL}/profile/`, form2, {
    //                 headers: {
    //                     'Content-Type': 'multipart/form-data'
    //                 }
    //             })




    //         } catch (error) {
    //             console.log(error)
    //             alert("Foydalanuvchi ma'lumotlarini kiritishda hammasini to'g'ri kiriting")
    //         }



    //     } catch (error) {
    //         console.log(error)
    //         alert("Foydalanuvchi yaratishda xatolik yuz berdi \n1.Parolni murakkabroq qiling\n2.Foydalanuvchining pinfl to'g'ri kiritilganmi\n3.Balki ushbu foydalanuvchi allaqachon ro'yxatdan o'tgan bo'lishi mumkin")
    //     }





    // }

    async function postData(e) {
        e.preventDefault();

        // Foydalanuvchi yaratish uchun ma’lumotlar
        const userData = {
            username: pinfl,
            password1: password,
            password2: password
        };

        // Profil yaratish uchun ma’lumotlar
        const profileData = {
            first_name: firstName,
            last_name: lastName,
            father_name: fatherName,
            passport_id: idCard,
            manzil: manzil,
            pinfl: pinfl,
            position: profession,
            tel_number: telNumber,
            command_expire: expireCommand,
            born_in: born,
            user: userData,
        };

        try {
            setCreatingUser(true);

            // Foydalanuvchi yaratish
            const authResponse = await axios.post(`${baseURL}/user/register/`, userData);
            console.log(authResponse.status);

            // Profil ma’lumotlarini yaratish
            const profileResponse = await axios.post(`${baseURL}/profile/`, profileData);
            console.log(profileResponse.status);

            // Profildagi ma’lumotlar muvaffaqiyatli saqlandi
            alert('Foydalanuvchi va profil ma’lumotlari muvaffaqiyatli saqlandi.');

        } catch (error) {
            console.log(error);
            alert("Xatolik yuz berdi. Iltimos, barcha ma'lumotlarni tekshirib ko'ring.");
        } finally {
            setCreatingUser(false);
        }

    }


    return (
        <div className='flex flex-col'>
            <div className='flex flex-row justify-between py-10'>
                <div className='w-1/5'>
                    <Search placeholder={"Foydalanuvchi qidirish"} />
                </div>
                <div className='px-[10%]'>
                    <div onClick={() => setModal(true)}>
                        <DefaultButton icon={<AiOutlineUserAdd size={24} />} label={"Foydalanuvchi qo'shish"} />
                    </div>
                    {
                        modal ? (
                            <div id="updateProductModal" tabIndex="-1" aria-hidden="true" className="fixed inset-0 flex items-center justify-center z-50 overflow-scroll">
                                <div className="relative p-4 w-full max-w-5xl h-full md:h-auto">
                                    <div className="relative p-4 bg-Light rounded-lg dark:bg-gray-800 sm:p-5 shadow-xl border-2">
                                        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                Foydalanuvchi qo'shish
                                            </h3>
                                            <button onClick={() => setModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                                <span className="sr-only">Close modal</span>
                                            </button>
                                        </div>
                                        {
                                            creatingUser ? (
                                                <Loader />
                                            ) : (
                                                <form>
                                                    <div className='flex flex-col md:flex-row justify-between'>
                                                        <div className='w-[40%] space-y-5'>

                                                            <div>
                                                                <label className='text-md'>Ism</label>
                                                                <input onChange={(e) => setFirstName(e.target.value)} value={firstName} maxLength={30} className='w-full shadow-xl h-10 rounded-md outline-none px-2' type="text" />
                                                            </div>

                                                            <div>
                                                                <label className='text-md'>Otasining ismi</label>
                                                                <input onChange={(e) => setFatherName(e.target.value)} value={fatherName} maxLength={30} className='w-full shadow-xl h-10 rounded-md outline-none px-2' type="text" />
                                                            </div>

                                                            <div>
                                                                <label className='text-md'>PINFL</label>
                                                                <input onChange={(e) => setPinfl(e.target.value)} value={pinfl} maxLength={14} className='w-full shadow-xl h-10 rounded-md outline-none px-2' type="text" />
                                                            </div>

                                                            <label className='text-md'>Telefon raqami</label>
                                                            <div className='flex items-center'>
                                                                <input
                                                                    className='w-16 shadow-xl h-10 rounded-md outline-none px-2 bg-gray-200 text-gray-700'
                                                                    type="text"
                                                                    value="+998"
                                                                    readOnly
                                                                />
                                                                <input
                                                                    className='w-full shadow-xl h-10 rounded-md outline-none px-2'
                                                                    type="tel"
                                                                    placeholder="(90) 123-45-67"
                                                                    maxLength={9}
                                                                    value={telNumber}
                                                                    onChange={(e) => setTelNumber(e.target.value)}
                                                                />
                                                            </div>

                                                            <div>
                                                                <label className='text-md'>Tug'ilgan yil</label>
                                                                <input onChange={(e) => setBorn(e.target.value)} value={born} className='w-full shadow-xl h-10 rounded-md outline-none px-2' type="date" />
                                                            </div>


                                                        </div>

                                                        <div className='w-[40%] space-y-5'>

                                                            <div>
                                                                <label className='text-md'>Parol</label>
                                                                <input onChange={(e) => setPassword(e.target.value)} value={password} maxLength={30} className='w-full shadow-xl h-10 rounded-md outline-none px-2' type="text" />
                                                            </div>

                                                            <div>
                                                                <label className='text-md'>Familiya</label>
                                                                <input onChange={(e) => setLastName(e.target.value)} value={lastName} maxLength={30} className='w-full shadow-xl h-10 rounded-md outline-none px-2' type="text" />
                                                            </div>

                                                            <div>
                                                                <label className='text-md'>ID raqam</label>
                                                                <input onChange={(e) => setIdCard(e.target.value)} value={idCard} maxLength={9} className='w-full shadow-xl h-10 rounded-md outline-none px-2' type="text" />
                                                            </div>

                                                            <div>
                                                                <label className='text-md'>Kasbi</label>
                                                                <input onChange={(e) => setProfession(e.target.value)} value={profession} maxLength={32} className='w-full shadow-xl h-10 rounded-md outline-none px-2' type="text" />
                                                            </div>

                                                        </div>

                                                    </div>

                                                    <div className='mt-10 mx-3'>
                                                        <label>Manzil</label>
                                                        <textarea onChange={(e) => setManzil(e.target.value)} value={manzil} maxLength={64} className="w-full outline-none rounded-xl shadow-xl px-2 py-1 font-rubik" rows="3"></textarea>
                                                    </div>

                                                    <div className='mt-10'>

                                                        <div className="flex items-center justify-center w-full">
                                                            <label></label>
                                                            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                                    </svg>
                                                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Fayl Yuklash uchun bosing</span></p>
                                                                    <p className="text-xs text-gray-500 dark:text-gray-400">Faqat pdf yoki docx qabul qilinadi</p>
                                                                </div>
                                                                <input onChange={(e) => setFile(e.target.files[0])} id="dropzone-file" type="file" className="hidden" accept=".pdf,.docx" />
                                                            </label>
                                                        </div>

                                                        <div className='flex flex-col mt-5'>
                                                            <label>Buyruq tugash muddati</label>
                                                            <input onChange={(e) => setExpireCommand(e.target.value)} value={expireCommand} className='w-1/3 shadow-xl h-10 rounded-md outline-none px-2' type="date" />
                                                        </div>

                                                        <div onClick={postData} className='flex justify-end'>
                                                            <DefaultButton icon={<HiUserAdd size={24} />} label={"Foydalanuvchi qo'shish"} />
                                                        </div>

                                                    </div>
                                                </form>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        ) : (
                            null
                        )
                    }
                </div>
            </div>
            <div className='shadow-xl hover:shadow-2xl rounded-xl transition-all duration-500'>
                {profilesReady ? (
                    <UsersTable fields={fields} tableData={tableData} />
                ) : (
                    <Loader />
                )}
            </div>
        </div >
    )
}

export default function UsersList() {
    return <Layout content={UsersListScreen} />
}