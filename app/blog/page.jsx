import Post from "@/components/post"

export const metadata = {
    title: "GuitarLA - Blog",
    description: 'Blog de musica, venta de guitarras, consejos, GuitarLA'

}

export async function getPosts() {
    const res = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
    if (!res) undefined
    return res.json()
}


const Blog = async () => {

    const { data: posts } = await getPosts()

    return (
        <main className="contenedor">
            <h1 className="heading">Blog</h1>
            <div>
                {posts?.map(post => (
                    <Post
                        key={post.id}
                        post={post.attributes}
                    />
                ))}
            </div>
        </main>
    )
}

export default Blog