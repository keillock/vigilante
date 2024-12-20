"use client";

import React from "react";
import Link from "next/link";

interface PostProps {
  id: string; // Unique ID for each post
  imageSrc: string;
  title: string;
  description: string;
  tag: string;
  category: string;
}

const Post: React.FC<PostProps> = ({
  id,
  imageSrc,
  title,
  description,
  tag,
  category,
}) => {
  return (
    <Link
      href={{
        pathname: `/posts/${id}`,
        query: { imageSrc, title, description, tag, category },
      }}
    >
      <div className="cursor-pointer overflow-hidden  mb-4">
        {/* Image */}
        <div className="h-60 w-full">
          <img
            src={imageSrc}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-4">
          {/* Category */}
          <h4 className="text-sm font-bold text-orange-600">{category}</h4>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

          {/* Description */}
          <p className="text-gray-600 text-sm">{description}</p>

          {/* Tag */}
          <div>
            <span className="text-sm px-3 py-1 bg-blue-100 text-blue-500 rounded-full border border-blue-300">
              {tag}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;