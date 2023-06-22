// ConversationContext.tsx
import React, { createContext, useState } from 'react';

interface ConversationContextType {
  selectedConversation: number | null;
  selectConversation: (conversationId: number ) => void;
}

export const ConversationContext = createContext<ConversationContextType>({
  selectedConversation: null,
  selectConversation: () => {},
});

export const ConversationProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null);

  const selectConversation = (conversationId: number) => {
    setSelectedConversation(conversationId);
  };

  return (
    <ConversationContext.Provider value={{ selectedConversation, selectConversation }}>
      {children}
    </ConversationContext.Provider>
  );
}