import Link from 'next/link'


export const metadata = {
    title: "GuitarLA - Nosotros",
    description: 'GuitarLA - Venta de guitarras y blog de musica'
}

export default function Nosotros() {
    return (
        <>
            <div>Desde nosotros</div>

            <Link href="/" >
                Inicio
            </Link>
        </>
    )
}
