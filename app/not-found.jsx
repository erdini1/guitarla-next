import Link from "next/link"

const NotFound = () => {
  return (
    <div>
      <p className="error">Pagina no Encotrada</p>
      <Link
        href="/"
        className="error-enlace"
      >
        Ir a inicio
      </Link>
    </div>
  )
}

export default NotFound