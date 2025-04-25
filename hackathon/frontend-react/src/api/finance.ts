import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000' // Your FastAPI backend
});

export const addManualExpense = (data: any) => API.post('/manual-expense', data);
export const getSummary = (userId: string) => API.get(`/summary`, { params: { user_id: userId } });
export const chatWithBot = (data: { user_id: string; question: string }) => API.post('/chat', data);
