

export async function generateMetadata({ params, searchParams }) {
    const { data } = await getGuitarra(params.url)
    const { nombre } = data[0].attributes
    return {
        title: `GuitarLA - Guitarra ${nombre}`,
        description: `GuitarLA - Guitarra ${nombre}, Venta de guitarras, blog de musica`
    }
}

async function getGuitarra(url) {
    const res = await fetch(`${process.env.API_URL}/guitarras/?filters[url]=${url}&populate=imagen`)
    return res.json()
}

const Producto = async ({ params }) => {
    const { url } = params
    const { data: guitarra } = await getGuitarra(url)
    console.log(guitarra)

    return (
        <div>{url}</div>
    )
}

export default Producto