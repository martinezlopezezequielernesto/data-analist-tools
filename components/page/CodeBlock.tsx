"use client";

import { createHighlighter, type Highlighter } from "shiki";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type CodeBlockProps = {
  code: string;
  language: string;
  height?: string;
};

let highlighter: Highlighter | null = null;

async function initHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ["github-dark", "github-light"],
      langs: [
        "javascript",
        "typescript",
        "tsx",
        "json",
        "bash",
        "css",
        "html",
        "python",
        "sql",
      ],
    });
  }
  return highlighter;
}

export default function CodeBlock({
  code,
  language,
  height = "h-auto",
}: CodeBlockProps) {
  const [html, setHtml] = useState("");
  const { theme: ThemeApp } = useTheme();

  useEffect(() => {
    let mounted = true;

    initHighlighter().then((hl) => {
      if (!mounted) return;

      const shikiTheme =
        ThemeApp === "dark" ? "github-dark" : "github-light";

      setHtml(
        hl.codeToHtml(code, {
          lang: language,
          theme: shikiTheme,
        })
      );
    });

    return () => {
      mounted = false;
    };
  }, [code, language, ThemeApp]);

  return (
    <div
      className={
        height +
        " w-full relative overflow-hidden border-2 rounded-md border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800/75 "
      }
    >
      <div
        className="code-container w-full h-full overflow-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
