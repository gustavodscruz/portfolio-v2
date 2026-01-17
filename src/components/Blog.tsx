// src/components/Blog.tsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loadPosts, type Post } from "../utils/load-posts";

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const allPosts = await loadPosts();
      const blogPosts = allPosts.filter((post) => post.type === "post");
      setPosts(blogPosts.slice(0, 3));
    })();
  }, []);

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-center text-blue-900 dark:text-white">
          Artigos e <span className="text-orange-500">Posts</span>
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-12">
          Explorações técnicas e reflexões sobre desenvolvimento
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post.slug}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer h-full flex flex-col"
                onClick={() => navigate(`/post/${post.slug}`)}
              >
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900 dark:text-white line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
                    {truncateText(post.content, 25)}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags && post.tags.length > 0 ? (
                      post.tags.slice(0, 2).map((tag, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-xs font-medium text-gray-700 dark:text-gray-300"
                        >
                          #{tag}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-500 dark:text-gray-400 text-xs">
                        Sem tags
                      </span>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/post/${post.slug}`);
                    }}
                    className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 font-medium transition-colors text-sm"
                  >
                    Ler mais →
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400 py-8 col-span-full">
              Nenhum post publicado ainda.
            </p>
          )}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate("/posts")}
            className="px-6 py-3 border-2 border-blue-800 dark:border-blue-600 text-blue-800 dark:text-blue-400 hover:bg-blue-800 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white font-medium rounded-lg transition-colors inline-flex items-center"
          >
            Ver todos os posts
          </button>
        </div>
      </div>
    </section>
  );
}
