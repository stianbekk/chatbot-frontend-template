export type ChatType = 'intro' | 'customer_service' | 'product_assistant' | 'track_order';

export interface Message {
  isBot: boolean;
  message: string;
  type: 'text' | 'suggestion';
  data?: string[];
}

export interface Conversation {
  messages: Message[];
}