import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "@/containers/navbar/navbar";
import BlogPostSection from "@/containers/blog/blogPostSection";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
        <div>
          <Navbar/>
          <BlogPostSection/>

        </div>
  );
}
