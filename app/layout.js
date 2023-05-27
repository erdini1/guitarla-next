import 'normalize.css/normalize.css';
import { Outfit } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

// NEXT.JS incluye alojamiento automatico para cualquier archivo de fuente.
const outfit = Outfit({
  weight: ['400', '700', '900'],
  subsets: ['latin']
});

export const metadata = {
  title: 'GuitarLA - NextJS',
  description: 'GuitarLA - Venta de guitarras y blog de musica'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={outfit.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
