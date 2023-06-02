import Guitarra from "@/components/guitarra"
import Curso from "@/components/curso"
import Post from "@/components/post"
import styles from "@/styles/grid.module.css"

export const metadata = {
  title: "GuitarLA - Inicio",
  description: "GuitarLA - Inicio, venta de guitarras, blog de musica, consejos"
}

async function getGuitarras() {
  const res = await fetch(`${process.env.API_URL}/guitarras/?populate=imagen`)
  return res.json()
}

async function getCurso() {
  const res = await fetch(`${process.env.API_URL}/curso/?populate=imagen`)
  return res.json()
}

async function getPosts() {
  const res = await fetch(`${process.env.API_URL}/posts/?populate=imagen`)
  return res.json()
}


export default async function Home() {

  //Asi se recomienda segun la documentación hacer llamados en paralelo
  const guitarrasData = getGuitarras()
  const cursoData = getCurso()
  const postsData = getPosts()

  const [
    { data: guitarras },
    { data: curso },
    { data: posts }
  ] = await Promise.all([
    guitarrasData,
    cursoData,
    postsData
  ])

  return (
    <>
      <main className="contenedor">
        <h1 className="heading">Nuestra colección</h1>

        <div className={styles.grid}>
          {guitarras?.map(guitarra => (
            <Guitarra
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ))}
        </div>

      </main>

      {/* No requiere key porque no es un listado */}
      <Curso
        curso={curso.attributes}
      />

      <section className="contenedor">
        <h2 className="heading">Blog</h2>

        <div className={styles.grid}>
          {posts?.map(post => (
            <Post
              key={post.id}
              post={post.attributes}
            />
          ))}
        </div>

      </section>
    </>
  )
}
