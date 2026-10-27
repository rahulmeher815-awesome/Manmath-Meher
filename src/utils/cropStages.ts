import { CropStageInfo } from '../types';

export const TOMATO_STAGES: CropStageInfo[] = [
  {
    id: 'nursery',
    stageNumber: 1,
    name: {
      en: 'Nursery Preparation',
      hi: 'नर्सरी की तैयारी',
      or: 'ତଳିଘାଟ ପ୍ରସ୍ତୁତି',
    },
    duration: '0 - 25 Days',
    startDay: -25,
    endDay: 0,
    iconName: 'Sprout',
    summary: {
      en: 'Healthy seedling growth in raised beds or pro-trays before field transplanting.',
      hi: 'खेत में रोपाई से पहले उठी हुई क्यारियों या प्रो-ट्रे में स्वस्थ पौधे तैयार करना।',
      or: 'ମୁଖ୍ୟ ଜମିରେ ରୋପଣ ପୂର୍ବରୁ ଉଚ୍ଚା ତଳିଘାଟ କିମ୍ବା ପ୍ରୋ-ଟ୍ରେରେ ସୁସ୍ଥ ଚାରା ଉତ୍ପାଦନ।',
    },
    keyActivities: {
      en: [
        'Treat seeds with Trichoderma viride (4g/kg) to prevent damping-off.',
        'Use solarized soil or well-decomposed coco-peat with vermicompost (1:1).',
        'Protect seedlings with 40-mesh insect net against whitefly and aphids.',
        'Harden seedlings 4-5 days before transplanting by reducing watering slightly.',
      ],
      hi: [
        'आर्द्र-गलन (Damping-off) से बचाव के लिए बीजों को ट्राइकोडर्मा (4g/kg) से उपचारित करें।',
        'क्यारियों में खूब सड़ी हुई गोबर की खाद या वर्मीकम्पोस्ट और कोकोपीट मिलाएं।',
        'सफेद मक्खी से बचाने के लिए नर्सरी को 40-मेश वाली कीट-रोधी जाली से ढकें।',
        'रोपाई से 4-5 दिन पहले पानी कम करके पौधों को खेत की धूप के अनुकूल (Harden) बनाएं।',
      ],
      or: [
        'ଚାରା ଗଳା ରୋଗରୁ ରକ୍ଷା ପାଇଁ ଟ୍ରାଇକୋଡର୍ମା (୪ ଗ୍ରାମ/କେଜି) ଦ୍ୱାରା ବିହନ ବିଶୋଧନ କରନ୍ତୁ।',
        'ସଢା ଗୋବର ଖତ କିମ୍ବା ଭର୍ମିକମ୍ପୋଷ୍ଟ ଏବଂ କୋକୋପିଟ୍ ମିଶାଇ ବେଡ୍ ପ୍ରସ୍ତୁତ କରନ୍ତୁ।',
        'ଧଳାମାଛି ଦାଉରୁ ରକ୍ଷା କରିବା ପାଇଁ ୪୦-ମେସ୍ ମଶାରୀ ବ୍ୟବହାର କରନ୍ତୁ।',
        'ରୋପଣର ୪-୫ ଦିନ ପୂର୍ବରୁ ପାଣି କମାଇ ଚାରାକୁ ଶକ୍ତ (Hardening) କରନ୍ତୁ।',
      ],
    },
    irrigationAdvice: {
      en: 'Irrigate gently with a rose can twice daily. Avoid water pooling which causes damping-off disease.',
      hi: 'हजारे (Rose can) से सुबह-शाम हल्का पानी दें। क्यारी में पानी रुकने न दें, इससे पौधे गल सकते हैं।',
      or: 'ହଜାରି ସାହାଯ୍ୟରେ ଦିନକୁ ଦୁଇଥର ହାଲୁକା ପାଣି ଦିଅନ୍ତୁ। ବେଡ୍‌ରେ ପାଣି ଜମିବାକୁ ଦିଅନ୍ତୁ ନାହିଁ।',
    },
    nutrientManagement: {
      en: 'Drench with 19:19:19 (2g/L) at 15 days if seedlings appear pale. Boost root vigour.',
      hi: '15 दिन बाद यदि पौधे हल्के पीले दिखें तो 19:19:19 (2 ग्राम/लीटर) का हल्का छिड़काव करें।',
      or: '୧୫ ଦିନରେ ଚାରା ହଳଦିଆ ପଡ଼ିଲେ ୧୯:୧୯:୧୯ (୨ ଗ୍ରାମ/ଲିଟର) ମାଟିରେ ପ୍ରୟୋଗ କରନ୍ତୁ।',
    },
    pestDiseaseAlert: {
      en: 'Watch for Damping-off fungus at soil level. Drench with copper oxychloride if stems collapse.',
      hi: 'जमीन की सतह पर तने के सड़ने (डैम्पिंग ऑफ) पर नजर रखें। लक्षण दिखने पर कॉपर ऑक्सीक्लोराइड का घोल डालें।',
      or: 'ଚାରା ପଚା ରୋଗ ଉପରେ ନଜର ରଖନ୍ତୁ। ଆବଶ୍ୟକ ସ୍ଥଳେ କପର ଅକ୍ସିକ୍ଲୋରାଇଡ୍ ଦ୍ରବଣ ବ୍ୟବହାର କରନ୍ତୁ।',
    },
  },
  {
    id: 'transplanting',
    stageNumber: 2,
    name: {
      en: 'Transplanting & Establishment',
      hi: 'रोपाई और पौधे का जमना',
      or: 'ଚାରା ରୋପଣ ଏବଂ ସ୍ଥାପନ',
    },
    duration: 'DAT 1 - 15',
    startDay: 1,
    endDay: 15,
    iconName: 'Footprints',
    summary: {
      en: 'Transferring 25-30 day-old seedlings into the main field with proper spacing.',
      hi: '25-30 दिन पुराने स्वस्थ पौधों को मुख्य खेत में उचित दूरी पर लगाना।',
      or: '୨୫-୩୦ ଦିନର ସୁସ୍ଥ ଚାରାକୁ ମୁଖ୍ୟ ଜମିରେ ଉପଯୁକ୍ତ ବ୍ୟବଧାନରେ ରୋପଣ କରିବା।',
    },
    keyActivities: {
      en: [
        'Transplant during late afternoon to minimize transplant shock.',
        'Maintain row spacing: 60-75 cm between rows, 45-60 cm between plants.',
        'Apply basal dose of FYM (10-15 tonnes/acre) + single super phosphate before transplanting.',
        'Dip roots in Pseudomonas fluorescens solution (10g/L) for 15 minutes before planting.',
      ],
      hi: [
        'तेज धूप से बचाने के लिए हमेशा दोपहर बाद या शाम के समय ही रोपाई करें।',
        'पंक्ति से पंक्ति 60-75 सेमी और पौधे से पौधा 45-60 सेमी की दूरी रखें।',
        'रोपाई पूर्व खेत में 10-15 टन सड़ी गोबर खाद और सिंगल सुपर फॉस्फेट मिलाएं।',
        'जड़ों को स्यूडोमोनास (10g/L) के घोल में 15 मिनट डुबोकर फिर लगाएं।',
      ],
      or: [
        'ଖରା କମିବା ପରେ ଅପରାହ୍ନରେ ହିଁ ଚାରା ରୋପଣ କରନ୍ତୁ।',
        'ଧାଡ଼ିରୁ ଧାଡ଼ି ୬୦-୭୫ ସେମି ଏବଂ ଗଛରୁ ଗଛ ୪୫-୬୦ ସେମି ବ୍ୟବଧାନ ରଖନ୍ତୁ।',
        'ରୋପଣ ପୂର୍ବରୁ ଏକର ପ୍ରତି ୧୦-୧୨ ଟନ୍ ଗୋବର ଖତ ଓ ସିଙ୍ଗଲ୍ ସୁପର ଫସଫେଟ୍ ଦିଅନ୍ତୁ।',
        'ଚେରକୁ ସୁଡୋମୋନାସ୍ ଦ୍ରବଣରେ ୧୫ ମିନିଟ୍ ବୁଡାଇ ଲଗାନ୍ତୁ।',
      ],
    },
    irrigationAdvice: {
      en: 'Give light irrigation immediately after transplanting. Keep root zone moist but never waterlogged for the first 10 days.',
      hi: 'रोपाई के तुरंत बाद हल्का पानी दें। पहले 10 दिन जड़ों के पास नमी बनाए रखें, जलभराव न होने दें।',
      or: 'ରୋପଣ ପରେ ତୁରନ୍ତ ହାଲୁକା ପାଣି ଦିଅନ୍ତୁ। ପ୍ରଥମ ୧୦ ଦିନ ଚେର ପାଖରେ ଆର୍ଦ୍ରତା ରଖନ୍ତୁ।',
    },
    nutrientManagement: {
      en: 'Apply Humic acid drenching (2ml/L) at Day 7 to stimulate strong white feeder root growth.',
      hi: 'रोपाई के 7वें दिन नई सफेद जड़ों के विकास के लिए ह्यूमिक एसिड (2ml/लीटर) का छिड़काव या ड्रेचिंग करें।',
      or: '୭ମ ଦିନରେ ନୂଆ ଚେର ସୃଷ୍ଟି ପାଇଁ ହ୍ୟୁମିକ୍ ଏସିଡ୍ (୨ ମି.ଲି./ଲିଟର) ମାଟିରେ ପ୍ରୟୋଗ କରନ୍ତୁ।',
    },
    pestDiseaseAlert: {
      en: 'Check for cutworms cutting tender seedlings at ground level. Install yellow sticky traps.',
      hi: 'जमीन की सतह से तना काटने वाले कीड़ों (Cutworm) पर ध्यान दें। पीले चिपचिपे ट्रैप लगाएं।',
      or: 'କାଟିବା କୀଟ ଉପରେ ନଜର ରଖନ୍ତୁ। ହଳଦିଆ ଷ୍ଟିକି ଟ୍ରାପ୍ ଲଗାନ୍ତୁ।',
    },
  },
  {
    id: 'vegetative',
    stageNumber: 3,
    name: {
      en: 'Vegetative Growth & Branching',
      hi: 'वानस्पतिक वृद्धि और शाखाएं निकलना',
      or: 'ଗଛର ବୃଦ୍ଧି ଏବଂ ଶାଖା ବିସ୍ତାର',
    },
    duration: 'DAT 16 - 35',
    startDay: 16,
    endDay: 35,
    iconName: 'Leaf',
    summary: {
      en: 'Rapid canopy development, stem thickening, root expansion, and primary side shoots.',
      hi: 'पौधे का तेजी से बढ़ना, तने का मजबूत होना और प्राथमिक शाखाओं का फैलाव।',
      or: 'ଗଛର ଦ୍ରୁତ ବୃଦ୍ଧି, କାଣ୍ଡ ମଜବୁତ ହେବା ଏବଂ ନୂତନ ଶାଖା ପ୍ରଶାଖା ମେଲିବା।',
    },
    keyActivities: {
      en: [
        'Intercultural weeding and light earthing-up (mounding soil around the base of the plant).',
        'Install bamboo stakes and trellis support wires (critical for indeterminate varieties).',
        'Prune excessive lower suckers touching the damp soil to promote air circulation.',
        'Install 4-6 pheromone traps per acre for tomato fruit borer monitoring.',
      ],
      hi: [
        'निराई-गुड़ाई करें और पौधे की जड़ों के पास मिट्टी चढ़ाएं (Earthing-up)।',
        'पौधों को गिरने से बचाने के लिए बांस या तार का सहारा (Staking) दें।',
        'मिट्टी से छूने वाली निचली पत्तियों को काट दें ताकि हवा का आवागमन बना रहे।',
        'फल छेदक कीट की निगरानी के लिए प्रति एकड़ 4-6 फेरोमोन ट्रैप लगाएं।',
      ],
      or: [
        'କୋଡ଼ା-ଖୁସା କରି ଘାସ ସଫା କରନ୍ତୁ ଏବଂ ଗଛ ମୂଳରେ ମାଟି ଟେକନ୍ତୁ।',
        'ବାଉଁଶ ଖୁଣ୍ଟି କିମ୍ବା ତାର ସାହାଯ୍ୟରେ ଗଛକୁ ଟେକି ବାନ୍ଧନ୍ତୁ (Staking)।',
        'ତଳ ପତ୍ର ଗୁଡିକୁ କାଟି ଦିଅନ୍ତୁ ଯାହା ଦ୍ୱାରା ପବନ ଚଳାଚଳ ସହଜ ହେବ।',
        'ଫଳ ବିନ୍ଧା ପୋକ ନିରୀକ୍ଷଣ ପାଇଁ ଫେରୋମୋନ୍ ଟ୍ରାପ୍ ଲଗାନ୍ତୁ।',
      ],
    },
    irrigationAdvice: {
      en: 'Maintain regular soil moisture. In drip systems, run for 45-60 mins every 2 days depending on soil type.',
      hi: 'नियमित नमी रखें। ड्रिप सिंचाई में मिट्टी के अनुसार हर 2 दिन में 45-60 मिनट पानी चलाएं।',
      or: 'ମାଟିର ପ୍ରକାର ଅନୁଯାୟୀ ପ୍ରତି ୨ ଦିନରେ ଥରେ ନିୟମିତ ପାଣି ମଡ଼ାନ୍ତୁ।',
    },
    nutrientManagement: {
      en: 'First top dressing: Apply Nitrogen and Potassium (or water soluble 19:19:19 via fertigation).',
      hi: 'पहली टॉप ड्रेसिंग: यूरिया और पोटाश दें (या ड्रिप से 19:19:19 घुलनशील खाद चलाएं)।',
      or: 'ପ୍ରଥମ ଖତ ପ୍ରୟୋଗ: ଯବକ୍ଷାରଜାନ ଏବଂ ପୋଟାସ୍ ଖତ ପ୍ରୟୋଗ କରନ୍ତୁ।',
    },
    pestDiseaseAlert: {
      en: 'Scout for Leaf miner trails and Whitefly (vector for leaf curl virus). Spray neem oil (3ml/L) as prevention.',
      hi: 'पत्तियों में टेढ़ी-मेढ़ी सुरंग बनाने वाले लीफ माइनर और सफेद मक्खी पर नजर रखें। 3ml/L नीम तेल का छिड़काव करें।',
      or: 'ଲିଫ୍ ମାଇନର ଓ ଧଳାମାଛି ଉପରେ ନଜର ରଖନ୍ତୁ। ନିମ୍ବ ତେଲ (୩ ମି.ଲି./ଲିଟର) ସ୍ପ୍ରେ କରନ୍ତୁ।',
    },
  },
  {
    id: 'flowering',
    stageNumber: 4,
    name: {
      en: 'Flowering & Fruit Set',
      hi: 'फूल आना और फल बैठना',
      or: 'ଫୁଲ ଫୁଟିବା ଏବଂ ଫଳ ଧରିବା',
    },
    duration: 'DAT 36 - 55',
    startDay: 36,
    endDay: 55,
    iconName: 'Flower2',
    summary: {
      en: 'Peak flowering clusters, pollination, and small green pea-sized fruit formation.',
      hi: 'गुच्छों में फूल आना, परागण (Pollination) और छोटे हरे फल बनना।',
      or: 'ପେନ୍ଥା ପେନ୍ଥା ଫୁଲ ଫୁଟିବା, ପରାଗ ସଙ୍ଗମ ଏବଂ ଛୋଟ ସବୁଜ ଫଳ ଧରିବା।',
    },
    keyActivities: {
      en: [
        'Avoid excessive nitrogen fertilizer to prevent flower drop and excess foliage.',
        'Ensure gentle wind or bumblebee movement for effective pollination.',
        'Keep field free from moisture stress — sudden dry spells cause blossom drops.',
        'Inspect flowers for thrips and fruit borer egg-laying.',
      ],
      hi: [
        'अधिक यूरिया न दें, नहीं तो फूल गिरेंगे और केवल पत्तियां ही बढ़ेंगी।',
        'पौधों में नमी का संतुलन रखें — अचानक सूखा पड़ने से फूल झड़ जाते हैं।',
        'थ्रिप्स और फल छेदक कीट के अंडों की निगरानी करें।',
        'फूलों की संख्या और फल बैठने की दर बढ़ाने के लिए सूक्ष्म पोषक तत्व दें।',
      ],
      or: [
        'ଅଧିକ ୟୁରିଆ ଦିଅନ୍ତୁ ନାହିଁ, ନଚେତ୍ ଫୁଲ ଝଡ଼ିଯିବ।',
        'ଜମିରେ ପାଣିର ଅଭାବ ହେବାକୁ ଦିଅନ୍ତୁ ନାହିଁ।',
        'ଫୁଲ ଝଡ଼ା ରୋକିବା ପାଇଁ ଅଣୁସାର (ମାଇକ୍ରୋନ୍ୟୁଟ୍ରିଏଣ୍ଟ) ସ୍ପ୍ରେ କରନ୍ତୁ।',
        'ଫଳ ବିନ୍ଧା ପୋକ ନିୟନ୍ତ୍ରଣ ଉପରେ ସତର୍କ ରୁହନ୍ତୁ।',
      ],
    },
    irrigationAdvice: {
      en: 'Critical stage! Maintain consistent, moderate moisture. Over-watering drops flowers; under-watering drops fruit set.',
      hi: 'बेहद संवेदनशील अवस्था! न अधिक पानी दें न कम। अचानक सूखा पड़ने या जलभराव से फूल गिर जाते हैं।',
      or: 'ଅତି ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ସମୟ! ମାଟିରେ ସମାନ ଆର୍ଦ୍ରତା ରଖନ୍ତୁ। ଅଧିକ ବା କମ୍ ପାଣି ଫୁଲ ଝଡ଼ାଇଦିଏ।',
    },
    nutrientManagement: {
      en: 'Foliar spray of Boron 20% (1g/L) + Planofix/Amino acid to boost fruit set and avoid blossom drop.',
      hi: 'फूल झड़ने से रोकने और फल बढ़ाने के लिए बोरॉन (1g/L) और सूक्ष्म पोषक तत्वों का छिड़काव करें।',
      or: 'ଫୁଲ ଝଡ଼ା ରୋକିବା ପାଇଁ ବୋରନ୍ (୧ ଗ୍ରାମ/ଲିଟର) ପତ୍ରରେ ସ୍ପ୍ରେ କରନ୍ତୁ।',
    },
    pestDiseaseAlert: {
      en: 'Watch for Early Blight target-ring spots on lower leaves and fruit borer caterpillars.',
      hi: 'निचली पत्तियों पर गोल छल्लेदार धब्बे (अगेती झुलसा) और सुंडी (फल छेदक) पर कड़ी निगरानी रखें।',
      or: 'ପତ୍ରରେ ଗୋଲାକାର ଦାଗ (ଅଗୁଆ ଝାଉଁଳା) ଏବଂ ଫଳ ବିନ୍ଧା ଶୁକ ଉପରେ ନଜର ରଖନ୍ତୁ।',
    },
  },
  {
    id: 'fruit_development',
    stageNumber: 5,
    name: {
      en: 'Fruit Development & Ripening',
      hi: 'फल का विकास और पकना',
      or: 'ଫଳର ବୃଦ୍ଧି ଏବଂ ପାଚିବା',
    },
    duration: 'DAT 56 - 80',
    startDay: 56,
    endDay: 80,
    iconName: 'Apple',
    summary: {
      en: 'Rapid fruit sizing, fruit shine development, and transition from mature green to breaker stage.',
      hi: 'फलों का आकार बढ़ना, चमक आना और हरे से गुलाबी/लाल रंग में बदलना।',
      or: 'ଫଳ ବଡ଼ ହେବା, ଚମକ ଆସିବା ଏବଂ ସବୁଜରୁ ଲାଲ୍ ରଙ୍ଗ ଧାରଣ କରିବା।',
    },
    keyActivities: {
      en: [
        'Apply Potassium (0:0:50) to enhance fruit weight, firmness, and red lycopene colour.',
        'Maintain uniform watering to prevent Blossom End Rot and fruit cracking.',
        'Avoid wetting fruits and leaves during late afternoon to prevent fruit rot.',
        'Support heavy fruit clusters with twine so branches do not snap.',
      ],
      hi: [
        'फलों की चमक, वजन और गाढ़ा लाल रंग लाने के लिए पोटैशियम (0:0:50) दें।',
        'पानी देने में नियमितता रखें; सूखा पड़ने के बाद अधिक पानी देने से फल फट जाते हैं।',
        'फलों के पिछले हिस्से के काले पड़ने (Blossom End Rot) से बचाव के लिए कैल्शियम नाइट्रेट दें।',
        'भारी फलों के गुच्छों को सहारा दें ताकि टहनियां न टूटें।',
      ],
      or: [
        'ଫଳର ଚମକ, ଓଜନ ଓ ରଙ୍ଗ ବୃଦ୍ଧି ପାଇଁ ପୋଟାସିୟମ୍ (୦:୦:୫୦) ପ୍ରୟୋଗ କରନ୍ତୁ।',
        'ଫଳ ଫାଟିବା ରୋକିବା ପାଇଁ ନିୟମିତ ପାଣି ମଡ଼ାନ୍ତୁ।',
        'ଫଳର ତଳ ଅଂଶ କଳା ପଡ଼ିବା ରୋକିବାକୁ କ୍ୟାଲସିୟମ୍ ନାଇଟ୍ରେଟ୍ ଦିଅନ୍ତୁ।',
        'ଭାରୀ ଫଳ ପେନ୍ଥା ଗୁଡିକୁ ଭଲଭାବେ ବାନ୍ଧନ୍ତୁ।',
      ],
    },
    irrigationAdvice: {
      en: 'Uniform moisture is crucial. Irregular moisture causes fruit cracking and calcium deficiency (Blossom End Rot).',
      hi: 'समान नमी बनाए रखें। अनियमित सिंचाई से फलों में दरारें (Fruit cracking) पड़ जाती हैं।',
      or: 'ସମାନ ପରିମାଣରେ ପାଣି ଦିଅନ୍ତୁ। ଅନିୟମିତ ଜଳସେଚନ ଫଳ ଫଟାଇଦିଏ।',
    },
    nutrientManagement: {
      en: 'Fertigate Potassium Sulphate (0:0:50) + Calcium Nitrate (2.5g/L) for thick peel and longer shelf life.',
      hi: 'कैल्शियम नाइट्रेट (2.5 ग्राम/लीटर) और पोटाश का छिड़काव करें ताकि फल ठोस और चमकदार बनें।',
      or: 'କ୍ୟାଲସିୟମ୍ ନାଇଟ୍ରେଟ୍ ଏବଂ ପୋଟାସ୍ ଖତ ପ୍ରୟୋଗ କରନ୍ତୁ ଯାହାଫଳରେ ଫଳ ମଜବୁତ ରହିବ।',
    },
    pestDiseaseAlert: {
      en: 'Fruit borer bores into developing tomatoes. Collect and destroy bored fruits; use neem spray.',
      hi: 'फल छेदक सुंडी फलों के अंदर छेद करती है। छेद वाले फलों को तोड़कर नष्ट करें और नीम अर्क छिड़कें।',
      or: 'ଫଳ ବିନ୍ଧା ପୋକ ଫଳରେ କଣା କରେ। ଆକ୍ରାନ୍ତ ଫଳ ନଷ୍ଟ କରନ୍ତୁ ଏବଂ ନିମ୍ବ ତେଲ ସ୍ପ୍ରେ କରନ୍ତୁ।',
    },
  },
  {
    id: 'harvesting',
    stageNumber: 6,
    name: {
      en: 'Harvesting & Picking',
      hi: 'तुड़ाई और विपणन',
      or: 'ତୋଳିବା ଏବଂ ବିକ୍ରି',
    },
    duration: 'DAT 81 - 120+',
    startDay: 81,
    endDay: 130,
    iconName: 'ShoppingBag',
    summary: {
      en: 'Multiple pickings based on market distance (Breaker stage for distant, Red ripe for local).',
      hi: 'बाजार की दूरी के अनुसार तुड़ाई (दूर की मंडी के लिए ब्रेकर स्टेज, स्थानीय के लिए लाल पके फल)।',
      or: 'ଦୂର ବଜାର ପାଇଁ ଅଧା ପାଚିଲା ଏବଂ ସ୍ଥାନୀୟ ବଜାର ପାଇଁ ପୂରା ଲାଲ୍ ଟମାଟୋ ତୋଳନ୍ତୁ।',
    },
    keyActivities: {
      en: [
        'Harvest during early morning or late evening when field temperatures are cool.',
        'For distant markets, harvest at "Breaker/Turning stage" (10-30% pinkish at blossom end).',
        'For local retail markets, harvest at "Pink to Light Red stage".',
        'Grade tomatoes by size and remove blemished fruits before crating in plastic crates.',
      ],
      hi: [
        'तुड़ाई हमेशा सुबह जल्दी या शाम को करें जब धूप तेज न हो।',
        'दूर की मंडियों के लिए फल तब तोड़ें जब नीचे हल्का गुलाबी रंग आने लगे (Breaker Stage)।',
        'स्थानीय बाजार के लिए पूरा लाल पका फल तोड़ें।',
        'फलों को प्लास्टिक क्रेट्स में रखें, बोरियों में न भरें ताकि फल दबें नहीं।',
      ],
      or: [
        'ସକାଳେ ଖରା ହେବା ପୂର୍ବରୁ ଟମାଟୋ ତୋଳନ୍ତୁ।',
        'ଦୂର ଯିବାକୁ ଥିଲେ ଅଧା ଲାଲ୍ ଥିବା ସମୟରେ ତୋଳନ୍ତୁ।',
        'ସ୍ଥାନୀୟ ବଜାର ପାଇଁ ପୂରା ପାଚିଲା ଫଳ ତୋଳନ୍ତୁ।',
        'ଫଳକୁ ପ୍ଲାଷ୍ଟିକ୍ କ୍ରେଟ୍‌ରେ ସାଇତି ରଖନ୍ତୁ।',
      ],
    },
    irrigationAdvice: {
      en: 'Reduce irrigation frequency during peak harvest to improve pulp firmness and shelf life.',
      hi: 'तुड़ाई के दिनों में पानी थोड़ा कम करें ताकि फल ज्यादा समय तक टिकाऊ रहें।',
      or: 'ତୋଳିବା ସମୟରେ ପାଣି ପରିମାଣ ଟିକେ କମାନ୍ତୁ ଯାହା ଦ୍ୱାରା ଫଳ ଶୀଘ୍ର ଖରାପ ହେବ ନାହିଁ।',
    },
    nutrientManagement: {
      en: 'Light application of Micronutrient mixture after every 2 pickings to sustain late flushes.',
      hi: 'हर 2 तुड़ाई के बाद हल्का सूक्ष्म पोषक घोल दें ताकि नए फूल और फल बनते रहें।',
      or: 'ପ୍ରତି ୨ ଥର ତୋଳିବା ପରେ ହାଲୁକା ଅଣୁସାର ସ୍ପ୍ରେ କରନ୍ତୁ।',
    },
    pestDiseaseAlert: {
      en: 'Inspect for fruit rot and Anthracnose. Observe safety waiting periods (PHI) before any spray.',
      hi: 'फलों पर सड़न और दाग पर नजर रखें। किसी भी दवा के छिड़काव के बाद तुड़ाई का सुरक्षित समय (PHI) जरूर मानें।',
      or: 'ଫଳ ପଚା ରୋଗ ଉପରେ ନଜର ରଖନ୍ତୁ। କୌଣସି ଔଷଧ ସ୍ପ୍ରେ କଲେ ନିର୍ଦ୍ଧାରିତ ଦିନ ପରେ ହିଁ ତୋଳନ୍ତୁ।',
    },
  },
];

export interface CropProgressResult {
  dat: number; // Days After Transplanting
  currentStage: CropStageInfo;
  stageProgressPercent: number; // 0 to 100 within current stage
  overallProgressPercent: number; // 0 to 100 across full cycle
  daysInCurrentStage: number;
  daysRemainingInStage: number;
}

export const calculateCropProgress = (plantingDateStr: string): CropProgressResult => {
  const plantingDate = new Date(plantingDateStr);
  const today = new Date();
  
  // Calculate difference in whole days
  const diffTime = today.getTime() - plantingDate.getTime();
  const dat = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  let currentStage = TOMATO_STAGES[1]; // default transplanting

  if (dat < 0) {
    currentStage = TOMATO_STAGES[0]; // Nursery
  } else if (dat <= 15) {
    currentStage = TOMATO_STAGES[1]; // Transplanting & Establishment
  } else if (dat <= 35) {
    currentStage = TOMATO_STAGES[2]; // Vegetative
  } else if (dat <= 55) {
    currentStage = TOMATO_STAGES[3]; // Flowering
  } else if (dat <= 80) {
    currentStage = TOMATO_STAGES[4]; // Fruit Dev
  } else {
    currentStage = TOMATO_STAGES[5]; // Harvesting
  }

  const stageDuration = Math.max(1, currentStage.endDay - currentStage.startDay);
  const daysInStage = Math.max(0, dat - currentStage.startDay);
  const stageProgressPercent = Math.min(100, Math.max(0, Math.round((daysInStage / stageDuration) * 100)));

  // Total lifecycle ~120 days
  const totalLifecycleDays = 120;
  const overallProgressPercent = Math.min(100, Math.max(5, Math.round(((dat + 25) / (totalLifecycleDays + 25)) * 100)));

  const daysRemainingInStage = Math.max(0, currentStage.endDay - dat);

  return {
    dat,
    currentStage,
    stageProgressPercent,
    overallProgressPercent,
    daysInCurrentStage: daysInStage,
    daysRemainingInStage,
  };
};
