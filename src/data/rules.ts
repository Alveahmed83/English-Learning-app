import { GoldenRule } from '../types/book';

// Part 1: Exact 30 Fundamental Rules for Daily Communication (Aligned 1-to-1 with Alve Ahmed Shatu's 3rd Edition Pages 4–9, Proofread + IPA)
export const GOLDEN_RULES: GoldenRule[] = [
  // GROUP A: Breaking the Bangla-to-English Barrier (Rules 1–6)
  {
    id: 1,
    category: 'Group A: Foundation',
    titleEn: 'Put the Action Word (Verb) Second — S + V + O',
    titleBn: 'কাজের কথা (Verb) সবসময় ২য় স্থানে বসান — S + V + O',
    formula: 'Subject (কে) + Verb (কাজ) + Object (বস্তু / বাকি অংশ)',
    explanationBn:
      'বাংলায় আমরা বলি “আমি ভাত খাই” (আমি + ভাত + খাই)। কিন্তু ইংরেজিতে কাজের শব্দ (Verb) সবসময় ২য় স্থানে বসে: ব্যক্তি + কাজ + বস্তু (I + eat + rice)।',
    pitfallTipBn:
      'কখনো "I rice eat" বা "I machines repair" বলবেন না। শুধু কাজটিকে ২য় স্থানে আনলেই ইংরেজি বাক্য ঠিক হয়ে যাবে।',
    examples: [
      {
        en: 'I repair machines.',
        ipa: '/aɪ rɪˈpeər məˈʃiːnz/',
        pron: 'আই রিপেয়ার মেশিনস।',
        bn: 'আমি মেশিন মেরামত করি।',
      },
      {
        en: 'Rahim drives a car.',
        ipa: '/rəˈhiːm draɪvz ə kɑːr/',
        pron: 'রহিম ড্রাইভস আ কার।',
        bn: 'রহিম গাড়ি চালায়।',
      },
      {
        en: 'I eat rice.',
        ipa: '/aɪ iːt raɪs/',
        pron: 'আই ইট রাইস।',
        bn: 'আমি ভাত খাই।',
      },
    ],
    quiz: {
      questionBn: '"আমি মেশিন মেরামত করি" — এর সঠিক ইংরেজি কোনটি?',
      options: ['I machines repair.', 'I repair machines.', 'Repair I machines.'],
      correctIndex: 1,
      explanationBn: 'ইংরেজিতে কাজের শব্দ (repair) সবসময় ২য় স্থানে বসে: I + repair + machines।',
    },
  },
  {
    id: 2,
    category: 'Group A: Foundation',
    titleEn: 'Never Drop "am / is / are" in Present State',
    titleBn: 'বর্তমান অবস্থায় "am / is / are" বাদ দেবেন না',
    formula: 'I am · He/She/It is · You/We/They are + Noun / Adjective',
    explanationBn:
      'বাংলায় আমরা বলি “আমি ছাত্র” (মাঝে কোনো ক্রিয়া নেই)। কিন্তু ইংরেজিতে I-এর সাথে am, একজনের (He/She/It) সাথে is, এবং You/We/They-এর সাথে are বসাতেই হবে।',
    pitfallTipBn:
      'শুধু "I technician" বা "He ready" বলবেন না। অবশ্যই "I am a technician" এবং "He is ready" বলুন।',
    examples: [
      {
        en: 'I am a technician.',
        ipa: '/aɪ æm ə tekˈnɪʃən/',
        pron: 'আই অ্যাম আ টেকনিশিয়ান।',
        bn: 'আমি একজন টেকনিশিয়ান।',
      },
      {
        en: 'He is ready.',
        ipa: '/hiː ɪz ˈredi/',
        pron: 'হি ইজ রেডি।',
        bn: 'সে প্রস্তুত।',
      },
      {
        en: 'We are workers.',
        ipa: '/wiː ɑːr ˈwɜːrkərz/',
        pron: 'উই আর ওয়ার্কার্স।',
        bn: 'আমরা কর্মী।',
      },
    ],
    quiz: {
      questionBn: 'সঠিক বাক্য কোনটি? "আমি একজন দক্ষ কর্মী।"',
      options: ['I skilled worker.', 'I am a skilled worker.', 'I is a skilled worker.'],
      correctIndex: 1,
      explanationBn: 'I-এর সাথে সবসময় "am" বসে: I am a skilled worker।',
    },
  },
  {
    id: 3,
    category: 'Group A: Foundation',
    titleEn: 'Use "was / were" for Past State',
    titleBn: 'অতীতের অবস্থা বোঝাতে "was / were" বসান',
    formula: 'I/He/She/It was · You/We/They were + Place / State',
    explanationBn:
      'আগে কেউ কোথাও ছিল বা কেমন ছিল বোঝাতে am/is-এর জায়গায় was (একজন) এবং are-এর জায়গায় were (অনেক/You) বসান।',
    pitfallTipBn:
      'You একজন হলেও You-এর সাথে সবসময় "were" বসে ("You were ready"), কখনো "You was" নয়।',
    examples: [
      {
        en: 'I was at the factory yesterday.',
        ipa: '/aɪ wɒz æt ðə ˈfæktəri ˈjestərdeɪ/',
        pron: 'আই ওয়াজ অ্যাট দা ফ্যাক্টরি ইয়েস্টারডে।',
        bn: 'আমি গতকাল কারখানায় ছিলাম।',
      },
      {
        en: 'They were busy.',
        ipa: '/ðeɪ wɜːr ˈbɪzi/',
        pron: 'দে ওয়্যার বিজি।',
        bn: 'তারা ব্যস্ত ছিল।',
      },
      {
        en: 'He was absent on Monday.',
        ipa: '/hiː wɒz ˈæbsənt ɒn ˈmʌndeɪ/',
        pron: 'হি ওয়াজ অ্যাবসেন্ট অন মানডে।',
        bn: 'সে সোমবার অনুপস্থিত ছিল।',
      },
    ],
    quiz: {
      questionBn: '"তারা ব্যস্ত ছিল" — এর সঠিক ইংরেজি কোনটি?',
      options: ['They was busy.', 'They were busy.', 'They are busy yesterday.'],
      correctIndex: 1,
      explanationBn: 'They (একের বেশি) এর সাথে অতীতে "were" বসে।',
    },
  },
  {
    id: 4,
    category: 'Group A: Foundation',
    titleEn: 'Put "will" Before Any Future Action',
    titleBn: 'ভবিষ্যতের যেকোনো কাজের আগে "will" বসান',
    formula: 'Subject + will + Verb (V1)',
    explanationBn:
      'পরে কোনো কাজ করব, যাব, বা বলব বোঝাতে কাজের শব্দের আগে শুধু will (উইল) বসিয়ে দিন। I, He, She, We, They—সবার সাথেই will বসে।',
    pitfallTipBn:
      'Will-এর পরে Verb-এর সাথে কখনো s/es বা ing বসাবেন না; সবসময় মূল রূপ (V1) বসবে।',
    examples: [
      {
        en: 'I will finish the job tomorrow.',
        ipa: '/aɪ wɪl ˈfɪnɪʃ ðə dʒɒb təˈmɒroʊ/',
        pron: 'আই উইল ফিনিশ দা জব টুমরো।',
        bn: 'আমি আগামীকাল কাজটি শেষ করব।',
      },
      {
        en: 'She will call you.',
        ipa: '/ʃiː wɪl kɔːl juː/',
        pron: 'শি উইল কল ইউ।',
        bn: 'সে আপনাকে ফোন করবে।',
      },
      {
        en: 'I will come tomorrow.',
        ipa: '/aɪ wɪl kʌm təˈmɒroʊ/',
        pron: 'আই উইল কাম টুমরো।',
        bn: 'আমি আগামীকাল আসব।',
      },
    ],
    quiz: {
      questionBn: 'খালি ঘর পূরণ করুন: "I ____ come tomorrow."',
      options: ['am', 'was', 'will'],
      correctIndex: 2,
      explanationBn: 'আগামীকাল (ভবিষ্যৎ) বোঝাতে কাজের আগে "will" বসে।',
    },
  },
  {
    id: 5,
    category: 'Group A: Foundation',
    titleEn: '"I/He/She" Before Action, "me/him/her" After Action',
    titleBn: 'কাজের আগে "I/He/She" আর কাজের পরে "me/him/her"',
    formula: 'I/He/She/We/They + Verb + me/him/her/us/them',
    explanationBn:
      'যে কাজ করে (বাক্যের শুরুতে) তার জন্য I, He, She, We, They। আর যার ওপর কাজ হয় (বাক্যের শেষে) তার জন্য me, him, her, us, them বসবে।',
    pitfallTipBn:
      'কখনো "He helps I" বা "I know he" বলবেন না। বলুন "He helps me" এবং "I know him"।',
    examples: [
      {
        en: 'He helps me.',
        ipa: '/hiː helps miː/',
        pron: 'হি হেল্পস মি।',
        bn: 'সে আমাকে সাহায্য করে।',
      },
      {
        en: 'I know him.',
        ipa: '/aɪ noʊ hɪm/',
        pron: 'আই নো হিম।',
        bn: 'আমি তাকে চিনি।',
      },
      {
        en: 'Please call us tomorrow.',
        ipa: '/pliːz kɔːl ʌs təˈmɒroʊ/',
        pron: 'প্লিজ কল আস টুমরো।',
        bn: 'দয়া করে আমাদের আগামীকাল ফোন করবেন।',
      },
    ],
    quiz: {
      questionBn: '"আমি তাকে চিনি" — এর সঠিক ইংরেজি কোনটি?',
      options: ['I know he.', 'I know him.', 'Me know him.'],
      correctIndex: 1,
      explanationBn: 'Verb (know)-এর পরে "he" বদলে "him" হয়।',
    },
  },
  {
    id: 6,
    category: 'Group A: Foundation',
    titleEn: 'Simple Use of "a / an / the"',
    titleBn: '"a / an / the" এর সহজ ব্যবহার',
    formula: 'a (ব্যঞ্জনধ্বনি) · an (স্বরধ্বনি a, e, i, o, u) · the (নির্দিষ্ট জিনিস)',
    explanationBn:
      'একটি বোঝাতে সাধারণত a (a tool, a job) বসে। স্বরধ্বনির (a, e, i, o, u) আগে an (an electrician, an hour) বসে। আর নির্দিষ্ট কোনো জিনিস বোঝাতে the বসে।',
    pitfallTipBn:
      'Hour-এর শুরুতে H নীরব থাকায় উচ্চারণ "আওয়ার" (স্বরধ্বনি), তাই "an hour" হবে।',
    examples: [
      {
        en: 'I need a hammer.',
        ipa: '/aɪ niːd ə ˈhæmər/',
        pron: 'আই নিড আ হ্যামার।',
        bn: 'আমার একটি হাতুড়ি দরকার।',
      },
      {
        en: 'He is an electrician.',
        ipa: '/hiː ɪz æn ɪˌlekˈtrɪʃən/',
        pron: 'হি ইজ অ্যান ইলেকট্রিশিয়ান।',
        bn: 'সে একজন ইলেকট্রিশিয়ান।',
      },
      {
        en: 'Close the door.',
        ipa: '/kloʊz ðə dɔːr/',
        pron: 'ক্লোজ দা ডোর।',
        bn: 'দরজাটি বন্ধ করুন।',
      },
    ],
    quiz: {
      questionBn: 'কোনটি সঠিক?',
      options: ['a electrician', 'an electrician', 'an tool'],
      correctIndex: 1,
      explanationBn: 'Electrician স্বরধ্বনি (E) দিয়ে শুরু হওয়ায় এর আগে "an" বসে।',
    },
  },

  // GROUP B: Daily Actions & Time (Rules 7–12)
  {
    id: 7,
    category: 'Group B: Daily & Time',
    titleEn: 'Add "-s/-es" to Verbs with He / She / One Name',
    titleBn: 'বর্তমানে He / She / একজনের ক্ষেত্রে Verb-এর শেষে "-s" যোগ করুন',
    formula: 'I/You/We/They + V1 · He/She/It/Karim + V1 + s/es',
    explanationBn:
      'প্রতিদিনের অভ্যাস বা কাজের কথা বলতে I/You/We/They-এর সাথে মূল Verb বসে। কিন্তু He, She, It বা একজন মানুষের নামের সাথে Verb-এর শেষে -s/-es যোগ করতে হয়।',
    pitfallTipBn:
      'বাংলাদেশি শিক্ষার্থীরা প্রায়ই "Karim work here" বলে ফেলেন। একজন হলেই "-s" দিন: "Karim works here"।',
    examples: [
      {
        en: 'I work here.',
        ipa: '/aɪ wɜːrk hɪər/',
        pron: 'আই ওয়ার্ক হিয়ার।',
        bn: 'আমি এখানে কাজ করি।',
      },
      {
        en: 'Karim works here.',
        ipa: '/kəˈriːm wɜːrks hɪər/',
        pron: 'করিম ওয়ার্কস হিয়ার।',
        bn: 'করিম এখানে কাজ করে।',
      },
      {
        en: 'He fixes machines.',
        ipa: '/hiː ˈfɪksɪz məˈʃiːnz/',
        pron: 'হি ফিক্সেস মেশিনস।',
        bn: 'সে মেশিন ঠিক করে।',
      },
    ],
    quiz: {
      questionBn: 'খালি ঘর পূরণ করুন: "He ____ in a factory."',
      options: ['work', 'works', 'working'],
      correctIndex: 1,
      explanationBn: 'He-এর সাথে বর্তমান অভ্যাস বোঝাতে Verb-এর শেষে "-s" বসে: He works।',
    },
  },
  {
    id: 8,
    category: 'Group B: Daily & Time',
    titleEn: 'Use "am/is/are + Verb-ing" for Actions Happening Now',
    titleBn: 'এই মুহূর্তে চলছে এমন কাজে "am/is/are + Verb-ing"',
    formula: 'Subject + am / is / are + Verb-ing',
    explanationBn:
      'এখন কোনো কাজ করছি বা চলছে বোঝাতে am/is/are এর সাথে Verb-এর শেষে -ing দিন। কখনো শুধু "I working" বলবেন না, বলুন "I am working"।',
    pitfallTipBn:
      'Verb-ing একা কখনো পূর্ণ বাক্য হয় না—এর আগে অবশ্যই am, is বা are বসাতে হবে।',
    examples: [
      {
        en: 'I am checking the wire.',
        ipa: '/aɪ æm ˈtʃekɪŋ ðə ˈwaɪər/',
        pron: 'আই অ্যাম চেকিং দা ওয়্যার।',
        bn: 'আমি তারটি পরীক্ষা করছি।',
      },
      {
        en: 'The machine is running.',
        ipa: '/ðə məˈʃiːn ɪz ˈrʌnɪŋ/',
        pron: 'দা মেশিন ইজ রানিং।',
        bn: 'মেশিনটি চলছে।',
      },
      {
        en: 'I am working now.',
        ipa: '/aɪ æm ˈwɜːrkɪŋ naʊ/',
        pron: 'আই অ্যাম ওয়ার্কিং নাউ।',
        bn: 'আমি এখন কাজ করছি।',
      },
    ],
    quiz: {
      questionBn: '"আমি এখন তারটি পরীক্ষা করছি" — কোনটি সঠিক?',
      options: ['I checking the wire.', 'I am checking the wire.', 'I am check the wire.'],
      correctIndex: 1,
      explanationBn: 'এখন চলছে এমন কাজে "am + checking" বসে।',
    },
  },
  {
    id: 9,
    category: 'Group B: Daily & Time',
    titleEn: 'Use Verb 2nd Form (V2) for Past Actions',
    titleBn: 'অতীতে হয়ে যাওয়া কাজে Verb-এর ২য় রূপ (V2) বসান',
    formula: 'Subject + Verb (V2 / Past Form)',
    explanationBn:
      'কোনো কাজ আগে হয়ে গেছে বোঝাতে Verb-এর ২য় রূপ (V2) ব্যবহার করুন (Part 3-এ ১০০টি Verb-এর ৩টি রূপই দেওয়া আছে!)।',
    pitfallTipBn:
      'Yesterday থাকলে কখনো V1 (go) বসাবেন না; V2 (went) ব্যবহার করুন।',
    examples: [
      {
        en: 'I cleaned the room.',
        ipa: '/aɪ kliːnd ðə ruːm/',
        pron: 'আই ক্লিন্ড দা রুম।',
        bn: 'আমি ঘরটি পরিষ্কার করেছি।',
      },
      {
        en: 'He went to Dhaka.',
        ipa: '/hiː went tuː ˈdɑːkə/',
        pron: 'হি ওয়েন্ট টু ঢাকা।',
        bn: 'সে ঢাকায় গিয়েছিল।',
      },
      {
        en: 'Yesterday, I went to the institute.',
        ipa: '/ˈjestərdeɪ aɪ went tuː ði ˈɪnstɪtjuːt/',
        pron: 'ইয়েস্টারডে, আই ওয়েন্ট টু দি ইনস্টিটিউট।',
        bn: 'গতকাল আমি ইনস্টিটিউটে গিয়েছিলাম।',
      },
    ],
    quiz: {
      questionBn: 'খালি ঘর পূরণ করুন: "Yesterday, I ____ to the institute."',
      options: ['go', 'went', 'going'],
      correctIndex: 1,
      explanationBn: 'Yesterday অতীত সময়, তাই go-এর V2 রূপ "went" বসে।',
    },
  },
  {
    id: 10,
    category: 'Group B: Daily & Time',
    titleEn: 'Say "don\'t / doesn\'t" for Present Negatives',
    titleBn: 'বর্তমানে "না" বলতে "do not (don\'t) / does not (doesn\'t)"',
    formula: 'I/You/We/They + don\'t + V1 · He/She/It + doesn\'t + V1',
    explanationBn:
      'কখনো "I no know" বলবেন না। I/You/We/They-এর সাথে don\'t এবং He/She/It-এর সাথে doesn\'t বসান। (doesn\'t বসলে Verb-এর s উঠে যায়)।',
    pitfallTipBn:
      '"He doesn\'t knows" ভুল! doesn\'t বসলেই Verb-এর s উঠে গিয়ে "He doesn\'t know" হয়।',
    examples: [
      {
        en: "I don't smoke.",
        ipa: '/aɪ doʊnt smoʊk/',
        pron: 'আই ডোন্ট স্মোক।',
        bn: 'আমি ধূমপান করি না।',
      },
      {
        en: "He doesn't know.",
        ipa: '/hiː ˈdʌzənt noʊ/',
        pron: 'হি ডাজেন্ট নো।',
        bn: 'সে জানে না।',
      },
      {
        en: "I don't understand.",
        ipa: '/aɪ doʊnt ˌʌndərˈstænd/',
        pron: 'আই ডোন্ট আন্ডারস্ট্যান্ড।',
        bn: 'আমি বুঝতে পারছি না।',
      },
    ],
    quiz: {
      questionBn: 'সঠিক বাক্য কোনটি? "সে জানে না।"',
      options: ["He don't know.", "He doesn't know.", "He no know."],
      correctIndex: 1,
      explanationBn: 'He-এর সাথে বর্তমানে না-বোধক করতে "doesn\'t" বসে।',
    },
  },
  {
    id: 11,
    category: 'Group B: Daily & Time',
    titleEn: 'Say "didn\'t + V1" for Past Negatives',
    titleBn: 'অতীতে "করিনি/যাইনি" বলতে "didn\'t + V1"',
    formula: 'Subject + didn\'t + Verb (V1)',
    explanationBn:
      'অতীতের যেকোনো না-বোধক বাক্যে সবার সাথে didn\'t এবং তারপর Verb-এর মূল রূপ (V1) বসবে। "I didn\'t went" ভুল; সঠিক হলো "I didn\'t go"।',
    pitfallTipBn:
      'didn\'t নিজেই অতীত বুঝিয়ে দেয়, তাই এর পরে সবসময় V1 (go, see, come) বসাবেন।',
    examples: [
      {
        en: "I didn't see the message.",
        ipa: '/aɪ ˈdɪdənt siː ðə ˈmesɪdʒ/',
        pron: 'আই ডিডেন্ট সি দা মেসেজ।',
        bn: 'আমি মেসেজটি দেখিনি।',
      },
      {
        en: "He didn't come today.",
        ipa: '/hiː ˈdɪdənt kʌm təˈdeɪ/',
        pron: 'হি ডিডেন্ট কাম টুডে।',
        bn: 'সে আজ আসেনি।',
      },
      {
        en: "I didn't go there.",
        ipa: '/aɪ ˈdɪdənt ɡoʊ ðeər/',
        pron: 'আই ডিডেন্ট গো দেয়ার।',
        bn: 'আমি সেখানে যাইনি।',
      },
    ],
    quiz: {
      questionBn: 'সঠিক বাক্য কোনটি?',
      options: ["I didn't went there.", "I didn't go there.", "I not went there."],
      correctIndex: 1,
      explanationBn: "didn't-এর পরে সবসময় Verb-এর ১ম রূপ (go) বসে।",
    },
  },
  {
    id: 12,
    category: 'Group B: Daily & Time',
    titleEn: 'Use "have / has / had" for Possession',
    titleBn: 'কারো কোনো কিছু "আছে" বোঝাতে "have / has"',
    formula: 'I/You/We/They have · He/She/It has · Past: Everyone had',
    explanationBn:
      'I/You/We/They-এর সাথে have এবং He/She/It-এর সাথে has বসে। আর অতীতে "ছিল" বোঝাতে সবার সাথে had বসে।',
    pitfallTipBn:
      'He বা She-এর সাথে "have" না বলে সবসময় "has" বলুন ("She has experience")।',
    examples: [
      {
        en: 'I have a driving license.',
        ipa: '/aɪ hæv ə ˈdraɪvɪŋ ˈlaɪsəns/',
        pron: 'আই হ্যাভ আ ড্রাইভিং লাইসেন্স।',
        bn: 'আমার ড্রাইভিং লাইসেন্স আছে।',
      },
      {
        en: 'She has experience.',
        ipa: '/ʃiː hæz ɪkˈspɪəriəns/',
        pron: 'শি হ্যাজ এক্সপেরিয়েন্স।',
        bn: 'তার অভিজ্ঞতা আছে।',
      },
      {
        en: 'Before today, he had no job.',
        ipa: '/bɪˈfɔːr təˈdeɪ hiː hæd noʊ dʒɒb/',
        pron: 'বিফোর টুডে, হি হ্যাড নো জব।',
        bn: 'আজকের আগে তার কোনো চাকরি ছিল না।',
      },
    ],
    quiz: {
      questionBn: '"তার অভিজ্ঞতা আছে" — এর সঠিক ইংরেজি কোনটি?',
      options: ['She have experience.', 'She has experience.', 'She is experience.'],
      correctIndex: 1,
      explanationBn: 'She-এর সাথে অধিকার বোঝাতে "has" বসে।',
    },
  },

  // GROUP C: Ability, Duty & Politeness (Rules 13–18)
  {
    id: 13,
    category: 'Group C: Ability & Politeness',
    titleEn: 'Use "can / cannot (can\'t)" for Ability',
    titleBn: '"পারি / পারি না" বোঝাতে "can / cannot (can\'t)"',
    formula: 'Subject + can / can\'t + Verb (V1)',
    explanationBn:
      'নিজের দক্ষতা বা সামর্থ্য বোঝাতে Verb-এর আগে can (ক্যান) বসান। can-এর পরে কখনো "to" বসাবেন না ("I can drive" সঠিক, "I can to drive" ভুল)।',
    pitfallTipBn:
      'Can-এর পরে কখনো "to" বা "-s" যোগ করবেন না: "He can fix it" (not "He can to fixes it")।',
    examples: [
      {
        en: 'I can fix electrical faults.',
        ipa: '/aɪ kæn fɪks ɪˈlektrɪkəl fɔːlts/',
        pron: 'আই ক্যান ফিক্স ইলেকট্রিক্যাল ফল্টস।',
        bn: 'আমি বৈদ্যুতিক ত্রুটি ঠিক করতে পারি।',
      },
      {
        en: "I can't lift this alone.",
        ipa: '/aɪ kænt lɪft ðɪs əˈloʊn/',
        pron: 'আই ক্যান্ট লিফট দিস অ্যালোন।',
        bn: 'আমি এটা একা তুলতে পারব না।',
      },
      {
        en: 'I can operate this machine.',
        ipa: '/aɪ kæn ˈɒpəreɪt ðɪs məˈʃiːn/',
        pron: 'আই ক্যান অপারেট দিস মেশিন।',
        bn: 'আমি এই মেশিনটি চালাতে পারি।',
      },
    ],
    quiz: {
      questionBn: 'সঠিক বাক্য কোনটি?',
      options: ['I can to fix this.', 'I can fix this.', 'I can fixing this.'],
      correctIndex: 1,
      explanationBn: 'Can-এর পরে সরাসরি Verb-এর ১ম রূপ (V1) বসে, "to" বসে না।',
    },
  },
  {
    id: 14,
    category: 'Group C: Ability & Politeness',
    titleEn: 'Use "must / have to" for Safety & Duty',
    titleBn: 'অবশ্যই করতে হবে বোঝাতে "must / have to"',
    formula: 'Subject + must / have to + Verb (V1)',
    explanationBn:
      'কর্মক্ষেত্রের নিরাপত্তার নিয়ম বা জরুরি দায়িত্ব বোঝাতে must (মাস্ট) অথবা have to (হ্যাভ টু) ব্যবহার করুন।',
    pitfallTipBn:
      'Must-এর পরে কখনো "to" বসাবেন না ("You must wear", "You must to wear" নয়)।',
    examples: [
      {
        en: 'You must wear a helmet.',
        ipa: '/juː mʌst weər ə ˈhelmɪt/',
        pron: 'ইউ মাস্ট ওয়্যার আ হেলমেট।',
        bn: 'আপনাকে অবশ্যই হেলমেট পরতে হবে।',
      },
      {
        en: 'I have to reach by 8 AM.',
        ipa: '/aɪ hæv tuː riːtʃ baɪ eɪt eɪ em/',
        pron: 'আই হ্যাভ টু রিচ বাই এইট এ.এম.।',
        bn: 'আমাকে সকাল ৮টার মধ্যে পৌঁছাতে হবে।',
      },
      {
        en: 'We must follow safety rules.',
        ipa: '/wiː mʌst ˈfɒloʊ ˈseɪfti ruːlz/',
        pron: 'উই মাস্ট ফলো সেফটি রুলস।',
        bn: 'আমাদের অবশ্যই নিরাপত্তার নিয়ম মানতে হবে।',
      },
    ],
    quiz: {
      questionBn: 'নিরাপত্তার জরুরি নিয়ম বলতে কোনটি সঠিক?',
      options: ['You must to wear gloves.', 'You must wear gloves.', 'You must wearing gloves.'],
      correctIndex: 1,
      explanationBn: 'Must-এর পরে সরাসরি মূল Verb (wear) বসে।',
    },
  },
  {
    id: 15,
    category: 'Group C: Ability & Politeness',
    titleEn: '"want to" for Desires, "need to" for Needs',
    titleBn: 'ইচ্ছার জন্য "want to", প্রয়োজনের জন্য "need to"',
    formula: 'Subject + want to / need to + Verb (V1)',
    explanationBn:
      'Want to = আমি চাই। Need to = আমার খুব দরকার। দুটির পরেই Verb-এর মূল রূপ (V1) বসবে।',
    pitfallTipBn:
      'দুটি Verb পাশাপাশি এলে মাঝখানে "to" বসান: "I want to learn", "I need to buy"।',
    examples: [
      {
        en: 'I want to learn English.',
        ipa: '/aɪ wɒnt tuː lɜːrn ˈɪŋɡlɪʃ/',
        pron: 'আই ওয়ান্ট টু লার্ন ইংলিশ।',
        bn: 'আমি ইংরেজি শিখতে চাই।',
      },
      {
        en: 'I need to buy a multimeter.',
        ipa: '/aɪ niːd tuː baɪ ə ˌmʌltiˈmiːtər/',
        pron: 'আই নিড টু বাই আ মাল্টিমিটার।',
        bn: 'আমার একটি মাল্টিমিটার কেনা দরকার।',
      },
      {
        en: 'I need to check the wire.',
        ipa: '/aɪ niːd tuː tʃek ðə ˈwaɪər/',
        pron: 'আই নিড টু চেক দা ওয়্যার।',
        bn: 'আমার তারটি পরীক্ষা করা দরকার।',
      },
    ],
    quiz: {
      questionBn: '"আমি ইংরেজি শিখতে চাই" — কোনটি সঠিক?',
      options: ['I want learn English.', 'I want to learn English.', 'I want learning English.'],
      correctIndex: 1,
      explanationBn: 'want এবং learn-এর মাঝে "to" বসবে: I want to learn।',
    },
  },
  {
    id: 16,
    category: 'Group C: Ability & Politeness',
    titleEn: '4 Magic Polite Words — Please, Excuse me, Sorry, Thank you',
    titleBn: 'ভদ্রতার ৪টি জাদুকরী শব্দ — Please, Excuse me, Sorry, Thank you',
    formula: 'Excuse me (দৃষ্টি আকর্ষণ) · Please (অনুরোধ) · Sorry (ভুল) · Thank you (কৃতজ্ঞতা)',
    explanationBn:
      'বিদেশি বা কর্পোরেট অফিসে ভদ্রতা সবচেয়ে বড় গুণ। অনুরোধে Please, কথা শুরুর আগে Excuse me, ভুলে Sorry, এবং সাহায্য পেলে Thank you বলুন।',
    pitfallTipBn:
      'সরাসরি "Check this" না বলে "Excuse me, Sir. Could you please check this?" বললে সবাই আপনার প্রশংসা করবে।',
    examples: [
      {
        en: 'Excuse me, Sir. Could you please check this?',
        ipa: '/ɪkˈskjuːz miː sɜːr kʊd juː pliːz tʃek ðɪs/',
        pron: 'এক্সকিউজ মি, স্যার। কুড ইউ প্লিজ চেক দিস?',
        bn: 'মাফ করবেন স্যার, আপনি কি দয়া করে এটা একটু দেখবেন?',
      },
      {
        en: 'Thank you for your help.',
        ipa: '/ˈθæŋk juː fɔːr jʊər help/',
        pron: 'থ্যাংক ইউ ফর ইওর হেল্প।',
        bn: 'আপনার সাহায্যের জন্য ধন্যবাদ।',
      },
      {
        en: 'I am sorry for being late.',
        ipa: '/aɪ æm ˈsɒri fɔːr ˈbiːɪŋ leɪt/',
        pron: 'আই অ্যাম সরি ফর বিয়িং লেট।',
        bn: 'দেরি হওয়ার জন্য আমি দুঃখিত।',
      },
    ],
    quiz: {
      questionBn: 'ব্যস্ত সুপারভাইজারের সাথে কথা শুরু করার আগে কী বলবেন?',
      options: ['Hey Sir!', 'Excuse me, Sir.', 'Listen to me!'],
      correctIndex: 1,
      explanationBn: 'ভদ্রভাবে মনোযোগ আকর্ষণ করতে সবসময় "Excuse me, Sir." বলুন।',
    },
  },
  {
    id: 17,
    category: 'Group C: Ability & Politeness',
    titleEn: 'Start Direct Instructions & Warnings with a Verb',
    titleBn: 'নির্দেশ বা সাবধান করতে সরাসরি Verb দিয়ে শুরু করুন',
    formula: 'Verb (V1) + Object · নিষেধ: Don\'t + Verb (V1)',
    explanationBn:
      'কাউকে কোনো কাজ করতে বলতে সরাসরি Verb দিয়ে বাক্য শুরু করুন। আর নিষেধ করতে শুরুতে Don\'t বসান।',
    pitfallTipBn:
      'নিরাপত্তা সতর্কতায় "No touch" বলবেন না, বলুন "Don\'t touch!"।',
    examples: [
      {
        en: 'Turn off the switch.',
        ipa: '/tɜːrn ɒf ðə swɪtʃ/',
        pron: 'টার্ন অফ দা সুইচ।',
        bn: 'সুইচটি বন্ধ করুন।',
      },
      {
        en: "Don't touch that live wire!",
        ipa: '/doʊnt tʌtʃ ðæt laɪv ˈwaɪər/',
        pron: 'ডোন্ট টাচ দ্যাট লাইভ ওয়্যার!',
        bn: 'ওই খোলা তারটি স্পর্শ করবেন না!',
      },
      {
        en: 'Please wear your safety helmet.',
        ipa: '/pliːz weər jʊər ˈseɪfti ˈhelmɪt/',
        pron: 'প্লিজ ওয়্যার ইওর সেফটি হেলমেট।',
        bn: 'দয়া করে আপনার সেফটি হেলমেট পরুন।',
      },
    ],
    quiz: {
      questionBn: '"ওই তারটি স্পর্শ করবেন না!" — সঠিক ইংরেজি কোনটি?',
      options: ['No touch that wire!', "Don't touch that wire!", 'Not touch that wire!'],
      correctIndex: 1,
      explanationBn: 'নিষেধ করতে সরাসরি "Don\'t + Verb" ব্যবহার হয়।',
    },
  },
  {
    id: 18,
    category: 'Group C: Ability & Politeness',
    titleEn: 'How to Say "No" Politely at Work',
    titleBn: 'কর্মক্ষেত্রে ভদ্রভাবে "না" বলার কৌশল',
    formula: 'Sorry Sir, I cannot + V1 + right now because + [Reason]',
    explanationBn:
      'বস বা কাস্টমারকে কখনো সরাসরি রুক্ষভাবে "No" বলবেন না। শুরুতে Sorry Sir বলে তারপর কারণ জানান।',
    pitfallTipBn:
      'শুধু "No, impossible" বললে অভদ্র শোনায়। "Sorry Sir, ..." বললে আপনি পেশাদার হিসেবে সম্মান পাবেন।',
    examples: [
      {
        en: 'Sorry Sir, I cannot do it right now because the part is missing.',
        ipa: '/ˈsɒri sɜːr aɪ ˈkænɒt duː ɪt raɪt naʊ bɪˈkɒz ðə pɑːrt ɪz ˈmɪsɪŋ/',
        pron: 'সরি স্যার, আই ক্যাননট ডু ইট রাইট নাউ বিকজ দা পার্ট ইজ মিসিং।',
        bn: 'দুঃখিত স্যার, যন্ত্রাংশ না থাকায় এখনই এটি করতে পারছি না।',
      },
      {
        en: 'Sorry, I do not know how to fix this yet.',
        ipa: '/ˈsɒri aɪ duː nɒt noʊ haʊ tuː fɪks ðɪs jet/',
        pron: 'সরি, আই ডু নট নো হাউ টু ফিক্স দিস ইয়েট।',
        bn: 'দুঃখিত, আমি এখনো এটি ঠিক করা জানি না।',
      },
      {
        en: 'Sorry Sir, I need ten more minutes.',
        ipa: '/ˈsɒri sɜːr aɪ niːd ten mɔːr ˈmɪnɪts/',
        pron: 'সরি স্যার, আই নিড টেন মোর মিনিটস।',
        bn: 'দুঃখিত স্যার, আমার আরও দশ মিনিট দরকার।',
      },
    ],
    quiz: {
      questionBn: 'যন্ত্রাংশ না থাকায় কাজ করা না গেলে সুপারভাইজারকে কীভাবে বলবেন?',
      options: [
        'No, I will not do it.',
        'Sorry Sir, I cannot do it right now because the part is missing.',
        'Part missing, no work.',
      ],
      correctIndex: 1,
      explanationBn: '"Sorry Sir" দিয়ে কারণ জানালে কথাটি ভদ্র ও পেশাদার হয়।',
    },
  },

  // GROUP D: Asking Questions & Details (Rules 19–24)
  {
    id: 19,
    category: 'Group D: Questions & Details',
    titleEn: 'Master the 6 WH-Question Words',
    titleBn: '৬টি প্রশ্নবোধক শব্দ (WH-Words) মুখস্থ রাখুন',
    formula: 'What · Who · Where · When · Why · How + Helping Verb + Subject?',
    explanationBn:
      'What (কী), Who (কে), Where (কোথায়), When (কখন), Why (কেন), How (কীভাবে/কত)। প্রশ্নের একদম শুরুতেই এই শব্দগুলো বসবে।',
    pitfallTipBn:
      'WH-শব্দের ঠিক পরেই সাহায্যকারী ক্রিয়া (is/are/do/does) আনুন: "Where is the supervisor?" ("Where the supervisor is?" নয়)।',
    examples: [
      {
        en: 'Where is the supervisor?',
        ipa: '/weər ɪz ðə ˈsuːpərvaɪzər/',
        pron: 'হোয়্যার ইজ দা সুপারভাইজার?',
        bn: 'সুপারভাইজার কোথায়?',
      },
      {
        en: 'When does the shift start?',
        ipa: '/wen dʌz ðə ʃɪft stɑːrt/',
        pron: 'হোয়েন ডাজ দা শিফট স্টার্ট?',
        bn: 'শিফট কখন শুরু হয়?',
      },
      {
        en: 'What is your name?',
        ipa: '/wɒt ɪz jʊər neɪm/',
        pron: 'হোয়াট ইজ ইওর নেম?',
        bn: 'তোমার নাম কী?',
      },
    ],
    quiz: {
      questionBn: '"সুপারভাইজার কোথায়?" — সঠিক প্রশ্ন কোনটি?',
      options: ['Where the supervisor?', 'Where is the supervisor?', 'Supervisor where is?'],
      correctIndex: 1,
      explanationBn: 'Where-এর ঠিক পরেই "is" বসবে: Where is the supervisor?',
    },
  },
  {
    id: 20,
    category: 'Group D: Questions & Details',
    titleEn: 'Move the Helping Verb First for Yes/No Questions',
    titleBn: 'হ্যাঁ/না প্রশ্ন বানাতে সাহায্যকারী শব্দ সামনে আনুন',
    formula: 'Am/Is/Are · Do/Does/Did · Can · Will + Subject + ...?',
    explanationBn:
      'সাধারণ বাক্যকে প্রশ্ন বানাতে Am/Is/Are, Do/Does/Did, Can, Will-কে একদম সামনে নিয়ে আসুন।',
    pitfallTipBn:
      'You are ready → Are you ready? শুধু প্রথম দুটি শব্দের জায়গা বদল করলেই প্রশ্ন হয়ে যায়!',
    examples: [
      {
        en: 'Are you ready?',
        ipa: '/ɑːr juː ˈredi/',
        pron: 'আর ইউ রেডি?',
        bn: 'আপনি কি প্রস্তুত?',
      },
      {
        en: 'Do you speak English?',
        ipa: '/duː juː spiːk ˈɪŋɡlɪʃ/',
        pron: 'ডু ইউ স্পিক ইংলিশ?',
        bn: 'আপনি কি ইংরেজি বলেন?',
      },
      {
        en: 'Can you work on the night shift?',
        ipa: '/kæn juː wɜːrk ɒn ðə naɪt ʃɪft/',
        pron: 'ক্যান ইউ ওয়ার্ক অন দা নাইট শিফট?',
        bn: 'আপনি কি রাতের শিফটে কাজ করতে পারবেন?',
      },
    ],
    quiz: {
      questionBn: '"You are ready." কে প্রশ্নবোধক করলে কী হবে?',
      options: ['You are ready?', 'Are you ready?', 'Do you ready?'],
      correctIndex: 1,
      explanationBn: 'Are-কে Subject (you)-এর সামনে আনলেই প্রশ্ন হয়ে যায়।',
    },
  },
  {
    id: 21,
    category: 'Group D: Questions & Details',
    titleEn: 'Use "There is / There are" to Say Something Exists',
    titleBn: 'কোথাও কোনো কিছু "আছে" বোঝাতে "There is / There are"',
    formula: 'There is + 1 Thing · There are + Many Things',
    explanationBn:
      'একটি জিনিস থাকলে There is, এবং একের বেশি জিনিস থাকলে There are ব্যবহার করুন।',
    pitfallTipBn:
      'কোথাও কিছু আছে বোঝাতে "Have a problem in motor" বলবেন না; বলুন "There is a problem in the motor"।',
    examples: [
      {
        en: 'There is a problem in the motor.',
        ipa: '/ðeər ɪz ə ˈprɒbləm ɪn ðə ˈmoʊtər/',
        pron: 'দেয়ার ইজ আ প্রবলেম ইন দা মোটর।',
        bn: 'মোটরে একটি সমস্যা আছে।',
      },
      {
        en: 'There are five tools here.',
        ipa: '/ðeər ɑːr faɪv tuːlz hɪər/',
        pron: 'দেয়ার আর ফাইভ টুলস হিয়ার।',
        bn: 'এখানে পাঁচটি যন্ত্র আছে।',
      },
      {
        en: 'There is a loose wire here.',
        ipa: '/ðeər ɪz ə luːs ˈwaɪər hɪər/',
        pron: 'দেয়ার ইজ আ লুজ ওয়্যার হিয়ার।',
        bn: 'এখানে একটি ঢিলা তার আছে।',
      },
    ],
    quiz: {
      questionBn: '"এখানে পাঁচটি যন্ত্র আছে" — কোনটি সঠিক?',
      options: ['There is five tools here.', 'There are five tools here.', 'Have five tools here.'],
      correctIndex: 1,
      explanationBn: 'পাঁচটি যন্ত্র (বহুবচন) হওয়ায় "There are" বসবে।',
    },
  },
  {
    id: 22,
    category: 'Group D: Questions & Details',
    titleEn: 'Point Near & Far with "This / That / These / Those"',
    titleBn: 'কাছে ও দূরের জিনিস দেখাতে This / That / These / Those',
    formula: 'Near: This (1) / These (many) · Far: That (1) / Those (many)',
    explanationBn:
      'This (এইটি - কাছে ১টি), That (ওইটি - দূরে ১টি), These (এইগুলো - কাছে অনেক), Those (ওইগুলো - দূরে অনেক)।',
    pitfallTipBn:
      'These এবং Those বহুবচন, তাই এদের পরে সবসময় "are" বসে ("Those boxes are heavy")।',
    examples: [
      {
        en: 'This cable is new.',
        ipa: '/ðɪs ˈkeɪbəl ɪz njuː/',
        pron: 'দিস ক্যাবল ইজ নিউ।',
        bn: 'এই ক্যাবলটি নতুন।',
      },
      {
        en: 'Those boxes are heavy.',
        ipa: '/ðoʊz ˈbɒksɪz ɑːr ˈhevi/',
        pron: 'দোজ বক্সেস আর হেভি।',
        bn: 'ওই বাক্সগুলো ভারী।',
      },
      {
        en: 'Please give me that tape.',
        ipa: '/pliːz ɡɪv miː ðæt teɪp/',
        pron: 'প্লিজ গিভ মি দ্যাট টেপ।',
        bn: 'দয়া করে আমাকে ওই টেপটি দিন।',
      },
    ],
    quiz: {
      questionBn: 'দূরের অনেকগুলো বাক্স বোঝাতে কোনটি ব্যবহার করবেন?',
      options: ['This boxes', 'That boxes', 'Those boxes'],
      correctIndex: 2,
      explanationBn: 'দূরে এবং একের বেশি বোঝাতে "Those" বসে।',
    },
  },
  {
    id: 23,
    category: 'Group D: Questions & Details',
    titleEn: 'Singular vs. Plural Nouns',
    titleBn: 'একবচন থেকে বহুবচন (Singular vs. Plural)',
    formula: 'tool → tools · box → boxes · man → men · person → people',
    explanationBn:
      'একের বেশি বোঝাতে শব্দের শেষে -s/-es যোগ হয় (tool → tools, box → boxes)। কিছু ব্যতিক্রম মনে রাখুন: man → men, woman → women, child → children, person → people।',
    pitfallTipBn:
      '"Ten worker" বা "peoples" বলবেন না—সঠিক হলো "ten workers" এবং "people"।',
    examples: [
      {
        en: 'One worker is absent, ten workers are present.',
        ipa: '/wʌn ˈwɜːrkər ɪz ˈæbsənt ten ˈwɜːrkərz ɑːr ˈprezənt/',
        pron: 'ওয়ান ওয়ার্কার ইজ অ্যাবসেন্ট, টেন ওয়ার্কার্স আর প্রেজেন্ট।',
        bn: 'একজন কর্মী অনুপস্থিত, দশজন কর্মী উপস্থিত।',
      },
      {
        en: 'There are two exits.',
        ipa: '/ðeər ɑːr tuː ˈeksɪts/',
        pron: 'দেয়ার আর টু এক্সিটস।',
        bn: 'দুটি বের হওয়ার পথ আছে।',
      },
      {
        en: 'Many people work in this factory.',
        ipa: '/ˈmeni ˈpiːpəl wɜːrk ɪn ðɪs ˈfæktəri/',
        pron: 'মেনি পিপল ওয়ার্ক ইন দিস ফ্যাক্টরি।',
        bn: 'এই কারখানায় অনেক মানুষ কাজ করে।',
      },
    ],
    quiz: {
      questionBn: '"person"-এর বহুবচন কোনটি?',
      options: ['persons only', 'people', 'peoples'],
      correctIndex: 1,
      explanationBn: 'person-এর সাধারণ ও প্রচলিত বহুবচন হলো "people"।',
    },
  },
  {
    id: 24,
    category: 'Group D: Questions & Details',
    titleEn: 'Telling Time Correctly (AM / PM)',
    titleBn: 'সঠিকভাবে সময় বলা (Telling Time)',
    formula: 'It is + [Time] · রাত ১২টা–দুপুর ১২টা = AM · দুপুর ১২টা–রাত ১২টা = PM',
    explanationBn:
      'সময় বলার সময় শুরুতে It is... বলুন। রাত ১২টা থেকে দুপুর ১২টা পর্যন্ত AM এবং দুপুর ১২টা থেকে রাত ১২টা পর্যন্ত PM।',
    pitfallTipBn:
      'সময় বলতে কখনো "Now 9:30" বলবেন না; বলুন "It is 9:30 AM"।',
    examples: [
      {
        en: 'It is 9:30 AM.',
        ipa: '/ɪt ɪz naɪn ˈθɜːrti eɪ em/',
        pron: 'ইট ইজ নাইন থার্টি এ.এম.।',
        bn: 'এখন সকাল ৯টা ৩০।',
      },
      {
        en: 'My duty ends at 5:00 PM.',
        ipa: '/maɪ ˈdjuːti endz æt faɪv piː em/',
        pron: 'মাই ডিউটি এন্ডস অ্যাট ফাইভ পি.এম.।',
        bn: 'আমার ডিউটি বিকাল ৫টায় শেষ হয়।',
      },
      {
        en: 'You can join on Sunday morning at 8 AM.',
        ipa: '/juː kæn dʒɔɪn ɒn ˈsʌndeɪ ˈmɔːrnɪŋ æt eɪt eɪ em/',
        pron: 'ইউ ক্যান জয়েন অন সানডে মর্নিং অ্যাট এইট এ.এম.।',
        bn: 'তুমি রবিবার সকাল ৮টায় কাজে যোগ দিতে পারো।',
      },
    ],
    quiz: {
      questionBn: 'বিকাল ৫টা বোঝাতে কোনটি লিখবেন?',
      options: ['5:00 AM', '5:00 PM', '5:00 in night'],
      correctIndex: 1,
      explanationBn: 'দুপুর ১২টার পর থেকে রাত ১২টা পর্যন্ত PM ব্যবহার হয়।',
    },
  },

  // GROUP E: Connecting Ideas (Rules 25–30)
  {
    id: 25,
    category: 'Group E: Connecting Ideas',
    titleEn: 'Place Prepositions: IN / ON / AT',
    titleBn: 'স্থানের আগে IN / ON / AT',
    formula: 'IN (ভেতরে/বড় শহর) · ON (উপরে লেগে থাকা) · AT (নির্দিষ্ট গেট/অফিস)',
    explanationBn:
      'IN = ভেতরে বা বড় শহর (in Dhaka, in the box)। ON = কোনো কিছুর উপরে লেগে থাকা (on the table)। AT = নির্দিষ্ট পয়েন্ট বা গেট (at the door, at the office)।',
    pitfallTipBn:
      'টেবিলের ওপর রাখা জিনিসের জন্য "in the table" নয়, "on the table" বলুন।',
    examples: [
      {
        en: 'The key is on the desk in the office.',
        ipa: '/ðə kiː ɪz ɒn ðə desk ɪn ði ˈɒfɪs/',
        pron: 'দা কি ইজ অন দা ডেস্ক ইন দি অফিস।',
        bn: 'চাবিটি অফিসের ভেতরে ডেস্কের ওপর আছে।',
      },
      {
        en: 'It is in the red tool box on the left table.',
        ipa: '/ɪt ɪz ɪn ðə red tuːl bɒks ɒn ðə left ˈteɪbəl/',
        pron: 'ইট ইজ ইন দা রেড টুল বক্স অন দা লেফট টেবিল।',
        bn: 'এটি বাম দিকের টেবিলের লাল টুল বক্সের ভেতরে আছে।',
      },
      {
        en: 'Meet me at the main gate.',
        ipa: '/miːt miː æt ðə meɪn ɡeɪt/',
        pron: 'মিট মি অ্যাট দা মেইন গেট।',
        bn: 'মূল গেটে আমার সাথে দেখা করুন।',
      },
    ],
    quiz: {
      questionBn: '"চাবিটি টেবিলের ওপর আছে" — কোনটি সঠিক?',
      options: ['The key is in the table.', 'The key is on the table.', 'The key is at the table.'],
      correctIndex: 1,
      explanationBn: 'কোনো কিছুর ওপরে লেগে থাকলে "on" বসে।',
    },
  },
  {
    id: 26,
    category: 'Group E: Connecting Ideas',
    titleEn: 'Time Prepositions: AT / ON / IN',
    titleBn: 'সময়ের আগে AT / ON / IN',
    formula: 'AT (ঘড়ির সময়) · ON (দিন ও তারিখ) · IN (মাস, বছর, সকাল/বিকাল)',
    explanationBn:
      'AT = ঘড়ির নির্দিষ্ট সময় (at 8 AM, at night)। ON = দিন ও তারিখ (on Sunday)। IN = মাস, বছর, সকাল/বিকাল (in January, in the morning)।',
    pitfallTipBn:
      'রবিবারে বোঝাতে "in Sunday" নয়, সবসময় "on Sunday" বলবেন।',
    examples: [
      {
        en: 'The class starts at 9 AM on Monday.',
        ipa: '/ðə klæs stɑːrts æt naɪn eɪ em ɒn ˈmʌndeɪ/',
        pron: 'দা ক্লাস স্টার্টস অ্যাট নাইন এ.এম. অন মানডে।',
        bn: 'ক্লাস সোমবার সকাল ৯টায় শুরু হয়।',
      },
      {
        en: 'I practice English in the morning.',
        ipa: '/aɪ ˈpræktɪs ˈɪŋɡlɪʃ ɪn ðə ˈmɔːrnɪŋ/',
        pron: 'আই প্র্যাকটিস ইংলিশ ইন দা মর্নিং।',
        bn: 'আমি সকালে ইংরেজি অনুশীলন করি।',
      },
      {
        en: 'My shift finishes at 6 PM.',
        ipa: '/maɪ ʃɪft ˈfɪnɪʃɪz æt sɪks piː em/',
        pron: 'মাই শিফট ফিনিশেস অ্যাট সিক্স পি.এম.।',
        bn: 'আমার শিফট সন্ধ্যা ৬টায় শেষ হয়।',
      },
    ],
    quiz: {
      questionBn: '"ক্লাস সোমবার সকাল ৯টায় শুরু হয়" — কোনটি সঠিক?',
      options: [
        'The class starts in 9 AM at Monday.',
        'The class starts at 9 AM on Monday.',
        'The class starts on 9 AM in Monday.',
      ],
      correctIndex: 1,
      explanationBn: 'ঘড়ির সময়ের আগে "at" এবং দিনের নামের আগে "on" বসে।',
    },
  },
  {
    id: 27,
    category: 'Group E: Connecting Ideas',
    titleEn: 'Direction & Purpose: TO / FROM / FOR / WITH',
    titleBn: 'দিক ও উদ্দেশ্য বোঝাতে TO / FROM / FOR / WITH',
    formula: 'To (দিকে/কাছে) · From (থেকে) · For (জন্য) · With (সাথে/দিয়ে)',
    explanationBn:
      'To (দিকে/কাছে), From (থেকে), For (জন্য), With (সাথে/দিয়ে)—এই ৪টি ছোট শব্দ দিয়েই আপনি যাতায়াত ও কাজের উদ্দেশ্য বলতে পারবেন।',
    pitfallTipBn:
      'কোথাও থেকে আসা বোঝাতে "from" এবং যেখানে যাচ্ছেন তার আগে "to" বসান।',
    examples: [
      {
        en: 'I came from Comilla to Dhaka for training.',
        ipa: '/aɪ keɪm frɒm kʊˈmɪlə tuː ˈdɑːkə fɔːr ˈtreɪnɪŋ/',
        pron: 'আই কেম ফ্রম কুমিল্লা টু ঢাকা ফর ট্রেনিং।',
        bn: 'আমি প্রশিক্ষণের জন্য কুমিল্লা থেকে ঢাকায় এসেছি।',
      },
      {
        en: 'I am from Barishal.',
        ipa: '/aɪ æm frɒm bəˈrɪʃɑːl/',
        pron: 'আই অ্যাম ফ্রম বরিশাল।',
        bn: 'আমি বরিশাল থেকে এসেছি।',
      },
      {
        en: 'I checked the voltage with a tester.',
        ipa: '/aɪ tʃekt ðə ˈvoʊltɪdʒ wɪð ə ˈtestər/',
        pron: 'আই চেকড দা ভোল্টেজ উইথ আ টেস্টার।',
        bn: 'আমি একটি টেস্টার দিয়ে ভোল্টেজ পরীক্ষা করেছি।',
      },
    ],
    quiz: {
      questionBn: 'খালি ঘর পূরণ করুন: "I came ____ Barishal to Dhaka ____ training."',
      options: ['from ... for', 'to ... from', 'with ... at'],
      correctIndex: 0,
      explanationBn: 'থেকে = from, এবং জন্য = for।',
    },
  },
  {
    id: 28,
    category: 'Group E: Connecting Ideas',
    titleEn: 'Join Two Short Ideas with AND / BUT / BECAUSE / SO',
    titleBn: 'দুটি ছোট বাক্য জোড়া দিন AND / BUT / BECAUSE / SO দিয়ে',
    formula: 'And (এবং) · But (কিন্তু) · Because (কারণ) · So (তাই)',
    explanationBn:
      'And (এবং), But (কিন্তু), Because (কারণ), So (তাই)। এই ৪টি শব্দ জানলে আপনার কথা অনেক সুন্দর শোনাবে।',
    pitfallTipBn:
      'একই বাক্যে "Because" এবং "So" একসাথে বসাবেন না; যেকোনো একটি ব্যবহার করুন।',
    examples: [
      {
        en: 'The work was hard, but I finished it because I practiced.',
        ipa: '/ðə wɜːrk wɒz hɑːrd bʌt aɪ ˈfɪnɪʃt ɪt bɪˈkɒz aɪ ˈpræktɪst/',
        pron: 'দা ওয়ার্ক ওয়াজ হার্ড, বাট আই ফিনিশড ইট বিকজ আই প্র্যাকটিসড।',
        bn: 'কাজটি কঠিন ছিল, কিন্তু আমি অনুশীলন করায় শেষ করেছি।',
      },
      {
        en: 'I can work hard and I am always on time.',
        ipa: '/aɪ kæn wɜːrk hɑːrd ænd aɪ æm ˈɔːlweɪz ɒn taɪm/',
        pron: 'আই ক্যান ওয়ার্ক হার্ড অ্যান্ড আই অ্যাম অলওয়েজ অন টাইম।',
        bn: 'আমি কঠোর পরিশ্রম করতে পারি এবং আমি সবসময় সময়মতো আসি।',
      },
      {
        en: 'The wire was loose, so I tightened it.',
        ipa: '/ðə ˈwaɪər wɒz luːs soʊ aɪ ˈtaɪtənd ɪt/',
        pron: 'দা ওয়্যার ওয়াজ লুজ, সো আই টাইটেন্ড ইট।',
        bn: 'তারটি ঢিলা ছিল, তাই আমি ওটা শক্ত করে লাগিয়েছি।',
      },
    ],
    quiz: {
      questionBn: 'কারণ বোঝাতে কোন শব্দটি বসাবেন?',
      options: ['But', 'Because', 'Or'],
      correctIndex: 1,
      explanationBn: 'কারণ বোঝাতে "Because" ব্যবহার হয়।',
    },
  },
  {
    id: 29,
    category: 'Group E: Connecting Ideas',
    titleEn: 'Put Describing Words (Adjectives) Before the Noun',
    titleBn: 'গুণ বা দোষের শব্দ (Adjective) সবসময় নামের আগে বসান',
    formula: 'Adjective (কেমন) + Noun (জিনিস/ব্যক্তি)',
    explanationBn:
      'বলুন a skilled worker (দক্ষ কর্মী), কখনো "a worker skilled" নয়। বলুন cold water (ঠান্ডা পানি), "water cold" নয়।',
    pitfallTipBn:
      'একাধিক গুণ থাকলেও দুটোই নামের আগে বসান: "a new, strong cable"।',
    examples: [
      {
        en: 'This is a new, strong cable.',
        ipa: '/ðɪs ɪz ə njuː strɒŋ ˈkeɪbəl/',
        pron: 'দিস ইজ আ নিউ, স্ট্রং ক্যাবল।',
        bn: 'এটি একটি নতুন ও মজবুত ক্যাবল।',
      },
      {
        en: 'I am a skilled worker.',
        ipa: '/aɪ æm ə skɪld ˈwɜːrkər/',
        pron: 'আই অ্যাম আ স্কিল্ড ওয়ার্কার।',
        bn: 'আমি একজন দক্ষ কর্মী।',
      },
      {
        en: 'Please give me cold water.',
        ipa: '/pliːz ɡɪv miː koʊld ˈwɔːtər/',
        pron: 'প্লিজ গিভ মি কোল্ড ওয়াটার।',
        bn: 'দয়া করে আমাকে ঠান্ডা পানি দিন।',
      },
    ],
    quiz: {
      questionBn: '"একটি নতুন ক্যাবল" — কোনটি সঠিক?',
      options: ['a cable new', 'a new cable', 'new a cable'],
      correctIndex: 1,
      explanationBn: 'গুণবাচক শব্দ (new) সবসময় Noun (cable)-এর আগে বসে।',
    },
  },
  {
    id: 30,
    category: 'Group E: Connecting Ideas',
    titleEn: 'Speak in Short, Clear Sentences — Never Translate Word-by-Word',
    titleBn: 'ছোট ও স্পষ্ট বাক্যে কথা বলুন — শব্দে শব্দে অনুবাদ করবেন না',
    formula: 'Short Sentence 1 + Short Sentence 2 + Short Sentence 3 = Clear Fluency',
    explanationBn:
      'বাংলাদেশি শিক্ষার্থীরা প্রায়ই একটি বড় ইংরেজি বাক্য বানাতে গিয়ে আটকে যান। আপনার কথাকে ৫ শব্দের ২–৩টি ছোট বাক্যে ভেঙে বলুন। ছোট ইংরেজিই স্মার্ট ইংরেজি!',
    pitfallTipBn:
      'আটকে যাওয়ার বদলে বলুন: "The fan stopped. I checked the wire. Now it works."—এটিই সবচেয়ে স্পষ্ট ও পেশাদার ইংরেজি।',
    examples: [
      {
        en: 'The fan stopped. I checked the wire. Now it works.',
        ipa: '/ðə fæn stɒpt · aɪ tʃekt ðə ˈwaɪər · naʊ ɪt wɜːrks/',
        pron: 'দা ফ্যান স্টপড। আই চেকড দা ওয়্যার। নাউ ইট ওয়ার্কস।',
        bn: 'ফ্যানটি বন্ধ হয়েছিল। আমি তার দেখেছি। এখন এটি চলছে।',
      },
      {
        en: 'The switch was broken. I replaced it. Now it is safe.',
        ipa: '/ðə swɪtʃ wɒz ˈbroʊkən · aɪ rɪˈpleɪst ɪt · naʊ ɪt ɪz seɪf/',
        pron: 'দা সুইচ ওয়াজ ব্রোকেন। আই রিপ্লেসড ইট। নাউ ইট ইজ সেফ।',
        bn: 'সুইচটি নষ্ট ছিল। আমি ওটা বদলে দিয়েছি। এখন এটি নিরাপদ।',
      },
      {
        en: 'Clear work and clear English!',
        ipa: '/klɪər wɜːrk ænd klɪər ˈɪŋɡlɪʃ/',
        pron: 'ক্লিয়ার ওয়ার্ক অ্যান্ড ক্লিয়ার ইংলিশ!',
        bn: 'পরিষ্কার কাজ এবং পরিষ্কার ইংরেজি!',
      },
    ],
    quiz: {
      questionBn: 'বড় কথা ইংরেজিতে বলার সবচেয়ে স্মার্ট উপায় কী?',
      options: [
        'কঠিন শব্দ দিয়ে একটি লম্বা বাক্য বানানো',
        '২–৩টি ছোট, সহজ ও স্পষ্ট বাক্যে ভাগ করে বলা',
        'ভয় পেয়ে চুপ করে থাকা',
      ],
      correctIndex: 1,
      explanationBn: 'ছোট ও স্পষ্ট বাক্যে কথা বললে ভুল কমে এবং শ্রোতা সহজেই বুঝতে পারেন।',
    },
  },
];
