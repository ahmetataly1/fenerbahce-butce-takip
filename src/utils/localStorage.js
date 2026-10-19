// LocalStorage veri saklama yardımcıları
import { INITIAL_TRANSACTIONS } from '../data/initialData';

const STORAGE_KEY = 'fb_budget_transactions_v1';

export const loadTransactions = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      // İlk kez açılıyorsa varsayılan verileri kaydet ve dön
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_TRANSACTIONS));
      return INITIAL_TRANSACTIONS;
    }
    return JSON.parse(data);
  } catch (error) {
    console.error('LocalStorage okuma hatası:', error);
    return INITIAL_TRANSACTIONS;
  }
};

export const saveTransactions = (transactions) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  } catch (error) {
    console.error('LocalStorage yazma hatası:', error);
  }
};

export const resetToDefaultTransactions = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_TRANSACTIONS));
  return INITIAL_TRANSACTIONS;
};
