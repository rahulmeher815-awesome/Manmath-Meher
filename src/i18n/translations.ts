import { Language } from '../types';

export interface TranslationDictionary {
  appName: string;
  tagline: string;
  nav: {
    dashboard: string;
    calendar: string;
    weather: string;
    leafDoctor: string;
    profile: string;
    aiAssistant: string;
  };
  dashboard: {
    welcome: string;
    farmer: string;
    location: string;
    changeLocation: string;
    currentStage: string;
    stageProgress: string;
    datBadge: string;
    quickStats: string;
    todayAdvice: string;
    irrigationCardTitle: string;
    diseaseRiskTitle: string;
    viewAllRecs: string;
    viewFullCalendar: string;
    openWeather: string;
    askAi: string;
    scanLeaf: string;
  };
  weather: {
    title: string;
    subtitle: string;
    currentWeather: string;
    liveBadge: string;
    offlineBadge: string;
    temp: string;
    humidity: string;
    rainProb: string;
    wind: string;
    rainfall: string;
    sevenDayForecast: string;
    hourlyForecast: string;
    selectDistrict: string;
    useGps: string;
    gpsSuccess: string;
    gpsError: string;
    refresh: string;
    loading: string;
    errorNotice: string;
  };
  calendar: {
    title: string;
    subtitle: string;
    currentStageBadge: string;
    disclaimer: string;
    keyActivities: string;
    irrigationCare: string;
    nutrientPlan: string;
    pestScout: string;
    stageTimeline: string;
    plantingDateLabel: string;
    editDate: string;
  };
  recommendations: {
    title: string;
    subtitle: string;
    whyThisAppears: string;
    expertNotice: string;
    safetyCaution: string;
    irrigationCategory: string;
    diseaseCategory: string;
    cropStageCategory: string;
  };
  diseaseRisk: {
    title: string;
    subtitle: string;
    riskLevel: string;
    highRisk: string;
    moderateRisk: string;
    lowRisk: string;
    triggers: string;
    symptoms: string;
    preventative: string;
    disclaimer: string;
  };
  profile: {
    title: string;
    subtitle: string;
    farmerName: string;
    farmerNamePlaceholder: string;
    village: string;
    villagePlaceholder: string;
    district: string;
    state: string;
    plantingDate: string;
    farmingMethod: string;
    variety: string;
    farmSize: string;
    acre: string;
    saveButton: string;
    savedToast: string;
    resetDefaults: string;
    methods: {
      drip: string;
      flood: string;
      polyhouse: string;
      open_field: string;
      organic: string;
      conventional: string;
    };
  };
  ai: {
    title: string;
    subtitle: string;
    securityBanner: string;
    offlineModeNotice: string;
    placeholder: string;
    send: string;
    suggestedQuestions: string;
    quickQuestions: string[];
    clearChat: string;
    disclaimer: string;
  };
  leafDiagnosis: {
    title: string;
    subtitle: string;
    uploadTitle: string;
    uploadInstructions: string;
    selectImageBtn: string;
    takePhotoBtn: string;
    selectedImageTitle: string;
    statusTitle: string;
    aiStatusMessage: string;
    manualChecklistTitle: string;
    commonDiseases: string;
    compareWithSymptoms: string;
    consultKvkNote: string;
  };
  footer: {
    disclaimer: string;
    openMeteoCredit: string;
    rights: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    appName: 'KrishiSalah',
    tagline: 'Weather-Smart Tomato Crop Advisor for Indian Farmers',
    nav: {
      dashboard: 'Dashboard',
      calendar: 'Crop Calendar',
      weather: 'Weather',
      leafDoctor: 'Leaf Doctor',
      profile: 'Farm Profile',
      aiAssistant: 'AI Advisor',
    },
    dashboard: {
      welcome: 'Welcome',
      farmer: 'Farmer',
      location: 'Farm Location',
      changeLocation: 'Change',
      currentStage: 'Current Tomato Stage',
      stageProgress: 'Stage Progress',
      datBadge: 'Days After Transplanting (DAT)',
      quickStats: 'Farm Quick Overview',
      todayAdvice: "Today's Farming Recommendations",
      irrigationCardTitle: 'Weather-Smart Irrigation',
      diseaseRiskTitle: 'Weather-Related Disease Risks',
      viewAllRecs: 'View All Advice',
      viewFullCalendar: 'View Full Calendar',
      openWeather: 'Detailed Forecast',
      askAi: 'Ask Tomato Advisor',
      scanLeaf: 'Check Leaf Photo',
    },
    weather: {
      title: 'Real-Time Weather & Forecast',
      subtitle: 'Powered by Open-Meteo for accurate localized micro-climate updates',
      currentWeather: 'Current Weather',
      liveBadge: 'LIVE OBSERVATION',
      offlineBadge: 'OFFLINE / SEASONAL',
      temp: 'Temperature',
      humidity: 'Relative Humidity',
      rainProb: 'Rain Probability',
      wind: 'Wind Speed',
      rainfall: 'Rainfall',
      sevenDayForecast: '7-Day Agronomic Forecast',
      hourlyForecast: 'Next 8 Hours Trend',
      selectDistrict: 'Select Tomato Growing Hub',
      useGps: 'Use Device GPS',
      gpsSuccess: 'Location detected successfully',
      gpsError: 'Could not access GPS. Please select your district from the list.',
      refresh: 'Refresh Weather',
      loading: 'Fetching live weather from Open-Meteo...',
      errorNotice: 'Live weather service could not be reached. The rest of KrishiSalah works normally.',
    },
    calendar: {
      title: 'Interactive Tomato Crop Calendar',
      subtitle: 'Customized based on your planting date: Day-by-Day agronomic guidance',
      currentStageBadge: 'CURRENT STAGE',
      disclaimer: 'Note: Actual crop stages vary with variety (determinate vs indeterminate), temperature, and local farming practices.',
      keyActivities: 'Recommended Key Activities',
      irrigationCare: 'Stage Irrigation Guidance',
      nutrientPlan: 'Nutrient & Fertilizer Plan',
      pestScout: 'Pest & Disease Scouting Alerts',
      stageTimeline: 'Cultivation Lifecycle Timeline',
      plantingDateLabel: 'Planting / Transplanting Date',
      editDate: 'Edit Date in Profile',
    },
    recommendations: {
      title: 'Weather-Smart Farming Advice',
      subtitle: 'Practical recommendations tailored to your current crop stage and local weather',
      whyThisAppears: 'Why this appears',
      expertNotice: 'Agricultural Advice Rationale',
      safetyCaution: 'Notice: Weather conditions indicate risk levels only. Do not automatically spray pesticides based solely on weather. Follow local KVK guidance and certified product labels.',
      irrigationCategory: 'Irrigation & Moisture',
      diseaseCategory: 'Disease Prevention',
      cropStageCategory: 'Stage-Specific Care',
    },
    diseaseRisk: {
      title: 'Weather-Related Disease Risk Monitor',
      subtitle: 'Transparent monitoring based on current temperature, humidity, and leaf-wetness',
      riskLevel: 'Risk Level',
      highRisk: 'High Risk Alert',
      moderateRisk: 'Moderate Risk',
      lowRisk: 'Low Risk',
      triggers: 'Weather Triggers',
      symptoms: 'Key Symptoms to Scout For',
      preventative: 'Preventative Cultural Practices',
      disclaimer: 'Important: Weather conditions indicate risk potential, not disease confirmation. Inspect your plants in person before taking any crop protection measures.',
    },
    profile: {
      title: 'My Farm Profile',
      subtitle: 'Stored privately in your browser storage. No login or paid database needed.',
      farmerName: 'Farmer Name',
      farmerNamePlaceholder: 'Enter your name (e.g. Ramesh)',
      village: 'Village',
      villagePlaceholder: 'Enter village name',
      district: 'District',
      state: 'State',
      plantingDate: 'Tomato Planting / Transplanting Date',
      farmingMethod: 'Primary Farming Method',
      variety: 'Tomato Variety / Hybrid Name',
      farmSize: 'Tomato Land Area (Acres)',
      acre: 'Acres',
      saveButton: 'Save Farm Details',
      savedToast: 'Farm profile saved successfully!',
      resetDefaults: 'Reset to Sample Data',
      methods: {
        drip: 'Drip Irrigation',
        flood: 'Furrow / Flood Irrigation',
        polyhouse: 'Protected Polyhouse / Shade Net',
        open_field: 'Open Field Farming',
        organic: 'Natural / Organic Farming',
        conventional: 'Conventional Farming',
      },
    },
    ai: {
      title: 'KrishiSalah AI Farming Assistant',
      subtitle: 'Ask questions about tomato cultivation, fertilizers, pests, and diseases',
      securityBanner: 'Security & Privacy: Gemini API keys are never exposed in browser code. When connected, calls route through a secure backend proxy.',
      offlineModeNotice: 'KrishiSalah Smart Knowledge Engine is ready. Ask any tomato question below!',
      placeholder: 'Type your tomato farming question (e.g. How to prevent fruit cracking?)...',
      send: 'Send',
      suggestedQuestions: 'Frequently Asked Questions by Farmers',
      quickQuestions: [
        'How to prevent and control Tomato Leaf Curl Virus?',
        'What is the best fertilizer and NPK schedule for tomatoes?',
        'How often should I irrigate during the flowering stage?',
        'Why are tomatoes turning black and rotting at the bottom?',
        'Which tomato varieties have high yield and disease resistance?',
      ],
      clearChat: 'Clear Chat',
      disclaimer: 'AI guidance is for informational reference. For critical disease outbreaks, consult your nearest Krishi Vigyan Kendra (KVK).',
    },
    leafDiagnosis: {
      title: 'Tomato Leaf Health Inspector',
      subtitle: 'Upload a clear photo of an affected leaf or plant for visual diagnosis',
      uploadTitle: 'Upload or Capture Tomato Leaf',
      uploadInstructions: 'Select a clear photo from your mobile gallery or take a photo of the affected tomato leaf.',
      selectImageBtn: 'Choose Photo from Device',
      takePhotoBtn: 'Camera Photo',
      selectedImageTitle: 'Selected Leaf Photo',
      statusTitle: 'AI Analysis Integration Status',
      aiStatusMessage: 'The automated AI image analysis endpoint is prepared for future backend deployment. You can compare your leaf with our visual symptom checklist below.',
      manualChecklistTitle: 'Visual Symptom Reference Guide',
      commonDiseases: 'Compare Your Leaf with Common Tomato Diseases',
      compareWithSymptoms: 'Look closely at spots, rings, curling, and leaf underside patterns.',
      consultKvkNote: 'Tip: Take this photo to your local KVK or agriculture officer for definitive laboratory confirmation.',
    },
    footer: {
      disclaimer: 'KrishiSalah is an agronomic advisory tool for Indian tomato cultivators. Weather data is supplied by Open-Meteo.',
      openMeteoCredit: 'Weather data © Open-Meteo (Non-commercial open data)',
      rights: 'Built for Indian Farmers • Free & Open Source',
    },
  },

  hi: {
    appName: 'कृषि सलाह',
    tagline: 'भारतीय किसानों के लिए मौसम-आधारित टमाटर फसल सलाहकार',
    nav: {
      dashboard: 'डैशबोर्ड',
      calendar: 'फसल कैलेंडर',
      weather: 'मौसम',
      leafDoctor: 'पत्ती जांच',
      profile: 'फार्म प्रोफाइल',
      aiAssistant: 'एआई सलाहकार',
    },
    dashboard: {
      welcome: 'स्वागत है',
      farmer: 'किसान',
      location: 'खेत का स्थान',
      changeLocation: 'बदलें',
      currentStage: 'टमाटर की वर्तमान अवस्था',
      stageProgress: 'अवस्था प्रगति',
      datBadge: 'रोपाई के दिन (DAT)',
      quickStats: 'खेत का संक्षिप्त विवरण',
      todayAdvice: 'आज की महत्वपूर्ण कृषि सलाह',
      irrigationCardTitle: 'मौसम-स्मार्ट सिंचाई',
      diseaseRiskTitle: 'मौसम अनुसार रोग का खतरा',
      viewAllRecs: 'सभी सलाह देखें',
      viewFullCalendar: 'पूरा कैलेंडर देखें',
      openWeather: 'विस्तृत मौसम',
      askAi: 'टमाटर सलाहकार से पूछें',
      scanLeaf: 'पत्ती का फोटो जांचें',
    },
    weather: {
      title: 'रीयल-टाइम मौसम और पूर्वानुमान',
      subtitle: 'ओपन-मेटियो द्वारा सटीक स्थानीय मौसम रिपोर्ट',
      currentWeather: 'वर्तमान मौसम',
      liveBadge: 'लाइव रिपोर्ट',
      offlineBadge: 'ऑफलाइन / मौसमी',
      temp: 'तापमान',
      humidity: 'हवा में नमी',
      rainProb: 'बारिश की संभावना',
      wind: 'हवा की गति',
      rainfall: 'वर्षा',
      sevenDayForecast: '7 दिनों का कृषि मौसम पूर्वानुमान',
      hourlyForecast: 'अगले 8 घंटे का रुझान',
      selectDistrict: 'टमाटर उत्पादक जिला चुनें',
      useGps: 'मोबाइल जीपीएस का प्रयोग करें',
      gpsSuccess: 'स्थान सफलतापूर्वक प्राप्त हुआ',
      gpsError: 'जीपीएस नहीं मिला। कृपया सूची से अपना जिला चुनें।',
      refresh: 'मौसम रीफ्रेश करें',
      loading: 'ओपन-मेटियो से मौसम डेटा आ रहा है...',
      errorNotice: 'मौसम सेवा से संपर्क नहीं हो पाया। वेबसाइट के अन्य फीचर सामान्य रूप से काम कर रहे हैं।',
    },
    calendar: {
      title: 'इंटरएक्टिव टमाटर फसल कैलेंडर',
      subtitle: 'आपकी रोपाई तिथि के अनुसार तैयार: दिन-प्रतिदिन की कृषि मार्गदर्शिका',
      currentStageBadge: 'वर्तमान अवस्था',
      disclaimer: 'नोट: किस्म, तापमान और स्थानीय पद्धतियों के अनुसार फसल की अवस्था में थोड़ा अंतर हो सकता है।',
      keyActivities: 'मुख्य कृषि कार्य',
      irrigationCare: 'इस अवस्था में सिंचाई',
      nutrientPlan: 'खाद और पोषण प्रबंधन',
      pestScout: 'कीट एवं रोग निगरानी',
      stageTimeline: 'फसल जीवनचक्र समय-सारणी',
      plantingDateLabel: 'रोपाई की तारीख',
      editDate: 'प्रोफाइल में तारीख बदलें',
    },
    recommendations: {
      title: 'मौसम-आधारित कृषि सलाह',
      subtitle: 'फसल की अवस्था और स्थानीय मौसम के अनुसार तैयार व्यावहारिक सुझाव',
      whyThisAppears: 'यह सलाह क्यों दी गई?',
      expertNotice: 'वैज्ञानिक कारण',
      safetyCaution: 'सूचना: मौसम केवल रोग के खतरे का संकेत देता है। मौसम देखकर तुरंत कीटनाशक न छिड़कें। स्थानीय कृषि विज्ञान केंद्र (KVK) के निर्देशों का पालन करें।',
      irrigationCategory: 'सिंचाई और नमी',
      diseaseCategory: 'रोग बचाव',
      cropStageCategory: 'अवस्था अनुसार देखभाल',
    },
    diseaseRisk: {
      title: 'मौसम अनुसार रोग जोखिम मॉनिटर',
      subtitle: 'तापमान, नमी और पत्तियों के भीगने पर आधारित पारदर्शी निगरानी',
      riskLevel: 'जोखिम स्तर',
      highRisk: 'उच्च जोखिम चेतावनी',
      moderateRisk: 'मध्यम जोखिम',
      lowRisk: 'कम जोखिम',
      triggers: 'मौसम के अनुकूल कारक',
      symptoms: 'खेत में देखने योग्य मुख्य लक्षण',
      preventative: 'रोकथाम के प्राकृतिक व कृषि उपाय',
      disclaimer: 'महत्वपूर्ण: मौसम जोखिम की संभावना बताता है, पुष्टि नहीं। कोई भी दवा छिड़कने से पहले खेत में पौधे स्वयं जांचें।',
    },
    profile: {
      title: 'मेरी फार्म प्रोफाइल',
      subtitle: 'आपके मोबाइल में सुरक्षित। किसी पासवर्ड या भुगतान की जरूरत नहीं।',
      farmerName: 'किसान का नाम',
      farmerNamePlaceholder: 'अपना नाम दर्ज करें (उदा. रमेश)',
      village: 'गांव',
      villagePlaceholder: 'गांव का नाम',
      district: 'जिला',
      state: 'राज्य',
      plantingDate: 'टमाटर रोपाई की तारीख',
      farmingMethod: 'सिंचाई / खेती का तरीका',
      variety: 'टमाटर की किस्म / हाइब्रिड',
      farmSize: 'टमाटर का रकबा (एकड़)',
      acre: 'एकड़',
      saveButton: 'विवरण सुरक्षित करें',
      savedToast: 'प्रोफाइल सफलतापूर्वक सुरक्षित हो गई!',
      resetDefaults: 'नमूना डेटा रीसेट करें',
      methods: {
        drip: 'ड्रिप (टपक) सिंचाई',
        flood: 'नाली / खुला पानी',
        polyhouse: 'पॉलीहाउस / शेडनेट',
        open_field: 'खुला खेत',
        organic: 'प्राकृतिक / जैविक खेती',
        conventional: 'पारंपरिक खेती',
      },
    },
    ai: {
      title: 'कृषि सलाह एआई सहायक',
      subtitle: 'टमाटर की खेती, खाद, सिंचाई और रोगों के बारे में प्रश्न पूछें',
      securityBanner: 'सुरक्षा: आपकी एपीआई कुंजी सुरक्षित सर्वर पर रहती है।',
      offlineModeNotice: 'कृषि सलाह ज्ञान इंजन सक्रिय है। नीचे कोई भी सवाल पूछें!',
      placeholder: 'टमाटर से जुड़ा सवाल लिखें (उदा. फल फटने से कैसे रोकें?)...',
      send: 'भेजें',
      suggestedQuestions: 'किसानों द्वारा पूछे जाने वाले प्रमुख प्रश्न',
      quickQuestions: [
        'टमाटर में पत्ती मुड़ने (लीफ कर्ल) की रोकथाम कैसे करें?',
        'टमाटर में कब और कितनी खाद (NPK) देनी चाहिए?',
        'फूल आने के समय कितने दिन में पानी देना चाहिए?',
        'टमाटर नीचे से काला होकर क्यों सड़ता है?',
        'भारत में सबसे अधिक पैदावार देने वाली किस्में कौन सी हैं?',
      ],
      clearChat: 'चैट साफ करें',
      disclaimer: 'एआई सलाह सामान्य जानकारी के लिए है। गंभीर बीमारी में नजदीकी कृषि विज्ञान केंद्र (KVK) से संपर्क करें।',
    },
    leafDiagnosis: {
      title: 'टमाटर पत्ती स्वास्थ्य जांच',
      subtitle: 'लक्षण पहचानने के लिए प्रभावित पत्ती का साफ फोटो अपलोड करें',
      uploadTitle: 'पत्ती का फोटो अपलोड या कैप्चर करें',
      uploadInstructions: 'मोबाइल गैलरी से साफ फोटो चुनें या सीधे कैमरे से पत्ती का फोटो लें।',
      selectImageBtn: 'गैलरी से फोटो चुनें',
      takePhotoBtn: 'कैमरे से फोटो लें',
      selectedImageTitle: 'चुनी गई पत्ती का फोटो',
      statusTitle: 'एआई विश्लेषण स्थिति',
      aiStatusMessage: 'स्वचालित एआई इमेज विश्लेषण भविष्य के सर्वर के लिए तैयार है। नीचे दी गई सूची से अपनी पत्ती के लक्षणों का मिलान करें।',
      manualChecklistTitle: 'रोग पहचान निर्देशिका',
      commonDiseases: 'सामान्य टमाटर रोगों से तुलना करें',
      compareWithSymptoms: 'धब्बों के आकार, छल्ले, पत्तियों का मुड़ना और निचली सतह को ध्यान से देखें।',
      consultKvkNote: 'सलाह: इस फोटो को अपने नजदीकी कृषि अधिकारी या केवीके को दिखाकर सटीक सलाह लें।',
    },
    footer: {
      disclaimer: 'कृषि सलाह भारतीय टमाटर किसानों के लिए एक मार्गदर्शक साधन है। मौसम डेटा ओपन-मेटियो द्वारा उपलब्ध कराया गया है।',
      openMeteoCredit: 'मौसम डेटा © Open-Meteo',
      rights: 'भारतीय किसानों के लिए समर्पित • पूर्णतः निःशुल्क',
    },
  },

  or: {
    appName: 'କୃଷି ସଲାହ',
    tagline: 'ଭାରତୀୟ କୃଷକଙ୍କ ପାଇଁ ପାଣିପାଗ-ଭିତ୍ତିକ ଟମାଟୋ ଫସଲ ପରାମର୍ଶଦାତା',
    nav: {
      dashboard: 'ଡ୍ୟାସବୋର୍ଡ',
      calendar: 'ଫସଲ କ୍ୟାଲେଣ୍ଡର',
      weather: 'ପାଣିପାଗ',
      leafDoctor: 'ପତ୍ର ପରୀକ୍ଷା',
      profile: 'ଚାଷୀ ପ୍ରୋଫାଇଲ୍',
      aiAssistant: 'ଏଆଇ ସହାୟକ',
    },
    dashboard: {
      welcome: 'ସ୍ୱାଗତ',
      farmer: 'ଚାଷୀ ଭାଇ',
      location: 'ଜମିର ଅବସ୍ଥିତି',
      changeLocation: 'ବଦଳାନ୍ତୁ',
      currentStage: 'ବର୍ତ୍ତମାନର ଟମାଟୋ ଅବସ୍ଥା',
      stageProgress: 'ପର୍ଯ୍ୟାୟ ପ୍ରଗତି',
      datBadge: 'ରୋପଣ ପରର ଦିନ (DAT)',
      quickStats: 'ଜମିର ସଂକ୍ଷିପ୍ତ ସୂଚନା',
      todayAdvice: 'ଆଜିର ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ କୃଷି ପରାମର୍ଶ',
      irrigationCardTitle: 'ପାଣିପାଗ-ଭିତ୍ତିକ ଜଳସେଚନ',
      diseaseRiskTitle: 'ରୋଗ ସଂକ୍ରମଣ ଆଶଙ୍କା',
      viewAllRecs: 'ସମସ୍ତ ପରାମର୍ଶ ଦେଖନ୍ତୁ',
      viewFullCalendar: 'ପୂରା କ୍ୟାଲେଣ୍ଡର ଦେଖନ୍ତୁ',
      openWeather: 'ବିସ୍ତୃତ ପାଣିପାଗ',
      askAi: 'ଟମାଟୋ ସହାୟକଙ୍କୁ ପଚାରନ୍ତୁ',
      scanLeaf: 'ପତ୍ର ଫଟୋ ଯାଞ୍ଚ କରନ୍ତୁ',
    },
    weather: {
      title: 'ସଦ୍ୟତମ ପାଣିପାଗ ଓ ପୂର୍ବାନୁମାନ',
      subtitle: 'ଓପନ୍-ମେଟିଓ ଦ୍ୱାରା ପ୍ରଦତ୍ତ ସଠିକ୍ ପାଣିପାଗ ବିବରଣୀ',
      currentWeather: 'ବର୍ତ୍ତମାନର ପାଣିପାଗ',
      liveBadge: 'ସଦ୍ୟତମ ତଥ୍ୟ',
      offlineBadge: 'ଅଫଲାଇନ୍',
      temp: 'ତାପମାତ୍ରା',
      humidity: 'ବାୟୁ ଆର୍ଦ୍ରତା',
      rainProb: 'ବର୍ଷା ସମ୍ଭାବନା',
      wind: 'ପବନର ବେଗ',
      rainfall: 'ବର୍ଷା ପରିମାଣ',
      sevenDayForecast: '୭ ଦିନର କୃଷି ପାଣିପାଗ ପୂର୍ବାନୁମାନ',
      hourlyForecast: 'ଆଗାମୀ ୮ ଘଣ୍ଟାର ପୂର୍ବାନୁମାନ',
      selectDistrict: 'ଟମାଟୋ ଚାଷ ଜିଲ୍ଲା ବାଛନ୍ତୁ',
      useGps: 'ମୋବାଇଲ୍ GPS ବ୍ୟବହାର କରନ୍ତୁ',
      gpsSuccess: 'ଅବସ୍ଥିତି ସଫଳତାର ସହ ମିଳିଲା',
      gpsError: 'GPS ମିଳିଲା ନାହିଁ। ଦୟାକରି ତାଲିକାରୁ ଜିଲ୍ଲା ବାଛନ୍ତୁ।',
      refresh: 'ପାଣିପାଗ ତାଜା କରନ୍ତୁ',
      loading: 'ପାଣିପାଗ ତଥ୍ୟ ଆସୁଛି...',
      errorNotice: 'ପାଣିପାଗ ସେବା ସହ ଯୋଗାଯୋଗ ହୋଇପାରିଲା ନାହିଁ। ଅନ୍ୟ ସମସ୍ତ ସୁବିଧା ସଠିକ୍ କାମ କରୁଛି।',
    },
    calendar: {
      title: 'ପାରସ୍ପରିକ ଟମାଟୋ ଫସଲ କ୍ୟାଲେଣ୍ଡର',
      subtitle: 'ଆପଣଙ୍କ ରୋପଣ ତାରିଖ ଅନୁଯାୟୀ ପ୍ରସ୍ତୁତ: ଦୈନନ୍ଦିନ କୃଷି ନିର୍ଦ୍ଦେଶିକା',
      currentStageBadge: 'ବର୍ତ୍ତମାନର ଅବସ୍ଥା',
      disclaimer: 'ସୂଚନା: କିସମ, ତାପମାତ୍ରା ଓ ଚାଷ ପ୍ରଣାଳୀ ଅନୁଯାୟୀ ସମୟରେ ସାମାନ୍ୟ ପରିବର୍ତ୍ତନ ହୋଇପାରେ।',
      keyActivities: 'ମୁଖ୍ୟ କୃଷି କାର୍ଯ୍ୟ',
      irrigationCare: 'ଜଳସେଚନ ପରାମର୍ଶ',
      nutrientPlan: 'ଖତ ଓ ସାର ପରିଚାଳନା',
      pestScout: 'କୀଟ ଓ ରୋଗ ସତର୍କତା',
      stageTimeline: 'ଫସଲ ଜୀବନଚକ୍ର କ୍ରମ',
      plantingDateLabel: 'ରୋପଣ ତାରିଖ',
      editDate: 'ପ୍ରୋଫାଇଲ୍‌ରେ ତାରିଖ ବଦଳାନ୍ତୁ',
    },
    recommendations: {
      title: 'ପାଣିପାଗ-ଭିତ୍ତିକ କୃଷି ପରାମର୍ଶ',
      subtitle: 'ଫସଲ ଅବସ୍ଥା ଏବଂ ସ୍ଥାନୀୟ ପାଗ ଅନୁସାରେ ଉପଯୋଗୀ ପରାମର୍ଶ',
      whyThisAppears: 'ଏହି ପରାମର୍ଶ କାହିଁକି ଆସିଲା?',
      expertNotice: 'ବୈଜ୍ଞାନିକ କାରଣ',
      safetyCaution: 'ସତର୍କତା: ପାଣିପାଗ କେବଳ ଆଶଙ୍କା ଜଣାଏ। ବିନା ଯାଞ୍ଚରେ ରାସାୟନିକ ବିଷ ସ୍ପ୍ରେ କରନ୍ତୁ ନାହିଁ। କୃଷି ବିଜ୍ଞାନ କେନ୍ଦ୍ର (KVK) ପରାମର୍ଶ ନିଅନ୍ତୁ।',
      irrigationCategory: 'ଜଳସେଚନ ଓ ଆର୍ଦ୍ରତା',
      diseaseCategory: 'ରୋଗ ନିୟନ୍ତ୍ରଣ',
      cropStageCategory: 'ପର୍ଯ୍ୟାୟଭିତ୍ତିକ ଯତ୍ନ',
    },
    diseaseRisk: {
      title: 'ପାଣିପାଗ-ଭିତ୍ତିକ ରୋଗ ମନିଟରିଂ',
      subtitle: 'ତାପମାତ୍ରା, ବାୟୁର ଆର୍ଦ୍ରତା ଉପରେ ଆଧାରିତ ସତର୍କତା',
      riskLevel: 'ସତର୍କତା ସ୍ତର',
      highRisk: 'ଅତ୍ୟଧିକ ଆଶଙ୍କା',
      moderateRisk: 'ମଧ୍ୟମ ଆଶଙ୍କା',
      lowRisk: 'କମ୍ ଆଶଙ୍କା',
      triggers: 'ପାଣିପାଗ ଅନୁକୂଳ ପରିବେଶ',
      symptoms: 'ମୁଖ୍ୟ ରୋଗ ଲକ୍ଷଣ',
      preventative: 'ନିରାକରଣ ପାଇଁ ପ୍ରାକୃତିକ ଉପାୟ',
      disclaimer: 'ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ: କୌଣସି ଔଷଧ ସ୍ପ୍ରେ କରିବା ପୂର୍ବରୁ ନିଜ ଜମିର ଗଛଗୁଡ଼ିକୁ ଭଲଭାବେ ଦେଖନ୍ତୁ।',
    },
    profile: {
      title: 'ମୋର ଚାଷ ପ୍ରୋଫାଇଲ୍',
      subtitle: 'ଆପଣଙ୍କ ମୋବାଇଲ୍‌ରେ ସୁରକ୍ଷିତ। କୌଣସି ପଞ୍ଜୀକରଣ କିମ୍ବା ଟଙ୍କା ଆବଶ୍ୟକ ନାହିଁ।',
      farmerName: 'ଚାଷୀଙ୍କ ନାମ',
      farmerNamePlaceholder: 'ଆପଣଙ୍କ ନାମ ଲେଖନ୍ତୁ',
      village: 'ଗାଁ',
      villagePlaceholder: 'ଗାଁର ନାମ',
      district: 'ଜିଲ୍ଲା',
      state: 'ରାଜ୍ୟ',
      plantingDate: 'ଟମାଟୋ ରୋପଣ ତାରିଖ',
      farmingMethod: 'ଚାଷ ପ୍ରଣାଳୀ',
      variety: 'ଟମାଟୋ କିସମ',
      farmSize: 'ଜମିର ପରିମାଣ (ଏକର)',
      acre: 'ଏକର',
      saveButton: 'ସୂଚନା ସାଇତନ୍ତୁ',
      savedToast: 'ପ୍ରୋଫାଇଲ୍ ସଫଳତାର ସହ ସାଇତାଗଲା!',
      resetDefaults: 'ପୂର୍ବ ନିର୍ଦ୍ଧାରିତ କରନ୍ତୁ',
      methods: {
        drip: 'ବୁନ୍ଦା (ଡ୍ରିପ୍) ଜଳସେଚନ',
        flood: 'ନାଳି ଜଳସେଚନ',
        polyhouse: 'ପଲିହାଉସ୍ ଚାଷ',
        open_field: 'ଖୋଲା ଜମି ଚାଷ',
        organic: 'ଜୈବିକ / ପ୍ରାକୃତିକ ଚାଷ',
        conventional: 'ପାରମ୍ପରିକ ଚାଷ',
      },
    },
    ai: {
      title: 'କୃଷି ସଲାହ ଏଆଇ ସହାୟକ',
      subtitle: 'ଟମାଟୋ ଚାଷ, ସାର, ପାଣି ଓ ରୋଗ ବିଷୟରେ ପଚାରନ୍ତୁ',
      securityBanner: 'ସୁରକ୍ଷା: ଆପଣଙ୍କ ଗୋପନୀୟତା ରକ୍ଷା କରାଯାଉଛି।',
      offlineModeNotice: 'କୃଷି ସଲାହ ଜ୍ଞାନ ଭଣ୍ଡାର ପ୍ରସ୍ତୁତ। ତଳେ ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ!',
      placeholder: 'ଟମାଟୋ ସମ୍ପର୍କିତ ପ୍ରଶ୍ନ ଲେଖନ୍ତୁ (ଯଥା: ଫଳ କାହିଁକି ଫାଟେ?)...',
      send: 'ପଠାନ୍ତୁ',
      suggestedQuestions: 'କୃଷକଙ୍କ ଦ୍ୱାରା ପଚରାଯାଉଥିବା ପ୍ରମୁଖ ପ୍ରଶ୍ନ',
      quickQuestions: [
        'ଟମାଟୋରେ ପତ୍ର ମୋଡ଼ା ରୋଗର ପ୍ରତିକାର କ’ଣ?',
        'ଟମାଟୋରେ କେତେ ପରିମାଣର ଖତ ଓ ସାର ଦେବା ଉଚିତ୍?',
        'ଫୁଲ ଫୁଟିବା ସମୟରେ କେତେ ଦିନରେ ପାଣି ଦେବେ?',
        'ଟମାଟୋ ତଳ କଳା ପଡ଼ି ଶଢ଼ିଯାଏ କାହିଁକି?',
        'ଅଧିକ ଅମଳ ପାଇଁ କେଉଁ କିସମ ଉପଯୁକ୍ତ?',
      ],
      clearChat: 'ଚାଟ୍ ଲିଭାନ୍ତୁ',
      disclaimer: 'ଏଆଇ ଉତ୍ତର ସାଧାରଣ ସୂଚନା ପାଇଁ। ବିଶେଷ ପରାମର୍ଶ ପାଇଁ ନିକଟସ୍ଥ କୃଷି ବିଜ୍ଞାନ କେନ୍ଦ୍ର ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ।',
    },
    leafDiagnosis: {
      title: 'ଟମାଟୋ ପତ୍ର ସ୍ୱାସ୍ଥ୍ୟ ପରୀକ୍ଷା',
      subtitle: 'ରୋଗ ଚିହ୍ନିବା ପାଇଁ ଆକ୍ରାନ୍ତ ପତ୍ରର ଏକ ସ୍ପଷ୍ଟ ଫଟୋ ଅପଲୋଡ୍ କରନ୍ତୁ',
      uploadTitle: 'ପତ୍ରର ଫଟୋ ଅପଲୋଡ୍ କରନ୍ତୁ',
      uploadInstructions: 'ମୋବାଇଲ୍ ଗ୍ୟାଲେରୀରୁ ଫଟୋ ବାଛନ୍ତୁ କିମ୍ବା ସିଧାସଳଖ କ୍ୟାମେରାରେ ଉଠାନ୍ତୁ।',
      selectImageBtn: 'ଗ୍ୟାଲେରୀରୁ ଫଟୋ ବାଛନ୍ତୁ',
      takePhotoBtn: 'କ୍ୟାମେରା ଫଟୋ',
      selectedImageTitle: 'ବାଛିଥିବା ପତ୍ରର ଫଟୋ',
      statusTitle: 'ଏଆଇ ବିଶ୍ଳେଷଣ ସ୍ଥିତି',
      aiStatusMessage: 'ସ୍ୱୟଂକ୍ରିୟ ଏଆଇ ବିଶ୍ଳେଷଣ ଭବିଷ୍ୟତର ସର୍ଭର ପାଇଁ ପ୍ରସ୍ତୁତ ଅଛି। ତଳେ ଥିବା ଲକ୍ଷଣ ତାଲିକା ସହ ନିଜ ପତ୍ରକୁ ତୁଳନା କରନ୍ତୁ।',
      manualChecklistTitle: 'ରୋଗ ଚିହ୍ନଟ ନିର୍ଦ୍ଦେଶିକା',
      commonDiseases: 'ସାଧାରଣ ଟମାଟୋ ରୋଗ ସହ ତୁଳନା କରନ୍ତୁ',
      compareWithSymptoms: 'ପତ୍ରର ଦାଗ, ମୋଡ଼ି ହେବା ଓ ତଳ ଭାଗକୁ ଧ୍ୟାନରେ ଦେଖନ୍ତୁ।',
      consultKvkNote: 'ସୂଚନା: ଏହି ଫଟୋ ନିକଟସ୍ଥ କୃଷି ଅଧିକାରୀଙ୍କୁ ଦେଖାଇ ସଠିକ୍ ପରାମର୍ଶ ନିଅନ୍ତୁ।',
    },
    footer: {
      disclaimer: 'କୃଷି ସଲାହ ଓଡ଼ିଶା ତଥା ଭାରତର ଟମାଟୋ ଚାଷୀମାନଙ୍କ ପାଇଁ ଏକ ସହାୟକ ମଞ୍ଚ। ପାଣିପାଗ ତଥ୍ୟ ଓପନ୍-ମେଟିଓ ଦ୍ୱାରା ପ୍ରଦତ୍ତ।',
      openMeteoCredit: 'ପାଣିପାଗ ତଥ୍ୟ © Open-Meteo',
      rights: 'କୃଷକଙ୍କ ସେବାରେ ସମର୍ପିତ • ସମ୍ପୂର୍ଣ୍ଣ ମାଗଣା',
    },
  },
};
