import React, { useState } from 'react'
import { logo } from '../assets/idex'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { baseURL } from '../api'

export default function Login() {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function handleLogin(e) {

        e.preventDefault()

        let form = new FormData()

        form.append('username', username)
        form.append('password', password)

        try {

            const response = await axios.post(`${baseURL}/auth/login/`, form)

            const token = await response.data.key

            localStorage.setItem('token', token)
            console.log(token)
            navigate('/dashboard')
        } catch (e) {
            if (e.response.status === 400) {
                console.log("Login yoki parol xato")
                if (username.length > 0 && password.length > 0) {
                    alert("Login yoki parol xato.")
                }
            } else {
                console.log("Xato: ", e)
            }
        }

    }

    return (
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <section className="dark:bg-gray-900 font-rubik">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-20 h-20 mr-2" src={logo} alt="logo" />
                        JBAT
                    </div>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Hisobingizga kiring
                            </h1>
                            <form className="space-y-4 md:space-y-6">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Foydalanuvchi nomi</label>
                                    <input value={username} onChange={(e) => setUserName(e.target.value)} type="text" name="username" id="username" autoComplete="current-username" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parol</label>
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={password}
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                        autoComplete="current-password"
                                    />

                                </div>
                                <button onClick={handleLogin} className="w-full text-Light bg-[#2563eb] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Kirish</button>
                            </form>
                        </div>
                    </div>
                </div >
            </section >
        </div >
    )
}
