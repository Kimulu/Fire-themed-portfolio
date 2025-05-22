import React from "react";
import FireParticles from "@/components/FireParticles";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <>
      {/* Fire Particles */}
      <FireParticles
        id="fire-particles"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />

      <section className="mt-22 container mx-auto p-8 relative z-10">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">
          My Blog 🔥
        </h1>
        <p className="text-lg text-gray-300 text-center mb-8">
          Thoughts, Tutorials, and Insights.
        </p>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              description={post.description}
              image={post.image}
              slug={post.slug}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
