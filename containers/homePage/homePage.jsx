import Wrapper from "@/hoc/wrapper";
import React from "react";
import Navbar from "../navbar/navbar";
import BlogPostSection from "../blog/blogPostSection";


const Index =() => {
    return (
        <Wrapper>
            {/* ------------------- Header -----------------------*/}
            <Navbar />

            {/* ------------------- Blog Post Section ----------------------- */}
            <BlogPostSection />

        </Wrapper>
    )

}

export default Index;