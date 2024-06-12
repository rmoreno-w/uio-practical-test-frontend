'use client';
import { apiClient } from '@/services/axios';
import { useEffect, useState } from 'react';

interface user {
    name: string;
    email: string;
    year_of_birth: string;
}

interface apiData {
    data: user[];
}

export default function ListUsers() {
    const [users, setUsers] = useState<Array<user>>([]);

    useEffect(() => {
        apiClient.get<apiData>('/people').then((apiData) => {
            const usersFromApi = apiData.data.data;
            console.log(usersFromApi);
            setUsers(usersFromApi);
        });
    }, []);

    return (
        <article className='flex flex-col gap-2 px-10 grow h-[480px]'>
            <h1 className='text-2xl mb-5 pt-5'>Users List:</h1>

            <div className='max-w-[75%] pb-5 flex flex-col gap-4 overflow-y-auto h-full'>
                {users.map((user) => (
                    <div key={`${user.email}`} className='p-5 border border-[#ffd1cf] rounded-xl flex flex-col gap-2'>
                        <div>
                            <span className='font-bold'>Name: </span>
                            <p>{user.name}</p>
                        </div>
                        <div>
                            <span className='font-bold'>Email: </span>
                            <p>{user.email}</p>
                        </div>
                        <div>
                            <span className='font-bold'>Year of Birth: </span>
                            <p>{user.year_of_birth}</p>
                        </div>
                    </div>
                ))}
            </div>
        </article>
    );
}
