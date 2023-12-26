import { Suspense } from "react";
import PostDetails from "@/app/components/PostDetails";

export default function PostPage({ params }) {
  const postId = Object.values(params);

  const styles = {
    padding: "15px",
    border: "1px solid white",
    borderCollapse: "collapse",
  };
  const loadingJSX = (
    <table style={{ ...styles, margin: "50px", width: "90%" }}>
      <caption style={{ ...styles, borderBottom: "none" }}>Loading...</caption>
      <tr>
        <th style={styles}>User</th>
        <th style={styles}>Body</th>
      </tr>
      <tr>
        <td style={styles}>Loading...</td>
        <td style={styles}>Loading...</td>
      </tr>
    </table>
  );

  return (
    <>
      <h1 style={{ margin: "40px 0" }}>Post Details</h1>

      <Suspense fallback={loadingJSX}>
        <PostDetails id={postId} />
      </Suspense>
    </>
  );
}
