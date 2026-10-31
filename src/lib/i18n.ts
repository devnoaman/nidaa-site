export type Lang = 'ar' | 'en';
export const DOCS = 'https://docs.page/devnoaman/nidaa-docs';
export const prefix = (l: Lang) => (l === 'en' ? '/en' : '');
export const href = (l: Lang, p: string) => (prefix(l) + p) || '/';
/** swap path between languages */
export const altPath = (path: string, to: Lang) => {
  const bare = path.replace(/^\/en(?=\/|$)/, '') || '/';
  return to === 'en' ? (bare === '/' ? '/en' : '/en' + bare) : bare;
};

const honestyAr = 'نداء هي البوابة؛ Apple وGoogle يوصلون الإشعار للجهاز. ما نعد بوصول ١٠٠٪ لأن جزء من الطريق خارج سيطرتنا — بس نعطيك تحليلات توصيل واضحة.';
const honestyEn = "Nidaa is the gateway; Apple and Google deliver the notification to the device. We don't promise 100% delivery because part of the path is outside our control — but we give you clear delivery analytics.";

const featuresAr = [
  { ic: 'F', t: 'Flutter SDK', d: 'تكامل سريع بسطور قليلة.' },
  { ic: '⇄', t: 'FCM + APNs', d: 'أندرويد وiOS من مكان واحد.' },
  { ic: '#', t: 'Topics والبث', d: 'قسّم جمهورك وأرسل للكل.' },
  { ic: '✓', t: 'تحليلات التوصيل', d: 'شوف المرسل والمسلّم والفاشل.' },
  { ic: 'ع', t: 'كونسول عربي', d: 'واجهة عربية RTL من الأساس.' }
];
const featuresEn = [
  { ic: 'F', t: 'Flutter SDK', d: 'Integrate fast in a few lines.' },
  { ic: '⇄', t: 'FCM + APNs', d: 'Android and iOS from one place.' },
  { ic: '#', t: 'Topics & broadcast', d: 'Segment your audience or send to everyone.' },
  { ic: '✓', t: 'Delivery analytics', d: 'See sent, delivered and failed.' },
  { ic: 'ع', t: 'Arabic console', d: 'Arabic RTL interface from the ground up.' }
];

export const dict = {
  ar: {
    brand: 'نِداء',
    nav: { home: 'الرئيسية', features: 'المزايا', pricing: 'الأسعار', contact: 'تواصل', docs: 'توثيق', cta: 'التوثيق', menu: 'القائمة' },
    soon: 'قريباً', console: 'الكونسول', readDocs: 'اقرأ التوثيق', honestyLabel: 'بصراحة:', honesty: honestyAr,
    footer: { docs: 'التوثيق', legal: 'الشروط والخصوصية', rights: '© ٢٠٢٦ نِداء · منصة مستقلة' },
    home: {
      title: 'نِداء — منصة عراقية بسيطة لإشعاراتك',
      eyebrow: 'إشعارات Push لتطبيقاتك', h1: 'منصة عراقية بسيطة لإشعاراتك.',
      lead: 'أرسل إشعارات push لتطبيقاتك عبر FCM وAPNs — من الـ API أو الـ SDK أو الكونسول. بدون تعقيد.',
      n1t: 'طلبك وصل 🎉', n1s: 'تطبيقك · الآن', n2t: 'عرض جديد', n2s: 'Topic: all', n1m: 'الآن', n2m: '٢د',
      howH: 'كيف يشتغل', howSub: 'ثلاث خطوات وتبدي ترسل.',
      steps: [
        { t: 'أنشئ تطبيقاً', d: 'سجّل تطبيقك بالكونسول أو الـ API وخذ مفتاحك.' },
        { t: 'اربط FCM وAPNs', d: 'ارفع مفاتيح Google وApple مرة وحدة.' },
        { t: 'أرسل', d: 'من الـ API أو الـ SDK أو الكونسول — لجهاز أو Topic أو للكل.' }
      ],
      nums: ['١', '٢', '٣'],
      featH: 'المزايا', featSub: 'كل اللي تحتاجه للإشعارات، بدون زوائد.'
    },
    features: { title: 'المزايا — نِداء', eyebrow: 'المزايا', h1: 'مزايا نداء', list: featuresAr, sdkH: 'من الـ SDK', sdkSub: 'مثال توضيحي — التفاصيل بالتوثيق.' },
    pricing: {
      title: 'الأسعار — نِداء', eyebrow: 'باقات واضحة', h1: 'الأسعار', cta: 'تواصل معنا',
      note: 'الأسعار تُعلن قريباً. تواصل ويانا إذا تحتاج تبدي هسه.',
      tiers: [
        { n: 'البداية', d: 'للتجربة والمشاريع الصغيرة.', f: ['FCM + APNs', 'Flutter SDK', 'تحليلات أساسية'] },
        { n: 'النمو', d: 'للتطبيقات النشطة.', f: ['كل مزايا البداية', 'Topics والبث', 'تحليلات التوصيل'], hi: true },
        { n: 'المؤسسات', d: 'لاحتياجات خاصة.', f: ['دعم مخصص', 'حدود حسب الاتفاق'] }
      ]
    },
    contact: {
      title: 'تواصل — نِداء', eyebrow: 'تواصل', h1: 'تواصل ويانا',
      name: 'الاسم', namePh: 'مثلاً: أحمد', email: 'البريد الإلكتروني', emailPh: 'name@example.com',
      msg: 'رسالتك', msgPh: 'شنو تحتاج؟', send: 'أرسل الرسالة', sending: 'جاري الإرسال…',
      ok: 'وصلتنا رسالتك، شكراً! راح نرجعلك قريباً.',
      mailH: 'بريد', mail: '[email placeholder]', waH: 'واتساب', wa: '[رقم placeholder — اختياري]',
      devH: 'للمطورين', dev: 'أغلب الأجوبة بالتوثيق.'
    }
  },
  en: {
    brand: 'Nidaa',
    nav: { home: 'Home', features: 'Features', pricing: 'Pricing', contact: 'Contact', docs: 'Docs', cta: 'Docs', menu: 'Menu' },
    soon: 'Soon', console: 'Console', readDocs: 'Read the docs', honestyLabel: 'Honestly:', honesty: honestyEn,
    footer: { docs: 'Docs', legal: 'Terms & privacy', rights: '© 2026 Nidaa · Independent platform' },
    home: {
      title: 'Nidaa — Simple push notifications, made in Iraq',
      eyebrow: 'Push notifications for your apps', h1: 'A simple Iraqi platform for your notifications.',
      lead: 'Send push notifications to your apps via FCM and APNs — from the API, the SDK or the console. No hassle.',
      n1t: 'Your order arrived 🎉', n1s: 'Your app · now', n2t: 'New offer', n2s: 'Topic: all', n1m: 'Now', n2m: '2m',
      howH: 'How it works', howSub: 'Three steps and you’re sending.',
      steps: [
        { t: 'Create an app', d: 'Register your app in the console or via the API and get your key.' },
        { t: 'Connect FCM & APNs', d: 'Upload your Google and Apple keys once.' },
        { t: 'Send', d: 'From the API, SDK or console — to a device, a Topic, or everyone.' }
      ],
      nums: ['1', '2', '3'],
      featH: 'Features', featSub: 'Everything you need for notifications, nothing extra.'
    },
    features: { title: 'Features — Nidaa', eyebrow: 'Features', h1: 'Nidaa features', list: featuresEn, sdkH: 'From the SDK', sdkSub: 'Illustrative example — details in the docs.' },
    pricing: {
      title: 'Pricing — Nidaa', eyebrow: 'Clear plans', h1: 'Pricing', cta: 'Contact us',
      note: 'Pricing will be announced soon. Get in touch if you need to start now.',
      tiers: [
        { n: 'Starter', d: 'For trying out and small projects.', f: ['FCM + APNs', 'Flutter SDK', 'Basic analytics'] },
        { n: 'Growth', d: 'For active apps.', f: ['Everything in Starter', 'Topics & broadcast', 'Delivery analytics'], hi: true },
        { n: 'Enterprise', d: 'For special needs.', f: ['Dedicated support', 'Custom limits'] }
      ]
    },
    contact: {
      title: 'Contact — Nidaa', eyebrow: 'Contact', h1: 'Get in touch',
      name: 'Name', namePh: 'e.g. Ahmed', email: 'Email', emailPh: 'name@example.com',
      msg: 'Your message', msgPh: 'What do you need?', send: 'Send message', sending: 'Sending…',
      ok: 'Got your message, thanks! We’ll get back to you soon.',
      mailH: 'Email', mail: '[email placeholder]', waH: 'WhatsApp', wa: '[number placeholder — optional]',
      devH: 'For developers', dev: 'Most answers are in the docs.'
    }
  }
} as const;
