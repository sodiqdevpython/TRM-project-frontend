import React, { useState, useEffect } from 'react'
import Layout from '../Layout'
import SimpleCard from '../components/simpleCard'
import axios from 'axios';

// API

import { baseURL } from '../api';

// API

function DashboardScreen() {

    const [statistics, setStaistics] = useState(null);

    async function getStatistics() {
        const response = await axios.get(`${baseURL}/organizations-statistics/`)
        setStaistics(response.data)
    }

    useEffect(() => {
        getStatistics()
    }, [])

    return (
        <div>
            <div className='flex flex-col md:flex-row gap-2'>
                {statistics?.data.map((item, index) => (
                    <SimpleCard key={index} number={item?.count_data} fullNumber={item?.number} name={item?.type} />
                ))}
            </div>
        </div>
    )
}

export default function Dashboard() {

    return <Layout content={DashboardScreen} />
}