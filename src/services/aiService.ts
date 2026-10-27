import { Language } from '../types';

export interface AiResponse {
  answer: string;
  source: 'gemini-backend' | 'offline-knowledge-base';
  isConfiguredBackend: boolean;
}

// Rich offline knowledge base for Indian tomato farmers
const KNOWLEDGE_BASE: Array<{
  keywords: string[];
  response: { en: string; hi: string; or: string };
}> = [
  {
    keywords: ['leaf curl', 'curl', 'curling', 'whitefly', 'मक्खी', 'पर्ण कुंचन', 'ମୋଡ଼ା', 'ଧଳାମାଛି'],
    response: {
      en: 'Tomato Leaf Curl is caused by a virus transmitted by Whiteflies. Control steps:\n1. Install 15 yellow sticky cards per acre to trap adult whiteflies.\n2. Spray Neem oil (3ml/L) or 5% Neem Seed Kernel Extract (NSKE) every 7-10 days.\n3. Rogue out and destroy early infected stunted plants immediately.\n4. Protect nursery with 40-mesh nylon insect net.\nNote: Chemical insecticides should only be applied under advice of your local Krishi Vigyan Kendra (KVK).',
      hi: 'टमाटर का लीफ कर्ल रोग सफेद मक्खी (Whitefly) द्वारा फैलता है। रोकथाम के उपाय:\n1. खेत में प्रति एकड़ 15 पीले चिपचिपे कार्ड लगाएं।\n2. रोकथाम के लिए 3ml/लीटर नीम का तेल या 5% नीम अर्क का छिड़काव करें।\n3. शुरुआत में मुड़े हुए रोगी पौधों को उखाड़कर जमीन में गाड़ दें।\n4. नर्सरी को 40-मेश वाली जाली से ढकें।\nनोट: रासायनिक दवाओं के लिए स्थानीय कृषि अधिकारी से परामर्श लें।',
      or: 'ଟମାଟୋ ପତ୍ର ମୋଡ଼ା ରୋଗ ଧଳାମାଛି ଦ୍ୱାରା ବ୍ୟାପିଥାଏ। ପ୍ରତିକାର:\n୧. ଜମିରେ ଏକର ପ୍ରତି ୧୫ଟି ହଳଦିଆ ଷ୍ଟିକି କାର୍ଡ ଲଗାନ୍ତୁ।\n୨. ନିମ୍ବ ତେଲ (୩ ମି.ଲି./ଲିଟର) ନିୟମିତ ସ୍ପ୍ରେ କରନ୍ତୁ।\n୩. ଆକ୍ରାନ୍ତ ଗଛକୁ ଉପାଡ଼ି ମାଟି ତଳେ ପୋତି ଦିଅନ୍ତୁ।\n୪. ନର୍ସରୀରେ ମଶାରୀ ବ୍ୟବହାର କରନ୍ତୁ।',
    },
  },
  {
    keywords: ['fertilizer', 'npk', 'drenching', 'खाद', 'यूरिया', 'सिट', 'ସାର', 'ୟୁରିଆ'],
    response: {
      en: 'Tomato Fertilizer Schedule (per acre):\n• Basal at transplanting: 10-15 tonnes FYM + 50kg DAP + 25kg Potash + 10kg Micronutrient mixture.\n• Vegetative stage (DAT 20-25): Top dress 25kg Urea + 15kg Potash (or 19:19:19 @ 3g/L via drip).\n• Flowering & Fruit Set (DAT 40-50): Spray Boron 20% (1g/L) + 13:00:45 (5g/L).\n• Fruit Sizing: Apply Calcium Nitrate (2.5g/L) and Potassium Sulphate (0:0:50). Avoid excess urea during flowering.',
      hi: 'टमाटर खाद प्रबंधन (प्रति एकड़):\n• रोपाई पूर्व: 10-15 टन सड़ी गोबर खाद + 50 किलो डीएपी + 25 किलो पोटाश + 10 किलो जिंक/माइक्रोन्यूट्रीएंट।\n• वृद्धि काल (रोपाई के 20-25 दिन): 25 किलो यूरिया + 15 किलो पोटाश (या ड्रिप से 19:19:19)।\n• फूल आने पर (40-50 दिन): बोरॉन 20% (1 ग्राम/लीटर) और 13:00:45 का छिड़काव।\n• फल विकास: फल फटने से रोकने के लिए कैल्शियम नाइट्रेट (2.5 ग्राम/लीटर) दें।',
      or: 'ଟମାଟୋ ସାର ପରିଚାଳନା (ଏକର ପ୍ରତି):\n• ରୋପଣ ପୂର୍ବରୁ: ୧୦-୧୨ ଟନ୍ ଖତ + ୫୦ କେଜି ଡିଏପି + ୨୫ କେଜି ପୋଟାସ୍।\n• ୨୦-୨୫ ଦିନରେ: ୨୫ କେଜି ୟୁରିଆ ଓ ୧୫ କେଜି ପୋଟାସ୍।\n• ଫୁଲ ସମୟରେ: ବୋରନ୍ (୧ ଗ୍ରାମ/ଲିଟର) ସ୍ପ୍ରେ କରନ୍ତୁ।\n• ଫଳ ବଡ଼ ହେବା ସମୟରେ: କ୍ୟାଲସିୟମ୍ ନାଇଟ୍ରେଟ୍ ପ୍ରୟୋଗ କରନ୍ତୁ।',
    },
  },
  {
    keywords: ['water', 'irrigate', 'irrigation', 'सिंचाई', 'पानी', 'ପାଣି', 'ଜଳସେଚନ'],
    response: {
      en: 'Tomato Irrigation Guidelines:\n1. Light irrigation immediately after transplanting.\n2. In drip irrigation, run for 45-60 minutes every 2-3 days based on soil type.\n3. Critical moisture sensitive stages: Flowering and Early Fruit Set. Never let soil dry out completely during flowering.\n4. Avoid sudden flooding after a long dry spell — it causes severe fruit cracking.\n5. Cease irrigation 3-5 days before heavy harvest picking.',
      hi: 'टमाटर में सिंचाई की विधि:\n1. रोपाई के तुरंत बाद हल्का पानी दें।\n2. ड्रिप में मिट्टी के अनुसार हर 2-3 दिन में 45 से 60 मिनट पानी चलाएं।\n3. सबसे नाजुक समय: फूल आना और फल बनना। इस समय खेत में नमी की कमी न होने दें।\n4. ज्यादा सूखे के बाद अचानक तेज पानी न दें, इससे फल चटक जाते हैं।\n5. तुड़ाई से 3-4 दिन पहले पानी देना कम करें।',
      or: 'ଟମାଟୋ ଜଳସେଚନ ପରାମର୍ଶ:\n୧. ରୋପଣ ପରେ ତୁରନ୍ତ ହାଲୁକା ପାଣି ଦିଅନ୍ତୁ।\n୨. ଡ୍ରିପ୍ ଥିଲେ ପ୍ରତି ୨-୩ ଦିନରେ ୪୫-୬୦ ମିନିଟ୍ ଚଲାନ୍ତୁ।\n୩. ଫୁଲ ଓ ଫଳ ଧରିବା ସମୟରେ ଜମିରେ ସମାନ ଆର୍ଦ୍ରତା ରଖନ୍ତୁ।\n୪. ଶୁଖିଲା ଜମିରେ ହଠାତ୍ ଅଧିକ ପାଣି ମଡ଼ାନ୍ତୁ ନାହିଁ, ଫଳ ଫାଟିଯିବ।',
    },
  },
  {
    keywords: ['bottom rot', 'blossom', 'black spot', 'cracking', 'काला दाग', 'फल फटना', 'କଳା ଦାଗ', 'ଫଳ ଫାଟିବା'],
    response: {
      en: 'Black sunken rot at the blossom end (Blossom End Rot / BER):\n• Cause: Calcium deficiency caused by irregular soil moisture or sudden high heat (>34°C).\n• Solution: Maintain consistent watering. Spray Calcium Nitrate @ 2.5g/L + Boron 20% @ 1g/L directly on fruit clusters. Do not let soil oscillate between dry crust and saturated mud.',
      hi: 'टमाटर के नीचे काला चपटा दाग (ब्लॉसम एंड रॉट):\n• कारण: कैल्शियम की कमी और खेत में नमी का उतार-चढ़ाव या 34°C से अधिक गर्मी।\n• समाधान: सिंचाई में नियमितता रखें। फलों के गुच्छों पर कैल्शियम नाइट्रेट (2.5 ग्राम/लीटर) और बोरॉन (1 ग्राम/लीटर) का छिड़काव करें।',
      or: 'ଫଳ ତଳେ କଳା ଦାଗ (Blossom End Rot):\n• କାରଣ: କ୍ୟାଲସିୟମ୍‌ର ଅଭାବ ଏବଂ ଜଳସେଚନରେ ଅନିୟମିତତା।\n• ପ୍ରତିକାର: ନିୟମିତ ପାଣି ମଡ଼ାନ୍ତୁ। କ୍ୟାଲସିୟମ୍ ନାଇଟ୍ରେଟ୍ (୨.୫ ଗ୍ରାମ/ଲିଟର) ଏବଂ ବୋରନ୍ ସ୍ପ୍ରେ କରନ୍ତୁ।',
    },
  },
  {
    keywords: ['variety', 'hybrid', 'seed', 'किस्म', 'बीज', 'ବିହନ', 'କିସମ'],
    response: {
      en: 'Popular high-yielding tomato varieties in India:\n• Determinate (Bush type): Vaishali, Abhinav, Pusa Ruby, Pusa Early Dwarf, Rashmi.\n• Indeterminate (Trellis type): Arka Rakshak (Triple disease resistant: ToLCV, BW, EB), Arka Samrat, Syngenta TO-1057, US-440, NS-501.\n• Tip: For areas with bacterial wilt or leaf curl history, choose Arka Rakshak or certified resistant hybrids.',
      hi: 'भारत में अधिक उपज देने वाली टमाटर की किस्में:\n• झाड़ीदार किस्में: अभिनव, वैशाली, पूसा रूबी, रश्मि।\n• बांस के सहारे वाली (बेलनुमा): अर्का रक्षक (पर्ण कुंचन, झुलसा और उकठा तीनों रोगों की प्रतिरोधी), अर्का सम्राट, सिंजेंटा 1057, यूएस-440।\n• सलाह: जिन खेतों में उकठा या लीफ कर्ल आता हो, वहां अर्का रक्षक अवश्य लगाएं।',
      or: 'ଭାରତରେ ଲୋକପ୍ରିୟ ଟମାଟୋ କିସମ:\n• ବୁଦା କିସମ: ଅଭିନବ, ବୈଶାଳୀ, ପୂସା ରୁବି।\n• ତାରରେ ବନ୍ଧା ହେଉଥିବା କିସମ: ଅର୍କ ରକ୍ଷକ (୩ଟି ରୋଗ ପ୍ରତିରୋଧକ), ଅର୍କ ସମ୍ରାଟ, ସିନଜେଣ୍ଟା ୧୦୫୭।',
    },
  },
  {
    keywords: ['borer', 'caterpillar', 'worm', 'सुंडी', 'कीड़ा', 'କୀଟ', 'ପୋକ', 'ଶୁକ'],
    response: {
      en: 'Tomato Fruit Borer (Helicoverpa armigera) management:\n1. Plant African Marigold (Tagetes erecta) as a trap crop every 16 rows of tomato.\n2. Install 5 pheromone traps (Helilure) per acre for moth monitoring.\n3. Release egg parasite Trichogramma chilonis (50,000/acre) at flowering.\n4. Spray HaNPV (250 LE/acre) or Neem formulation (Azadirachtin 10,000 ppm @ 1ml/L) on young larvae.',
      hi: 'टमाटर का फल छेदक (कीड़ा/सुंडी) प्रबंधन:\n1. हर 16 कतार के बाद गेंदे के फूल (Marigold) की एक कतार ट्रैप क्रॉप के रूप में लगाएं।\n2. प्रति एकड़ 5 फेरोमोन ट्रैप (हेलील्योर) लगाएं।\n3. फूल आने पर ट्राइकोग्रामा अंड परजीवी छोड़ें।\n4. नीम अर्क (Azadirachtin 10000 ppm @ 1ml/L) का छिड़काव शुरुआती अवस्था में करें।',
      or: 'ଟମାଟୋ ଫଳ ବିନ୍ଧା ପୋକ ନିୟନ୍ତ୍ରଣ:\n୧. ପ୍ରତି ୧୬ ଧାଡ଼ି ପରେ ଗୋଟିଏ ଧାଡ଼ି ଗେଣ୍ଡୁ ଫୁଲ ଲଗାନ୍ତୁ।\n୨. ଏକର ପ୍ରତି ୫ଟି ଫେରୋମୋନ୍ ଟ୍ରାପ୍ ବ୍ୟବହାର କରନ୍ତୁ।\n୩. ନିମ୍ବ ତେଲ ବା ଜୈବିକ ଔଷଧ ସ୍ପ୍ରେ କରନ୍ତୁ।',
    },
  },
];

export const askAiAssistant = async (
  prompt: string,
  lang: Language = 'en'
): Promise<AiResponse> => {
  const backendUrl = (import.meta as any).env?.VITE_AI_BACKEND_URL;

  // 1. Try secure backend proxy if configured
  if (backendUrl) {
    try {
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: prompt, language: lang }),
      });
      if (response.ok) {
        const data = await response.json();
        return {
          answer: data.reply || data.text,
          source: 'gemini-backend',
          isConfiguredBackend: true,
        };
      }
    } catch (e) {
      console.warn('Backend proxy fetch failed, falling back to smart agronomic engine:', e);
    }
  }

  // 2. Fallback to smart offline agronomic engine
  const lower = prompt.toLowerCase();
  for (const item of KNOWLEDGE_BASE) {
    if (item.keywords.some((k) => lower.includes(k.toLowerCase()))) {
      return {
        answer: item.response[lang] || item.response.en,
        source: 'offline-knowledge-base',
        isConfiguredBackend: Boolean(backendUrl),
      };
    }
  }

  // Generic helpful tomato response
  const defaultAnswers: Record<Language, string> = {
    en: `KrishiSalah Tomato Advisor: Regarding "${prompt}" — for optimal results, inspect soil moisture at 3-inch depth, ensure adequate plant staking, and watch for early foliar spots. For specific fertilizer dosages or pesticide guidance, refer to your local KVK or extension officer.\n\nTip: You can ask about irrigation, fertilizers (NPK), leaf curl virus, fruit borer, blossom end rot, or seed varieties.`,
    hi: `कृषि सलाह: आपके प्रश्न "${prompt}" के संदर्भ में — टमाटर की अच्छी पैदावार के लिए 3 इंच गहराई पर मिट्टी की नमी जांचें, पौधों को सहारा दें और निचली पत्तियों पर धब्बों पर नजर रखें। रासायनिक दवाओं के लिए स्थानीय कृषि विज्ञान केंद्र (KVK) से संपर्क करें।\n\nसुझाव: आप सिंचाई, खाद (NPK), लीफ कर्ल, फल छेदक कीड़ा, फल फटना या उन्नत बीजों के बारे में पूछ सकते हैं।`,
    or: `କୃଷି ସଲାହ: ଆପଣଙ୍କ ପ୍ରଶ୍ନ "${prompt}" ପାଇଁ — ଟମାଟୋରେ ଉତ୍ତମ ଅମଳ ପାଇଁ ମାଟିର ଆର୍ଦ୍ରତା ଯାଞ୍ଚ କରନ୍ତୁ, ଗଛକୁ ବାନ୍ଧନ୍ତୁ ଓ ପତ୍ର ଦାଗ ଉପରେ ନଜର ରଖନ୍ତୁ। ଔଷଧ ବ୍ୟବହାର ପାଇଁ ସ୍ଥାନୀୟ କୃଷି ଅଧିକାରୀଙ୍କ ପରାମର୍ଶ ନିଅନ୍ତୁ।\n\nସୂଚନା: ଆପଣ ଜଳସେଚନ, ଖତ-ସାର, ପତ୍ର ମୋଡ଼ା, ଫଳ ବିନ୍ଧା ପୋକ କିମ୍ବା ବିହନ ବିଷୟରେ ପଚାରିପାରିବେ।`,
  };

  return {
    answer: defaultAnswers[lang] || defaultAnswers.en,
    source: 'offline-knowledge-base',
    isConfiguredBackend: Boolean(backendUrl),
  };
};
