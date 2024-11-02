// components/FeaturedPost.js
import React from 'react';
import dynamic from 'next/dynamic';
import CustomButton from '@/components/customButton/custom-button';
import { blurDataURLCreator } from '@/lib/cloudfrontImage';

// Dynamically Imported Components
const AspectRatioWrapper = dynamic(() => import('@/components/aspectRatioWrapper/aspect-ratio-wrapper'));
const CustomImage = dynamic(() => import('@/components/customImage/custom-image'));

const FeaturedPost = ({ blogData = [] }) => {
    return (
        blogData?.length > 0 && blogData?.map((item, index) => (
            <div className="featured-post flex flex-col bg-white blog-box-shadow p-6 rounded-lg my-5" key={item?.categoryName + index + "blogs"}>
                <div className="w-full flex flex-col lg:flex-row gap-6">
                    {/* Main Post */}
                    <div className="main-post w-full lg:w-1/2 flex flex-col">
                        <p className="title uppercase text-2xl font-bold text-blue-800 mb-4">{item?.categoryName}</p>
                        {item?.blogs?.length > 0 && (
                            <div className=" flex flex-col gap-4 mb-6">
                                <AspectRatioWrapper className="blog-image">
                                    <CustomImage
                                        src={item.blogs[0]?.url || ""}
                                        height={239}
                                        width={425}
                                        className="rounded-lg"
                                        unoptimized
                                        priority
                                        placeholder="blur"
                                        blurDataURL={blurDataURLCreator({
                                            width: 469,
                                            height: 469,
                                        })}
                                    />
                                </AspectRatioWrapper>
                                <p className="text-lg text-gray-800 mt-2">{item.blogs[0]?.title}</p>
                            </div>
                        )}
                    </div>

                    {/* Recent Posts */}
                    <div className="recent-posts w-full lg:w-1/2 space-y-4">
                        {item?.blogs?.slice(1).map((blog, blogIndex) => (
                            <div  className="flex gap-4 items-start" key={blog?.id + blogIndex}>
                                <div className="w-1/2">
                                    <AspectRatioWrapper className="blog-image">
                                        <CustomImage
                                            src={blog?.url}
                                            height={239}
                                            width={425}
                                            className="rounded-lg w-1/2"
                                            unoptimized
                                            priority={[0, 1, 2, 3]?.includes(blogIndex)}
                                            placeholder="blur"
                                            blurDataURL={blurDataURLCreator({
                                                width: 469,
                                                height: 469,
                                            })}
                                        />
                                    </AspectRatioWrapper>
                                </div>
                                <div className="w-2/3">
                                    <p className="text-md text-gray-800 font-medium">{blog?.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* "See all posts" Button */}
                <div className="flex justify-end py-4">
                    <CustomButton className="w-1/5" label="See all posts" />
                </div>
            </div>
        ))
    );
};

export default FeaturedPost;
