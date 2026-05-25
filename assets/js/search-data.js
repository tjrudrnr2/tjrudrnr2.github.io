// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum Vitae — KyeongKook Seo",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-our-privacy-preserving-generative-model-research-was-featured-on-ytn-science-개인정보-보호하면서-지브리풍-이미지-생성하는-ai-개발",
          title: 'Our privacy-preserving generative model research was featured on YTN Science: “개인정보 보호하면서 지브리풍...',
          description: "",
          section: "News",},{id: "news-our-privacy-preserving-generative-model-research-was-featured-on-jtbc-내-사진-서버에-안-올려도-지브리풍-가능한-ai-나왔다",
          title: 'Our privacy-preserving generative model research was featured on JTBC: “내 사진 서버에 안...',
          description: "",
          section: "News",},{id: "news-our-lab-lait-was-featured-on-the-ministry-of-science-and-ict-과학기술정보통신부-youtube-channel-대한민국-최고의-ai-연구실을-찾아서",
          title: 'Our lab (LAIT) was featured on the Ministry of Science and ICT (과학기술정보통신부)...',
          description: "",
          section: "News",},{id: "news-our-lab-lait-was-featured-on-the-ministry-of-science-and-ict-과학기술정보통신부-youtube-channel-대한민국-최고-ai-연구실의-삶은-어떨까",
          title: 'Our lab (LAIT) was featured on the Ministry of Science and ICT (과학기술정보통신부)...',
          description: "",
          section: "News",},{id: "news-featured-in-인공지능신문-ai-times-더-믿고-쓸-수-있는-ai-화가-만드는-설계-원리는-unist-윤성환-유재준-연구팀",
          title: 'Featured in 인공지능신문 (AI Times): “‘더 믿고 쓸 수 있는 AI 화가’ 만드는...',
          description: "",
          section: "News",},{id: "teachings-deep-generative-models-심층생성모델",
          title: 'Deep Generative Models (심층생성모델)',
          description: "Teaching Assistant",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/2024-deep-generative-models/";
            },},{id: "teachings-introduction-to-ai-programming-ii",
          title: 'Introduction to AI Programming II',
          description: "Teaching Assistant",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/2026-intro-ai-programming-2/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%79%65%6F%6E%67%6B%6F%6F%6B%73%65%6F@%75%6E%69%73%74.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/tjrudrnr2", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
