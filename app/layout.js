import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Training Project",
};

export default function RootLayout({ children }) {
  const containerStyle = {
    background: "#593d0c",
    margin: "50px",
    padding: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: "20px",
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Link href="/">HOME</Link> <Link href="/posts">POSTS</Link>
        </header>
        <div style={containerStyle}>{children}</div>
      </body>
    </html>
  );
}
