import React, { useState } from "react";

export const Home = () => {
  const [activeTab, setActiveTab] = useState(ImageAnalysis);
  return (
    <div className='flex p-1 bg-zinc-100 rounded-xl'>
      <button
        onClick={() => setActiveTab("ImageAnalysis")}
        className={`flex-1 py-2 rounded-lg font-medium transition ${activeTab === "cart" ? "bg-red-500 text-white" : "text-zinc-600"}`}
      >
        Image Analysis
      </button>
      <button
        onClick={() => setActiveTab("Ingredientrecognition")}
        className={`flex-1 py-2 rounded-lg font-medium transition ${activeTab === "order" ? "bg-red-500 text-white" : "text-zinc-600"}`}
      >
        Ingredient recognition
      </button>
      <button
        onClick={() => setActiveTab("ImageCreator")}
        className={`flex-1 py-2 rounded-lg font-medium transition ${activeTab === "order" ? "bg-red-500 text-white" : "text-zinc-600"}`}
      >
        Image Creator
      </button>
    </div>
  );
};
