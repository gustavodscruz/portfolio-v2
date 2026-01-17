import { marked } from "marked";

interface FrontMatter {
  title?: string;
  tags?: string[];
  type?: string;
  description?: string;
  technologies?: string[];
  image?: string;
  githubLink?: string;
  liveLink?: string;
}

export interface Post {
  slug: string;
  title: string;
  content: string;
  htmlContent: string;
  tags: string[];
  type: "post" | "project";
  description?: string;
  technologies?: string[];
  image?: string;
  githubLink?: string;
  liveLink?: string;
}

const parseFrontMatter = (
  raw: string
): { frontMatter: FrontMatter; content: string } => {
  const frontMatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = raw.match(frontMatterRegex);

  if (!match) {
    return { frontMatter: {}, content: raw };
  }

  const [, frontMatterStr, content] = match;
  const frontMatter: FrontMatter = {};

  // Parse simples do YAML
  const lines = frontMatterStr.split("\n");
  let currentKey = "";
  let currentArray: string[] = [];

  for (const line of lines) {
    if (line.startsWith("  - ")) {
      // Itens de array
      const item = line.replace("  - ", "").trim();
      if (currentKey === "tags") {
        currentArray.push(item);
      } else if (currentKey === "technologies") {
        currentArray.push(item);
      }
    } else if (line.includes(":")) {
      // Salvar array anterior se houver
      if (currentKey && currentArray.length > 0) {
        if (currentKey === "tags") {
          frontMatter.tags = currentArray;
        } else if (currentKey === "technologies") {
          frontMatter.technologies = currentArray;
        }
        currentArray = [];
      }

      const colonIndex = line.indexOf(":");
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();

      switch (key) {
        case "title":
          frontMatter.title = value;
          currentKey = "";
          break;
        case "type":
          frontMatter.type = value as "post" | "project";
          currentKey = "";
          break;
        case "description":
          frontMatter.description = value;
          currentKey = "";
          break;
        case "image":
          frontMatter.image = value;
          currentKey = "";
          break;
        case "githubLink":
          frontMatter.githubLink = value;
          currentKey = "";
          break;
        case "liveLink":
          frontMatter.liveLink = value;
          currentKey = "";
          break;
        case "tags":
          currentKey = "tags";
          break;
        case "technologies":
          currentKey = "technologies";
          break;
      }
    }
  }

  // Salvar último array se houver
  if (currentKey && currentArray.length > 0) {
    if (currentKey === "tags") {
      frontMatter.tags = currentArray;
    } else if (currentKey === "technologies") {
      frontMatter.technologies = currentArray;
    }
  }

  return { frontMatter, content: content.trim() };
};

const loadPosts = async (): Promise<Post[]> => {
  const postModules = import.meta.glob("../posts/*.md", {
    eager: true,
    query: "?raw",
    import: "default",
  });

  const loadedPosts = Object.entries(postModules).map(([path, raw]) => {
    const { frontMatter, content } = parseFrontMatter(raw as string);
    const slug = path
      .replace(/^.*\/posts\//, "")
      .replace(".md", "");

    // Converter markdown para HTML
    const htmlContent = marked(content) as string;

    return {
      slug,
      title: frontMatter.title || slug,
      content,
      htmlContent,
      tags: frontMatter.tags || [],
      type: frontMatter.type || "post",
      description: frontMatter.description,
      technologies: frontMatter.technologies,
      image: frontMatter.image,
      githubLink: frontMatter.githubLink,
      liveLink: frontMatter.liveLink,
    };
  });

  return loadedPosts;
};

export { loadPosts };
