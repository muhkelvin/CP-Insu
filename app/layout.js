import './globals.css';
import { Playfair_Display, Lato } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

const lato = Lato({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-lato',
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
        <body className="font-[--font-lato] bg-[#FFFFFF]">
        <Navbar />
        {children}
        <Footer />
        </body>
        </html>
    );
}