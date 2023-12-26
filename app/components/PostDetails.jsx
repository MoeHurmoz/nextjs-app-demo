export default async function PostDetails({ id }) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  const endpoint = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const res = await fetch(endpoint, { cache: "no-store" });
  const post = await res.json();

  const styles = {
    padding: "15px",
    border: "1px solid white",
    borderCollapse: "collapse",
  };

  return (
    <table style={{ ...styles, margin: "50px", width: "90%" }}>
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
  );
}
