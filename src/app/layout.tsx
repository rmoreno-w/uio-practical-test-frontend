import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ weight: ['700'], style: ['normal'], subsets: ['latin'] });

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
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
