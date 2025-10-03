export const AppConfig = {
  appName: "ZenTaxi",
  branding: {
    primaryColor: "#FFD700",
    secondaryColor: "#000000",
    logo: "/assets/logo.png",
    splashImage: "/assets/splash.jpg",
  },
  localization: {
    defaultLanguage: "en",
    supportedLanguages: ["en", "de", "tr", "bs"],
  },
  contact: {
    supportEmail: "support@zentaxi.app",
    phoneNumber: "+387-61-000-000",
    legalEntity: "ZenTaxi d.o.o.",
  },
  mapSettings: {
    defaultCity: "Zenica",
    defaultCoordinates: {
      lat: 44.203,
      lng: 17.907,
    },
    zoomLevel: 14,
  },
  payment: {
    enableStripe: true,
    enablePayPal: false,
    currency: "BAM",
  },
  legal: {
    privacyPolicyUrl: "https://bh-assistant.ba/zentaxi/privacy",
    termsOfUseUrl: "https://bh-assistant.ba/zentaxi/terms",
  },
};
