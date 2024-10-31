export interface Button {
  id: string;
  text: string;
  type: string;
  value: string;
}

export interface Message {
  content: string;
  type: string;
  sender: 'bot' | 'user';
  timestamp: string;
}

export interface Link {
  url: string;
  text: string;
  type: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
}

export interface StoreInfo {
  id: string;
  name: string;
  address: string;
  opening_hours: string;
  distance: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export interface AddressInfo {
  name: string;
  street: string;
  postal_code: string;
  city: string;
  country: string;
}

export interface QuickReply {
  text: string;
  value: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  read_time: number;
}

export interface ConversationMessageItem {
  message: Message;
  timestamp: string;
}