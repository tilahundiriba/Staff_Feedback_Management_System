import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  en: {
    translation: {
      welcome: "We Value Your Feedback",
      feedbackDescription:
        "Your feedback helps us improve our services and serve you better.",

      startFeedback: "Start Feedback",

      customerInformation: "Customer Information",
      customerInformationDescription: "Please provide your details",

      fullName: "Full Name",
      phoneNumber: "Phone Number",
      email: "Email",
      customerType: "Customer Type",

      individual: "Individual",
      business: "Business",
      visitor: "Visitor",
      cancel: "Cancel",
      next: "Next",
      back: "Back",
      optional: "Optional",
      serviceSelection: "Service Selection",
      whichService: "Which service did you receive?",

      employeeSelection: "Employee Selection",
      whoServedYou: "Who served you?",
      rateCategories: "Please rate the following categories",
      rateExperience: "Rate Your Experience",
      friendliness: "Friendliness",
      communication: "Communication",
      professionalism: "Professionalism",
      knowledge: "Knowledge",
      responseTime: "Response Time",
      problemSolving: "Problem Solving",
      respect: "Respect",
      overallSatisfaction: "Overall Satisfaction",

      additionalComments: "Additional Comments",
      submitFeedback: "Submit Feedback",
      writeComments: "Write your comments...",
      thankYou: "Thank You!",
      feedbackSubmitted: "Your feedback has been submitted successfully.",
      finish: "Finish",
      thankYouForTakingTime: "Thank you for taking the time!",
      staffFeedbackSystem: "Staff Feedback Management System",
    },
  },

  am: {
    translation: {
      welcome: "አስተያየትዎን እናደንቃለን",
      feedbackDescription: "አስተያየትዎ አገልግሎታችንን ለማሻሻል ይረዳናል።",

      startFeedback: "አስተያየት ይስጡ",

      customerInformation: "የደንበኛ መረጃ",
      customerInformationDescription: "እባክዎ መረጃዎን ያስገቡ",

      fullName: "ሙሉ ስም",
      phoneNumber: "ስልክ ቁጥር",
      email: "ኢሜይል",
      customerType: "የደንበኛ አይነት",

      individual: "ግለሰብ",
      business: "ንግድ",
      visitor: "ጎብኚ",
      cancel: "ሰርዝ",
      next: "ቀጣይ",
      back: "ተመለስ",
      optional: "አማራጭ",
      serviceSelection: "የአገልግሎት ምርጫ",
      whichService: "የትኛውን አገልግሎት አገኙ?",

      employeeSelection: "የሰራተኛ ምርጫ",
      whoServedYou: "ማን አገለገልዎት?",
      rateCategories: "እባክዎ የሚከተሉትን ምድቦች ይገምግሙ",
      rateExperience: "የአገልግሎት ልምድዎን ይገምግሙ",
      friendliness: "ወዳጃዊነት",
      communication: "ግንኙነት",
      professionalism: "ሙያዊነት",
      knowledge: "እውቀት",
      responseTime: "የምላሽ ጊዜ",
      problemSolving: "ችግር አፈታት",
      respect: "አክብሮት",
      overallSatisfaction: "አጠቃላይ እርካታ",
      writeComments: "አስተያየትዎን ይጻፉ...",
      additionalComments: "ተጨማሪ አስተያየት",
      submitFeedback: "አስተያየት ያስገቡ",

      thankYou: "እናመሰግናለን!",
      feedbackSubmitted: "አስተያየትዎ በተሳካ ሁኔታ ተልኳል።",
      thankYouForTakingTime: "ጊዜዎን ስለሰጡን እናመሰግናለን!",
      staffFeedbackSystem: "የሰራተኞች አስተያየት አስተዳደር ስርዓት",
      finish: "ጨርስ",
    },
  },

  om: {
    translation: {
      welcome: "Yaada Keessan Ni Dinqisiifanna",
      feedbackDescription:
        "Yaadni keessan tajaajila keenya fooyyeessuuf nu gargaara.",

      startFeedback: "Yaada Kenni",

      customerInformation: "Odeeffannoo Maamilaa",
      customerInformationDescription: "Mee odeeffannoo keessan galchaa",

      fullName: "Maqaa Guutuu",
      phoneNumber: "Lakkoofsa Bilbila",
      email: "Imeelii",
      customerType: "Gosa Maamilaa",

      individual: "Dhuunfaa",
      business: "Daldala",
      visitor: "Daaw'ataa",
      cancel: "Haqi",
      next: "Itti Aanee",

      back: "Duubatti Deebi'i",
      optional: "Dirqama miti",
      serviceSelection: "Filannoo Tajaajilaa",
      whichService: "Tajaajila kami argattan?",

      employeeSelection: "Filannoo Hojjetaa",
      whoServedYou: "Eenyu isin tajaajile?",
      rateCategories: "Mee ramaddiiwwan armaan gadii madaalaa",
      rateExperience: "Muuxannoo Keessan Madaalaa",
      friendliness: "Michoomina",
      communication: "Qunnamtii",
      professionalism: "Ogummaa",
      knowledge: "Beekumsa",
      responseTime: "Yeroo Deebii",
      problemSolving: "Furmaata Rakkoo",
      respect: "Kabaja",
      overallSatisfaction: "Quufa Waliigalaa",
      writeComments: "Yaada keessan barreessaa...",
      additionalComments: "Yaada Dabalataa",
      submitFeedback: "Yaada Ergi",

      thankYou: "Galatoomaa!",
      feedbackSubmitted: "Yaadni keessan milkaa'inaan ergameera.",
      thankYouForTakingTime: "Yeroo keessan waan nuuf kennitaniif galatoomaa!",
      staffFeedbackSystem: "Sirna Bulchiinsa Yaada Hojjettootaa",
      finish: "Xumuri",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
