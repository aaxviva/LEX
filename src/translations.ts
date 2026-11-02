type TranslationKey =
  | 'aboutMe'
  | 'portfolio'
  | 'contact'
  | 'downloadButton'
  | 'aboutTitle'
  | 'aboutDescription1'
  | 'aboutDescription2'
  | 'commercialProjects'
  | 'coursesAndPodcasts'
  | 'heroName'
  | 'heroSubtitle'
  | 'heroDetails'
  | 'heroCta'
  | 'whatWeDo'
  | 'serviceVideoShort'
  | 'serviceVideoDesc'
  | 'serviceEvents'
  | 'serviceEventsDesc'
  | 'getPresentation'
  | 'linkedin'
  | 'watchLink'
  | 'freePackDescription';

type Translations = {
  [key in TranslationKey]: {
    EN: string;
    RU: string;
    HE: string;
  };
};

export const translations: Translations = {
  aboutMe: {
    EN: 'ABOUT ME',
    RU: 'ОБО МНЕ',
    HE: 'אודותיי',
  },
  portfolio: {
    EN: 'PORTFOLIO',
    RU: 'ПОРТФОЛИО',
    HE: 'תיק עבודות',
  },
  contact: {
    EN: 'CONTACT',
    RU: 'КОНТАКТЫ',
    HE: 'צור קשר',
  },
  downloadButton: {
    EN: 'Open Derector AI',
    RU: 'Открыть Derector AI',
    HE: 'לפתוח את Derector AI',
  },
  aboutTitle: {
    EN: 'Turn ideas into visual stories',
    RU: 'Превращаю идеи в визуальные истории',
    HE: 'הופך רעיונות לסיפורים חזותיים',
  },
  aboutDescription1: {
    EN: 'My name is Alexey, I am a filmmaker with 6 years of experience. Owner of video production Move Creators. Work with brands, people, and meanings. I take over the whole process: from the concept to the last frame. Love vivid images, vivid emotions and pictures that really work.',
    RU: 'Меня зовут Алексей, я режиссер с 6-летним опытом. Владелец видео продакшна Move Creators. Работаю с брендами, людьми и смыслами. Я беру на себя весь процесс: от концепции до последнего кадра. Люблю яркие образы, живые эмоции и кадры, которые действительно работают.',
    HE: 'שמי אלכסיי, אני במאי עם 6 שנות ניסיון. בעלים של הפקת וידאו Move Creators. עובד עם מותגים, אנשים ומשמעויות. אני לוקח אחריות על כל התהליך: מהקונספט ועד הפריים האחרון. אוהב תמונות חיות, רגשות חיים וצילומים שבאמת עובדים.',
  },
  aboutDescription2: {
    EN: 'They reflect what I live by and what I do best.',
    RU: 'Они отражают то, чем я живу и что умею делать лучше всего.',
    HE: 'הם משקפים את מה שאני חי לפיו ואת מה שאני עושה הכי טוב.',
  },
  commercialProjects: {
    EN: 'COMMERCIAL PROJECTS',
    RU: 'КОММЕРЧЕСКИЕ ПРОЕКТЫ',
    HE: 'פרויקטים מסחריים',
  },
  coursesAndPodcasts: {
    EN: 'COURSES & PODCASTS',
    RU: 'КУРСЫ И ПОДКАСТЫ',
    HE: 'קורסים ופודקאסטים',
  },
  heroName: {
    EN: 'Alexey Viventsov',
    RU: 'Алексей Вивенцов',
    HE: 'אלכסיי ויוונצוב',
  },
  heroSubtitle: {
    EN: 'Video for car dealerships, brands and events in Israel',
    RU: 'Видео для автосалонов, брендов и мероприятий в Израиле',
    HE: 'צילום וידאו לסוכנויות רכב, מותגים ואירועים',
  },
  heroDetails: {
    EN: 'Porsche · Bentley · Podcasts · Events',
    RU: 'Porsche · Bentley · Подкасты · Мероприятия',
    HE: 'Porsche · Bentley · פודקאסטים · אירועים',
  },
  heroCta: {
    EN: 'Write on WhatsApp',
    RU: 'Написать в WhatsApp',
    HE: 'לכתוב בוואטסאפ',
  },
  whatWeDo: {
    EN: 'What I do',
    RU: 'Что я делаю',
    HE: 'מה אני עושה',
  },
  serviceVideoShort: {
    EN: 'Video production and filming ads',
    RU: 'Видеопроизводство и съемка рекламы',
    HE: 'הפקת וידאו וצילום פרסומות',
  },
  linkedin: {
    EN: 'LinkedIn',
    RU: 'LinkedIn',
    HE: 'LinkedIn',
  },
  watchLink: {
    EN: 'Watch →',
    RU: 'Смотреть →',
    HE: '← לצפייה',
  },
  serviceVideoDesc: {
    EN: 'I create high-quality video for commercials, films and series. I bring your vision to life with cinematic filming and post-production, from the first idea to the final cut.',
    RU: 'Я создаю высококачественное видео для рекламы, фильмов и сериалов. Я воплощаю вашу идею в жизнь с помощью кинематографической съемки и постпродакшена, от первой идеи до финального монтажа.',
    HE: 'אני יוצר תוכן וידאו באיכות גבוהה לפרסומות, סרטים וסדרות. אני מממש את החזון שלך עם צילום קולנועי ופוסט-פרודקשן, מהרעיון הראשון ועד הגרסה הסופית.',
  },
  serviceEvents: {
    EN: 'Event Production & Coverage',
    RU: 'Производство событий и их трансляция',
    HE: 'ייצור ועיצוב אירועים',
  },
  serviceEventsDesc: {
    EN: 'From concept to execution, I handle every part of event production, including live streaming, photography and highlight reels.',
    RU: 'От концепции до реализации я веду все части производства мероприятий, включая трансляцию в прямом эфире, фотографию и хайлайт-ролики.',
    HE: 'מהקונספט ועד הביצוע, אני מטפל בכל היבטי הפקת האירוע, כולל שידור חי, צילום וסרטוני הייליט.',
  },
  getPresentation: {
    EN: 'Get Presentation',
    RU: 'Получить презентацию',
    HE: 'קבל הצגה',
  },
  freePackDescription: {
    EN: 'My AI platform that turns one car photo into a cinematic ad video.',
    RU: 'Моя AI-платформа, которая превращает одно фото машины в кинематографичный рекламный ролик.',
    HE: 'פלטפורמת ה-AI שלי שהופכת תמונה אחת של רכב לסרטון פרסומת קולנועי.',
  },
};
