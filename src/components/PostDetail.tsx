import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadPosts, type Post } from "../utils/load-posts";
import { ChevronLeft } from "lucide-react";

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const allPosts = await loadPosts();
        const found = allPosts.find((p) => p.slug === slug);
        if (found) {
          setPost(found);
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Erro ao carregar post:", error);
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <p className="text-gray-700 dark:text-gray-300">Carregando...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <p className="text-gray-700 dark:text-gray-300">Post não encontrado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <button
          onClick={() => navigate("/")}
          className="mb-8 inline-flex items-center justify-center gap-2 px-3 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium transition-colors"
        >
          <ChevronLeft size={18} />
          Voltar
        </button>

        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-4 text-blue-900 dark:text-white">
            {post.title}
          </h1>

          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          )}

          {post.tags && post.tags.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-md text-xs font-medium text-gray-700 dark:text-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {post.technologies && post.technologies.length > 0 && (
            <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-200 mb-2">
                Tecnologias
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-800 px-3 py-1 rounded text-sm text-blue-900 dark:text-blue-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="prose dark:prose-invert max-w-none mb-8">
            <div
              dangerouslySetInnerHTML={{ __html: post.htmlContent }}
              className="text-gray-700 dark:text-gray-300 leading-relaxed"
            />
          </div>

          <div className="flex gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
            {post.githubLink && (
              <a
                href={post.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
              >
                GitHub
              </a>
            )}
            {post.liveLink && (
              <a
                href={post.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                Ver ao vivo
              </a>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
