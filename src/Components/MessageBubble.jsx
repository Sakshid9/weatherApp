import React from 'react';

const MessageBubble = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} my-2`}>
      <div className={`px-4 py-2 rounded-lg max-w-[60%] ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
        {message.text}
      </div>
    </div>
  );
};

export default MessageBubble;
