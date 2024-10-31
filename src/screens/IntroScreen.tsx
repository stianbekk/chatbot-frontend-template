import React from 'react';
import { Package, HeadphonesIcon, Box } from 'lucide-react';
import { ChatOption } from '../components/ChatOption';
import { ChatType } from '../types';

interface IntroScreenProps {
  onSelectType: (type: ChatType) => void;
}

export function IntroScreen({ onSelectType }: IntroScreenProps) {
  return (
    <div className="p-4 flex flex-col items-center">
      <div className="text-center mb-8">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-sage-100">
          <img
            src="/images/chatbot-avatar.png"
            alt="Bot avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-semibold text-sage-900 mb-2">
          Hei! Jeg er din digitale assistent
        </h1>
        <p className="text-gray-600 mb-6">
          Hvordan kan jeg hjelpe deg i dag?
        </p>
      </div>

      <div className="w-full max-w-md space-y-3">
        <ChatOption
          icon={<HeadphonesIcon className="w-5 h-5 text-sage-700" />}
          title="Kundeservice"
          description="Hjelp med ordre, levering, medlemskap og mer."
          onClick={() => onSelectType('customer_service')}
        />
        <ChatOption
          icon={<Package className="w-5 h-5 text-sage-700" />}
          title="Produktassistent"
          description="Finn produkter som passer deg."
          onClick={() => onSelectType('product_assistant')}
        />
        <ChatOption
          icon={<Box className="w-5 h-5 text-sage-700" />}
          title="Spor Bestilling"
          description="Sjekk status på din pakke."
          onClick={() => onSelectType('track_order')}
        />
      </div>

      <p className="text-sm text-gray-500 mt-6">
        Unngå å dele sensitiv informasjon
      </p>
    </div>
  );
}