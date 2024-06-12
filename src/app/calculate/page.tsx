'use client';
import { apiClient } from '@/services/axios';
import { useEffect, useState } from 'react';

export default function Calculate() {
    const [averageAge, setAverageAge] = useState(0);

    useEffect(() => {
        apiClient.get('/calculate').then((apiData) => {
            const averageAgeFromApi = apiData.data.average_age;
            setAverageAge(averageAgeFromApi);
        });
    }, []);

    return (
        <article className='flex flex-col gap-2 py-5 px-10 grow overflow-y-scroll'>
            <h1 className='text-2xl mb-5'>Registered Users Average Age:</h1>

            <p>
                <span className='text-[#b60000] font-bold mr-1'>{averageAge.toFixed(2)}</span>
                Years Old
            </p>
        </article>
    );
}
