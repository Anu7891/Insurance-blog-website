import React from 'react';
import FeaturedPost from './featuredPost';
import Container from '@/hoc/container';

// Temporarily define BASE_API_URL directly here for testing
const BASE_API_URL = "https://api.insurencepedia.in/v1/insurenceAction";

const BlogPostSection = async () => {
    // Making an API call to fetch the blog post data
    const response = await fetch(`${BASE_API_URL}/?skip=0&limit=4&type=0`, {
        cache: 'no-store' // Prevents caching if needed
    });
    let blogData = [];

    if (response.ok) {
        blogData = await response.json();
    } else {
        console.error('Failed to fetch data from the API');
    }

    const homePageBlogData = blogData?.data;


    return (
        <Container>
            <FeaturedPost blogData={homePageBlogData} />
        </Container>
    );
};

export default BlogPostSection;
