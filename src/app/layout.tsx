import Sidebar from '@/components/Sidebar';
import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import Image from 'next/image';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ weight: ['300', '400', '700'], style: ['normal'], subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'UiO - Practical Task',
    description: '',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={roboto.className}>
                <header className='border-[#ff6f61] h-32 border border-b-2 flex justify-between px-10 items-center rounded-b-3xl sticky top-0 text-black shrink-0'>
                    <p className='font-bold text-3xl'>Universitetet i Oslo</p>
                    <div className='h-28 w-28 overflow-hidden relative'>
                        <Image src='/uio_logo.png' fill className='object-fill' alt='UiO Logo.' />
                    </div>
                </header>
                <main className='my-20 flex self-stretch h-full'>
                    <Sidebar />
                    {children}
                </main>
            </body>
        </html>
    );
}
