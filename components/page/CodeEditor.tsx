"use client";

import { useState } from "react";
import Editor, { Monaco } from "@monaco-editor/react";

type MonacoEditorProps = {
  value: string;
  language?: "javascript" | "typescript" | "html" | "css" | "python" | "json" | "sql";
  onChange?: (code: string) => void;
  height?: string;
};

export default function MonacoEditor({
  value,
  language = "javascript",
  onChange,
  height = "400px",
}: MonacoEditorProps) {
  const handleEditorChange = (value?: string) => {
    if (value && onChange) onChange(value);
  };

  return (
    <Editor
      height={height}
      defaultLanguage={language}
      defaultValue={value}
      onChange={handleEditorChange}
      theme="vs-dark"
      options={{
        automaticLayout: true, // se ajusta al contenedor
        fontSize: 14,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
      }}
    />
  );
}
