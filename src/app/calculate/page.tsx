'use client';
import { apiClient } from '@/services/axios';
import { useState } from 'react';

export default function Calculate() {
    const [averageAge, setAverageAge] = useState(0);
    const [year, setYear] = useState(0);
    const [apiMessage, setApiMessage] = useState('');

    function calculateAge() {
        apiClient
            .get(`/calculate/${year}`)
            .then((apiData) => {
                const averageAgeFromApi = apiData.data.average_age;
                setAverageAge(averageAgeFromApi);
            })
            .catch((e) => {
                setAverageAge(e.response.data.average_age);
                console.log(e);
                setApiMessage(`Oops, error calculating the age. ${e.response.data.message}`);
            });
    }

    return (
        <article className='flex flex-col gap-2 py-5 px-10 grow overflow-y-scroll'>
            <h1 className='text-2xl mb-5'>Inform an Year to Calculate the Users Average Age of that Year:</h1>

            <label className='flex flex-col gap-2 max-w-[75%]'>
                Year
                <input
                    className='border-2 bg-transparent border-gray-300 rounded-lg h-12 transition-all duration-300 focus:outline-none focus:ring focus:ring-[#cccccc] focus:ring-offset-2 focus:ring-offset-[#e0e0e0] focus:border-[#cccccc] p-2'
                    value={year}
                    type='number'
                    onChange={(e) => setYear(Number(e.target.value))}
                />
            </label>

            <button
                className='p-2 bg-[#19642b] max-w-[75%] rounded-lg disabled:opacity-20 text-white'
                disabled={!year}
                onClick={calculateAge}
            >
                Calculate
            </button>

            {averageAge !== 0 ? (
                <p>
                    Average age:
                    <span className='text-[#b60000] font-bold mx-1'>{averageAge.toFixed(2)}</span>
                    Years Old
                </p>
            ) : (
                <p>{apiMessage}</p>
            )}
        </article>
    );
}
