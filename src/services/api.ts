import { API_CONFIG, ENDPOINTS } from './config';

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const url = `${API_CONFIG.BASE_URL}${endpoint}`;
  const token = localStorage.getItem('auth_token');

  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  const response = await fetch(url, { ...options, headers });

  if (!response.ok) {
    throw new ApiError(response.status, await response.text());
  }

  return response.json();
}

export async function fetchToken() {
  const body = `username=${encodeURIComponent(API_CONFIG.LOGIN_USERNAME)}&password=${encodeURIComponent(API_CONFIG.LOGIN_PASSWORD)}`;
  return apiRequest(ENDPOINTS.AUTH, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
}

export async function startConversation(languageCode: string, shouldGreet: boolean) {
  return apiRequest(ENDPOINTS.START_CONVERSATION, {
    method: 'POST',
    body: JSON.stringify({ languageCode, shouldGreet }),
  });
}

export async function initiateConversation(conversationToken: string, startTime: string) {
  return apiRequest(ENDPOINTS.INITIATE_CONVERSATION, {
    method: 'POST',
    body: JSON.stringify({ conversationToken, startTime }),
  });
}

export async function sendMessage(data: {
  message: any;
  botType: string;
  conversationToken: string;
  chatHistory?: any[];
}) {
  return apiRequest(ENDPOINTS.SEND_MESSAGE, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function handleButtonClick(conversationToken: string, button: any) {
  return apiRequest(ENDPOINTS.BUTTON_CLICK, {
    method: 'POST',
    body: JSON.stringify({ conversationToken, button }),
  });
}

export async function getClosestStore(latitude: number, longitude: number) {
  return apiRequest(ENDPOINTS.CLOSEST_STORE, {
    method: 'POST',
    body: JSON.stringify({ user_latitude: latitude, user_longitude: longitude }),
  });
}

export async function getRelevantArticles(products: any[]) {
  return apiRequest(ENDPOINTS.RELEVANT_ARTICLES, {
    method: 'POST',
    body: JSON.stringify({ products }),
  });
}

export async function trackOrder(orderNumber: string) {
  return apiRequest(ENDPOINTS.TRACK_ORDER, {
    method: 'POST',
    body: JSON.stringify({ order_number: orderNumber }),
  });
}

export async function storeConversation(data: {
  conversation: any[];
  conversation_token: string;
  chat_type: string;
  start_time: string;
}) {
  return apiRequest(ENDPOINTS.STORE_CONVERSATION, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function sendFeedback(feedback: boolean, conversationToken: string) {
  return apiRequest(ENDPOINTS.FEEDBACK, {
    method: 'POST',
    body: JSON.stringify({ feedback, conversation_token: conversationToken }),
  });
}

export async function sendMail(data: {
  name: string;
  email: string;
  message: string;
  attachments?: any[];
}) {
  return apiRequest(ENDPOINTS.SEND_MAIL, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}