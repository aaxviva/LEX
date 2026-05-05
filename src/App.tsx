import React, { useState } from 'react';
import { Menu as MenuIcon, MessageCircle, X, ArrowDownRight, ArrowDown } from 'lucide-react';
import { Menu, Transition } from '@headlessui/react';
import { translations } from './translations';
import ReelsCarousel from './components/ReelsCarousel';

type Language = 'EN' | 'RU' | 'HE';

function App() {
  const [currentLang, setCurrentLang] = useState<Language>('EN');
  const [showPDF, setShowPDF] = useState(false);

  const languages: Language[] = ['EN', 'RU', 'HE'];

  const t = (key: keyof typeof translations) => translations[key][currentLang];

  const metallicTextStyle = {
    WebkitBackgroundClip: 'text',
    backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(192,192,192,1) 50%, rgba(128,128,128,1) 100%)',
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
  };

  return (
    <div className="min-h-screen bg-black text-white font-heebo" dir={currentLang === 'HE' ? 'rtl' : 'ltr'}>
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
      <nav className={`fixed top-0 ${currentLang === 'HE' ? 'left-0' : 'right-0'} z-20 p-4 md:p-6 flex items-center gap-2 md:gap-4`}>
        {/* Language Switcher */}
        <div className="flex gap-1 md:gap-2 mr-1 md:mr-2">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setCurrentLang(lang)}
              className={`px-2 py-1 text-xs md:text-sm font-medium rounded transition-colors ${
                currentLang === lang
                  ? 'bg-white text-black'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        <Menu as="div" className="relative">
          {({ open }) => (
            <>
              <Menu.Button className="p-2 md:p-3 hover:bg-white/10 rounded-full transition-colors">
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
                <Menu.Items className={`absolute ${currentLang === 'HE' ? 'left-0' : 'right-0'} mt-3 w-60 md:w-72 focus:outline-none`}>
                  <div className="p-2 space-y-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#portfolio"
                          className={`${
                            active ? 'text-gray-400' : ''
                          } flex items-center px-4 md:px-6 py-2 md:py-3 text-xl md:text-2xl font-medium transition-colors hover:text-gray-400`}
                        >
                          {t('portfolio')}
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#about"
                          className={`${
                            active ? 'text-gray-400' : ''
                          } flex items-center px-4 md:px-6 py-2 md:py-3 text-xl md:text-2xl font-medium transition-colors hover:text-gray-400`}
                        >
                          {t('aboutMe')}
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#support"
                          className={`${
                            active ? 'text-gray-400' : ''
                          } flex items-center px-4 md:px-6 py-2 md:py-3 text-xl md:text-2xl font-medium transition-colors hover:text-gray-400`}
                        >
                          {t('support')}
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#contact"
                          className={`${
                            active ? 'text-gray-400' : ''
                          } flex items-center px-4 md:px-6 py-2 md:py-3 text-xl md:text-2xl font-medium transition-colors hover:text-gray-400`}
                        >
                          {t('contact')}
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>

              {/* Dark Overlay */}
              <Transition
                show={open}
                enter="transition-opacity duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="fixed inset-0 bg-black/70 z-[-1]"
              />
            </>
          )}
        </Menu>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-end justify-start overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/videos/GIFSHW-ezgif.com-video-to-gif-converter.gif"
            alt="Move Creators"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>
        <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-16 pb-8 sm:pb-12 md:pb-16 lg:pb-24">
          <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl font-heebo font-light text-white tracking-wide">
            Creative Video Production Israel
          </h1>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-6 md:p-12 py-16 sm:py-20">
        <div className="max-w-7xl w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-benzin text-white mb-12 sm:mb-14 md:mb-16 text-center">{t('whatWeDo')}?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-10 sm:mb-12">
            <div className="bg-black border border-sm border-gray-700 p-6 sm:p-8 md:p-10 rounded-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-gray-400">{t('serviceVideoShort')}</h3>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                {t('serviceVideoDesc')}
              </p>
            </div>

            <div className="bg-black border border-sm border-orange-500 p-6 sm:p-8 md:p-10 rounded-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-gray-400">{t('service3D')}</h3>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                {t('service3DDesc')}
              </p>
            </div>

            <div className="bg-black border border-sm border-orange-500 p-6 sm:p-8 md:p-10 rounded-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-gray-400">{t('serviceBranding')}</h3>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                {t('serviceBrandingDesc')}
              </p>
            </div>

            <div className="bg-black border border-sm border-gray-700 p-6 sm:p-8 md:p-10 rounded-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-gray-400">{t('serviceEvents')}</h3>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                {t('serviceEventsDesc')}
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8 sm:mt-10">
            <button
              onClick={() => setShowPDF(true)}
              className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg lg:text-xl font-medium border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              {t('getPresentation')}
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-6 md:p-8 py-16 sm:py-20">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-benzin mb-8 md:mb-12">{t('portfolio')}</h2>
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
              <h3 className="text-xl md:text-2xl font-benzin">{t('commercialProjects')}</h3>
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
              <h3 className="text-xl md:text-2xl font-benzin">{t('coursesAndPodcasts')}</h3>
            </div>
          </div>
        </div>
      </section>

      <ReelsCarousel />

      <section id="about" className="min-h-screen bg-zinc-900 flex items-center justify-center p-6 md:p-8 pt-20">
        <div className="max-w-5xl w-full">
          <h2 className="text-4xl md:text-5xl font-benzin mb-8 md:mb-12">{t('aboutMe')}</h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${currentLang === 'HE' ? 'md:grid-flow-col-reverse' : ''}`}>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg font-heebo">
              <p className="text-xl md:text-2xl font-medium mb-6 md:mb-8">{t('aboutTitle')}</p>
              <p>{t('aboutDescription1')}</p>
              <p>{t('aboutDescription2')}</p>
            </div>
            <div className={`flex ${currentLang === 'HE' ? 'justify-start' : 'justify-end'}`}>
              <img
                src="https://i.postimg.cc/kGhFfT4b/IMG-8326.jpg"
                alt="Photo"
                className="w-full max-w-sm rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="support" className="min-h-screen bg-black flex items-center justify-center p-6 md:p-8 pt-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl md:text-5xl font-benzin mb-8 md:mb-12">{t('support')}</h2>
          <div className="space-y-6 md:space-y-8">
            <div className="bg-black/30 p-4 md:p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-benzin mb-4">{t('faqTitle')}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg md:text-xl mb-2">{t('faqQuestion1')}</h4>
                  <p className="text-gray-400 text-sm md:text-base">{t('faqAnswer1')}</p>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl mb-2">{t('faqQuestion2')}</h4>
                  <p className="text-gray-400 text-sm md:text-base">{t('faqAnswer2')}</p>
                </div>
              </div>
            </div>
            <div className="bg-black/30 p-4 md:p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-benzin mb-4">{t('technicalSupportTitle')}</h3>
              <p className="text-gray-400 text-sm md:text-base">
                {t('technicalSupportText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section with Free Pack */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
        <div className="absolute inset-0">
          <img
            src="https://i.postimg.cc/P5v4Qq3g/my-saite-1-1-1.png"
            alt="Background"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="relative z-10 w-full max-w-5xl px-4">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${currentLang === 'HE' ? 'md:grid-flow-col-reverse' : ''}`}>
            {/* Folder & Download Section */}
            <div className="flex flex-col items-center gap-8 md:gap-10">
              <div className="w-[160px] h-[128px] md:w-[220px] md:h-[176px] relative">
                <img
                  src="https://i.postimg.cc/GmzXpff2/IMG-0617.png"
                  alt="Pack Folder"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
              <div className="flex flex-col items-center gap-3">
                <h1 className="text-2xl md:text-5xl font-benzin tracking-wider">
                  FREE
                </h1>
                <a
                  href="https://drive.google.com/drive/folders/11cIIOyUjludu9BBLliMGEv0L4Gs82Lzm?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white px-6 py-2 md:px-8 md:py-3 text-sm md:text-base rounded-full hover:bg-white hover:text-black transition-all duration-300 tracking-wider whitespace-nowrap"
                >
                  {t('downloadButton')}
                </a>
              </div>
            </div>

            {/* Text Section with Arrow */}
            <div className="flex flex-col items-center md:items-start">
              {/* Desktop: Arrow + Text */}
              <div className={`hidden md:flex items-start gap-4 md:gap-6 ${currentLang === 'HE' ? 'flex-row-reverse' : ''}`}>
                <ArrowDownRight className={`w-8 h-8 md:w-10 md:h-10 text-white flex-shrink-0 mt-2 transition-transform ${currentLang === 'HE' ? 'scale-x-[-1]' : ''}`} />
                <p className="text-base md:text-lg leading-relaxed text-white">
                  {t('freePackDescription')}
                </p>
              </div>

              {/* Mobile: Text */}
              <div className="flex md:hidden flex-col items-center gap-3 text-center">
                <p className="text-base leading-relaxed text-white">
                  {t('freePackDescription')}
                </p>
                <ArrowDown className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen bg-zinc-900 flex items-center justify-center p-4 sm:p-6 md:p-8 pt-16 sm:pt-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-benzin mb-8 sm:mb-10 md:mb-12">{t('contact')}</h2>
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            <a
              href="https://wa.me/+972542489940"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm sm:text-base md:text-lg hover:text-white transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/lexviven?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm sm:text-base md:text-lg hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/alexey-viventsov-58749a23b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm sm:text-base md:text-lg hover:text-white transition-colors"
            >
              {t('linkedin')}
            </a>
          </div>
        </div>
      </section>

      {/* PDF Modal */}
      {showPDF && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-3 md:p-4 bg-black/80" onClick={() => setShowPDF(false)}>
          <div className="relative w-full h-[85vh] sm:h-[80vh] md:h-[85vh] max-w-2xl sm:max-w-3xl md:max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowPDF(false)}
              className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
            </button>
            <iframe
              src="https://drive.google.com/file/d/1qKn1SJcZhVaAIpWENmkufL_K-Jn0woD8/preview?usp=drive_link"
              className="w-full h-full"
              title="Move Creators Presentation"
              allow="autoplay"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;