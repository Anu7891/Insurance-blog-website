// components/FeaturedPost.js
import React from 'react';
import dynamic from 'next/dynamic';
import CustomButton from '@/components/customButton/custom-button';

// Dynamically Imported Components
const AspectRatioWrapper = dynamic(() => import( '@/components/aspectRatioWrapper/aspect-ratio-wrapper'));
const CustomImage = dynamic(() => import('@/components/customImage/custom-image'));

const FeaturedPost = ({ title = "", blogData = [] }) => {
    return (
        <div className="featured-post flex flex-col  bg-white shadow-xl p-6 rounded-lg my-5">
            {/* Section Title */}
            <div className='w-full flex gap-6'>
            <div className="w-full lg:w-1/2">
                <p className="title uppercase text-2xl font-bold text-blue-800 mb-4">{title}</p>

                {/* First (Main) Blog Post */}
                {blogData?.length > 0 && (
                    <div className="main-post flex flex-col gap-4 mb-6">
                        <AspectRatioWrapper className="blog-image">
                        <CustomImage
                            src={blogData[0]?.image}
                            height={239}
                            width={425}
                            className="rounded-lg"
                            unoptimized
                            priority
                        />
                        </AspectRatioWrapper>
                        <div className="post-details">
                            <p className="text-lg  text-gray-800 mt-2">
                                {blogData[0]?.title}
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Recent Posts */}
            <div className="recent-posts w-full lg:w-1/2 space-y-4">
                {blogData?.slice(1).map((blog, index) => (
                    <div key={blog?.title + index} className="flex gap-4 items-start">
                        <div className='w-1/2'>
                          <AspectRatioWrapper className="blog-image">
                            <CustomImage
                                src={blog?.image}
                                height={239}
                                width={425}
                                className="rounded-lg w-1/2"
                                unoptimized
                                priority={[0, 1, 2, 3]?.includes(index)}
                            />
                          </AspectRatioWrapper>
                        </div>
                       
                        <div className='w-1/2'>

                            <p className="text-md text-gray-800 font-medium">{blog?.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            <div className='flex justify-end py-4'>
               <CustomButton className='w-1/5' label="See all posts" />
            </div>


        </div>
    );
};

export default FeaturedPost;
