import React from "react";

export const Chat = () => {
 // In your Chat tab component
const [messages, setMessages] = useState([]);
const [input, setInput] = useState("");

const sendMessage = async () => {
  const newMessages = [...messages, { role: "user", content: input }];
  setMessages(newMessages);
  setInput("");

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages: newMessages }),
  });

  const data = await res.json();
  setMessages([...newMessages, { role: "assistant", content: data.reply }]);
}; 
  return (
    <div className='flex absolute right-6 bottom-6 rounded-12px border-[1px] border-gray-50'></div>
  );
};
