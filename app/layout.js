import 'normalize.css/normalize.css';
import '../styles/globals.css';
import { Outfit } from 'next/font/google';

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
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
