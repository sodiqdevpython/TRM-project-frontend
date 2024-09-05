import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import CustomSelect from '../components/customSelect';

import DefaultTable from '../components/defaultTable';
import axios from 'axios';
import { baseURL } from '../api/index'

import { RotatingLines } from 'react-loader-spinner';


function RatedScreen() {

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
        const response = await axios.get(`${baseURL}/organizations/?region=&district=&city=&is_city=unknown&rating=&is_inclusive=unknown&education_type=Umumiy+o%27rta+ta%27lim+maktablari`)
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

    function Loading() {
        return (
            <div className='flex justify-center items-center'>
                <RotatingLines
                    visible={true}
                    height="96"
                    width="96"
                    color="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}
                    }
                    wrapperClass=""
                />
            </div >
        )
    }

    return (
        <div className='flex flex-col gap-10'>
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
                    <button className='px-3 py-1 mt-2 bg-Primary text-xl text-Light font-rubik rounded-md shadow-xl'>Qidirish</button>
                </div>
            </div>

            {/* Schools table */}

            <div className='w-full flex flex-col px-5 py-10 bg-[#fff] shadow-xl rounded-xl hover:shadow-2xl transition-all duration-500'>
                <div>
                    <h2 className='font-rubik text-xl text-[#1c2d41]'>Maktablar</h2><hr className='my-2' />
                </div>
                <div>
                    {isLoading ? (
                        <Loading />
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

export default function Rated() {
    return <Layout content={RatedScreen} />;
}
