import {
  BangladeshiMistakeItem,
  IntermediateTopic,
  SurvivalPhrase,
  TenseItem,
  WritingTemplate,
} from '../types/book';

// Part 0: Day-1 Survival Kit (20 Instant Phrases with IPA & Bangla Pronunciation)
export const DAY_ONE_SURVIVAL_PHRASES: SurvivalPhrase[] = [
  { id: 1, en: 'Good morning, Sir.', ipa: '/ɡʊd ˈmɔːrnɪŋ sɜːr/', pron: 'গুড মর্নিং, স্যার।', bn: 'সুপ্রভাত, স্যার।' },
  { id: 2, en: 'How are you?', ipa: '/haʊ ɑːr juː/', pron: 'হাউ আর ইউ?', bn: 'আপনি কেমন আছেন?' },
  { id: 3, en: 'I am fine, thank you.', ipa: '/aɪ æm faɪn ˈθæŋk juː/', pron: 'আই অ্যাম ফাইন, থ্যাংক ইউ।', bn: 'আমি ভালো আছি, ধন্যবাদ।' },
  { id: 4, en: 'My name is ...', ipa: '/maɪ neɪm ɪz/', pron: 'মাই নেম ইজ ...', bn: 'আমার নাম ...' },
  { id: 5, en: 'Nice to meet you.', ipa: '/naɪs tuː miːt juː/', pron: 'নাইস টু মিট ইউ।', bn: 'আপনার সাথে দেখা হয়ে ভালো লাগল।' },
  { id: 6, en: 'Excuse me.', ipa: '/ɪkˈskjuːz miː/', pron: 'এক্সকিউজ মি।', bn: 'মাফ করবেন / একটু শুনুন।' },
  { id: 7, en: 'Please help me.', ipa: '/pliːz help miː/', pron: 'প্লিজ হেল্প মি।', bn: 'দয়া করে আমাকে সাহায্য করুন।' },
  { id: 8, en: 'I am sorry.', ipa: '/aɪ æm ˈsɒri/', pron: 'আই অ্যাম সরি।', bn: 'আমি দুঃখিত।' },
  { id: 9, en: 'No problem.', ipa: '/noʊ ˈprɒbləm/', pron: 'নো প্রবলেম।', bn: 'কোনো সমস্যা নেই।' },
  { id: 10, en: 'I understand.', ipa: '/aɪ ˌʌndərˈstænd/', pron: 'আই আন্ডারস্ট্যান্ড।', bn: 'আমি বুঝতে পেরেছি।' },
  { id: 11, en: "I don't understand.", ipa: '/aɪ doʊnt ˌʌndərˈstænd/', pron: 'আই ডোন্ট আন্ডারস্ট্যান্ড।', bn: 'আমি বুঝতে পারিনি।' },
  { id: 12, en: 'Please speak slowly.', ipa: '/pliːz spiːk ˈsloʊli/', pron: 'প্লিজ স্পিক স্লোলি।', bn: 'দয়া করে ধীরে বলুন।' },
  { id: 13, en: 'Please repeat that.', ipa: '/pliːz rɪˈpiːt ðæt/', pron: 'প্লিজ রিপিট দ্যাট।', bn: 'দয়া করে ওটা আবার বলুন।' },
  { id: 14, en: 'Wait a minute, please.', ipa: '/weɪt ə ˈmɪnɪt pliːz/', pron: 'ওয়েট আ মিনিট, প্লিজ।', bn: 'দয়া করে এক মিনিট অপেক্ষা করুন।' },
  { id: 15, en: 'Where is the washroom?', ipa: '/weər ɪz ðə ˈwɒʃruːm/', pron: 'হোয়্যার ইজ দা ওয়াশরুম?', bn: 'ওয়াশরুম কোথায়?' },
  { id: 16, en: 'How much is this?', ipa: '/haʊ mʌtʃ ɪz ðɪs/', pron: 'হাউ মাচ ইজ দিস?', bn: 'এটির দাম কত?' },
  { id: 17, en: 'I need water.', ipa: '/aɪ niːd ˈwɔːtər/', pron: 'আই নিড ওয়াটার।', bn: 'আমার পানি দরকার।' },
  { id: 18, en: 'I am ready.', ipa: '/aɪ æm ˈredi/', pron: 'আই অ্যাম রেডি।', bn: 'আমি প্রস্তুত।' },
  { id: 19, en: 'It is done, Sir.', ipa: '/ɪt ɪz dʌn sɜːr/', pron: 'ইট ইজ ডান, স্যার।', bn: 'কাজটি হয়ে গেছে, স্যার।' },
  { id: 20, en: 'See you tomorrow.', ipa: '/siː juː təˈmɒroʊ/', pron: 'সি ইউ টুমরো।', bn: 'আগামীকাল দেখা হবে।' },
];

// Complete 12 English Tenses using ONE unified workplace verb ("repair") so learners compare forms effortlessly
export const TWELVE_TENSES: TenseItem[] = [
  // PRESENT (4)
  {
    id: 'present-simple',
    timeZone: 'Present',
    aspect: 'Simple',
    nameEn: 'Present Simple',
    nameBn: 'সাধারণ বর্তমান (প্রতিদিনের অভ্যাস ও কাজ)',
    formula: 'Subject + V1 (s/es for He/She/It)',
    whenToUseBn: 'প্রতিদিন যে কাজ করেন বা যেটি আপনার নিয়মিত পেশা।',
    exampleEn: 'I repair motors every day.',
    exampleIpa: '/aɪ rɪˈpeər ˈmoʊtərz ˈevri deɪ/',
    examplePron: 'আই রিপেয়ার মোটরস এভরি ডে।',
    exampleBn: 'আমি প্রতিদিন মোটর মেরামত করি।',
  },
  {
    id: 'present-continuous',
    timeZone: 'Present',
    aspect: 'Continuous',
    nameEn: 'Present Continuous',
    nameBn: 'চলমান বর্তমান (ঠিক এখন ঘটছে)',
    formula: 'Subject + am / is / are + V-ing',
    whenToUseBn: 'কথা বলার ঠিক এই মুহূর্তে যে কাজটি চলছে।',
    exampleEn: 'I am repairing the motor right now.',
    exampleIpa: '/aɪ æm rɪˈpeərɪŋ ðə ˈmoʊtər raɪt naʊ/',
    examplePron: 'আই অ্যাম রিপেয়ারিং দা মোটর রাইট নাউ।',
    exampleBn: 'আমি ঠিক এখন মোটরটি মেরামত করছি।',
  },
  {
    id: 'present-perfect',
    timeZone: 'Present',
    aspect: 'Perfect',
    nameEn: 'Present Perfect',
    nameBn: 'পুরাঘটিত বর্তমান (এইমাত্র শেষ হয়েছে, ফল এখনো আছে)',
    formula: 'Subject + have / has + V3',
    whenToUseBn: 'কাজটি শেষ করেছেন এবং বসকে রিপোর্ট করছেন ("করেছি")।',
    exampleEn: 'I have repaired the motor, Sir.',
    exampleIpa: '/aɪ hæv rɪˈpeərd ðə ˈmoʊtər sɜːr/',
    examplePron: 'আই হ্যাভ রিপেয়ার্ড দা মোটর, স্যার।',
    exampleBn: 'স্যার, আমি মোটরটি মেরামত করেছি।',
  },
  {
    id: 'present-perfect-continuous',
    timeZone: 'Present',
    aspect: 'Perfect Continuous',
    nameEn: 'Present Perfect Continuous',
    nameBn: 'দীর্ঘ সময় ধরে চলমান বর্তমান',
    formula: 'Subject + have / has + been + V-ing + for/since',
    whenToUseBn: 'অতীতে শুরু হয়ে এখনো চলছে (কতক্ষণ ধরে করছেন তা বলতে)।',
    exampleEn: 'I have been repairing this motor for two hours.',
    exampleIpa: '/aɪ hæv biːn rɪˈpeərɪŋ ðɪs ˈmoʊtər fɔːr tuː ˈaʊərz/',
    examplePron: 'আই হ্যাভ বিন রিপেয়ারিং দিস মোটর ফর টু আওয়ার্স।',
    exampleBn: 'আমি দুই ঘণ্টা ধরে এই মোটরটি মেরামত করছি।',
  },

  // PAST (4)
  {
    id: 'past-simple',
    timeZone: 'Past',
    aspect: 'Simple',
    nameEn: 'Past Simple',
    nameBn: 'সাধারণ অতীত (গতকাল বা আগে শেষ হয়েছে)',
    formula: 'Subject + V2 (Past Form)',
    whenToUseBn: 'নির্দিষ্ট অতীত সময়ে (গতকাল, গত সপ্তাহে) ঘটে যাওয়া কাজ।',
    exampleEn: 'I repaired the motor yesterday.',
    exampleIpa: '/aɪ rɪˈpeərd ðə ˈmoʊtər ˈjestərdeɪ/',
    examplePron: 'আই রিপেয়ার্ড দা মোটর ইয়েস্টারডে।',
    exampleBn: 'আমি গতকাল মোটরটি মেরামত করেছিলাম।',
  },
  {
    id: 'past-continuous',
    timeZone: 'Past',
    aspect: 'Continuous',
    nameEn: 'Past Continuous',
    nameBn: 'চলমান অতীত (তখন করছিলাম)',
    formula: 'Subject + was / were + V-ing',
    whenToUseBn: 'অতীতের কোনো নির্দিষ্ট সময়ে একটি কাজ চলছিল বোঝাতে।',
    exampleEn: 'I was repairing the motor when you called.',
    exampleIpa: '/aɪ wɒz rɪˈpeərɪŋ ðə ˈmoʊtər wen juː kɔːld/',
    examplePron: 'আই ওয়াজ রিপেয়ারিং দা মোটর হোয়েন ইউ কলড।',
    exampleBn: 'আপনি যখন ফোন করেছিলেন, তখন আমি মোটরটি মেরামত করছিলাম।',
  },
  {
    id: 'past-perfect',
    timeZone: 'Past',
    aspect: 'Perfect',
    nameEn: 'Past Perfect',
    nameBn: 'পুরাঘটিত অতীত (অন্য কাজের আগেই শেষ হয়েছিল)',
    formula: 'Subject + had + V3',
    whenToUseBn: 'অতীতে দুটি কাজের মধ্যে যেটি আরও আগে শেষ হয়েছিল।',
    exampleEn: 'I had repaired the motor before the client arrived.',
    exampleIpa: '/aɪ hæd rɪˈpeərd ðə ˈmoʊtər bɪˈfɔːr ðə ˈklaɪənt əˈraɪvd/',
    examplePron: 'আই হ্যাড রিপেয়ার্ড দা মোটর বিফোর দা ক্লায়েন্ট অ্যারাইভড।',
    exampleBn: 'ক্লায়েন্ট আসার আগেই আমি মোটরটি মেরামত করে ফেলেছিলাম।',
  },
  {
    id: 'past-perfect-continuous',
    timeZone: 'Past',
    aspect: 'Perfect Continuous',
    nameEn: 'Past Perfect Continuous',
    nameBn: 'অতীতে দীর্ঘ সময় ধরে চলমান কাজ',
    formula: 'Subject + had + been + V-ing + for/since',
    whenToUseBn: 'অতীতে কোনো ঘটনার আগে কতক্ষণ ধরে কাজ চলছিল।',
    exampleEn: 'We had been repairing the line since morning.',
    exampleIpa: '/wiː hæd biːn rɪˈpeərɪŋ ðə laɪn sɪns ˈmɔːrnɪŋ/',
    examplePron: 'উই হ্যাড বিন রিপেয়ারিং দা লাইন সিন্স মর্নিং।',
    exampleBn: 'আমরা সকাল থেকে লাইনটি মেরামত করছিলাম।',
  },

  // FUTURE (4)
  {
    id: 'future-simple',
    timeZone: 'Future',
    aspect: 'Simple',
    nameEn: 'Future Simple',
    nameBn: 'সাধারণ ভবিষ্যৎ (করব)',
    formula: 'Subject + will + V1',
    whenToUseBn: 'ভবিষ্যতে কোনো কাজ করবেন বা প্রতিশ্রুতি দিচ্ছেন।',
    exampleEn: 'I will repair the motor tomorrow.',
    exampleIpa: '/aɪ wɪl rɪˈpeər ðə ˈmoʊtər təˈmɒroʊ/',
    examplePron: 'আই উইল রিপেয়ার দা মোটর টুমরো।',
    exampleBn: 'আমি আগামীকাল মোটরটি মেরামত করব।',
  },
  {
    id: 'future-continuous',
    timeZone: 'Future',
    aspect: 'Continuous',
    nameEn: 'Future Continuous',
    nameBn: 'চলমান ভবিষ্যৎ (তখন করতে থাকব)',
    formula: 'Subject + will be + V-ing',
    whenToUseBn: 'ভবিষ্যতের নির্দিষ্ট সময়ে যে কাজ চলতে থাকবে।',
    exampleEn: 'At 10 AM tomorrow, I will be repairing the panel.',
    exampleIpa: '/æt ten eɪ em təˈmɒroʊ aɪ wɪl biː rɪˈpeərɪŋ ðə ˈpænəl/',
    examplePron: 'অ্যাট টেন এ.এম. টুমরো, আই উইল বি রিপেয়ারিং দা প্যানেল।',
    exampleBn: 'আগামীকাল সকাল ১০টায় আমি প্যানেলটি মেরামত করতে থাকব।',
  },
  {
    id: 'future-perfect',
    timeZone: 'Future',
    aspect: 'Perfect',
    nameEn: 'Future Perfect',
    nameBn: 'পুরাঘটিত ভবিষ্যৎ (নির্দিষ্ট সময়ের মধ্যে শেষ করে ফেলব)',
    formula: 'Subject + will have + V3 + by [time]',
    whenToUseBn: 'ডেডলাইন বা নির্দিষ্ট সময়ের আগেই কাজটি শেষ হয়ে যাবে বোঝাতে।',
    exampleEn: 'I will have repaired the motor by 5 PM.',
    exampleIpa: '/aɪ wɪl hæv rɪˈpeərd ðə ˈmoʊtər baɪ faɪv piː em/',
    examplePron: 'আই উইল হ্যাভ রিপেয়ার্ড দা মোটর বাই ফাইভ পি.এম.।',
    exampleBn: 'বিকেল ৫টার মধ্যেই আমি মোটরটি মেরামত শেষ করে ফেলব।',
  },
  {
    id: 'future-perfect-continuous',
    timeZone: 'Future',
    aspect: 'Perfect Continuous',
    nameEn: 'Future Perfect Continuous',
    nameBn: 'ভবিষ্যতে দীর্ঘ সময় ধরে চলমান অভিজ্ঞতা',
    formula: 'Subject + will have been + V-ing + for [duration]',
    whenToUseBn: 'ভবিষ্যতের একটি সময়ে আপনার কাজের মেয়াদ কত বছর পূর্ণ হবে।',
    exampleEn: 'By next year, I will have been working here for three years.',
    exampleIpa: '/baɪ nekst jɪər aɪ wɪl hæv biːn ˈwɜːrkɪŋ hɪər fɔːr θriː jɪərz/',
    examplePron: 'বাই নেক্সট ইয়ার, আই উইল হ্যাভ বিন ওয়ার্কিং হিয়ার ফর থ্রি ইয়ার্স।',
    exampleBn: 'আগামী বছর নাগাদ আমি এখানে তিন বছর ধরে কাজ করতে থাকব।',
  },
];

// Intermediate Grammar Concepts for Learners Advancing Beyond Basics
export const INTERMEDIATE_TOPICS: IntermediateTopic[] = [
  {
    id: 'passive-voice',
    titleEn: 'Active vs. Passive Voice in Workplace Reports',
    titleBn: 'কর্মক্ষেত্রের রিপোর্টে Active ও Passive Voice',
    formula: 'Object + is / was / has been + V3 (Past Participle)',
    explanationBn:
      'অফিস বা ফ্যাক্টরিতে অনেক সময় কে কাজটি করেছে তার চেয়ে "কোন কাজটি হয়েছে" তা বেশি জরুরি। তখন Passive Voice ব্যবহার করলে রিপোর্ট খুব পেশাদার শোনায়।',
    workplaceTipBn:
      'রিপোর্ট লেখার সময় "I fixed the cable" এর পাশাপাশি "The cable was fixed and tested" বলা শিখুন।',
    examples: [
      {
        en: 'The circuit breaker was replaced safely.',
        ipa: '/ðə ˈsɜːrkɪt ˈbreɪkər wɒz rɪˈpleɪst ˈseɪfli/',
        pron: 'দা সার্কিট ব্রেকার ওয়াজ রিপ্লেসড সেফলি।',
        bn: 'সার্কিট ব্রেকারটি নিরাপদে পরিবর্তন করা হয়েছে।',
      },
      {
        en: 'All machines are checked every morning.',
        ipa: '/ɔːl məˈʃiːnz ɑːr tʃekt ˈevri ˈmɔːrnɪŋ/',
        pron: 'অল মেশিনস আর চেকড এভরি মর্নিং।',
        bn: 'প্রতিদিন সকালে সব মেশিন পরীক্ষা করা হয়।',
      },
    ],
  },
  {
    id: 'comparatives',
    titleEn: 'Comparatives & Superlatives (Comparing Tools & Quality)',
    titleBn: 'তুলনা করা (বেশি ভালো · সবচেয়ে ভালো)',
    formula: 'Short word: -er / the -est · Long word: more / the most',
    explanationBn:
      'দুটি জিনিস তুলনা করতে -er বা more + than বসান (safer than, more durable than)। আর সবার মধ্যে সেরা বোঝাতে the -est বা the most বসান।',
    workplaceTipBn:
      'ব্যতিক্রম মনে রাখুন: good → better → best এবং bad → worse → worst। কখনো "more better" বলবেন না!',
    examples: [
      {
        en: 'Copper wire is stronger than aluminum wire.',
        ipa: '/ˈkɒpər ˈwaɪər ɪz ˈstrɒŋɡər ðæn əˈluːmɪnəm ˈwaɪər/',
        pron: 'কপার ওয়্যার ইজ স্ট্রংগার দ্যান অ্যালুমিনিয়াম ওয়্যার।',
        bn: 'তামার তার অ্যালুমিনিয়াম তারের চেয়ে বেশি মজবুত।',
      },
      {
        en: 'Safety is the most important rule in our workshop.',
        ipa: '/ˈseɪfti ɪz ðə moʊst ɪmˈpɔːrtənt ruːl ɪn ˈaʊər ˈwɜːrkʃɒp/',
        pron: 'সেফটি ইজ দা মোস্ট ইমপর্ট্যান্ট রুল ইন আওয়ার ওয়ার্কশপ।',
        bn: 'নিরাপত্তা আমাদের ওয়ার্কশপের সবচেয়ে গুরুত্বপূর্ণ নিয়ম।',
      },
    ],
  },
  {
    id: 'conditionals',
    titleEn: 'Safety & Troubleshooting Conditionals (If Clauses)',
    titleBn: 'শর্তসাপেক্ষ বাক্য (যদি ... হয়, তবে ...)',
    formula: 'Zero: If + V1, V1 · First: If + V1, will + V1',
    explanationBn:
      'যন্ত্রপাতি চালানো, নিরাপত্তা সতর্কতা ও সমস্যা সমাধানে "If" দিয়ে শর্তসাপেক্ষ বাক্য অত্যন্ত কাজের।',
    workplaceTipBn:
      'সাধারণ বৈজ্ঞানিক বা নিরাপত্তা সত্যে দুপাশেই V1 বসে ("If water touches live wire, it causes shock")।',
    examples: [
      {
        en: 'If the red light blinks, stop the machine immediately.',
        ipa: '/ɪf ðə red laɪt blɪŋks stɒp ðə məˈʃiːn ɪˈmiːdiətli/',
        pron: 'ইফ দা রেড লাইট ব্লিংকস, স্টপ দা মেশিন ইমিডিয়েটলি।',
        bn: 'যদি লাল বাতি জ্বলে-নেভে, তবে সাথে সাথে মেশিন বন্ধ করো।',
      },
      {
        en: 'If we order the part today, it will arrive by Sunday.',
        ipa: '/ɪf wiː ˈɔːrdər ðə pɑːrt təˈdeɪ ɪt wɪl əˈraɪv baɪ ˈsʌndeɪ/',
        pron: 'ইফ উই অর্ডার দা পার্ট টুডে, ইট উইল অ্যারাইভ বাই সানডে।',
        bn: 'আজ যন্ত্রাংশ অর্ডার করলে রবিবারের মধ্যে পৌঁছে যাবে।',
      },
    ],
  },
  {
    id: 'reported-speech',
    titleEn: 'Reported Speech (Passing Messages from Supervisors)',
    titleBn: 'অন্যের কথা বস বা সহকর্মীকে জানানো',
    formula: 'He/She said that ... · The manager asked me to + V1',
    explanationBn:
      'বস বা ক্লায়েন্টের নির্দেশনা আরেকজনকে জানানোর সময় সরাসরি উদ্ধৃতির বদলে Reported Speech ব্যবহার করুন।',
    workplaceTipBn:
      'অনুরোধ বা নির্দেশ জানাতে "He told me to..." বা "She asked me to..." খুব সহজ ও নির্ভুল কাঠামো।',
    examples: [
      {
        en: 'The supervisor told me to check the third floor panel.',
        ipa: '/ðə ˈsuːpərvaɪzər toʊld miː tuː tʃek ðə θɜːrd flɔːr ˈpænəl/',
        pron: 'দা সুপারভাইজার টোল্ড মি টু চেক দা থার্ড ফ্লোর প্যানেল।',
        bn: 'সুপারভাইজার আমাকে ৩য় তলার প্যানেল পরীক্ষা করতে বলেছেন।',
      },
      {
        en: 'The engineer said that the testing was successful.',
        ipa: '/ði ˌendʒɪˈnɪər sed ðæt ðə ˈtestɪŋ wɒz səkˈsesfəl/',
        pron: 'দি ইঞ্জিনিয়ার সেড দ্যাট দা টেস্টিং ওয়াজ সাকসেসফুল।',
        bn: 'ইঞ্জিনিয়ার বলেছেন যে পরীক্ষাটি সফল হয়েছে।',
      },
    ],
  },
  {
    id: 'phrasal-verbs',
    titleEn: '10 Essential Workplace Phrasal Verbs',
    titleBn: 'কর্মক্ষেত্রের ১০টি অপরিহার্য Phrasal Verb',
    formula: 'turn on/off · plug in · fill out · carry out · hand over · shut down · look for · find out',
    explanationBn:
      'ইংরেজিতে ছোট Verb-এর সাথে Preposition বসে নতুন অর্থ তৈরি করে। বিদেশি সুপারভাইজার ও ম্যানুয়ালে এই শব্দগুলো প্রতিদিন ব্যবহৃত হয়।',
    workplaceTipBn:
      'উদাহরণ: "Fill out this form" (ফর্মটি পূরণ করো), "Hand over the keys" (চাবি হস্তান্তর করো), "Shut down the generator" (জেনারেটর বন্ধ করো)।',
    examples: [
      {
        en: 'Please fill out the attendance form and hand it over to me.',
        ipa: '/pliːz fɪl aʊt ði əˈtendəns fɔːrm ænd hænd ɪt ˈoʊvər tuː miː/',
        pron: 'প্লিজ ফিল আউট দি অ্যাটেনডেন্স ফর্ম অ্যান্ড হ্যান্ড ইট ওভার টু মি।',
        bn: 'দয়া করে হাজিরা ফর্মটি পূরণ করে আমার কাছে জমা দিন।',
      },
      {
        en: 'Let us find out why the breaker tripped.',
        ipa: '/let ʌs faɪnd aʊt waɪ ðə ˈbreɪkər trɪpt/',
        pron: 'লেট আস ফাইন্ড আউট হোয়াই দা ব্রেকার ট্রিপড।',
        bn: 'চলো খুঁজে বের করি কেন ব্রেকার ট্রিপ করেছে।',
      },
    ],
  },
];

// Practical Workplace Writing Templates (Email, Leave Application, Fault Report, CV)
export const WRITING_TEMPLATES: WritingTemplate[] = [
  {
    id: 'leave-application',
    titleEn: '1. Short Leave Application / Email',
    titleBn: 'ছুটির আবেদন বা ইমেইল',
    contextBn: 'অসুস্থতা বা জরুরি পারিবারিক কারণে সুপারভাইজারকে ভদ্রভাবে ছুটি চাইতে।',
    subjectLine: 'Subject: Application for One Day Leave — [Your Name]',
    bodyEn: `Dear Sir,

I am writing to politely request one day of leave tomorrow ([Date]) due to a personal family matter / fever. I have already completed today's assigned tasks and informed my teammate.

I will return to duty on [Next Date] at 8:00 AM. Thank you for your kind understanding.

Sincerely,
[Your Full Name]
[Your Trade / ID Number] · [Phone Number]`,
    notesBn: 'সবসময় ছোট, পরিষ্কার ও ভদ্র ভাষা রাখুন। কবে কাজে ফিরবেন তা অবশ্যই উল্লেখ করুন।',
  },
  {
    id: 'fault-report',
    titleEn: '2. Daily Site / Maintenance Fault Report (WhatsApp or Logbook)',
    titleBn: 'সাইট রিপোর্ট বা ত্রুটি জানানোর মেসেজ',
    contextBn: 'কাজের শেষে ইঞ্জিনিয়ার বা ক্লায়েন্টকে পরিষ্কার আপডেট পাঠাতে।',
    subjectLine: 'Site Update — [Building / Floor Name]',
    bodyEn: `Good afternoon, Sir.
Location: 3rd Floor Distribution Board
Issue Found: Loose neutral connection and damaged 20A circuit breaker.
Action Taken: Switched off main power, tightened all terminals, replaced the breaker, and tested voltage (228V normal).
Status: Completed and safe to operate.

Reported by: [Your Name]`,
    notesBn: '৪টি ধাপে রিপোর্ট লিখুন: ১. অবস্থান (Location), ২. সমস্যা (Issue), ৩. সমাধান (Action), ৪. বর্তমান অবস্থা (Status)।',
  },
  {
    id: 'job-application',
    titleEn: '3. Job Application Message / Cover Note',
    titleBn: 'চাকরির আবেদনের সংক্ষিপ্ত বার্তা',
    contextBn: 'ইমেইল বা হোয়াটসঅ্যাপে সিভি পাঠানোর সময় সাথে যা লিখবেন।',
    subjectLine: 'Subject: Application for Junior Electrical Technician — [Your Name]',
    bodyEn: `Dear Hiring Manager,

Good morning. I am writing to apply for the position of Junior Electrical Technician at your respected company. I completed my practical vocational training at EDIFICE Consultants Vocational Institute, Dhaka.

I can read electrical drawings, install house and commercial wiring, test panels safely, and communicate clearly in English and Bangla. Please find my CV attached.

Thank you for your time and consideration.
Best regards,
[Your Full Name] · Phone: [01XXXXXXXXX]`,
    notesBn: 'কখনো শুধু ফাঁকা মেসেজে সিভি পাঠাবেন না—এই সংক্ষিপ্ত ভদ্র নোটটি আপনাকে অন্যদের চেয়ে এগিয়ে রাখবে।',
  },
  {
    id: 'cv-summary',
    titleEn: '4. Clean Vocational CV / Biodata Profile',
    titleBn: 'দক্ষ কর্মীর আধুনিক সিভি প্রোফাইল',
    contextBn: 'দেশ ও বিদেশের চাকরির জন্য সংক্ষিপ্ত ও শক্তিশালী সিভি কাঠামো।',
    bodyEn: `CAREER OBJECTIVE:
A dedicated and safety-focused Electrical Technician trained at EDIFICE Consultants, Dhaka, seeking to contribute practical wiring, maintenance, and teamwork skills to a growing organization.

CORE SKILLS:
• House & Commercial Electrical Wiring   • Circuit Breaker & Panel Testing
• Multimeter & Safety Equipment Handling • Spoken English & Workplace Reporting

TRAINING:
Vocational Technical & Spoken English Certificate — EDIFICE Consultants, Dhaka (2026)`,
    notesBn: 'সিভি এক পৃষ্ঠায় পরিষ্কার রাখুন। নিজের বাস্তব কাজের দক্ষতা (Core Skills) প্রথমেই তুলে ধরুন।',
  },
];

// Common Bangladeshi Mistakes & Quick Fixes (Expanded from Page 23 of Alve's 3rd Edition)
export const COMMON_BD_MISTAKES: BangladeshiMistakeItem[] = [
  {
    id: 1,
    wrongEn: 'Myself Rahim.',
    correctEn: 'My name is Rahim. / I am Rahim.',
    correctIpa: '/maɪ neɪm ɪz rəˈhiːm/',
    correctPron: 'মাই নেম ইজ রহিম।',
    reasonBn: 'নিজের পরিচয় কখনো "Myself" দিয়ে শুরু করবেন না।',
  },
  {
    id: 2,
    wrongEn: 'I am go to office.',
    correctEn: 'I go to office. / I am going to office.',
    correctIpa: '/aɪ ɡoʊ tuː ˈɒfɪs/',
    correctPron: 'আই গো টু অফিস।',
    reasonBn: 'সরাসরি মূল Verb (go) এর আগে am বসাবেন না; am বসলে going হবে।',
  },
  {
    id: 3,
    wrongEn: "He don't know.",
    correctEn: "He doesn't know.",
    correctIpa: '/hiː ˈdʌzənt noʊ/',
    correctPron: 'হি ডাজেন্ট নো।',
    reasonBn: 'He, She, It বা একজনের নামের সাথে সবসময় doesn\'t বসে।',
  },
  {
    id: 4,
    wrongEn: "I didn't went there.",
    correctEn: "I didn't go there.",
    correctIpa: '/aɪ ˈdɪdənt ɡoʊ ðeər/',
    correctPron: 'আই ডিডেন্ট গো দেয়ার।',
    reasonBn: "didn't এর পরে সবসময় Verb-এর ১ম রূপ (V1 = go) বসে।",
  },
  {
    id: 5,
    wrongEn: 'I have a work.',
    correctEn: 'I have some work. / I have a job.',
    correctIpa: '/aɪ hæv sʌm wɜːrk/',
    correctPron: 'আই হ্যাভ সাম ওয়ার্ক।',
    reasonBn: '"Work" গণনা করা যায় না, তাই "a work" না বলে "some work" বা "a job" বলুন।',
  },
  {
    id: 6,
    wrongEn: 'Give me one water.',
    correctEn: 'Please give me a glass of water.',
    correctIpa: '/pliːz ɡɪv miː ə ɡlæs ɒv ˈwɔːtər/',
    correctPron: 'প্লিজ গিভ মি আ গ্লাস অফ ওয়াটার।',
    reasonBn: 'শুরুতে Please যোগ করুন এবং পানির জন্য "a glass/bottle of water" বলুন।',
  },
  {
    id: 7,
    wrongEn: 'I am agree with you.',
    correctEn: 'I agree with you.',
    correctIpa: '/aɪ əˈɡriː wɪð juː/',
    correctPron: 'আই অ্যাগ্রি উইথ ইউ।',
    reasonBn: '"Agree" নিজেই একটি Verb, তাই এর আগে am লাগে না।',
  },
  {
    id: 8,
    wrongEn: 'Today morning I came.',
    correctEn: 'This morning I came.',
    correctIpa: '/ðɪs ˈmɔːrnɪŋ aɪ keɪm/',
    correctPron: 'দিস মর্নিং আই কেম।',
    reasonBn: '"আজ সকাল" এর সঠিক ইংরেজি "This morning", "Today morning" নয়।',
  },
  {
    id: 9,
    wrongEn: 'I can to fix this.',
    correctEn: 'I can fix this.',
    correctIpa: '/aɪ kæn fɪks ðɪs/',
    correctPron: 'আই ক্যান ফিক্স দিস।',
    reasonBn: 'Can, Could, Should, Must, Will-এর পর কখনো "to" বসে না।',
  },
  {
    id: 10,
    wrongEn: 'Return back the tool.',
    correctEn: 'Return the tool. / Give the tool back.',
    correctIpa: '/rɪˈtɜːrn ðə tuːl/',
    correctPron: 'রিটার্ন দা টুল।',
    reasonBn: '"Return" মানেই ফেরত দেওয়া, তাই এর সাথে আবার "back" বসানো ভুল।',
  },
];
