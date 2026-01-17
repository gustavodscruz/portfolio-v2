import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loadPosts, type Post } from "../utils/load-posts";
import { ChevronLeft, ChevronRight } from "lucide-react";

const POSTS_PER_PAGE = 9;

export default function AllPosts() {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const posts = await loadPosts();
        setAllPosts(posts);
      } catch (error) {
        console.error("Erro ao carregar posts:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = allPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <p className="text-gray-700 dark:text-gray-300">Carregando posts...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="mb-8 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium transition-colors flex items-center gap-2"
        >
          <ChevronLeft size={18} />
          Voltar
        </button>

        <h1 className="text-4xl font-bold mb-2 text-blue-900 dark:text-white">
          Todos os <span className="text-orange-500">Posts</span>
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-12">
          {allPosts.length} {allPosts.length === 1 ? "artigo" : "artigos"} no total
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentPosts.map((post) => (
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
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded-lg transition-colors font-medium ${
                    currentPage === page
                      ? "bg-blue-600 text-white"
                      : "border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
