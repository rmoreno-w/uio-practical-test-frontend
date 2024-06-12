import Sidebar from '@/components/Sidebar';

export default function Home() {
    return (
        <>
            <header className='border-[#ff6f61] h-32 border border-b-2 flex justify-between px-[120px] items-center rounded-b-3xl sticky top-0 text-black'>
                <p>Universitetet i Oslo</p>
            </header>

            <main className='flex'>
                <Sidebar />
                <article className='flex flex-col max-w-56 gap-2 py-5 px-10'>Main</article>
            </main>
        </>
    );
}
