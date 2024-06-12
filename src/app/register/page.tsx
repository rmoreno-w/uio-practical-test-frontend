'use client';
import { apiClient } from '@/services/axios';
import { useState } from 'react';

export default function Register() {
    const [name, setName] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [year, setYear] = useState<string>();

    const [apiMessage, setApiMessage] = useState('');

    function registerUser() {
        let config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        let data = {
            name,
            password,
            email,
            year_of_birth: year,
        };

        apiClient
            .post('/people/create', data, config)
            .then((resp) => {
                console.log(resp);
                setApiMessage('User created successfully!');
            })
            .catch((e) => {
                console.log(e);
                setApiMessage(`Oops, error creating user. ${e.response.data.message}`);
            });
    }

    return (
        <article className='flex flex-col gap-2 py-5 px-10 grow overflow-y-scroll'>
            <h1 className='text-2xl mb-5'>New User Info:</h1>

            <div className='flex flex-col gap-3 mb-3'>
                <label className='flex flex-col gap-2 max-w-[75%]'>
                    Name
                    <input
                        className='border-2 bg-transparent border-gray-300 rounded-lg h-12 transition-all duration-300 focus:outline-none focus:ring focus:ring-[#cccccc] focus:ring-offset-2 focus:ring-offset-[#e0e0e0] focus:border-[#cccccc] p-2'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label className='flex flex-col gap-2 max-w-[75%]'>
                    Year of Birth
                    <input
                        className='border-2 bg-transparent border-gray-300 rounded-lg h-12 transition-all duration-300 focus:outline-none focus:ring focus:ring-[#cccccc] focus:ring-offset-2 focus:ring-offset-[#e0e0e0] focus:border-[#cccccc] p-2'
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </label>

                <label className='flex flex-col gap-2 max-w-[75%]'>
                    Email
                    <input
                        className='border-2 bg-transparent border-gray-300 rounded-lg h-12 transition-all duration-300 focus:outline-none focus:ring focus:ring-[#cccccc] focus:ring-offset-2 focus:ring-offset-[#e0e0e0] focus:border-[#cccccc] p-2'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label className='flex flex-col gap-2 max-w-[75%]'>
                    Password
                    <input
                        className='border-2 bg-transparent border-gray-300 rounded-lg h-12 transition-all duration-300 focus:outline-none focus:ring focus:ring-[#cccccc] focus:ring-offset-2 focus:ring-offset-[#e0e0e0] focus:border-[#cccccc] p-2'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
            </div>
            <button
                className='p-2 bg-[#19642b] max-w-[75%] rounded-lg disabled:opacity-20 text-white'
                disabled={!name || !year || !password || !email}
                onClick={registerUser}
            >
                Create User
            </button>
            {apiMessage && <p className='font-bold'>{apiMessage}</p>}
        </article>
    );
}
