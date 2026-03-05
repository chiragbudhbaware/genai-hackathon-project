import React from "react";

export default function Chat() {
  return (
    <div className="flex justify-center mt-20">

      <div className="w-[700px] bg-black/40 rounded-xl p-6 text-white">

        <div className="h-[350px] overflow-y-auto mb-6">

          <div className="mb-4">
            <p className="text-purple-400">You:</p>
            <p>What is TCP handshake?</p>
          </div>

          <div>
            <p className="text-green-400">AI:</p>
            <p>
              TCP handshake consists of three steps:
              SYN → SYN-ACK → ACK
            </p>

            <p className="text-gray-400 text-sm mt-2">
              Source: Page 3
            </p>
          </div>

        </div>

        <div className="flex gap-4">

          <input
            className="flex-1 bg-black border border-gray-600 rounded-lg px-4 py-2"
            placeholder="Ask a question..."
          />

          <button className="bg-purple-600 px-4 rounded-lg">
            Send
          </button>

        </div>

      </div>

    </div>
  );
}