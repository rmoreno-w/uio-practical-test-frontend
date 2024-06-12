'use client';
import { apiClient } from '@/services/axios';
import { useState } from 'react';

interface user {
    name: string;
    email: string;
    year_of_birth: string;
}

export default function FindUser() {
    const [email, setEmail] = useState<string>('');
    const [user, setUser] = useState<user>();
    const [apiMessage, setApiMessage] = useState('');

    function findUser() {
        apiClient
            .get(`/people/find/${email}`)
            .then((resp) => {
                setApiMessage('User Found:');
                setUser(resp.data);
            })
            .catch((e) => {
                console.log(e);
                setApiMessage(`Oops, ${e.response.data.message}`);
            });
    }

    return (
        <article className='flex flex-col gap-2 py-5 px-10 grow overflow-y-scroll'>
            <h1 className='text-2xl mb-5'>Find User Info by Email:</h1>

            <div className='flex flex-col gap-3 mb-3'>
                <label className='flex flex-col gap-2 max-w-[75%]' htmlFor='name'>
                    Please, inform the Email of the User you want to find:
                    <input
                        className='border-2 bg-transparent border-gray-300 rounded-lg h-12 transition-all duration-300 focus:outline-none focus:ring focus:ring-[#cccccc] focus:ring-offset-2 focus:ring-offset-[#e0e0e0] focus:border-[#cccccc] p-2'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
            </div>

            <button
                className='p-2 bg-[#19642b] max-w-[75%] rounded-lg disabled:opacity-20 text-white'
                disabled={!email}
                onClick={findUser}
            >
                Find User
            </button>

            {apiMessage.includes('Oops') && <p className='font-bold'>{apiMessage}</p>}

            {user && !apiMessage.includes('Oops') && (
                <div
                    key={`${user.email}`}
                    className='mt-5 p-5 border border-[#19642b] rounded-xl flex flex-col gap-2 max-w-[75%]'
                >
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
            )}
        </article>
    );
}
