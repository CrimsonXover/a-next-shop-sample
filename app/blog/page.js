import Link from "next/link";

export default function Blog() {
    const posts = ["hello-kooni", "Niggers", "Learn"];

    return (
        <section>
            <h1>Blog</h1>
            {posts.map((post) => (
                <div key={post}>
                    <Link href={"/blog/${post}"}>{post}</Link>
                </div>
            ))}
        </section>
    );
}