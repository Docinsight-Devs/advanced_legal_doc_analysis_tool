"use client";
import React, { useState } from "react";

function Questions() {
  const [chatField, setChatField] = useState(false);

  return (
    <div className="max-w-[80%] mx-auto space-y-10">
      {chatField && (
        <div className="w-full">
          <h1>Chat Field</h1>
        </div>
      )}
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Ask Question"
          className="px-2 py-3 flex-1 w-full border border-gray-500 rounded-md outline-none"
        />
        <button
          onClick={() => setChatField(true)}
          className="bg-[#525672] w-full text-white rounded-md px-2 py-3"
        >
          Submit
        </button>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Chat Log Title"
            className="border border-gray-500 outline-none p-2 rounded-md"
          />
          <button className="p-2 bg-[#525672] text-white rounded-md">
            Save Chat Log
          </button>
        </div>
      </div>
    </div>
  );
}

export default Questions;