export type Message = {
  isBot: boolean;
  message: string;
  type?: 'text' | 'link' | 'product' | 'article' | 'store' | 'suggestion';
  data?: any;
};

export type ChatType = 'intro' | 'customer_service' | 'product_assistant' | 'track_order';

export type Conversation = {
  messages: Message[];
};