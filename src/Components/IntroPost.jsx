import React, { useEffect, useState } from 'react'
import axios from 'axios'

function IntroPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const FetchPosts = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get('https://www.googleapis.com/blogger/v3/blogs/2399953/posts?key=AIzaSyD65sBWsSfGUe3HKNmjSb0oFOJaaF9WHg8&maxResults=3')
        setPosts(response.data.items);
        console.log(response.data);
      }
      catch (err) {
        console.error("API not working", err);
        setError("Failed to fetch posts. Please try again later.");
      }
      finally {
        setLoading(false)
      }
    }
    FetchPosts();
  }, []);

  if (loading) return <p className="text-blue-600 text-center mt-10">Loading posts...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

  return (
    <div className="flex flex-col items-center justify-center mt-10 space-y-6 px-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="max-w-3xl w-full p-6 bg-white rounded-2xl shadow-lg border border-slate-200"
        >
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p
            className="text-slate-700 mb-2"
            dangerouslySetInnerHTML={{ __html: post.content.substring(0, 200) + "..." }}
          />
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Read more
          </a>
          <p className="text-sm text-slate-500 mt-2">
            Published: {new Date(post.published).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  )
}

export default IntroPost
