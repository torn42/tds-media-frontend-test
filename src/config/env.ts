export const ENV = {
  API_BASE_URL: import.meta.env.VITE_API_URL,
  APP_TITLE: import.meta.env.VITE_APP_TITLE,
} as const;

if (!import.meta.env.VITE_API_URL) {
  console.warn('Внимание: VITE_API_URL не задан!');
}
