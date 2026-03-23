"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingChat() {
  return (
    <button
      aria-label="Chat with us"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 gradient-orange rounded-full flex items-center justify-center shadow-lg shadow-brand-orange/30 hover:scale-110 transition-transform"
    >
      <MessageCircle size={24} className="text-white" />
    </button>
  );
}
