import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import Loader from '../components/loader';

import Layout from '../Layout'
import axios from 'axios'
import { baseURL } from '../api'

function AddOrganizationScreen() {

    const [loadingProfile, setLoadingProfile] = useState(true)

    const [regions, setRegions] = useState([
        { id: -1, name: "Barchasi" }
    ])

    const [profiles, setProfiles] = useState([]);  // New state for profiles

    async function getProfiles() {
        const response = await axios.get(`${baseURL}/profile/?is_active=true&is_selected=false&is_super_admin=`);
        setProfiles(response.data);
        setLoadingProfile(false)
    }

    const [whichRegion, setWhichRegion] = useState(-1)

    const [placeLocation, setPlaceLocation] = useState(-1)

    const [placeList, setPlaceList] = useState([

    ])

    // Viloyat tanlanishi
    function selectedRegion(regionId) {
        setWhichRegion(parseInt(regionId))
    }

    // Muassasa joylashuvi tanlanishi
    function selectedLocation(locationId) {
        setPlaceLocation(parseInt(locationId))
    }

    async function getRegions() {
        const response = await axios.get(`${baseURL}/regions/`)
        const updateResponse = [{ id: -1, name: "Tanlang" }, ...response.data]
        setRegions(updateResponse)
    }

    useEffect(() => {
        getRegions()
        getProfiles()
    }, [])

    // Har safar viloyat yoki joylashuv o'zgarganda, valid holatni tekshiramiz
    useEffect(() => {

        async function getPlaceNames() {
            if (placeLocation === 1) {
                const response = await axios.get(`${baseURL}/cities/?region=${whichRegion}`)
                setPlaceList(response.data)
            } else if (placeLocation === 2) {
                const response = await axios.get(`${baseURL}/districts/?region=${whichRegion}`)
                setPlaceList(response.data)
            }
        }

        if (whichRegion !== -1 && placeLocation !== -1) {
            getPlaceNames()
        }
    }, [whichRegion, placeLocation])

    const profileOptions = profiles.map(profile => ({
        value: profile.id,
        label: `${profile.first_name} ${profile.last_name} | ${profile.passport_id}`,
    }));

    return (
        <div className='flex flex-col'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 font-rubik'>
                <div className='flex flex-col py-2'>
                    <span>Muassasa raqami</span>
                    <input
                        type="number"
                        placeholder='No'
                        className='p-2 border rounded hover:shadow-2xl transition-all duration-300'
                    />
                </div>
                <div className='flex flex-col py-2'>
                    <span>To'liq nomi</span>
                    <input
                        type="text"
                        className='p-2 border rounded hover:shadow-2xl transition-all duration-300'
                    />
                </div>
                <div className='flex flex-col py-2'>
                    <span>Ta'lim turi</span>
                    <select className='p-2 border shadow hover:shadow-2xl transition-all duration-300'>
                        <option value="1">Tanlang</option>
                        <option value="2">Maktabgacha ta'lim</option>
                        <option value="3">Umumiy o'rta ta'lim maktablari</option>
                        <option value="4">Musiqa maktablari</option>
                        <option value="5">Sport maktablari</option>
                    </select>
                </div>

                <div className='flex flex-col py-2'>
                    <span>Quvvati</span>
                    <input
                        type="number"
                        className='p-2 border shadow hover:shadow-2xl transition-all duration-300'
                    />
                </div>

                <div className='flex flex-col py-2'>
                    <span>URL</span>
                    <input
                        type="url"
                        className='p-2 border shadow hover:shadow-2xl transition-all duration-300'
                    />
                </div>

                <div className='flex flex-col py-2'>
                    <span>Inklyuzivligi</span>
                    <select className='p-2 border shadow hover:shadow-2xl transition-all duration-300'>
                        <option value="1">Tanlang</option>
                        <option value="2">Inklyuziv</option>
                        <option value="3">Inklyuziv emas</option>
                    </select>
                </div>

                <div className='flex flex-col py-2'>
                    <span>Viloyat</span>
                    <select onChange={(e) => selectedRegion(e.target.value)} className='p-2 border shadow hover:shadow-2xl transition-all duration-300'>
                        {regions.map((item) => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                    </select>
                </div>

                <div className='flex flex-col py-2'>
                    <span>Muassasa joylashuvi</span>
                    <select onChange={(e) => selectedLocation(e.target.value)} name='selectCD' className='p-2 border shadow hover:shadow-2xl transition-all duration-300'>
                        <option value="-1">Tanlang</option>
                        <option value="1">Shahar</option>
                        <option value="2">Tuman</option>
                    </select>
                </div>

                <div className='flex flex-col py-2'>
                    <span>Tuman/Shahar nomi</span>
                    <select className='p-2 border shadow hover:shadow-2xl transition-all duration-300'>
                        {placeList.map((item) => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className='flex flex-col py-2'>
                <span>Mas’ul shaxs</span>
                {
                    loadingProfile ? (
                        <Loader w={48} h={48} />
                    ) : (
                        <Select
                            options={profileOptions}
                            placeholder="Tanlang"
                            classNamePrefix="react-select"  // Optional for custom styling
                        />
                    )
                }


            </div>

            <div>
                {/* Shu yerga combobox qo'yish kerak combobox uchun data bu yerdan baseURL/profile/?is_active=true&is_selected=false&is_super_admin= */}

            </div>

        </div >
    )
}

export default function AddOrganization() {
    return <Layout content={AddOrganizationScreen} />
}
