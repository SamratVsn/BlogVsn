import React, { useEffect, useState } from 'react';
import axios from 'axios';

function IntroPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const FetchPosts = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(
          'https://www.googleapis.com/blogger/v3/blogs/2399953/posts?key=AIzaSyD65sBWsSfGUe3HKNmjSb0oFOJaaF9WHg8&maxResults=3'
        );
        setPosts(response.data.items);
      } catch (err) {
        console.error("API not working", err);
        setError("Failed to fetch posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    FetchPosts();
  }, []);

  if (loading)
    return <p className="text-cyan-400 text-center mt-10 animate-pulse">Loading posts...</p>;
  if (error)
    return <p className="text-red-400 text-center mt-10">{error}</p>;

  return (
    <div className="flex flex-col items-center justify-center mt-12 space-y-8 px-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="max-w-3xl w-full p-6 rounded-2xl bg-[#0f172a]/70 backdrop-blur-md border border-cyan-400/30 shadow-lg hover:shadow-cyan-400/50 transition transform hover:scale-[1.02]"
        >
          <h2 className="text-2xl font-extrabold mb-3 bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent hover:underline decoration-cyan-400">
            {post.title}
          </h2>

          <p
            className="text-slate-300 mb-4 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: post.content.substring(0, 180) + "...",
            }}
          />

          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 mt-2 bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-900 font-semibold rounded-xl shadow-md hover:shadow-cyan-400/50 transition"
          >
            Read More
          </a>

          {/* Date */}
          <p className="text-sm text-slate-400 mt-3">
            📅 {new Date(post.published).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default IntroPost;
