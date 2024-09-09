import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import CustomSelect from '../components/customSelect';
import { Link } from 'react-router-dom';
import DefaultButton from '../components/defaultButton';
import DefaultTable from '../components/defaultTable';
import axios from 'axios';
import { baseURL } from '../api/index'
import Loader from '../components/loader';

import { FaSchoolCircleCheck } from "react-icons/fa6";


function OrganizationListScreen() {

    // Region Select

    const [isLoadingOptionData, setIsLoadingOptionData] = useState(true)
    const [selectedOptionRegion, setSelectedOptionRegion] = useState(-1);

    const [region, setRegion] = useState(null)

    function handleSelectRegion(e) {
        setSelectedOptionRegion(e.target.value)
    }

    // Region or District select

    const selectOptionRD = [
        { id: 1, name: "Barchasi" },
        { id: 2, name: "Shahar" },
        { id: 3, name: "Tuman" }
    ]

    const [selectedOptionRD, setSelectedOptionRD] = useState(1);

    function handleSelectRD(e) {
        setSelectedOptionRD(e.target.value)
    }


    // Place name

    const [placeName, setPlaceName] = useState("1")

    const placeNameList = [
        { id: 1, name: "Tanlang" }
    ]

    function handlePlaceName(e) {
        setPlaceName(e.target.value)
    }


    // Inclusive

    const [inclusive, setInclusive] = useState(1);

    const inclusiveData = [
        { id: 1, name: "Inklyuziv emas" },
        { id: 2, name: "Inklyuziv" }
    ]

    function handleInclusive(e) {
        setInclusive(e.target.value)
    }


    // Status Select

    const [status, setStatus] = useState(1)

    const statusData = [
        { id: 1, name: "Yaxshi" },
        { id: 2, name: "O'rtacha" },
        { id: 3, name: "Qoniqarsiz" }
    ]

    function handleStatus(e) {
        setStatus(e.target.value)
    }


    const [schoolList, setSchoolList] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    async function getSchoolList() {
        const response = await axios.get(`${baseURL}/organizations/`)
        setSchoolList(response.data)
        setIsLoading(false)
    }

    async function getSelectData() {
        try {
            const response = await axios.get(`${baseURL}/regions/`)
            const updateResponse = [{ id: -1, name: "Barchasi" }, ...response.data]
            setRegion(updateResponse)
            setIsLoadingOptionData(false)
        } catch (error) {
            console.error("Viloyatlar ro'yxatini olishda xatolik yuz berdi:", error)
        }
    }


    useEffect(() => {
        getSchoolList()
        getSelectData()
    }, [])

    const optionRegion = [
        { id: "-1", name: "Barchasi" }
    ]

    const tableFields = [
        { name: "No" },
        { name: "Nomi" },
        { name: "Viloyat" },
        { name: "Hudud" },
        { name: "Bal" },
        { name: "Holati" }
    ]

    const typeOptions = [
        { id: "-1", name: "Hammasi" },
        { id: "1", name: "Maktabgacha ta'lim" },
        { id: "2", name: "Umumiy o'rta ta'lim maktablari" },
        { id: "3", name: "Musiqa maktablari" },
        { id: "4", name: "Sport maktablari" }
    ]

    const [selectedType, setSelectedType] = useState("-1")

    useEffect(() => {
        console.log(selectedType)
    }, [selectedType])

    return (
        <div className='flex flex-col gap-10'>
            <div className='flex flex-row justify-end'>
                <Link to={'/add-organization'}>
                    <DefaultButton icon={<FaSchoolCircleCheck size={24} />} label={"Muassasa qo'shish"} />
                </Link>
            </div>
            <div className='w-full py-10 bg-white flex flex-col md:flex-row shadow-xl rounded-xl hover:shadow-2xl transition-all duration-500'>

                <div className='flex flex-col px-[1%]'>
                    <p className='mb-2 text-[#1c2d41] font-rubik'>Viloyat</p>
                    {isLoadingOptionData ? (
                        <CustomSelect
                            options={optionRegion}
                            selectedOption={selectedOptionRegion}
                            onChange={handleSelectRegion}
                        />
                    ) : (
                        <CustomSelect
                            options={region}
                            selectedOption={selectedOptionRegion}
                            onChange={handleSelectRegion}
                        />
                    )}
                </div>

                <div className='flex flex-col px-[1%]'>
                    <p className='mb-2 text-[#1c2d41] font-rubik'>Tuman/Shahar</p>
                    <CustomSelect
                        options={selectOptionRD}
                        selected={selectedOptionRD}
                        onChange={handleSelectRD}
                    />
                </div>

                <div className='flex flex-col px-[1%]'>
                    <p className='mb-2 text-[#1c2d41] font-rubik'>Joy nomi</p>
                    <CustomSelect
                        options={placeNameList}
                        selected={placeName}
                        onChange={handlePlaceName}
                    />
                </div>

                <div className='flex flex-col px-[1%]'>
                    <p className='mb-2 text-[#1c2d41] font-rubik'>Inklyuvivligi</p>
                    <CustomSelect
                        options={inclusiveData}
                        selected={inclusive}
                        onChange={handleInclusive}
                    />
                </div>

                <div className='flex flex-col px-[1%]'>
                    <p className='mb-2 text-[#1c2d41] font-rubik'>Holati</p>
                    <CustomSelect
                        options={statusData}
                        selected={status}
                        onChange={handleStatus}
                    />
                </div>

                <div>
                    <p className='text-[#fdfefe]'>.</p>
                    <DefaultButton className={'mt-1'} label={"Qidirish"} />
                </div>
            </div>


            {/* Schools table */}

            <div className='w-full flex flex-col px-5 py-7 bg-[#fff] shadow-xl rounded-xl hover:shadow-2xl transition-all duration-500'>
                <div className='my-5'>
                    <CustomSelect
                        options={typeOptions}
                        selectedOption={selectedType}
                        onChange={(args) => setSelectedType(args.target.value)}
                    />
                </div>
                <div>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <DefaultTable fields={tableFields} tableData={schoolList} />
                    )
                    }
                </div>
            </div>

            {/* /School table */}

            <div>

            </div>
        </div>
    );
}

export default function OrganizationList() {
    return <Layout content={OrganizationListScreen} />;
}
