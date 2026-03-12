type TranslationKey =
  | 'aboutMe'
  | 'portfolio'
  | 'products'
  | 'support'
  | 'contact'
  | 'downloadButton'
  | 'aboutTitle'
  | 'aboutDescription1'
  | 'aboutDescription2'
  | 'aboutDescription3'
  | 'commercialProjects'
  | 'coursesAndPodcasts'
  | 'materialsCount'
  | 'forVideoEditing'
  | 'basic'
  | 'baseTextLine1'
  | 'baseTextLine2'
  | 'faqTitle'
  | 'faqQuestion1'
  | 'faqAnswer1'
  | 'faqQuestion2'
  | 'faqAnswer2'
  | 'technicalSupportTitle'
  | 'technicalSupportText'
  | 'watchTutorial'
  | 'heroTagline'
  | 'whatWeDo'
  | 'serviceVideo'
  | 'serviceVideoDesc'
  | 'service3D'
  | 'service3DDesc'
  | 'serviceBranding'
  | 'serviceBrandingDesc'
  | 'serviceEvents'
  | 'serviceEventsDesc'
  | 'getPresentation'
  | 'serviceVideoShort'
  | 'linkedin'
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
  products: {
    EN: 'PRODUCTS',
    RU: 'ПРОДУКТЫ',
    HE: 'מוצרים',
  },
  support: {
    EN: 'SUPPORT',
    RU: 'ПОДДЕРЖКА',
    HE: 'תמיכה',
  },
  contact: {
    EN: 'CONTACT',
    RU: 'КОНТАКТЫ',
    HE: 'צור קשר',
  },
  downloadButton: {
    EN: 'Download',
    RU: 'Скачать',
    HE: 'הורדה',
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
  materialsCount: {
    EN: '10 GB MATERIALS',
    RU: '10 GB МАТЕРИАЛОВ',
    HE: '10 GB חומרים',
  },
  forVideoEditing: {
    EN: 'FOR VIDEO EDITING',
    RU: 'ДЛЯ ВИДЕОМОНТАЖА',
    HE: 'לעריכת וידאו',
  },
  basic: {
    EN: 'BASIC',
    RU: 'БАЗОВЫЙ',
    HE: 'בסיסי',
  },
  baseTextLine1: {
    EN: 'No useless frills,',
    RU: 'Никаких бесполезных украшений,',
    HE: 'ללא קישוטים מיותרים,',
  },
  baseTextLine2: {
    EN: 'just a strong base.',
    RU: 'только сильная основа.',
    HE: 'רק בסיס חזק.',
  },
  faqTitle: {
    EN: 'FAQ',
    RU: 'ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ',
    HE: 'שאלות נפוצות',
  },
  faqQuestion1: {
    EN: 'How do I download the packs?',
    RU: 'Как скачать пакеты?',
    HE: 'איך אני מוריד את החבילות?',
  },
  faqAnswer1: {
    EN: 'Simply click the download button and follow the instructions. All our packs are hosted on Google Drive for easy access.',
    RU: 'Просто нажмите кнопку скачать и следуйте инструкциям. Все наши пакеты размещены на Google Drive для удобного доступа.',
    HE: 'פשוט לחץ על כפתור ההורדה ועקוב אחר ההוראות. כל החבילות שלנו מאוחסנות ב-Google Drive לגישה נוחה.',
  },
  faqQuestion2: {
    EN: 'Can I use these in commercial projects?',
    RU: 'Можно ли использовать это в коммерческих проектах?',
    HE: 'האם אני יכול להשתמש בזה בפרויקטים מסחריים?',
  },
  faqAnswer2: {
    EN: 'Yes, all our packs are free for both personal and commercial use. No attribution required.',
    RU: 'Да, все наши пакеты бесплатны как для личного, так и для коммерческого использования. Указание авторства не требуется.',
    HE: 'כן, כל החבילות שלנו חינמיות לשימוש אישי ומסחרי כאחד. לא נדרש קרדיט.',
  },
  technicalSupportTitle: {
    EN: 'Technical Support',
    RU: 'Техническая Поддержка',
    HE: 'תמיכה טכנית',
  },
  technicalSupportText: {
    EN: 'Having issues with downloads or need help with the packs? Contact our support team through the contact section below.',
    RU: 'Возникли проблемы со скачиванием или нужна помощь с пакетами? Свяжитесь с нашей службой поддержки через раздел контактов ниже.',
    HE: 'נתקלת בבעיות בהורדה או זקוק לעזרה עם החבילות? צור קשר עם צוות התמיכה שלנו דרך מדור יצירת הקשר למטה.',
  },
  watchTutorial: {
    EN: 'Watch Tutorial',
    RU: 'Смотреть Туториал',
    HE: 'צפה במדריך',
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
  heroTagline: {
    EN: 'Creative Video Production Israel',
    RU: 'Креативное видеопроизводство Израиль',
    HE: 'הפקת וידאו קריאטיבית ישראל',
  },
  whatWeDo: {
    EN: 'What we do',
    RU: 'Что мы делаем',
    HE: 'מה אנחנו עושים',
  },
  serviceVideo: {
    EN: 'Video production and filming ads',
    RU: 'Видеопроизводство и съемка рекламы',
    HE: 'הפקת וידאו וצילום פרסומות',
  },
  serviceVideoDesc: {
    EN: 'We create high-quality video content for commercials, films, and series. Our team brings your vision to life with professional cinematography and post-production.',
    RU: 'Мы создаем высококачественный видеоконтент для коммерческих проектов, фильмов и сериалов. Наша команда воплощает вашу идею в жизнь с помощью профессиональной съемки и постпродакшена.',
    HE: 'אנחנו יוצרים תוכן וידאו באיכות גבוהה לפרסומות, סרטים וסדרות. הצוות שלנו מממשק את החזון שלך לחיים עם קולנוע מקצועי וpost-production.',
  },
  service3D: {
    EN: '3D Animation & Visual Effects',
    RU: '3D Анимация и визуальные эффекты',
    HE: 'אנימציה 3D והשפעות ויזואליות',
  },
  service3DDesc: {
    EN: 'Bring your ideas to life with stunning 3D animations and visual effects. From product visualization to complex motion graphics.',
    RU: 'Воплотите свои идеи в жизнь с помощью потрясающей 3D-анимации и визуальных эффектов. От визуализации продуктов до сложной анимации движения.',
    HE: 'הביאו את הרעיונות שלכם לחיים עם אנימציות 3D מדהימות והשפעות ויזואליות. מהדמיון של מוצר לגרפיקה תנועה מורכבת.',
  },
  serviceBranding: {
    EN: 'Branding & Creative Direction',
    RU: 'Брендинг и творческое направление',
    HE: 'מיתוג וכיוון יצירתי',
  },
  serviceBrandingDesc: {
    EN: 'We develop comprehensive branding strategies and provide creative direction to make your brand stand out in a competitive market.',
    RU: 'Мы разрабатываем комплексные стратегии брендинга и обеспечиваем творческое направление, чтобы ваш бренд выделялся на рынке.',
    HE: 'אנחנו מפתחים אסטרטגיות ברנדינג מקיפות וספקנו כיוון יצירתי כדי שהמותג שלך יתבלט בשוק התחרותי.',
  },
  serviceEvents: {
    EN: 'Event Production & Coverage',
    RU: 'Производство событий и их трансляция',
    HE: 'ייצור ועיצוב אירועים',
  },
  serviceEventsDesc: {
    EN: 'From concept to execution, we handle all aspects of event production including live streaming, photography, and highlight reels.',
    RU: 'От концепции до реализации мы обрабатываем все аспекты производства событий, включая трансляцию в прямом эфире, фотографию и видео-ролики.',
    HE: 'מהקונספט עד ההוצאה לפועל, אנחנו מטפלים בכל היבטי ייצור האירוע כולל שידור חי, צילום וסרטוני הייליט.',
  },
  getPresentation: {
    EN: 'Get Presentation',
    RU: 'Получить презентацию',
    HE: 'קבל הצגה',
  },
  freePackDescription: {
    EN: 'Tools that will help you or your editor. Use with pleasure — it\'s free!',
    RU: 'Инструменты, которые помогут тебе или твоему монтажеру. Пользуйся на здоровье — это бесплатно!',
    HE: 'כלים שיעזרו לך או לעורך שלך. תהנה בשימוש - זה בחינם!',
  },
};