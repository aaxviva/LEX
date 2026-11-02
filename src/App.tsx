import React, { useEffect, useRef, useState } from 'react';
import { Menu as MenuIcon, MessageCircle, ArrowDownRight, ArrowDown } from 'lucide-react';
import { Menu, Transition } from '@headlessui/react';
import { translations } from './translations';
import ReelsCarousel from './components/ReelsCarousel';

type Language = 'EN' | 'RU' | 'HE';

const menuItems = [
  { href: '#portfolio', key: 'portfolio' },
  { href: '#about', key: 'aboutMe' },
  { href: '#contact', key: 'contact' },
] as const;

function App() {
  const [currentLang, setCurrentLang] = useState<Language>('EN');
  const [navOnDark, setNavOnDark] = useState(true);
  const heroRef = useRef<HTMLElement>(null);

  const languages: Language[] = ['EN', 'RU', 'HE'];
  const isRtl = currentLang === 'HE';

  const t = (key: keyof typeof translations) => translations[key][currentLang];

  useEffect(() => {
    const updateNavTone = () => {
      const hero = heroRef.current;
      if (!hero) return;
      setNavOnDark(hero.getBoundingClientRect().bottom > 80);
    };
    updateNavTone();
    window.addEventListener('scroll', updateNavTone, { passive: true });
    window.addEventListener('resize', updateNavTone);
    return () => {
      window.removeEventListener('scroll', updateNavTone);
      window.removeEventListener('resize', updateNavTone);
    };
  }, []);

  const navTone = navOnDark
    ? { text: 'text-white', hover: 'hover:bg-white/10', active: 'bg-white text-black' }
    : { text: 'text-ink', hover: 'hover:bg-black/5', active: 'bg-ink text-white' };

  const services = [
    { title: t('serviceVideoShort'), description: t('serviceVideoDesc') },
    { title: t('serviceEvents'), description: t('serviceEventsDesc') },
  ];

  return (
    <div className="min-h-screen bg-white text-ink font-heebo" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/+972542489940"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-4 bottom-4 z-30 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Navigation */}
      <nav className={`fixed top-0 ${isRtl ? 'left-0' : 'right-0'} z-20 p-4 md:p-6 flex items-center gap-2 md:gap-4 ${navTone.text}`}>
        {/* Language Switcher */}
        <div className="flex gap-1 md:gap-2 mr-1 md:mr-2">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setCurrentLang(lang)}
                className={`px-2 py-1 text-xs md:text-sm font-medium rounded transition-colors ${
                  currentLang === lang ? navTone.active : navTone.hover
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <Menu as="div" className="relative">
            {({ open }) => (
              <>
                <Menu.Button className={`p-2 md:p-3 ${navTone.hover} rounded-full transition-colors`}>
                  <MenuIcon className="w-6 h-6 md:w-8 md:h-8" />
                </Menu.Button>

                <Transition
                  enter="transition duration-200 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-150 ease-in"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Menu.Items className={`absolute ${isRtl ? 'left-0' : 'right-0'} mt-3 w-60 md:w-72 focus:outline-none`}>
                    <div className="p-2 space-y-1 rounded-2xl bg-white border border-line shadow-xl">
                      {menuItems.map((item) => (
                        <Menu.Item key={item.href}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={`${
                                active ? 'bg-surface' : ''
                              } flex items-center px-4 md:px-5 py-2 md:py-3 rounded-xl text-xl md:text-2xl font-medium text-ink transition-colors hover:bg-surface`}
                            >
                              {t(item.key)}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>

                {/* Dim Overlay */}
                <Transition
                  show={open}
                  enter="transition-opacity duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  className="fixed inset-0 bg-black/30 z-[-1]"
                />
              </>
            )}
          </Menu>
      </nav>

      {/* Hero Section with Background Video */}
      <section ref={heroRef} className="relative flex items-end w-full min-h-[70vh] md:min-h-0 md:aspect-[1920/720] bg-black overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://videos.derectorai.space/SH_gif.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
        <div
          dir={isRtl ? 'rtl' : 'ltr'}
          className="relative z-10 w-full max-w-3xl p-6 sm:p-8 md:p-16 pb-12 md:pb-20 text-start text-white"
        >
          <h1 className="font-benzin text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight md:max-w-[50vw]">
            {t('heroName')}
          </h1>
          <p className="mt-3 text-lg sm:text-xl md:text-2xl font-light text-white/90 leading-relaxed">
            {t('heroSubtitle')}
          </p>
          <p className="mt-2 text-sm md:text-base tracking-wide text-white/70">
            {t('heroDetails')}
          </p>
          <a
            href="https://wa.me/972542489940"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center bg-black text-white px-7 py-3 md:px-8 md:py-3.5 text-sm md:text-base font-medium rounded-full ring-1 ring-white/30 hover:bg-neutral-800 transition-colors duration-300"
          >
            {t('heroCta')}
          </a>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 md:px-12 py-16 sm:py-20">
        <div className="max-w-7xl w-full">
          <h2 className="font-benzin text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] text-ink mb-12 sm:mb-14 md:mb-16 text-center">
            {t('whatWeDo')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-10 sm:mb-12">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-surface border border-line p-6 sm:p-8 md:p-10 rounded-2xl transition-shadow duration-300 hover:shadow-lg"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-ink">{service.title}</h3>
                <p className="text-muted text-sm sm:text-base md:text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 sm:mt-10">
            <a
              href="https://drive.google.com/file/d/1qKn1SJcZhVaAIpWENmkufL_K-Jn0woD8/preview?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium bg-ink text-white rounded-full hover:bg-black transition-all duration-300"
            >
              {t('getPresentation')}
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-benzin text-ink mb-8 md:mb-12">{t('portfolio')}</h2>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-12">
            <div className="space-y-4">
              <a
                href="https://youtube.com/playlist?list=PLRttVmO8EcgT36kuCOX8o8_JPRrcSbYUI&si=tUeJQNQLQ3hRfo6g"
                target="_blank"
                rel="noopener noreferrer"
                className="block transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src="https://i.postimg.cc/5NF9bJgt/2024-01-18-16-03-00.jpg"
                  alt="Portfolio 1"
                  className="w-full aspect-video object-cover"
                />
              </a>
              <h3 className="text-xl md:text-2xl font-benzin text-ink">{t('commercialProjects')}</h3>
            </div>
            <div className="space-y-4">
              <a
                href="https://youtu.be/elBzUkUIkvA"
                target="_blank"
                rel="noopener noreferrer"
                className="block transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src="https://i.postimg.cc/3w4SSKHg/IMG-0675.jpg"
                  alt="Portfolio 2"
                  className="w-full aspect-video object-cover"
                />
              </a>
              <h3 className="text-xl md:text-2xl font-benzin text-ink">{t('coursesAndPodcasts')}</h3>
            </div>
          </div>
        </div>
      </section>

      <ReelsCarousel />

      <section id="about" className="min-h-screen bg-surface flex items-center justify-center px-6 md:px-8 py-20">
        <div className="max-w-5xl w-full">
          <h2 className="text-4xl md:text-5xl font-benzin text-ink mb-8 md:mb-12">{t('aboutMe')}</h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${isRtl ? 'md:grid-flow-col-reverse' : ''}`}>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg font-heebo text-muted">
              <p className="text-xl md:text-2xl font-medium text-ink mb-6 md:mb-8">{t('aboutTitle')}</p>
              <p>{t('aboutDescription1')}</p>
              <p>{t('aboutDescription2')}</p>
            </div>
            <div className={`flex ${isRtl ? 'justify-start' : 'justify-end'}`}>
              <img
                src="https://i.postimg.cc/kGhFfT4b/IMG-8326.jpg"
                alt="Photo"
                className="w-full max-w-sm rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Derector AI Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20 pb-16 bg-black">
        <div className="absolute inset-0">
          <img
            src="https://i.postimg.cc/P5v4Qq3g/my-saite-1-1-1.png"
            alt="Background"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="relative z-10 w-full max-w-5xl">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${isRtl ? 'md:grid-flow-col-reverse' : ''}`}>
            {/* Folder & Download Section */}
            <div className="flex flex-col items-center gap-8 md:gap-10">
              <div className="w-[160px] h-[128px] md:w-[220px] md:h-[176px] relative">
                <img
                  src="https://videos.derectorai.space/folder-green.png"
                  alt="Pack Folder"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
              <div className="flex flex-col items-center gap-3">
                <h1 className="text-2xl md:text-5xl font-benzin tracking-wider text-white">
                  Derector AI
                </h1>
                <a
                  href="https://derectorai.space"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-ink text-white px-6 py-2 md:px-8 md:py-3 text-sm md:text-base rounded-full hover:bg-black transition-all duration-300 tracking-wider whitespace-nowrap"
                >
                  {t('downloadButton')}
                </a>
              </div>
            </div>

            {/* Text Section with Arrow */}
            <div className={`flex flex-col md:flex-row md:items-start items-center gap-4 md:gap-6 text-center md:text-start ${isRtl ? 'md:flex-row-reverse' : ''}`}>
              <ArrowDownRight className={`hidden md:block w-8 h-8 md:w-10 md:h-10 text-white flex-shrink-0 mt-2 ${isRtl ? 'scale-x-[-1]' : ''}`} />
              <p className="text-base md:text-lg leading-relaxed text-white">
                {t('freePackDescription')}
              </p>
              <ArrowDown className="md:hidden w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen bg-surface flex items-center justify-center px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 pb-16">
        <div className="max-w-4xl w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-benzin text-ink mb-8 sm:mb-10 md:mb-12">{t('contact')}</h2>
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            <a
              href="https://wa.me/+972542489940"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink text-sm sm:text-base md:text-lg underline-offset-4 hover:underline transition-colors w-fit"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/lexviven?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink text-sm sm:text-base md:text-lg underline-offset-4 hover:underline transition-colors w-fit"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/alexey-viventsov-58749a23b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink text-sm sm:text-base md:text-lg underline-offset-4 hover:underline transition-colors w-fit"
            >
              {t('linkedin')}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
