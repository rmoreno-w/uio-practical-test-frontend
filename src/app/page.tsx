import Sidebar from '@/components/Sidebar';
import ListUsers from './list/page';

export default function Home() {
    return (
        <>
            <header className='border-[#ff6f61] h-32 border border-b-2 flex justify-between px-[120px] items-center rounded-b-3xl sticky top-0 text-black'>
                <p>Universitetet i Oslo</p>
            </header>

            <main className='my-20 min-h-full flex h-full grow'>
                <Sidebar />
                <ListUsers />
            </main>
        </>
    );
}
