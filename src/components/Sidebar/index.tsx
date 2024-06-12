'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const currentRoute = usePathname();
    console.log(currentRoute);
    return (
        <aside className='flex flex-col max-w-56 gap-2 py-5 px-10'>
            <Link
                href={'/'}
                className={`hover:cursor-pointer px-4 border-l-2 border-[#ffd1cf]
                ${currentRoute == '/' ? 'border-[#b60000]' : ''}`}
            >
                List Users
            </Link>
            <Link
                href={'/register'}
                className={`hover:cursor-pointer px-4 border-l-2 border-[#ffd1cf]
                ${currentRoute == '/register' ? 'border-l-2 border-l-[#b60000]' : ''}`}
            >
                Register User
            </Link>
            <Link
                href={'/list'}
                className={`hover:cursor-pointer px-4 border-l-2 border-[#ffd1cf]
                ${currentRoute == '/calculate' ? 'border-l-2 border-l-[#b60000]' : ''}`}
            >
                Calculate Average User Age
            </Link>
            <Link
                href={'/list'}
                className={`hover:cursor-pointer px-4 border-l-2 border-[#ffd1cf]
                ${currentRoute == '/findUser' ? 'border-l-2 border-l-[#b60000]' : ''}`}
            >
                Find User Info
            </Link>
            <Link
                href={'/list'}
                className={`hover:cursor-pointer px-4 border-l-2 border-[#ffd1cf]
                ${currentRoute == '/editUser' ? 'border-l-2 border-l-[#b60000]' : ''}`}
            >
                Edit User
            </Link>
        </aside>
    );
}
