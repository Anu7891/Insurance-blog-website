import React from 'react';
import FeaturedPost from './featuredPost';
import Container from '@/hoc/container';
import { STATIC_IMG_ONE, STATIC_IMG_THREE, STATIC_IMG_TWO } from '@/lib/constant';

const BlogPostSection = () => {

    const staticBlogPostSection =[
      {
            image: STATIC_IMG_ONE,
            title:"Risk,Trends,and Challenges for Cyber Insurance in India",
       },
        {
            image: STATIC_IMG_TWO,
            title: "Cyber Insurance Myths Debunked",
        },
        {
            image: STATIC_IMG_ONE,
            title: "Cyber Insurance Policy - A Necessity for All",
        },
        {
            image: STATIC_IMG_THREE,
            title: "Ransomware Risks You Need To Know",
        }
]

    return (
        <Container>
            <FeaturedPost title={"Cyber Insurance"} blogData={staticBlogPostSection} />
            <FeaturedPost title={"Cyber Insurance"} blogData={staticBlogPostSection} />
            <FeaturedPost title={"Cyber Insurance"} blogData={staticBlogPostSection} />
        </Container>
    );
};

export default BlogPostSection;