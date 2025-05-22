import React from "react";
import ShinyButton from "./ShinyButton";
import Link from "next/link";
import Image from "next/image";

type BlogCardProps = {
  title: string;
  description: string;
  image: string;
  slug: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  image,
  slug,
}) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg border border-gray-700 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:border-yellow-500">
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="w-full h-40 object-cover mb-4 rounded-md"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex justify-end">
        <Link href={`/blog/${slug}`}>
          <ShinyButton label="Read More" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
