import { PronunciationGuideItem, StoryChapter } from '../types/book';

export const BOOK_ASSETS = {
  frontCover: '/src/assets/images/book_front_cover_1795512998443.jpg',
  backCover: '/src/assets/images/book_back_cover_1795513000097.jpg',
  campusStory: '/src/assets/images/story_campus_morning_1795513000659.jpg',
  workshopStory: '/src/assets/images/story_workshop_team_1795513001576.jpg',
  thirdEditionPdf:
    '/assets/aistudio/3rd_edition-Practical_English_for_Skilled_Manpower___Bilingual_Vocational_Textbook_85a32fcb.pdf',
};

export const BOOK_META = {
  titleEn: 'Practical English for Skilled Manpower',
  subtitleEn:
    '30 Fundamental Rules · 30 Common Structures · 300 Power Words (100 Verbs V1–V3) · Story-Based Learning · 12 Tenses · IPA & Audio QR',
  titleBn: 'দক্ষ জনশক্তির জন্য সহজ স্পোকেন ইংলিশ',
  taglineEn: 'Give Your Skilled Hands a Confident Voice.',
  taglineBn: 'আপনার দক্ষ হাতকে দিন আত্মবিশ্বাসী কণ্ঠ — অদক্ষতা থেকে দক্ষ জনশক্তিতে রূপান্তর',
  publisherEn: 'EDIFICE Consultants Vocational Institute',
  publisherLocation: 'Dhaka, Bangladesh',
  imprintSeries: 'EDIFICE Consultants · Workforce Empowerment Series',
  authorName: 'Alve Ahmed Shatu',
  authorRole: 'Electrical Engineer & Curriculum Lead, EDIFICE Consultants',
  authorEmail: 'alveahmed83@gmail.com',
  authorWhatsApp: '01706701643',
  edition: 'Bilingual Vocational Edition · 2026',
  isbn: 'EDIFICE-VOC-2026-04',
};

export const PRONUNCIATION_GUIDE: PronunciationGuideItem[] = [
  {
    id: 'f-vs-p',
    soundLabel: 'F vs P (ফ বনাম ফুঁ দিয়ে এফ)',
    ipaSymbol: '/f/ vs /p/',
    banglaCue: 'ওপরের দাঁত নিচের ঠোঁটে হালকা ছুঁয়ে বাতাস ছাড়ুন',
    trapTipBn:
      'বাংলায় আমরা "ফোন" আর "পেন" দুই ঠোঁট মিলিয়ে বলি। কিন্তু ইংরেজিতে F (Fan, Fix, Fine) বলতে ওপরের দাঁত নিচের ঠোঁটে লাগিয়ে নরম বাতাস বের করুন।',
    sampleWords: [
      { en: 'Fan', ipa: '/fæn/', pron: 'ফ্যান (দাঁত-ঠোঁট)', bn: 'পাখা' },
      { en: 'Fix', ipa: '/fɪks/', pron: 'ফিক্স', bn: 'ঠিক করা' },
      { en: 'Fine', ipa: '/faɪn/', pron: 'ফাইন', bn: 'ভালো' },
    ],
  },
  {
    id: 'v-vs-b',
    soundLabel: 'V vs B (ভ বনাম কম্পনযুক্ত ভি)',
    ipaSymbol: '/v/ vs /b/',
    banglaCue: 'ওপরের দাঁত নিচের ঠোঁটে রেখে গলায় হালকা কম্পন তুলুন',
    trapTipBn:
      'অনেকে "Very" কে "ভেরি/বেরি" বলে ফেলেন। V বলতে দুই ঠোঁট পুরো বন্ধ করবেন না—দাঁত নিচের ঠোঁটে আলতো ছুঁয়ে আওয়াজ করুন।',
    sampleWords: [
      { en: 'Very', ipa: '/ˈveri/', pron: 'ভেরি', bn: 'খুব' },
      { en: 'Voltage', ipa: '/ˈvoʊltɪdʒ/', pron: 'ভোল্টেজ', bn: 'ভোল্টেজ' },
      { en: 'Village', ipa: '/ˈvɪlɪdʒ/', pron: 'ভিলেজ', bn: 'গ্রাম' },
    ],
  },
  {
    id: 'th-sounds',
    soundLabel: 'TH Soft & Hard (থ এবং দ)',
    ipaSymbol: '/θ/ & /ð/',
    banglaCue: 'জিহ্বার আগা দুই দাঁতের মাঝখানে হালকা ছুঁয়ে বলুন',
    trapTipBn:
      'TH এর দুটি রূপ আছে: নরম "থ" (Thank, Think) এবং শক্ত "দ" (This, That, They)। জিহ্বার আগা একটু বের করে বললে উচ্চারণ পরিষ্কার হয়।',
    sampleWords: [
      { en: 'Thank you', ipa: '/ˈθæŋk juː/', pron: 'থ্যাংক ইউ', bn: 'ধন্যবাদ' },
      { en: 'Think', ipa: '/θɪŋk/', pron: 'থিংক', bn: 'ভাবা' },
      { en: 'This', ipa: '/ðɪs/', pron: 'দিস', bn: 'এটি' },
    ],
  },
  {
    id: 'w-vs-v',
    soundLabel: 'W Sound (ঠোঁট গোল করে ওয়া)',
    ipaSymbol: '/w/',
    banglaCue: 'দুই ঠোঁট গোল করে "উ-আ" এর মতো শব্দ করুন',
    trapTipBn:
      'Work, Water, Wire — এই শব্দগুলোতে দাঁত ঠোঁটে লাগাবেন না। শুধু ঠোঁট গোল করে নরমভাবে "ওয়া" বলুন।',
    sampleWords: [
      { en: 'Work', ipa: '/wɜːrk/', pron: 'ওয়ার্ক', bn: 'কাজ' },
      { en: 'Water', ipa: '/ˈwɔːtər/', pron: 'ওয়াটার', bn: 'পানি' },
      { en: 'Wire', ipa: '/ˈwaɪər/', pron: 'ওয়্যার', bn: 'তার' },
    ],
  },
  {
    id: 'sh-vs-s',
    soundLabel: 'SH vs S (শ বনাম স)',
    ipaSymbol: '/ʃ/ vs /s/',
    banglaCue: 'S = চিকন "স" · SH = ভারী "শ" (চুপ করানোর শ্‌শ্‌)',
    trapTipBn:
      'See (/siː/) আর She (/ʃiː/) এক নয়! She, Shop, Switch-এ পরিষ্কার পার্থক্য রাখুন, তাহলে বিদেশি ক্লায়েন্ট সহজেই বুঝতে পারবে।',
    sampleWords: [
      { en: 'See / She', ipa: '/siː/ · /ʃiː/', pron: 'সি / শি', bn: 'দেখা / সে (নারী)' },
      { en: 'Shop', ipa: '/ʃɒp/', pron: 'শপ', bn: 'দোকান' },
      { en: 'Skill', ipa: '/skɪl/', pron: 'স্কিল', bn: 'দক্ষতা' },
    ],
  },
  {
    id: 'silent-k',
    soundLabel: 'Silent K (নীরব K — উচ্চারণ হয় না)',
    ipaSymbol: 'kn → /n/',
    banglaCue: 'শব্দের শুরুতে KN থাকলে K কখনোই উচ্চারণ করবেন না',
    trapTipBn:
      'Know কে "ক-নো" বলবেন না! শুধু "নো" (/noʊ/) বলুন। একইভাবে Knee (/niː/), Knife (/naɪf/), Knock (/nɒk/)।',
    sampleWords: [
      { en: 'Know', ipa: '/noʊ/', pron: 'নো', bn: 'জানা' },
      { en: 'Knock', ipa: '/nɒk/', pron: 'নক', bn: 'দরজায় টোকা দেওয়া' },
      { en: 'Knife', ipa: '/naɪf/', pron: 'নাইফ', bn: 'ছুরি' },
    ],
  },
  {
    id: 'silent-l',
    soundLabel: 'Silent L (নীরব L — কুড, শুড, উড)',
    ipaSymbol: 'l → ∅',
    banglaCue: 'Could, Should, Would, Walk, Talk — এগুলোতে L নীরব থাকে',
    trapTipBn:
      'অনেকেই "ওয়াল্ক" বা "টাল্ক" বলে ফেলেন। সঠিক উচ্চারণ হবে "ওয়াক" (/wɔːk/) এবং "টক" (/tɔːk/)।',
    sampleWords: [
      { en: 'Could', ipa: '/kʊd/', pron: 'কুড', bn: 'পারতাম / অনুরোধ' },
      { en: 'Walk', ipa: '/wɔːk/', pron: 'ওয়াক', bn: 'হাঁটা' },
      { en: 'Talk', ipa: '/tɔːk/', pron: 'টক', bn: 'কথা বলা' },
    ],
  },
  {
    id: 'silent-h',
    soundLabel: 'Silent H & T (নীরব H ও T)',
    ipaSymbol: 'h/t → ∅',
    banglaCue: 'Hour (আওয়ার), Honest (অনেস্ট), Listen (লিসেন)',
    trapTipBn:
      'Hour = /ˈaʊər/ ("আওয়ার", হাওয়ার নয়), Honest = /ˈɒnɪst/ ("অনেস্ট"), Listen = /ˈlɪsən/ ("লিসেন")। এগুলো আয়ত্ত করলে আপনার ইংরেজি দারুণ শোনাবে!',
    sampleWords: [
      { en: 'Hour', ipa: '/ˈaʊər/', pron: 'আওয়ার', bn: 'ঘণ্টা' },
      { en: 'Honest', ipa: '/ˈɒnɪst/', pron: 'অনেস্ট', bn: 'সৎ' },
      { en: 'Listen', ipa: '/ˈlɪsən/', pron: 'লিসেন', bn: 'মন দিয়ে শোনা' },
    ],
  },
];

/**
 * Stories 1–4 match Karim from Barishal's exact 4 progressive stories on Pages 20–22 of Alve Ahmed Shatu's 3rd Edition PDF.
 * Stories 5–6 are 4th Edition Bonus Workplace Stories continuing Karim's journey.
 */
export const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: 1,
    levelBn: 'Story 1 · Beginner (শুরু)',
    titleEn: 'First Day at the Vocational Institute',
    titleBn: 'গল্প ১: ভোকেশনাল ইনস্টিটিউটে প্রথম দিন',
    settingBn:
      'করিম বরিশাল থেকে ঢাকায় এসেছে। আজ তার এডিফিস ভোকেশনাল ইনস্টিটিউটে প্রথম দিন। সে শ্রেণিকক্ষের দরজার দিকে হেঁটে যাচ্ছে।',
    imageUrl: BOOK_ASSETS.campusStory,
    imageAlt: 'Vocational trainees practicing spoken English together in a bright Dhaka classroom',
    keyWords: ['Excuse me', 'May I come in', 'My name is', 'I am from', 'I want to learn'],
    keyStructuresNote:
      'Key Structures Spotted: #9 (Excuse me, ...), #10 (May I + Verb?), #1 (My name is / I am from...), #3 (I want to + Verb)',
    speakWritePrompts: [
      'My name is ________. I am from ________.',
      'I want to learn ________ and English.',
    ],
    lines: [
      {
        speaker: 'Narrator',
        en: 'Karim is from Barishal. Today is his first day at the vocational institute in Dhaka. He walks to the classroom door.',
        pron: 'করিম ইজ ফ্রম বরিশাল। টুডে ইজ হিজ ফার্স্ট ডে অ্যাট দা ভোকেশনাল ইনস্টিটিউট ইন ঢাকা। হি ওয়াকস টু দা ক্লাসরুম ডোর।',
        bn: 'করিমের বাড়ি বরিশালে। আজ ঢাকায় ভোকেশনাল ইনস্টিটিউটে তার প্রথম দিন। সে শ্রেণিকক্ষের দরজার দিকে হেঁটে যায়।',
        ruleRef: 3,
      },
      {
        speaker: 'Karim',
        en: 'Excuse me, Sir. May I come in?',
        pron: 'এক্সকিউজ মি, স্যার। মে আই কাম ইন?',
        bn: 'মাফ করবেন, স্যার। আমি কি ভেতরে আসতে পারি?',
        ruleRef: 16,
      },
      {
        speaker: 'Teacher',
        en: 'Yes, please come in! Welcome to our class. What is your name?',
        pron: 'ইয়েস, প্লিজ কাম ইন! ওয়েলকাম টু আওয়ার ক্লাস। হোয়াট ইজ ইওর নেম?',
        bn: 'হ্যাঁ, দয়া করে ভেতরে এসো! আমাদের ক্লাসে স্বাগতম। তোমার নাম কী?',
        ruleRef: 19,
      },
      {
        speaker: 'Karim',
        en: 'Good morning, Sir. My name is Karim. I am from Barishal. I want to learn electrical work and English.',
        pron: 'গুড মর্নিং, স্যার। মাই নেম ইজ করিম। আই অ্যাম ফ্রম বরিশাল। আই ওয়ান্ট টু লার্ন ইলেকট্রিক্যাল ওয়ার্ক অ্যান্ড ইংলিশ।',
        bn: 'সুপ্রভাত, স্যার। আমার নাম করিম। আমি বরিশাল থেকে এসেছি। আমি ইলেকট্রিক্যাল কাজ এবং ইংরেজি শিখতে চাই।',
        ruleRef: 1,
      },
      {
        speaker: 'Teacher',
        en: 'Very good, Karim! Please sit down. Do not be afraid. You will speak English well soon.',
        pron: 'ভেরি গুড, করিম! প্লিজ সিট ডাউন। ডু নট বি অ্যাফ্রেইড। ইউ উইল স্পিক ইংলিশ ওয়েল সুন।',
        bn: 'খুব ভালো, করিম! দয়া করে বসো। ভয় পেয়ো না। তুমি খুব শীঘ্রই ভালো ইংরেজি বলবে।',
        ruleRef: 12,
      },
    ],
    moralBn:
      'প্রথম দিনেই ভয় না পেয়ে মাত্র ৪টি কাঠামো (#9, #10, #1, #3) দিয়েই শ্রেণিকক্ষ ও কর্মক্ষেত্রে আত্মবিশ্বাসী সূচনা করা যায়।',
    quiz: [
      {
        questionBn: 'ক্লাসে প্রবেশের অনুমতি নিতে করিম কী বলেছিল?',
        options: ['I am coming.', 'Excuse me, Sir. May I come in?', 'Open the door, Sir.'],
        correctIndex: 1,
      },
      {
        questionBn: 'করিম কোন জেলা থেকে ঢাকায় এসেছে?',
        options: ['Sylhet', 'Barishal', 'Khulna'],
        correctIndex: 1,
      },
      {
        questionBn: 'করিম ইনস্টিটিউটে কী কী শিখতে চায়?',
        options: ['Electrical work and English', 'Only cooking', 'Driving only'],
        correctIndex: 0,
      },
    ],
  },
  {
    id: 2,
    levelBn: 'Story 2 · Elementary (প্রাথমিক)',
    titleEn: 'Safety and Tools in the Workshop',
    titleBn: 'গল্প ২: ওয়ার্কশপে নিরাপত্তা ও যন্ত্রপাতি শেখা',
    settingBn:
      'এটি করিমের দ্বিতীয় সপ্তাহ। আজ ওয়ার্কশপে প্রশিক্ষক নিরাপত্তা বিধি শেখাচ্ছেন এবং করিম তার সহপাঠী হাসানের সাথে কাজ করছে।',
    imageUrl: BOOK_ASSETS.workshopStory,
    imageAlt: 'Bangladeshi electrical trainees and instructor reviewing workshop safety and tools',
    keyWords: ['Safety is first', 'You must wear', 'Where is', 'I need', 'Let me bring', 'Ready to test'],
    keyStructuresNote:
      'Key Structures Spotted: #16 (You must + Verb), #11 (Do not + Verb), #17 (Where is...?), #4 (I need...), #22 (Let me + Verb), #25 (Thank you for...)',
    speakWritePrompts: [
      'Before work, I must wear ________ and ________.',
      'Where is the ________? I need it right now.',
    ],
    lines: [
      {
        speaker: 'Narrator',
        en: 'It is Karim\'s second week in the electrical workshop. The instructor teaches the trainees about safety rules.',
        pron: 'ইট ইজ করিমস সেকেন্ড উইক ইন দা ইলেকট্রিক্যাল ওয়ার্কশপ। দা ইনস্ট্রাক্টর টিচেস দা ট্রেইনিজ অ্যাবাউট সেফটি রুলস।',
        bn: 'এটি ইলেকট্রিক্যাল ওয়ার্কশপে করিমের দ্বিতীয় সপ্তাহ। প্রশিক্ষক শিক্ষার্থীদের নিরাপত্তার নিয়ম শেখাচ্ছেন।',
        ruleRef: 7,
      },
      {
        speaker: 'Instructor',
        en: 'Safety is first! You must wear your helmet and gloves before work. Don\'t touch any wire when the power is on.',
        pron: 'সেফটি ইজ ফার্স্ট! ইউ মাস্ট ওয়্যার ইওর হেলমেট অ্যান্ড গ্লাভস বিফোর ওয়ার্ক। ডোন্ট টাচ এনি ওয়্যার হোয়েন দা পাওয়ার ইজ অন।',
        bn: 'নিরাপত্তাই প্রথম! কাজের আগে অবশ্যই হেলমেট ও গ্লাভস পরবে। বিদ্যুৎ চালু থাকলে কোনো তার স্পর্শ করবে না।',
        ruleRef: 15,
      },
      {
        speaker: 'Karim',
        en: 'Hasan, where is the voltage tester? I need it right now.',
        pron: 'হাসান, হোয়ার ইজ দা ভোল্টেজ টেস্টার? আই নিড ইট রাইট নাউ।',
        bn: 'হাসান, ভোল্টেজ টেস্টারটি কোথায়? এটি আমার এখনই দরকার।',
        ruleRef: 19,
      },
      {
        speaker: 'Hasan',
        en: 'It is in the red tool box on the left table. Let me bring it for you.',
        pron: 'ইট ইজ ইন দা রেড টুল বক্স অন দা লেফট টেবিল। লেট মি ব্রিং ইট ফর ইউ।',
        bn: 'এটি বাম টেবিলের ওপর লাল টুল বক্সের ভেতরে আছে। আমি তোমার জন্য এটি নিয়ে আসছি।',
        ruleRef: 23,
      },
      {
        speaker: 'Karim',
        en: 'Thank you for your help, Hasan. Now I am ready to test the switch.',
        pron: 'থ্যাংক ইউ ফর ইওর হেল্প, হাসান। নাউ আই অ্যাম রেডি টু টেস্ট দা সুইচ।',
        bn: 'তোমার সাহায্যের জন্য ধন্যবাদ, হাসান। এখন আমি সুইচটি পরীক্ষা করতে প্রস্তুত।',
        ruleRef: 24,
      },
    ],
    moralBn:
      'ওয়ার্কশপে স্পষ্ট নির্দেশনা ("must", "don\'t"), যন্ত্র খোঁজা ("Where is...?"), ও সহকর্মীকে ধন্যবাদ দেওয়া—সবই সহজ ইংরেজিতে সম্ভব।',
    quiz: [
      {
        questionBn: 'কাজের আগে অবশ্যই কী পরতে হবে?',
        options: ['Helmet and gloves', 'A watch only', 'Sunglasses'],
        correctIndex: 0,
      },
      {
        questionBn: 'ভোল্টেজ টেস্টারটি কোথায় রাখা ছিল?',
        options: ['Under the chair', 'In the red tool box on the left table', 'Outside the door'],
        correctIndex: 1,
      },
      {
        questionBn: 'সাহায্য করার পর করিম হাসানকে কী বলেছে?',
        options: ['Thank you for your help, Hasan.', 'Go away now.', 'I am busy.'],
        correctIndex: 0,
      },
    ],
  },
  {
    id: 3,
    levelBn: 'Story 3 · Practical (ব্যবহারিক)',
    titleEn: 'The Job Interview',
    titleBn: 'গল্প ৩: চাকরির ইন্টারভিউ',
    settingBn:
      '৩ মাস পর করিম তার ভোকেশনাল সার্টিফিকেট অর্জন করেছে। আজ সে একটি প্রতিষ্ঠানে টেকনিশিয়ান পদের জন্য ইন্টারভিউ দিতে এসেছে।',
    imageUrl: BOOK_ASSETS.campusStory,
    imageAlt: 'Confident vocational graduate speaking clearly during a technician job interview',
    keyWords: ['Completed my training', 'I know how to', 'I am good at', 'I can work hard', 'I would like to'],
    keyStructuresNote:
      'Key Structures Spotted: #20 (I know how to + Verb), #30 (I am good at...), #8 (I can + Verb), #26 (I would like to + Verb)',
    speakWritePrompts: [
      'I know how to ________ and ________.',
      'I am good at ________. I would like to grow with your company.',
    ],
    lines: [
      {
        speaker: 'Narrator',
        en: 'After 3 months, Karim gets his certificate. Today he goes to a company for a technician job interview.',
        pron: 'আফটার থ্রি মান্থস, করিম গেটস হিজ সার্টিফিকেট। টুডে হি গোজ টু আ কোম্পানি ফর আ টেকনিশিয়ান জব ইন্টারভিউ।',
        bn: '৩ মাস পর করিম তার সার্টিফিকেট পেল। আজ সে একটি কোম্পানিতে টেকনিশিয়ান চাকরির ইন্টারভিউ দিতে যাচ্ছে।',
        ruleRef: 7,
      },
      {
        speaker: 'Manager',
        en: 'Good morning, Karim. Please have a seat. Tell me about your training and skills.',
        pron: 'গুড মর্নিং, করিম। প্লিজ হ্যাভ আ সিট। টেল মি অ্যাবাউট ইওর ট্রেইনিং অ্যান্ড স্কিলস।',
        bn: 'সুপ্রভাত, করিম। দয়া করে বসুন। আপনার প্রশিক্ষণ ও দক্ষতা সম্পর্কে বলুন।',
        ruleRef: 17,
      },
      {
        speaker: 'Karim',
        en: 'Thank you, Sir. I completed my vocational training in Dhaka. I know how to do house wiring and repair motors. I am good at teamwork and safety rules.',
        pron: 'থ্যাংক ইউ, স্যার। আই কমপ্লিটেড মাই ভোকেশনাল ট্রেইনিং ইন ঢাকা। আই নো হাউ টু ডু হাউস ওয়্যারিং অ্যান্ড রিপেয়ার মোটরস। আই অ্যাম গুড অ্যাট টিমওয়ার্ক অ্যান্ড সেফটি রুলস।',
        bn: 'ধন্যবাদ, স্যার। আমি ঢাকায় আমার ভোকেশনাল প্রশিক্ষণ শেষ করেছি। আমি বাড়ির ওয়্যারিং করতে এবং মোটর মেরামত করতে জানি। আমি দলগত কাজ ও নিরাপত্তার নিয়মে দক্ষ।',
        ruleRef: 11,
      },
      {
        speaker: 'Manager',
        en: 'Can you work in the night shift if needed?',
        pron: 'ক্যান ইউ ওয়ার্ক ইন দা নাইট শিফট ইফ নিডেড?',
        bn: 'প্রয়োজনে আপনি কি রাতের শিফটে কাজ করতে পারবেন?',
        ruleRef: 13,
      },
      {
        speaker: 'Karim',
        en: 'Yes, Sir. I can work hard and I am always on time. I would like to grow with your company.',
        pron: 'ইয়েস, স্যার। আই ক্যান ওয়ার্ক হার্ড অ্যান্ড আই অ্যাম অলওয়েজ অন টাইম। আই উড লাইক টু গ্রো উইথ ইওর কোম্পানি।',
        bn: 'জি, স্যার। আমি কঠোর পরিশ্রম করতে পারি এবং সবসময় সময়মতো আসি। আমি আপনার কোম্পানির সাথে এগিয়ে যেতে চাই।',
        ruleRef: 16,
      },
      {
        speaker: 'Manager',
        en: 'Excellent! You got the job. You can join on Sunday morning at 8 AM.',
        pron: 'এক্সেলেন্ট! ইউ গট দা জব। ইউ ক্যান জয়েন অন সানডে মর্নিং অ্যাট এইট এ.এম.।',
        bn: 'চমৎকার! আপনি চাকরিটি পেয়েছেন। আপনি রবিবার সকাল ৮টায় যোগ দিতে পারেন।',
        ruleRef: 23,
      },
    ],
    moralBn:
      'ইন্টারভিউতে লম্বা বক্তৃতার দরকার নেই—"I completed...", "I know how to...", "I am good at...", এবং "I would like to..." বললেই আপনি এগিয়ে থাকবেন।',
    quiz: [
      {
        questionBn: 'করিম কোন দুটি ব্যবহারিক কাজ জানে বলে উল্লেখ করেছে?',
        options: ['House wiring and repairing motors', 'Painting and driving', 'Cooking and cleaning'],
        correctIndex: 0,
      },
      {
        questionBn: 'ম্যানেজার করিমকে কোন শিফট সম্পর্কে প্রশ্ন করেছিলেন?',
        options: ['Only weekend shift', 'Night shift if needed', 'Holiday shift'],
        correctIndex: 1,
      },
      {
        questionBn: 'করিম কবে এবং কয়টায় চাকরিতে যোগ দিতে পারবে?',
        options: ['Friday at 10 AM', 'Sunday morning at 8 AM', 'Next year'],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 4,
    levelBn: 'Story 4 · Workplace Ready (কর্মক্ষেত্র)',
    titleEn: 'Helping a Foreign Supervisor',
    titleBn: 'গল্প ৪: বিদেশি সুপারভাইজারের সাথে সমস্যার সমাধান',
    settingBn:
      'একজন বিদেশি প্রকৌশলী করিমের সেকশনে পরিদর্শনে এসেছেন। একটি কুলিং ফ্যান হঠাৎ বন্ধ হয়ে গেছে এবং প্রকৌশলী দ্রুত ইংরেজি বলছেন।',
    imageUrl: BOOK_ASSETS.workshopStory,
    imageAlt: 'Skilled technician communicating clearly with a foreign supervisor on site',
    keyWords: ['Speak slowly', 'Loose cable', 'It takes', 'New switch', 'Finished repairing'],
    keyStructuresNote:
      'Key Structures Spotted: #27 (Could you please...?), #28 (There is a ...), #29 (It takes ... to ...), #4 (I need ...)',
    speakWritePrompts: [
      'Excuse me, Sir. Could you please ________?',
      'There is a ________ inside. It takes only ________ minutes to repair.',
    ],
    lines: [
      {
        speaker: 'Narrator',
        en: 'A foreign engineer visits Karim\'s section. A cooling fan has stopped working. The engineer speaks very fast.',
        pron: 'আ ফরেন ইঞ্জিনিয়ার ভিজিটস করিমস সেকশন। আ কুলিং ফ্যান হ্যাজ স্টপড ওয়ার্কিং। দা ইঞ্জিনিয়ার স্পিকস ভেরি ফাস্ট।',
        bn: 'একজন বিদেশি প্রকৌশলী করিমের সেকশন পরিদর্শনে এসেছেন। একটি কুলিং ফ্যান কাজ করা বন্ধ করে দিয়েছে। প্রকৌশলী খুব দ্রুত কথা বলছেন।',
        ruleRef: 25,
      },
      {
        speaker: 'Karim',
        en: 'Excuse me, Sir. Could you please speak slowly and repeat that?',
        pron: 'এক্সকিউজ মি, স্যার। কুড ইউ প্লিজ স্পিক স্লোলি অ্যান্ড রিপিট দ্যাট?',
        bn: 'মাফ করবেন, স্যার। আপনি কি দয়া করে একটু ধীরে বলবেন এবং ওটা আবার বলবেন?',
        ruleRef: 16,
      },
      {
        speaker: 'Engineer',
        en: 'Sure, Karim! Why did the cooling fan stop? How long will it take to fix?',
        pron: 'শিওর, করিম! হোয়াই ডিড দা কুলিং ফ্যান স্টপ? হাউ লং উইল ইট টেক টু ফিক্স?',
        bn: 'অবশ্যই, করিম! কুলিং ফ্যানটি কেন থেমে গেল? ঠিক করতে কতক্ষণ সময় লাগবে?',
        ruleRef: 19,
      },
      {
        speaker: 'Karim',
        en: 'There is a loose cable inside. It takes only 20 minutes to repair. I need a new switch from the store.',
        pron: 'দেয়ার ইজ আ লুজ কেবল ইনসাইড। ইট টেকস অনলি টোয়েন্টি মিনিটস টু রিপেয়ার। আই নিড আ নিউ সুইচ ফ্রম দা স্টোর।',
        bn: 'ভেতরে একটি ঢিলা তার আছে। মেরামত করতে মাত্র ২০ মিনিট লাগবে। স্টোর থেকে আমার একটি নতুন সুইচ দরকার।',
        ruleRef: 20,
      },
      {
        speaker: 'Karim',
        en: 'Sir, I finished repairing the fan. Now it is safe and working well.',
        pron: 'স্যার, আই ফিনিশড রিপেয়ারিং দা ফ্যান। নাউ ইট ইজ সেফ অ্যান্ড ওয়ার্কিং ওয়েল।',
        bn: 'স্যার, আমি ফ্যানটি মেরামত শেষ করেছি। এখন এটি নিরাপদ এবং ভালো চলছে।',
        ruleRef: 11,
      },
      {
        speaker: 'Engineer',
        en: 'Great job, Karim! Clear work and clear English!',
        pron: 'গ্রেট জব, করিম! ক্লিয়ার ওয়ার্ক অ্যান্ড ক্লিয়ার ইংলিশ!',
        bn: 'দারুণ কাজ, করিম! পরিষ্কার কাজ এবং স্পষ্ট ইংরেজি!',
        ruleRef: 30,
      },
    ],
    moralBn:
      'বিদেশি বস দ্রুত বললে ঘাবড়ে যাবেন না—ভদ্রভাবে "Could you please speak slowly?" বলুন এবং ছোট, পরিষ্কার বাক্যে সমাধান জানান।',
    quiz: [
      {
        questionBn: 'বিদেশি প্রকৌশলী দ্রুত কথা বলায় করিম কী বলেছিল?',
        options: ['Stop talking!', 'Could you please speak slowly and repeat that?', 'I cannot hear.'],
        correctIndex: 1,
      },
      {
        questionBn: 'কুলিং ফ্যানটি বন্ধ হওয়ার কারণ কী ছিল?',
        options: ['A loose cable inside', 'No electricity in the city', 'Too much water'],
        correctIndex: 0,
      },
      {
        questionBn: 'ফ্যানটি মেরামত করতে কত মিনিট সময় লেগেছে?',
        options: ['2 hours', 'Only 20 minutes', '2 days'],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 5,
    levelBn: 'Bonus Story 5 · Workplace English',
    titleEn: 'Polite Leave & Shift Call with the Supervisor',
    titleBn: 'বোনাস গল্প ৫: সুপারভাইজারের সাথে ছুটি ও শিফট নিয়ে ফোনালাপ',
    settingBn:
      'করিমের জ্বর এসেছে। অনুপস্থিত না থেকে সে ভদ্রভাবে ফোনে তার সুপারভাইজারকে জানিয়ে ১ দিনের অসুস্থতাজনিত ছুটি চাইছে।',
    imageUrl: BOOK_ASSETS.campusStory,
    imageAlt: 'Worker politely calling supervisor on phone to request medical leave',
    keyWords: ['Sick today', 'May I take', 'Tomorrow morning', 'Inform', 'Get well soon'],
    keyStructuresNote:
      'Key Structures Spotted: #10 (May I + Verb?), #27 (Could you please...?), #12 (I am + Condition), #25 (Thank you for...)',
    speakWritePrompts: [
      'Good morning, Sir. I am sick today. May I take ________?',
      'I will join my duty on ________ at ________.',
    ],
    lines: [
      {
        speaker: 'Karim',
        en: 'Assalamu Alaikum and good morning, Sir. This is Karim from the electrical section.',
        pron: 'আসসালামু আলাইকুম অ্যান্ড গুড মর্নিং, স্যার। দিস ইজ করিম ফ্রম দা ইলেকট্রিক্যাল সেকশন।',
        bn: 'আসসালামু আলাইকুম এবং সুপ্রভাত, স্যার। আমি ইলেকট্রিক্যাল সেকশন থেকে করিম বলছি।',
        ruleRef: 3,
      },
      {
        speaker: 'Supervisor',
        en: 'Good morning, Karim. Is everything okay?',
        pron: 'গুড মর্নিং, করিম। ইজ এভরিথিং ওকে?',
        bn: 'সুপ্রভাত, করিম। সবকিছু ঠিক আছে তো?',
        ruleRef: 18,
      },
      {
        speaker: 'Karim',
        en: 'Sorry, Sir. I have a fever today, so I cannot come to the factory. May I take one day of sick leave?',
        pron: 'সরি, স্যার। আই হ্যাভ আ ফিভার টুডে, সো আই ক্যাননট কাম টু দা ফ্যাক্টরি। মে আই টেক ওয়ান ডে অফ সিক লিভ?',
        bn: 'দুঃখিত, স্যার। আজ আমার জ্বর হয়েছে, তাই কারখানায় আসতে পারব না। আমি কি এক দিনের অসুস্থতার ছুটি নিতে পারি?',
        ruleRef: 26,
      },
      {
        speaker: 'Supervisor',
        en: 'No problem, Karim. Thank you for informing me early. Please see a doctor and take rest.',
        pron: 'নো প্রবলেম, করিম। থ্যাংক ইউ ফর ইনফর্মিং মি আর্লি। প্লিজ সি আ ডক্টর অ্যান্ড টেক রেস্ট।',
        bn: 'কোনো সমস্যা নেই, করিম। আগেভাগে জানানোর জন্য ধন্যবাদ। দয়া করে ডাক্তার দেখাও এবং বিশ্রাম নাও।',
        ruleRef: 17,
      },
      {
        speaker: 'Karim',
        en: 'Thank you very much, Sir. I will return to work tomorrow morning at 8 AM.',
        pron: 'থ্যাংক ইউ ভেরি মাচ, স্যার। আই উইল রিটার্ন টু ওয়ার্ক টুমরো মর্নিং অ্যাট এইট এ.এম.।',
        bn: 'আপনাকে অনেক ধন্যবাদ, স্যার। আমি আগামীকাল সকাল ৮টায় কাজে ফিরব।',
        ruleRef: 12,
      },
    ],
    moralBn:
      'না জানিয়ে অনুপস্থিত থাকলে চাকরিতে সমস্যা হয়। মাত্র ৩টি ভদ্র বাক্যে আগেভাগে জানালে সুপারভাইজার আপনার পেশাদারিত্বে খুশি হবেন।',
    quiz: [
      {
        questionBn: 'করিম কেন আজ কারখানায় যেতে পারছে না?',
        options: ['He has a fever', 'He missed the bus', 'He forgot the address'],
        correctIndex: 0,
      },
      {
        questionBn: 'সুপারভাইজার করিমকে কী কারণে ধন্যবাদ দিয়েছেন?',
        options: ['For informing early', 'For working overtime', 'For buying tools'],
        correctIndex: 0,
      },
      {
        questionBn: 'করিম কখন কাজে ফিরবে বলে জানিয়েছে?',
        options: ['Next month', 'Tomorrow morning at 8 AM', 'Never'],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 6,
    levelBn: 'Bonus Story 6 · Workplace English',
    titleEn: 'Completing a Safe Site Handover Report',
    titleBn: 'বোনাস গল্প ৬: নিরাপদ সাইট হ্যান্ডওভার ও রিপোর্ট',
    settingBn:
      'এক বছর পর করিম এখন জুনিয়র টেকনিশিয়ানদের টিম লিডার। প্রজেক্ট শেষে সে প্রকৌশলীর কাছে পরিষ্কারভাবে কাজের রিপোর্ট বুঝিয়ে দিচ্ছে।',
    imageUrl: BOOK_ASSETS.workshopStory,
    imageAlt: 'Skilled technical team leader handing over a completed electrical inspection report',
    keyWords: ['We have completed', 'Tested every switch', 'Safe to operate', 'Handover report', 'Team leader'],
    keyStructuresNote:
      'Key Structures Spotted: #24 (We finished / have completed...), #28 (There is no fault...), #30 (Our team is ready...)',
    speakWritePrompts: [
      'Sir, we completed ________ and tested ________.',
      'Everything is safe and ready for ________.',
    ],
    lines: [
      {
        speaker: 'Engineer',
        en: 'Good afternoon, Karim. Is the third-floor electrical panel ready for inspection?',
        pron: 'গুড আফটারনুন, করিম। ইজ দা থার্ড-ফ্লোর ইলেকট্রিক্যাল প্যানেল রেডি ফর ইনস্পেকশন?',
        bn: 'শুভ অপরাহ্ণ, করিম। ৩য় তলার ইলেকট্রিক্যাল প্যানেল কি পরিদর্শনের জন্য প্রস্তুত?',
        ruleRef: 18,
      },
      {
        speaker: 'Karim',
        en: 'Yes, Sir. Our team completed the wiring yesterday and tested every breaker this morning.',
        pron: 'ইয়েস, স্যার। আওয়ার টিম কমপ্লিটেড দা ওয়্যারিং ইয়েস্টারডে অ্যান্ড টেস্টেড এভরি ব্রেকার দিস মর্নিং।',
        bn: 'জি, স্যার। আমাদের দল গতকাল ওয়্যারিং শেষ করেছে এবং আজ সকালে প্রতিটি ব্রেকার পরীক্ষা করেছে।',
        ruleRef: 11,
      },
      {
        speaker: 'Engineer',
        en: 'Did you check the earthing and label all switches clearly?',
        pron: 'ডিড ইউ চেক দা আর্থিং অ্যান্ড লেবেল অল সুইচেস ক্লিয়ারলি?',
        bn: 'তোমরা কি আর্থিং পরীক্ষা করেছ এবং সব সুইচে পরিষ্কার লেবেল লাগিয়েছ?',
        ruleRef: 18,
      },
      {
        speaker: 'Karim',
        en: 'Yes, Sir. There is no fault. Every wire is tight, the earthing is safe, and I signed the handover checklist.',
        pron: 'ইয়েস, স্যার। দেয়ার ইজ নো ফল্ট। এভরি ওয়্যার ইজ টাইট, দা আর্থিং ইজ সেফ, অ্যান্ড আই সাইনড দা হ্যান্ডওভার চেকলিস্ট।',
        bn: 'জি, স্যার। কোনো ত্রুটি নেই। প্রতিটি তার শক্ত করে লাগানো আছে, আর্থিং নিরাপদ, এবং আমি হ্যান্ডওভার চেকলিস্টে স্বাক্ষর করেছি।',
        ruleRef: 20,
      },
      {
        speaker: 'Engineer',
        en: 'Well done, Karim! Your clear English and neat work make you a strong leader.',
        pron: 'ওয়েল ডান, করিম! ইওর ক্লিয়ার ইংলিশ অ্যান্ড নিট ওয়ার্ক মেক ইউ আ স্ট্রং লিডার।',
        bn: 'শাবাশ, করিম! তোমার স্পষ্ট ইংরেজি এবং পরিপাটি কাজ তোমাকে একজন শক্তিশালী লিডার বানিয়েছে।',
        ruleRef: 30,
      },
    ],
    moralBn:
      'দক্ষ হাতের সাথে স্পষ্ট ইংরেজি যোগ হলে একজন সাধারণ শিক্ষার্থী মাত্র এক বছরেই জুনিয়র কর্মী থেকে টিম লিডারে উন্নীত হতে পারে।',
    quiz: [
      {
        questionBn: 'করিমের দল কখন প্রতিটি ব্রেকার পরীক্ষা করেছে?',
        options: ['This morning', 'Last year', 'Not yet'],
        correctIndex: 0,
      },
      {
        questionBn: 'প্যানেল সম্পর্কে করিম কী নিশ্চিত করেছে?',
        options: ['There is no fault and earthing is safe', 'One wire is missing', 'Power is broken'],
        correctIndex: 0,
      },
      {
        questionBn: 'হ্যান্ডওভার চেকলিস্টে কে স্বাক্ষর করেছে?',
        options: ['Karim', 'Nobody', 'A visitor'],
        correctIndex: 0,
      },
    ],
  },
];
