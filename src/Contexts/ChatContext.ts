import React from "react";

interface ChatContextType {
  prompts: string[];
  setPrompts: React.Dispatch<React.SetStateAction<string[]>>;
  responses: string[];
  setResponses: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ChatContext = React.createContext<ChatContextType>({
  prompts: [],
  setPrompts: () => {},
  responses: [],
  setResponses: () => {},
});