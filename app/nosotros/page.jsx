import Link from 'next/link'


export const metadata = {
    title: "GuitarLA - Nosotros",
    description: 'GuitarLA - Venta de guitarras y blog de musica'
}

export default function Nosotros() {
    return (
        <>
            <h1>Desde nosotros</h1>

            <Link href="/" >
                Inicio
            </Link>
        </>
    )
}
