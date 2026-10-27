import { WeatherData, FarmProfile, Recommendation, DiseaseRisk } from '../types';
import { calculateCropProgress } from '../utils/cropStages';

export const generateRecommendations = (
  weather: WeatherData | null,
  profile: FarmProfile
): { recommendations: Recommendation[]; diseaseRisks: DiseaseRisk[] } => {
  const { currentStage, dat } = calculateCropProgress(profile.plantingDate);
  const recs: Recommendation[] = [];

  const temp = weather?.temperature ?? 27;
  const humidity = weather?.humidity ?? 65;
  const rain = weather?.precipitation ?? 0;
  const rainProb = weather?.rainProbability ?? 15;
  const forecastRainMax = weather?.dailyForecast?.[0]?.rainSum ?? 0;

  // 1. IRRIGATION & MOISTURE RECOMMENDATIONS
  if (rain > 12 || forecastRainMax > 20) {
    recs.push({
      id: 'irr-rain-drainage',
      category: 'irrigation',
      urgency: 'high',
      title: {
        en: 'Heavy Rain Alert: Halt Irrigation & Clear Furrows',
        hi: 'भारी बारिश की चेतावनी: सिंचाई रोकें और पानी निकासी नाली खोलें',
        or: 'ପ୍ରବଳ ବର୍ଷା ସତର୍କତା: ଜଳସେଚନ ବନ୍ଦ କରନ୍ତୁ ଏବଂ ନିଷ୍କାସନ ନାଳି ଖୋଲନ୍ତୁ',
      },
      description: {
        en: `Current precipitation is ${rain}mm with heavy showers forecast (${forecastRainMax}mm). Suspend all canal/drip irrigation immediately. Ensure drainage trenches are clear of weed blockages.`,
        hi: `खेत में बारिश (${rain}mm) और तेज वर्षा का पूर्वानुमान (${forecastRainMax}mm) है। तुरंत सिंचाई रोकें और क्यारियों में जमा अतिरिक्त पानी निकालने की व्यवस्था करें।`,
        or: `କ୍ଷେତରେ ${rain}mm ବର୍ଷା ଏବଂ ପ୍ରବଳ ବର୍ଷାର ସମ୍ଭାବନା ଅଛି। ତୁରନ୍ତ ପାଣି ମଡ଼ାଇବା ବନ୍ଦ କରନ୍ତୁ ଓ ଜମିରୁ ପାଣି ନିଷ୍କାସନ ବ୍ୟବସ୍ଥା କରନ୍ତୁ।`,
      },
      rationale: {
        en: 'Why: Tomato roots are highly susceptible to root suffocation and damping-off when soil remains submerged for more than 12-24 hours.',
        hi: 'कारण: टमाटर की जड़ें 12-24 घंटे से अधिक पानी में डूबी रहने पर सड़ने लगती हैं और विल्ट (मुरझान) रोग फैल जाता है।',
        or: 'କାରଣ: ୧୨-୨୪ ଘଣ୍ଟାରୁ ଅଧିକ ଜଳବନ୍ଦୀ ରହିଲେ ଟମାଟୋ ଚେର ସଢ଼ିଯାଏ ଓ ଗଛ ମରିଯାଏ।',
      },
      icon: 'CloudRain',
      safetyDisclaimer: {
        en: 'Always inspect soil 2-3 inches deep with your fingers before resuming irrigation after rain.',
        hi: 'बारिश के बाद सिंचाई दोबारा शुरू करने से पहले 2-3 इंच मिट्टी खोदकर नमी की जांच अवश्य करें।',
        or: 'ବର୍ଷା ପରେ ଜଳସେଚନ ଆରମ୍ଭ କରିବା ପୂର୍ବରୁ ୨-୩ ଇଞ୍ଚ ମାଟି ଖୋଳି ଆର୍ଦ୍ରତା ପରୀକ୍ଷା କରନ୍ତୁ।',
      },
    });
  } else if (rainProb > 60 || forecastRainMax > 8) {
    recs.push({
      id: 'irr-rain-check',
      category: 'irrigation',
      urgency: 'medium',
      title: {
        en: 'High Rain Probability: Postpone Irrigation & Soil Drenching',
        hi: 'बारिश की संभावना: सिंचाई और खाद का छिड़काव कुछ समय के लिए टालें',
        or: 'ବର୍ଷା ସମ୍ଭାବନା: ଜଳସେଚନ ଓ ସାର ପ୍ରୟୋଗ ସାମୟିକ ଭାବେ ସ୍ଥଗିତ ରଖନ୍ତୁ',
      },
      description: {
        en: `There is a ${rainProb}% chance of rain in your area. Delay regular irrigation cycles and avoid applying costly water-soluble fertilizers until the weather clears.`,
        hi: `आपके क्षेत्र में ${rainProb}% बारिश का अनुमान है। नियमित सिंचाई टालें और घुलनशील खाद का छिड़काव बारिश थमने तक रोकें ताकि खाद बह न जाए।`,
        or: `ଆପଣଙ୍କ ଅଞ୍ଚଳରେ ${rainProb}% ବର୍ଷା ସମ୍ଭାବନା ଅଛି। ନିୟମିତ ପାଣି ମଡ଼ାଇବା ସ୍ଥଗିତ ରଖନ୍ତୁ।`,
      },
      rationale: {
        en: 'Why: Conserves water, prevents fertilizer leaching past the root zone, and reduces unnecessary pumping electricity.',
        hi: 'कारण: पानी की बचत होती है, खाद बहने से बचती है और बिजली का अनावश्यक खर्च नहीं होता।',
        or: 'କାରଣ: ଜଳ ସଂରକ୍ଷଣ ହୁଏ ଏବଂ ମୂଲ୍ୟବାନ ଖତ-ସାର ଧୋଇ ହୋଇ ନଷ୍ଟ ହୁଏ ନାହିଁ।',
      },
      icon: 'CloudDrizzle',
    });
  } else if (temp >= 33 && (currentStage.id === 'flowering' || currentStage.id === 'fruit_development')) {
    recs.push({
      id: 'irr-heat-stress',
      category: 'irrigation',
      urgency: 'high',
      title: {
        en: 'High Daytime Temperature: Early Morning Light Irrigation',
        hi: 'तापमान 33°C से अधिक: सुबह के समय हल्की सिंचाई करें',
        or: 'ଅଧିକ ତାପମାତ୍ରା: ସକାଳେ ହାଲୁକା ଜଳସେଚନ କରନ୍ତୁ',
      },
      description: {
        en: `Current temperature is ${temp}°C during ${currentStage.name.en}. Provide light irrigation between 6:00 AM and 9:00 AM to keep the rhizosphere cool. Avoid midday irrigation with hot pipes.`,
        hi: `तापमान ${temp}°C पहुंच गया है और फसल ${currentStage.name.hi} में है। सुबह 6 से 9 बजे के बीच हल्की सिंचाई करें। दोपहर में गर्म पानी पाइपों से न दें।`,
        or: `ତାପମାତ୍ରା ${temp}°C ରେ ପହଞ୍ଚିଛି। ସକାଳେ ହାଲୁକା ପାଣି ମଡ଼ାନ୍ତୁ ଯାହା ଫଳରେ ଗଛ ଖରାରୁ ସୁରକ୍ଷିତ ରହିବ।`,
      },
      rationale: {
        en: 'Why: Heat shock during flowering induces pollen sterility and flower drop. High temperature also prevents calcium mobility, triggering Blossom End Rot (BER).',
        hi: 'कारण: तेज गर्मी से परागकण झुलस जाते हैं और फूल गिरते हैं। कैल्शियम की कमी से फल का निचला हिस्सा काला पड़ता है।',
        or: 'କାରଣ: ପ୍ରଚଣ୍ଡ ଖରାରେ ଫୁଲ ଝଡ଼ିଯାଏ ଏବଂ ଫଳରେ କ୍ୟାଲସିୟମ୍ ଅଭାବରୁ କଳା ଦାଗ ହୁଏ।',
      },
      icon: 'Sun',
      safetyDisclaimer: {
        en: 'Maintain uniform soil moisture. Avoid alternate severe drying and heavy flooding.',
        hi: 'खेत को एक समान नम रखें। पहले सूखा और फिर अचानक तेज पानी देने से टमाटर चटकने लगते हैं।',
        or: 'ଜମିରେ ସମାନ ଆର୍ଦ୍ରତା ବଜାୟ ରଖନ୍ତୁ। ଅତ୍ୟଧିକ ଶୁଷ୍କତା ପରେ ଅଧିକ ପାଣି ଦେଲେ ଫଳ ଫାଟେ।',
      },
    });
  } else {
    recs.push({
      id: 'irr-standard',
      category: 'irrigation',
      urgency: 'info',
      title: {
        en: 'Soil Moisture Check Before Routine Irrigation',
        hi: 'नियमित सिंचाई से पहले मिट्टी में नमी की जांच करें',
        or: 'ନିୟମିତ ଜଳସେଚନ ପୂର୍ବରୁ ମାଟିର ଆର୍ଦ୍ରତା ପରୀକ୍ଷା କରନ୍ତୁ',
      },
      description: {
        en: `Weather is moderate (${temp}°C, ${humidity}% humidity). Take a handful of soil from 2-3 inches depth. If it forms an intact ball without breaking, moisture is adequate.`,
        hi: `मौसम सामान्य है (${temp}°C, ${humidity}% नमी)। पौधे के पास 2-3 इंच गहराई से मुट्ठी भर मिट्टी लें। यदि लड्डू बन जाए तो सिंचाई की आवश्यकता नहीं है।`,
        or: `ପାଗ ସ୍ୱାଭାବିକ ଅଛି। ୨-୩ ଇଞ୍ଚ ତଳୁ ମାଟି ଆଣି ମୁଠା କରନ୍ତୁ, ଯଦି ଲଡୁ ପରି ବନ୍ଧାହୁଏ ତେବେ ପାଣି ଦରକାର ନାହିଁ।`,
      },
      rationale: {
        en: 'Why: Conserves water resources, stimulates deep taproot growth, and prevents root-zone fungal pathogens.',
        hi: 'कारण: पानी की बचत होती है, जड़ें गहराई में जाती हैं और जड़ सड़न की फफूंद नहीं पनपती।',
        or: 'କାରଣ: ଜଳ ସଞ୍ଚୟ ହୁଏ ଏବଂ ଚେର ଗଭୀରକୁ ଯାଇ ଶକ୍ତ ହୁଏ।',
      },
      icon: 'Droplets',
    });
  }

  // 2. STAGE-SPECIFIC AGRONOMY RECOMMENDATION
  if (currentStage.id === 'transplanting') {
    recs.push({
      id: 'stage-trans-support',
      category: 'crop_stage',
      urgency: 'medium',
      title: {
        en: `DAT ${Math.max(1, dat)}: New Root Establishment Care`,
        hi: `रोपाई के ${Math.max(1, dat)} दिन: नई सफेद जड़ों के विकास पर ध्यान दें`,
        or: `ରୋପଣର ${Math.max(1, dat)} ଦିନ: ନୂତନ ଚେର ବୃଦ୍ଧି ଉପରେ ଯତ୍ନ ନିଅନ୍ତୁ`,
      },
      description: {
        en: 'Check field for missing hills or collapsed seedlings. Gap-fill immediately with backup seedlings during late afternoon.',
        hi: 'खेत में मुरझाए या सूखे पौधों की जगह तुरंत नए पौधे लगाएं (Gap-filling)। यह काम हमेशा शाम को ही करें।',
        or: 'ଶୁଖିଯାଇଥିବା ଚାରା ସ୍ଥାନରେ ତୁରନ୍ତ ନୂଆ ଚାରା ଲଗାନ୍ତୁ। ଏହା ସର୍ବଦା ଅପରାହ୍ନରେ କରନ୍ତୁ।',
      },
      rationale: {
        en: 'Why: Gap filling within 7-10 days maintains optimum plant population (8,000 - 10,000 plants/acre) and uniform harvest.',
        hi: 'कारण: पहले 10 दिन में खाली जगह भरने से प्रति एकड़ 8,000-10,000 पौधों की सही संख्या बनी रहती है।',
        or: 'କାରଣ: ପ୍ରଥମ ସପ୍ତାହରେ ଚାରା ଭର୍ତ୍ତି କଲେ ଜମିରେ ସମାନ ଗଛ ସଂଖ୍ୟା ବଜାୟ ରହେ।',
      },
      icon: 'Sprout',
    });
  } else if (currentStage.id === 'vegetative') {
    recs.push({
      id: 'stage-veg-staking',
      category: 'crop_stage',
      urgency: 'medium',
      title: {
        en: 'Trellis & Staking: Support Tomato Branches',
        hi: 'बांस और तार का सहारा (Staking) दें',
        or: 'ଗଛକୁ ବାଉଁଶ ବା ତାର ସାହାଯ୍ୟରେ ବାନ୍ଧନ୍ତୁ',
      },
      description: {
        en: 'Erect bamboo stakes (1.5 - 2m height) and tie main branches loosely with jute twine. Remove suckers touching soil.',
        hi: 'पौधों को जमीन पर गिरने से बचाने के लिए बांस या सुतली से सहारा दें। मिट्टी से छूने वाली निचली पत्तियों की छंटाई करें।',
        or: 'ଗଛକୁ ବାଉଁଶ ଖୁଣ୍ଟି ସାହାଯ୍ୟରେ ବାନ୍ଧନ୍ତୁ। ମାଟି ଲାଗୁଥିବା ତଳ ପତ୍ର ଗୁଡିକୁ କାଟି ଦିଅନ୍ତୁ।',
      },
      rationale: {
        en: 'Why: Keeps foliage and future fruits off damp soil, preventing fruit rot, slug damage, and foliar fungal infection.',
        hi: 'कारण: फल और पत्तियां गीली मिट्टी के संपर्क में नहीं आते, जिससे फल सड़न और फफूंद जनित रोगों से 60% तक बचाव होता है।',
        or: 'କାରଣ: ଫଳ ଓ ପତ୍ର ମାଟିରେ ଲାଗି ଖରାପ ହୁଏ ନାହିଁ ଏବଂ ରୋଗ ସଂକ୍ରମଣ କମିଥାଏ।',
      },
      icon: 'ShieldCheck',
    });
  } else if (currentStage.id === 'flowering') {
    recs.push({
      id: 'stage-flw-boron',
      category: 'crop_stage',
      urgency: 'high',
      title: {
        en: 'Peak Flowering: Micronutrient & Fruit Borer Scouting',
        hi: 'फूल खिलने का समय: सूक्ष्म पोषक तत्व और फल छेदक की निगरानी',
        or: 'ପୂର୍ଣ୍ଣ ଫୁଲ ସମୟ: ଅଣୁସାର ଏବଂ ଫଳ ବିନ୍ଧା ପୋକ ନିରୀକ୍ଷଣ',
      },
      description: {
        en: 'Spray Solubor / Boron 20% (1g/L) on flower clusters. Hang yellow sticky traps (10/acre) to catch whiteflies that transmit leaf curl.',
        hi: 'फूलों के गुच्छों पर बोरॉन 20% (1 ग्राम/लीटर) का छिड़काव करें। सफेद मक्खी पकड़ने के लिए पीले चिपचिपे कार्ड लगाएं।',
        or: 'ଫୁଲ ଗୁଚ୍ଛ ଉପରେ ବୋରନ୍ (୧ ଗ୍ରାମ/ଲିଟର) ସ୍ପ୍ରେ କରନ୍ତୁ। ଧଳାମାଛି ପାଇଁ ହଳଦିଆ ଷ୍ଟିକି କାର୍ଡ ଲଗାନ୍ତୁ।',
      },
      rationale: {
        en: 'Why: Boron improves pollen tube germination and ovary fertilization, drastically reducing unfertilized flower drops.',
        hi: 'कारण: बोरॉन से पराग नली का विकास अच्छा होता है, जिससे फूल झड़ना रुकता है और फल अधिक संख्या में बैठते हैं।',
        or: 'କାରଣ: ବୋରନ୍ ପ୍ରୟୋଗ ଦ୍ୱାରା ଫୁଲ ଝଡ଼ିବା ବନ୍ଦ ହୁଏ ଏବଂ ଅଧିକ ଫଳ ଧରେ।',
      },
      icon: 'Flower2',
      safetyDisclaimer: {
        en: 'Avoid pesticide spray during morning bee-pollination hours (8:00 AM - 11:00 AM). Consult your local KVK for approved products.',
        hi: 'सुबह मधुमक्खियों के परागण के समय कीटनाशक न छिड़कें। केवल कृषि विभाग द्वारा अनुशंसित दवाओं का ही प्रयोग करें।',
        or: 'ସକାଳେ ମହୁମାଛି ବୁଲିବା ସମୟରେ କୌଣସି ବିଷ ସ୍ପ୍ରେ କରନ୍ତୁ ନାହିଁ।',
      },
    });
  } else if (currentStage.id === 'fruit_development') {
    recs.push({
      id: 'stage-fruit-calcium',
      category: 'crop_stage',
      urgency: 'medium',
      title: {
        en: 'Fruit Sizing: Calcium Nitrate & Potassium Supplement',
        hi: 'फलों का आकार: कैल्शियम नाइट्रेट और पोटाश का प्रयोग',
        or: 'ଫଳ ବଡ଼ ହେବା: କ୍ୟାଲସିୟମ୍ ନାଇଟ୍ରେଟ୍ ଏବଂ ପୋଟାସ୍ ପ୍ରୟୋଗ',
      },
      description: {
        en: 'Apply Calcium Nitrate (2.5g/L) + Potassium sulphate (0:0:50). Watch for black sunken spots at the fruit base (Blossom End Rot).',
        hi: 'कैल्शियम नाइट्रेट और पोटैशियम सल्फेट दें। टमाटर के निचले हिस्से में काले चपटे धब्बों (ब्लॉसम एंड रॉट) की जांच करें।',
        or: 'କ୍ୟାଲସିୟମ୍ ନାଇଟ୍ରେଟ୍ ଏବଂ ପୋଟାସ୍ ଖତ ପ୍ରୟୋଗ କରନ୍ତୁ। ଫଳ ତଳେ କଳା ଦାଗ ଉପରେ ନଜର ରଖନ୍ତୁ।',
      },
      rationale: {
        en: 'Why: Calcium strengthens tomato cell wall membranes, while Potassium dictates sugar transfer, flesh density, and bright red skin.',
        hi: 'कारण: कैल्शियम से फल का छिलका मजबूत होता है और पोटाश से फल में वजन, चमक और अच्छा लाल रंग आता है।',
        or: 'କାରଣ: କ୍ୟାଲସିୟମ୍ ଚୋପାକୁ ଟାଣ କରେ ଏବଂ ପୋଟାସ୍ ଫଳର ଓଜନ ଓ ଚମକ ବଢ଼ାଏ।',
      },
      icon: 'Apple',
    });
  } else if (currentStage.id === 'harvesting') {
    recs.push({
      id: 'stage-harvest-timing',
      category: 'crop_stage',
      urgency: 'info',
      title: {
        en: 'Picking Time: Breaker Stage for Mandi Transit',
        hi: 'तुड़ाई का नियम: मंडी परिवहन के लिए ब्रेकर (गुलाबी) अवस्था',
        or: 'ତୋଳିବା ନିୟମ: ବଜାର ନେବା ପାଇଁ ଅଧା ପାଚିଲା ଫଳ',
      },
      description: {
        en: 'Pick tomatoes with the green calyx intact. Stack maximum 3 layers in ventilated plastic crates. Never pack in burlap sacks.',
        hi: 'फल डंठल सहित तोड़ें। हवादार प्लास्टिक क्रेट में रखें और बोरियों में ठूंसकर न भरें।',
        or: 'ଡେମ୍ଫ ସହିତ ଟମାଟୋ ତୋଳନ୍ତୁ ଏବଂ ପ୍ଲାଷ୍ଟିକ୍ କ୍ରେଟ୍‌ରେ ସାଇତି ରଖନ୍ତୁ।',
      },
      rationale: {
        en: 'Why: Prevents post-harvest bruising, squashing, and moisture accumulation during road transit to APMC mandis.',
        hi: 'कारण: मंडी ले जाते समय फल दबकर फूटते नहीं हैं और 4-6 दिन तक ताजा बने रहते हैं।',
        or: 'କାରଣ: ବାଟରେ ଫଳ ନଷ୍ଟ ହୁଏ ନାହିଁ ଏବଂ ବଜାରରେ ଭଲ ଦର ମିଳେ।',
      },
      icon: 'ShoppingBag',
    });
  }

  // 3. DISEASE RISK ASSESSMENT (Transparent, Non-Alarmist, Weather-Triggered)
  // Early Blight (Alternaria solani): Favors 24-29°C + alternating wet & dry cycles
  const earlyBlightRiskScore = Math.min(
    100,
    Math.round(
      (temp >= 22 && temp <= 30 ? 40 : 15) +
      (humidity >= 70 ? 35 : humidity >= 50 ? 20 : 5) +
      (rain > 0 ? 25 : 5)
    )
  );

  // Late Blight (Phytophthora infestans): Cool 12-22°C + high humidity > 85% + persistent moisture
  const lateBlightRiskScore = Math.min(
    100,
    Math.round(
      (temp >= 12 && temp <= 22 ? 45 : 10) +
      (humidity >= 85 ? 45 : humidity >= 70 ? 25 : 5) +
      (rain > 5 ? 20 : 0)
    )
  );

  // Tomato Leaf Curl Virus (Whitefly vector): Warm 28-36°C + dry weather < 55% humidity
  const leafCurlRiskScore = Math.min(
    100,
    Math.round(
      (temp >= 27 && temp <= 37 ? 45 : 15) +
      (humidity < 60 ? 40 : 10) +
      (rain === 0 ? 15 : 0)
    )
  );

  // Bacterial Wilt (Ralstonia): Warm soils > 28°C + waterlogged heavy soil
  const bacterialWiltRiskScore = Math.min(
    100,
    Math.round(
      (temp >= 28 ? 40 : 15) +
      (rain > 15 || humidity > 80 ? 45 : 15)
    )
  );

  const diseaseRisks: DiseaseRisk[] = [
    {
      name: {
        en: 'Early Blight (Alternaria)',
        hi: 'अगेती झुलसा (अल्टरनेरिया)',
        or: 'ଅଗୁଆ ଝାଉଁଳା ରୋଗ',
      },
      pathogen: 'Alternaria solani (Fungus)',
      riskLevel: earlyBlightRiskScore > 70 ? 'High' : earlyBlightRiskScore > 40 ? 'Moderate' : 'Low',
      riskScore: earlyBlightRiskScore,
      triggers: {
        en: 'Trigger: Warm weather (24-29°C) accompanied by frequent dew, irrigation splash, or intermittent rain.',
        hi: 'मौसम संकेत: 24-29°C तापमान और पत्तियों पर ओस या पानी की बूंदें रहने से यह फफूंद तेजी से फैलती है।',
        or: 'ପାଗ ସୂଚନା: ୨୪-୨୯°C ତାପମାତ୍ରା ଓ ପତ୍ର ଓଦା ରହିଲେ ଏହି ଫିମ୍ପି ବ୍ୟାପେ।',
      },
      symptoms: {
        en: 'Concentric dark target-like rings on older lower leaves, turning yellow and falling off.',
        hi: 'निचली पत्तियों पर गहरे भूरे गोल छल्लेदार धब्बे, पत्ती पीली पड़कर सूखना।',
        or: 'ତଳ ପତ୍ରରେ ଗୋଲାକାର ଧୂସର ଦାଗ ଏବଂ ପତ୍ର ହଳଦିଆ ହୋଇ ଝଡ଼ିବା।',
      },
      preventativeMeasures: {
        en: [
          'Prune lower 6-8 inches of leaves that touch soil.',
          'Avoid overhead sprinkler wetting of foliage.',
          'Apply Trichoderma viride or copper oxychloride (3g/L) strictly if symptoms appear, following extension guidance.',
        ],
        hi: [
          'जमीन से छूती हुई निचली 6-8 इंच पत्तियों को हटा दें।',
          'पौधों के ऊपर से फव्वारा पानी देने से बचें।',
          'लक्षण दिखने पर स्थानीय कृषि विस्तार अधिकारी की सलाह से ही कवकनाशी का प्रयोग करें।',
        ],
        or: [
          'ମାଟି ଛୁଉଁଥିବା ତଳ ପତ୍ର କାଟି ଦିଅନ୍ତୁ।',
          'ଗଛ ଉପରେ ପାଣି ନ ଢାଳି ମୂଳରେ ପାଣି ଦିଅନ୍ତୁ।',
          'ରୋଗ ଲକ୍ଷଣ ଦେଖାଦେଲେ କୃଷି ଅଧିକାରୀଙ୍କ ପରାମର୍ଶ କ୍ରମେ ଉପଚାର କରନ୍ତୁ।',
        ],
      },
    },
    {
      name: {
        en: 'Late Blight (Phytophthora)',
        hi: 'पछेती झुलसा (फाइटोफ्थोरा)',
        or: 'ପଛୁଆ ଝାଉଁଳା ରୋଗ',
      },
      pathogen: 'Phytophthora infestans (Oomycete)',
      riskLevel: lateBlightRiskScore > 70 ? 'High' : lateBlightRiskScore > 40 ? 'Moderate' : 'Low',
      riskScore: lateBlightRiskScore,
      triggers: {
        en: 'Trigger: Cool temperatures (12-22°C) coupled with high humidity (>85%) and cloudy, drizzly days.',
        hi: 'मौसम संकेत: ठंडा मौसम (12-22°C), बादलों भरा आसमान और 85% से अधिक हवा में नमी।',
        or: 'ପାଗ ସୂଚନା: ଥଣ୍ଡା ପାଗ (୧୨-୨୨°C), କୋହଲା ପବନ ଓ ପ୍ରଚୁର ଆର୍ଦ୍ରତା।',
      },
      symptoms: {
        en: 'Water-soaked grey-green greasy patches on leaf margins with fine white cottony growth on undersides.',
        hi: 'पत्तियों के किनारों पर पानी से भीगे भूरे-काले धब्बे और पत्तियों के नीचे सफेद फफूंद दिखना।',
        or: 'ପତ୍ର ଧାରରେ ପାଣିଆ କଳା ଦାଗ ଏବଂ ପତ୍ର ତଳେ ଧଳା ରଙ୍ଗର ଫିମ୍ପି।',
      },
      preventativeMeasures: {
        en: [
          'Maintain wide row spacing to allow quick leaf drying.',
          'Check fields daily during continuous foggy or overcast winter mornings.',
          'Never spray chemicals without confirming live symptoms on leaves.',
        ],
        hi: [
          'पौधों के बीच उचित दूरी रखें ताकि पत्तियां जल्दी सूखें।',
          'सर्दियों में कोहरे या बादलों के दौरान खेत का रोज निरीक्षण करें।',
          'बिना पत्तियों पर लक्षण देखे अनावश्यक कीटनाशक न छिड़कें।',
        ],
        or: [
          'ଗଛ ମଧ୍ୟରେ ଉପଯୁକ୍ତ ବ୍ୟବଧାନ ରଖନ୍ତୁ।',
          'କୁହୁଡି ଦିନମାନଙ୍କରେ ପ୍ରତିଦିନ ଜମି ଯାଞ୍ଚ କରନ୍ତୁ।',
          'ବିନା କାରଣରେ ରାସାୟନିକ ଔଷଧ ସ୍ପ୍ରେ କରନ୍ତୁ ନାହିଁ।',
        ],
      },
    },
    {
      name: {
        en: 'Tomato Leaf Curl Virus (ToLCV)',
        hi: 'टमाटर का पर्ण कुंचन (लीफ कर्ल वायरस)',
        or: 'ପତ୍ର ମୋଡ଼ା ଭୂତାଣୁ ରୋଗ',
      },
      pathogen: 'Begomovirus (Transmitted by Bemisia tabaci / Whitefly)',
      riskLevel: leafCurlRiskScore > 70 ? 'High' : leafCurlRiskScore > 40 ? 'Moderate' : 'Low',
      riskScore: leafCurlRiskScore,
      triggers: {
        en: 'Trigger: Warm, dry conditions that accelerate whitefly vector multiplication and flight.',
        hi: 'मौसम संकेत: सूखा और गर्म मौसम जिसमें सफेद मक्खियां तेजी से पनपती और उड़ती हैं।',
        or: 'ପାଗ ସୂଚନା: ଶୁଷ୍କ ଓ ଗରମ ପାଗ ଯେଉଁଥିରେ ଧଳାମାଛି ବହୁତ ଶୀଘ୍ର ବଂଶବୃଦ୍ଧି କରେ।',
      },
      symptoms: {
        en: 'Severe upward or downward curling of young leaves, thickening, yellowing of leaf veins, and stunted bush.',
        hi: 'नई पत्तियों का ऊपर या नीचे की ओर मुड़ना, पत्तियों का छोटा और कड़ा होना, पौधे का बौना रह जाना।',
        or: 'ନୂଆ ପତ୍ର ଉପରକୁ ମୋଡ଼ି ହୋଇଯିବା, ଶିରା ହଳଦିଆ ପଡ଼ିବା ଏବଂ ଗଛ ବାଙ୍ଗରା ରହିବା।',
      },
      preventativeMeasures: {
        en: [
          'Install bright yellow sticky sheets (12-15 per acre) just above crop canopy.',
          'Spray 1% Neem Seed Kernel Extract (NSKE) or Neem oil (3ml/L) to deter whiteflies.',
          'Rogue out (uproot and bury) early infected plants showing stunting.',
        ],
        hi: [
          'फसल की ऊंचाई पर पीले चिपचिपे कार्ड (प्रति एकड़ 12-15) लगाएं।',
          'सफेद मक्खी को दूर रखने के लिए नीम तेल (3ml/L) का छिड़काव करें।',
          'शुरुआत में जिस पौधे में मुड़ाव दिखे, उसे उखाड़कर दूर जमीन में गाड़ दें।',
        ],
        or: [
          'ଜମିରେ ହଳଦିଆ ଷ୍ଟିକି ଟ୍ରାପ୍ ଲଗାନ୍ତୁ।',
          'ଧଳାମାଛି ଦାଉରୁ ରକ୍ଷା ପାଇଁ ନିମ୍ବ ତେଲ ସ୍ପ୍ରେ କରନ୍ତୁ।',
          'ରୋଗାକ୍ରାନ୍ତ ଗଛକୁ ଉପାଡ଼ି ମାଟି ତଳେ ପୋତି ଦିଅନ୍ତୁ।',
        ],
      },
    },
    {
      name: {
        en: 'Bacterial Wilt (Ralstonia)',
        hi: 'जीवाणु झुलसा / उकठा (राल्स्टोनिया)',
        or: 'ଜୀବାଣୁ ଜନିତ ଝାଉଁଳା ରୋଗ',
      },
      pathogen: 'Ralstonia solanacearum (Bacterium)',
      riskLevel: bacterialWiltRiskScore > 70 ? 'High' : bacterialWiltRiskScore > 40 ? 'Moderate' : 'Low',
      riskScore: bacterialWiltRiskScore,
      triggers: {
        en: 'Trigger: High soil temperatures (>28°C) combined with saturated, poorly drained soil.',
        hi: 'मौसम संकेत: अधिक तापमान और खेत में पानी का भराव या ठहराव।',
        or: 'ପାଗ ସୂଚନା: ଅଧିକ ତାପମାତ୍ରା ଏବଂ ଜମିରେ ପାଣି ଜମି ରହିବା।',
      },
      symptoms: {
        en: 'Sudden daytime wilting of entire green plant without prior yellowing; stems show white bacterial stream when cut in water.',
        hi: 'हरा-भरा पौधा बिना पीला पड़े अचानक दिन के समय लटक जाता है। तने को साफ पानी में काटने पर सफेद धागे जैसी लार निकलती है।',
        or: 'ସବୁଜ ଗଛ ହଠାତ୍ ଦିନରେ ଝାଉଁଳି ପଡ଼େ। କାଣ୍ଡକୁ ପାଣି ଗ୍ଲାସରେ କାଟିଲେ ଧଳା ସୂତା ପରି ରସ ବାହାରେ।',
      },
      preventativeMeasures: {
        en: [
          'Strictly avoid planting tomatoes in fields where brinjal, chilli, or potato had wilt last season.',
          'Improve drainage so soil never remains saturated.',
          'Drench root zone with Pseudomonas fluorescens (10g/L) or copper hydroxide if certified by KVK.',
        ],
        hi: [
          'जिस खेत में पहले मिर्च, बैंगन या आलू में उकठा आया हो, वहां टमाटर न लगाएं।',
          'खेत में जलभराव बिल्कुल न होने दें।',
          'स्यूडोमोनास फ्लोरोसेंस (10g/L) का घोल पौधों की जड़ों में डालें।',
        ],
        or: [
          'ବାଇଗଣ ବା ଲଙ୍କା ଲଗାଯାଇଥିବା ଜମିରେ ତୁରନ୍ତ ଟମାଟୋ ଲଗାନ୍ତୁ ନାହିଁ।',
          'ଜମିରେ ପାଣି ଜମିବାକୁ ଦିଅନ୍ତୁ ନାହିଁ।',
          'ସୁଡୋମୋନାସ୍ ଦ୍ରବଣ ମାଟିରେ ପ୍ରୟୋଗ କରନ୍ତୁ।',
        ],
      },
    },
  ];

  return { recommendations: recs, diseaseRisks };
};
