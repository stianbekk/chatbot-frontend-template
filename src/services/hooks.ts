import { useState, useCallback } from 'react';
import * as api from './api';

export function useChat() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const startChat = useCallback(async (languageCode: string) => {
    setLoading(true);
    setError(null);
    try {
      const token = await api.fetchToken();
      const conversation = await api.startConversation(languageCode, true);
      await api.initiateConversation(
        conversation.conversationToken,
        new Date().toISOString()
      );
      return conversation;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to start chat'));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const sendMessage = useCallback(async (data: {
    message: any;
    botType: string;
    conversationToken: string;
    chatHistory?: any[];
  }) => {
    setLoading(true);
    setError(null);
    try {
      return await api.sendMessage(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to send message'));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const trackOrder = useCallback(async (orderNumber: string) => {
    setLoading(true);
    setError(null);
    try {
      return await api.trackOrder(orderNumber);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to track order'));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    startChat,
    sendMessage,
    trackOrder,
  };
}