"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { CaretLeft, DotsThree, DotsThreeVertical } from "phosphor-react";

const PostDetail: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const tag = searchParams.get("tag");
  const category = searchParams.get("category");
  const imageSrc = searchParams.get("imageSrc");

  return (
    <main className="bg-gray-50 min-h-screen ">
      {/* Header */}
      <div className="flex items-center justify-between p-4 mb-4">
        <button
          onClick={() => router.back()}
          className="text-gray-600 text-lg font-bold"
        >
        < CaretLeft></CaretLeft>
        </button>
        <h1 className="text-lg font-semibold text-gray-900">Post</h1>
        <button className="text-gray-600"> <DotsThreeVertical></DotsThreeVertical></button>
      </div>

      {/* Image */}
      <div className="h-60 w-full mb-4">
        <img
          src={imageSrc || "https://via.placeholder.com/412x240"}
          alt={title || "Post Image"}
          className="object-cover w-full h-full "
        />
      </div>

      {/* Content */}
      <div className=" p-4 ">
        {/* Category */}
        <h4 className="text-sm font-bold text-orange-600 mb-2">{category}</h4>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-6">{description}</p>

        {/* Tag */}
        <div>
          <span className="text-sm px-3 py-1 bg-blue-100 text-blue-500 rounded-full border border-blue-300">
            {tag}
          </span>
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-6 p-4">
        <div className="flex items-center gap-4 mb-4">
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQAOEVDq6CWr8puZp9EMdGlOGQWuJJ5gL5rf_tsaRHTEl2kRegJ"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-bold text-gray-900 text-sm">Salvita</h3>
            <p className="text-sm text-gray-600">@salvi_x0</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 px-4 py-2 bg-gray-100 rounded-full text-gray-700">
            Comentar
          </button>
          <button className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-full">
            Entendido
          </button>
        </div>
      </div>
    </main>
  );
};

export default PostDetail;