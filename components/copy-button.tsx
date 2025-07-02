"use client";

import { Copy } from "lucide-react";
import { toast } from "sonner"

export default function CopyEmailButton({ text }: { text: string }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copyed!")
    } catch (err) {
      console.error("复制失败:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
    >
      <Copy className="w-4 h-4" />
    </button>
  );
}
