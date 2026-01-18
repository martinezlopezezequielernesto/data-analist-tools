"use client"
import Input from "@/components/forms/Input";
import PageContainer from "@/components/main/PageContainer";
import Button from "@/components/page/Button";
import { useState } from "react";

export default function Page() {
  const [id, setId] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id.trim()) return;
    const url = `https://docs.google.com/spreadsheets/d/${id}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <PageContainer>
      <form onSubmit={handleSubmit} className="w-full p-8 flex flex-col gap-8 rounded-xl border-2 border-neutral-300 dark:border-neutral-700">
        <Input value={id} placeholder="Ingrese el id de la Sheet" onChange={setId}/>
        <Button for_type="submit" title="Buscar Sheet"/>
      </form>
    </PageContainer>
  );
}