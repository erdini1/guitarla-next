import Guitarra from "@/components/guitarra"
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
async function getPosts() {
  const res = await fetch(`${process.env.API_URL}/posts/?populate=imagen`)
  return res.json()
}


export default async function Home() {

  //Asi se recomienda segun la documentación hacer llamados en paralelo
  const guitarrasData = getGuitarras()
  const postsData = getPosts()

  const [{ data: guitarras }, { data: posts }] = await Promise.all([guitarrasData, postsData])

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
      <section>
        <h1 className="heading">Blog</h1>

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
