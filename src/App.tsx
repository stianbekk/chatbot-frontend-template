import React, { useState } from 'react';
import { Header } from './components/Header';
import { IntroScreen } from './screens/IntroScreen';
import { ChatScreen } from './screens/ChatScreen';
import { TrackOrderScreen } from './screens/TrackOrderScreen';
import { MenuScreen } from './screens/MenuScreen';
import { ExitDialog } from './components/ExitDialog';
import { ChatType, Conversation, Message } from './types';

const initialSuggestions = {
  customer_service: [
    'Hvordan returnerer jeg en vare?',
    'Hvor er min bestilling?',
    'Hvordan blir jeg medlem?'
  ],
  product_assistant: [
    'Jeg trenger produktanbefalinger',
    'Hvilke produkter er på tilbud?',
    'Hjelp til å velge riktig størrelse'
  ]
};

function App() {
  const [chatType, setChatType] = useState<ChatType>('intro');
  const [showMenu, setShowMenu] = useState(false);
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [conversations, setConversations] = useState<Record<string, Conversation>>({
    customer_service: {
      messages: [
        { 
          isBot: true, 
          message: 'Velkommen til kundeservice! Hvordan kan jeg hjelpe deg?',
          type: 'text'
        },
        {
          isBot: true,
          type: 'suggestion',
          data: initialSuggestions.customer_service,
          message: ''
        }
      ]
    },
    product_assistant: {
      messages: [
        { 
          isBot: true, 
          message: 'Hei! Jeg er din produktassistent. Hvilke produkter er du interessert i?',
          type: 'text'
        },
        {
          isBot: true,
          type: 'suggestion',
          data: initialSuggestions.product_assistant,
          message: ''
        }
      ]
    }
  });

  const handleBack = () => {
    setChatType('intro');
  };

  const handleMenuClick = () => {
    setShowMenu(true);
  };

  const handleExitClick = () => {
    setShowExitDialog(true);
  };

  const handleRefresh = () => {
    if (chatType === 'customer_service' || chatType === 'product_assistant') {
      setConversations(prev => ({
        ...prev,
        [chatType]: {
          messages: [
            { 
              isBot: true, 
              message: chatType === 'customer_service' 
                ? 'Velkommen til kundeservice! Hvordan kan jeg hjelpe deg?' 
                : 'Hei! Jeg er din produktassistent. Hvilke produkter er du interessert i?',
              type: 'text'
            },
            {
              isBot: true,
              type: 'suggestion',
              data: initialSuggestions[chatType],
              message: ''
            }
          ]
        }
      }));
    }
  };

  const handleMenuAction = (action: string) => {
    switch (action) {
      case 'new':
        handleRefresh();
        break;
      case 'delete':
        if (chatType !== 'intro') {
          setConversations(prev => ({
            ...prev,
            [chatType]: { messages: [] }
          }));
        }
        break;
      case 'download':
        if (chatType !== 'intro') {
          const conversation = conversations[chatType];
          const text = conversation.messages
            .map(msg => `${msg.isBot ? 'Bot' : 'You'}: ${msg.message}`)
            .join('\n');
          const blob = new Blob([text], { type: 'text/plain' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `chat-${new Date().toISOString()}.txt`;
          a.click();
          URL.revokeObjectURL(url);
        }
        break;
    }
    setShowMenu(false);
  };

  const handleSend = (message: string) => {
    if (chatType === 'customer_service' || chatType === 'product_assistant') {
      const updatedConversation = {
        messages: [
          ...conversations[chatType].messages,
          { isBot: false, message, type: 'text' } as Message,
          { isBot: true, message: getBotResponse(chatType), type: 'text' } as Message
        ]
      };

      setConversations({
        ...conversations,
        [chatType]: updatedConversation
      });
    }
  };

  const handleSuggestionClick = (text: string) => {
    handleSend(text);
  };

  const getBotResponse = (type: ChatType) => {
    if (type === 'customer_service') {
      return 'Jeg skal hjelpe deg med kundeservice-henvendelsen din.';
    }
    return 'La meg hjelpe deg med å finne riktig produkt.';
  };

  const renderScreen = () => {
    if (showMenu) {
      return <MenuScreen onAction={handleMenuAction} />;
    }

    switch (chatType) {
      case 'customer_service':
      case 'product_assistant':
        return (
          <ChatScreen
            messages={conversations[chatType].messages}
            onSend={handleSend}
            onSuggestionClick={handleSuggestionClick}
          />
        );
      case 'track_order':
        return <TrackOrderScreen />;
      default:
        return <IntroScreen onSelectType={setChatType} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-md h-[600px] mx-auto bg-white flex flex-col shadow-xl rounded-lg overflow-hidden">
        <Header
          chatType={chatType}
          onBack={chatType !== 'intro' ? handleBack : undefined}
          onMenu={handleMenuClick}
          onExit={handleExitClick}
          onRefresh={handleRefresh}
        />
        {renderScreen()}
        {showExitDialog && (
          <ExitDialog
            onConfirm={() => {
              setShowExitDialog(false);
              setChatType('intro');
            }}
            onCancel={() => setShowExitDialog(false)}
          />
        )}
      </div>
    </div>
  );
}

export default App;