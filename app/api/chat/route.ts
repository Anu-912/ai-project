// ap
import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY! });

export async function POST(req: NextRequest) {
  const { messages } = await req.json();


  const history = messages.slice(0, -1).map((msg: { role: string; content: string }) => ({
    role: msg.role === "assistant" ? "model" : "user",
    parts: [{ text: msg.content }],
  }));

  const lastMessage = messages[messages.length - 1].content;

  const chat = ai.chats.create({
    model: "gemini-flash-latest",
    history,
  });

  const response = await chat.sendMessage({ message: lastMessage });

  return NextResponse.json({ reply: response.text });
}
