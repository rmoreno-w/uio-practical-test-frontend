export default function Sidebar() {
    return (
        <aside className='flex flex-col max-w-56 gap-2 py-5 px-10'>
            <a className='hover:cursor-pointer px-4 border-l-2 border-[#ffd1cf]'>List Users</a>
            <a className='hover:cursor-pointer px-4 border-l-2 border-[#ffd1cf]'>Register User</a>
            <a className='hover:cursor-pointer px-4 border-l-2 border-[#ffd1cf]'>Calculate Average User Age</a>
            <a className='hover:cursor-pointer px-4 border-l-2 border-[#ffd1cf]'>Find User Info</a>
            <a className='hover:cursor-pointer px-4 border-l-2 border-[#ffd1cf]'>Edit User</a>
        </aside>
    );
}
