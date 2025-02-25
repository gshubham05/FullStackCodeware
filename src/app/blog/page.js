import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  { 
    id: 1, 
    title: "Master Full-Stack Development in 2024", 
    slug: "fullstack-web-dev", 
    description: "Learn to build modern web applications with React, Node.js, and PostgreSQL",
    category: "Web Development",
    date: "May 15, 2024",
    readTime: "8 min read",
    image: "/course-banner-1.jpg",
    author: {
      name: "Sarah Johnson",
      avatar: "/instructor-1.jpg"
    }
  },
  { 
    id: 2, 
    title: "Python for Automation & Data Science", 
    slug: "python-automation", 
    description: "Transform your career with Python programming and data analysis",
    category: "Programming",
    date: "May 12, 2024",
    readTime: "6 min read",
    image: "/course-banner-2.jpg",
    author: {
      name: "Mike Chen",
      avatar: "/instructor-2.jpg"
    }
  },
  { 
    id: 3, 
    title: "Become Job-Ready with React", 
    slug: "job-ready-react", 
    description: "Master React Hooks, Redux Toolkit, and Next.js for frontend roles",
    category: "Frontend Development",
    date: "May 10, 2024",
    readTime: "7 min read",
    image: "/course-banner-3.jpg",
    author: {
      name: "Emma Wilson",
      avatar: "/instructor-3.jpg"
    }
  }
  
  
];

export default function Blog() {
 

  return (
    <div className="min-h-screen bg-gray-50 mt-[5rem]">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-purple-900 text-white mt-20 py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Launch Your Tech Career with Codeware
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-2xl mx-auto">
            Industry-focused offline & online courses in programming and web
            development
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-transform transform hover:scale-105 shadow-lg">
              Explore Courses
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition">
              Book Free Demo
            </button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </section>

      {/* Featured Post Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
          <Image
            src={featuredPost.image}
            alt={featuredPost.title}
            width={1200}
            height={600}
            className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                {featuredPost.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
                {featuredPost.title}
              </h2>
              <p className="text-lg opacity-90 mb-6">{featuredPost.description}</p>
              <div className="flex items-center justify-between">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
                >
                  <span className="font-semibold">Read Full Article</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <Image
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    width={40}
                    height={40}
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{featuredPost.author.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Latest Course Updates & Articles
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden rounded-t-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                
                <p className="text-gray-600 mb-4">{post.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm text-gray-600">{post.author.name}</span>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Enhanced Pagination */}
        <div className="mt-16 flex justify-center gap-2">
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-gray-100 transition">
            ← Previous
          </button>
          {[1, 2, 3].map((page) => (
            <button 
              key={page}
              className={`px-4 py-2 rounded-lg ${page === 1 ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              {page}
            </button>
          ))}
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-gray-100 transition">
            Next →
          </button>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="bg-gradient-to-r from-blue-800 to-purple-900 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Tech Journey Today!
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join 5,000+ successful alumni working in top tech companies
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-2">100+</h3>
                <p className="opacity-90">Students Trained</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-2">100%</h3>
                <p className="opacity-90">Placement Assistance</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-2">5 years+</h3>
                <p className="opacity-90">Faculty experience</p>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Get Course Updates & Career Tips
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Subscribe to our newsletter and get exclusive content directly in
            your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
