import type { Language } from '../translations';

const WHATSAPP_PHONE = '972542489940';

const messages: Record<Language, string> = {
  EN: 'Hi Alexey, saw your site. Want to ask about a video',
  RU: 'Привет! Увидел ваш сайт, хочу спросить про съёмку',
  HE: 'היי, ראיתי את האתר שלך ורציתי לשאול על צילום',
};

const isMobile = (): boolean =>
  /iPhone|iPad|iPod|Android|Windows Phone|Mobile/i.test(navigator.userAgent);

export function openWhatsApp(lang: Language): void {
  const text = encodeURIComponent(messages[lang]);
  const waLink = `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
  const appLink = `whatsapp://send?phone=${WHATSAPP_PHONE}&text=${text}`;
  const webLink = `https://web.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${text}`;

  if (isMobile()) {
    const start = Date.now();
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') {
        window.removeEventListener('visibilitychange', onVisibility);
      }
    };
    window.addEventListener('visibilitychange', onVisibility);
    window.location.href = appLink;
    setTimeout(() => {
      window.removeEventListener('visibilitychange', onVisibility);
      if (Date.now() - start < 2000 && document.visibilityState !== 'hidden') {
        window.location.href = waLink;
      }
    }, 1500);
  } else {
    window.open(webLink, '_blank', 'noopener,noreferrer');
  }
}
