import { useRouter } from "next/router";
import { blogPosts } from "@/data/blogPosts";
import FireParticles from "@/components/FireParticles";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

const BlogDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the blog post based on the slug
  const post = blogPosts.find(
    (post: { slug: string | string[] | undefined }) => post.slug === slug
  );

  if (!post) {
    return <p className="text-white text-center mt-20">Post not found.</p>;
  }

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

      <section className="mt-22 container mx-auto p-8 relative z-10 text-white">
        {/* Back Button */}
        <button
          className="flex items-center mb-6 text-gray-300 hover:text-yellow-500 transition-all"
          onClick={() => router.push("/blog")}
        >
          <FaArrowLeft className="mr-2 animate-pulse" />
          Back to Blog
        </button>

        {/* Blog Content */}
        <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 shadow-lg">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <Image
            src={post.image}
            alt={post.title}
            width={500}
            height={500}
            className="w-full h-64 object-cover mb-6 rounded-md"
          />
          <p className="text-gray-300">{post.content}</p>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
