import Sidebar from '@/components/Sidebar';
import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
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
                <header className='border-[#ff6f61] h-32 border border-b-2 flex justify-between px-[120px] items-center rounded-b-3xl sticky top-0 text-black'>
                    <p>Universitetet i Oslo</p>
                </header>
                <main className='my-20 min-h-full flex h-full grow'>
                    <Sidebar />
                    {children}
                </main>
            </body>
        </html>
    );
}
