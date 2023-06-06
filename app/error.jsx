"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({ error, reset }) {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <>
            <p className="error">Pagina no Encotrada</p>
            <Link
                href={"/"}
                className="error-enlace"
            >
                Ir a inicio
            </Link>
        </>
    )
}
