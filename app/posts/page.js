import Link from "next/link";

export const metadata = {
  title: "All Posts",
};

export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 120 },
  });
  const posts = await res.json();

  const styles = {
    padding: "15px",
    border: "1px solid white",
    borderCollapse: "collapse",
  };

  return (
    <>
      {posts.map((post) => {
        return (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            style={{ margin: "50px", width: "70%" }}
          >
            <table style={{ ...styles, width: "100%" }}>
              <caption style={{ ...styles, borderBottom: "none" }}>
                {post.title}
              </caption>
              <tr>
                <th style={styles}>User</th>
                <th style={styles}>Body</th>
              </tr>
              <tr>
                <td style={styles}>{post.userId}</td>
                <td style={styles}>{post.body}</td>
              </tr>
            </table>
          </Link>
        );
      })}
    </>
  );
}
