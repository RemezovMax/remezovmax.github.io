const tg = window.Telegram.WebApp;

export const initTelegram = () => {
  tg.expand();
  tg.ready();
};

export const getUserData = () => {
  return tg.initDataUnsafe.user;
};