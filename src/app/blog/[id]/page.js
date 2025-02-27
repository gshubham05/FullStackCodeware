import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

async function getBlogPost(id) {
  const { blogPosts } = await import('../data'); // Dynamically import the blog data
  return blogPosts.find((p) => p.id === id) || null;
}

export default async function BlogPost({ params }) {
  const { id } = await params; // Get post ID from URL
  const post = await getBlogPost(id); // Fetch the post data asynchronously

  if (!post) {
    return notFound(); // Show 404 page if post not found
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{post.title}</h1>
          <p className="text-gray-300 mt-2">{post.description}</p>
          <div className="flex items-center gap-4 mt-4 text-white">
            <span className="text-sm">{post.date} • {post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="mt-10 text-lg leading-8 text-gray-700">
        {/* Render blog content dynamically */}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>

      {/* Author Section */}
      <div className="mt-12 p-6 border-t">
        <div className="flex items-center gap-4">
          <div>
            <p className="text-gray-500 text-sm">Passionate about web development and teaching.</p>
          </div>
        </div>
      </div>

      {/* Back to Blog Button */}
      <div className="mt-8 text-center">
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Blog
        </Link>
      </div>
    </section>
  );
}
