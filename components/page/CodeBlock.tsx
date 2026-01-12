"use client";

import { createHighlighter, type Highlighter } from "shiki";
import { useEffect, useState } from "react";

type CodeBlockProps = {
  code: string;
  language: string;
  theme?: string;
  height?: string;
};

let highlighter: Highlighter | null = null;

async function initHighlighter(theme: string) {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: [theme],
      langs: [
        "javascript",
        "typescript",
        "tsx",
        "json",
        "bash",
        "css",
        "html",
        "python",
        "sql"
      ],
    });
  }
  return highlighter;
}

export default function CodeBlock({
  code,
  language,
  theme = "github-dark",
  height = "h-auto"
}: CodeBlockProps) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    let mounted = true;

    initHighlighter(theme).then((hl) => {
      if (!mounted) return;
      setHtml(
        hl.codeToHtml(code, {
          lang: language,
          theme,
        })
      );
    });

    return () => {
      mounted = false;
    };
  }, [code, language, theme]);

  return (
    <div className={height + " w-full relative overflow-hidden rounded-md bg-[#0d1117]"}>
      <div
        className="code-container w-full h-full overflow-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
