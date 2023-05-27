import Image from "next/image"
import logo from "@/public/img/logo.svg"

const Header = () => {
    return (
        <header>
            <div className="contenedor">
                <Image
                    src={logo}
                    alt="Imagen Logo"
                    width={300}
                    height={40}
                />

            </div>
        </header>
    )
}

export default Header