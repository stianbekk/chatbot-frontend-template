import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ExitDialogProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export function ExitDialog({ onConfirm, onCancel }: ExitDialogProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-sm w-full p-6">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-sage-700" />
          <h2 className="text-xl font-semibold text-gray-900">Avslutt samtale</h2>
        </div>
        <p className="text-gray-600 mb-6">
          Er du sikker på at du vil avslutte samtalen? All fremgang vil gå tapt.
        </p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2 border border-sage-500 text-sage-700 rounded-lg hover:bg-sage-50 transition-colors"
          >
            Tilbake til samtalen
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors"
          >
            Avslutt
          </button>
        </div>
      </div>
    </div>
  );
}