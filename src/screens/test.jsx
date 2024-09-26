import React, { useEffect } from 'react'

import { baseURL } from '../api'
import axios from 'axios'

export default function Test() {

    useEffect(() => {
        async function api() {

            const token = localStorage.getItem('token')

            const response = await axios.get(`${baseURL}/test/`, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
            console.log(response)
        }

        api()
    }, [])

    return (
        <div>
            <h1>Test</h1>
        </div>
    )
}
