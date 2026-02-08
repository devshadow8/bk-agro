
import { Sprout, Clock, TrendingUp, Globe2 , CheckCircle2, Target,ArrowRight, Shield,
   Users,  Package, Store, Truck, Building2, DollarSign, AlertCircle,  MapPin, Mail, Phone,Facebook, Twitter, Instagram,Linkedin,Youtube,Send,ChevronRight,FileCheck,  FlaskConical, 
  Handshake,  Leaf, Calendar,MessageSquare , Globe, IndianRupee,BarChart3, Eye, CheckCircle, Ship,  } from 'lucide-react';


// about business setup
   interface BusinessStep {
  number: string;
  title: string;
  description: string;
  titleMr: string;
  descriptionMr: string;
  icon: React.ElementType;
  gradient: string;
}


 // highlight section
 const highlights = [
  {
    icon: Sprout,
    value: "₹2.5 Lakhs",
    unit: "per Acre",
    title: "Investment Amount",
    titleMr: "गुंतवणूक रक्कम",
    description:
      "Structured investment covering cultivation planning, farming guidance, and harvest support.",
    descriptionMr:
      "शेती नियोजन, लागवड मार्गदर्शन आणि काढणीसाठी सहाय्य यांचा समावेश असलेली संरचित गुंतवणूक.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    delay: 0.1,
    image: "/images/whyChooseUs/why1.png",
  },
  {
    icon: Clock,
    value: "12 Months",
    unit: "Crop Cycle",
    title: "Time Period",
    titleMr: "कालावधी",
    description:
      "Well-defined crop duration from plantation to harvest, ensuring planned operations.",
    descriptionMr:
      "लागवड ते काढणीपर्यंत निश्चित पीक कालावधी, नियोजित कार्यवाही सुनिश्चित करते.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    delay: 0.2,
    image: "/images/whyChooseUs/why6.png",
  },
  {
    icon: TrendingUp,
    value: "Fixed ₹5 Lakhs",
    unit: "per Acre*",
    title: "Expected Returns",
    titleMr: "अपेक्षित परतावा",
    description:
      "Projected returns based on yield performance, quality, and market demand.",
    descriptionMr:
      "उत्पादन क्षमता, दर्जा आणि बाजारातील मागणी यावर आधारित अपेक्षित परतावा.",
    color: "from-teal-500 to-green-600",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
    delay: 0.3,
    image: "/images/whyChooseUs/why2.png",
  },
  {
    icon: Globe2,
    value: "National & International",
    unit: "Export",
    title: "Market Reach",
    titleMr: "बाजार पोहोच",
    description:
      "Strong distribution network connecting farms to domestic buyers and global markets.",
    descriptionMr:
      "शेतीला देशांतर्गत खरेदीदार आणि जागतिक बाजारपेठांशी जोडणारे मजबूत वितरण जाळे.",
    color: "from-green-600 to-lime-600",
    bgColor: "bg-lime-50",
    iconColor: "text-green-700",
    delay: 0.4,
    image: "/images/whyChooseUs/why3.png",
  },
];


 // Investment

   const investmentData = [
    {
      icon: DollarSign,
      title: 'Investment Size',
      value: '₹2.5 Lakhs',
      unit: 'per Acre',
      description: 'Planned investment covering cultivation planning, farming guidance, and harvest support.',
      color: 'from-emerald-600 to-green-600',
      delay: 0.1
    },
    {
      icon: Clock,
      title: 'Crop Duration',
      value: '12 Months',
      unit: '',
      description: 'A defined crop cycle from plantation to harvest.',
      color: 'from-green-600 to-teal-600',
      delay: 0.2
    },
    {
      icon: TrendingUp,
      title: 'Return Potential',
      value: 'Fixed ₹5 Lakhs',
      unit: 'per Acre*',
      description: 'Projected returns based on yield performance, quality, and market demand.',
      color: 'from-teal-600 to-cyan-600',
      delay: 0.3,
      highlight: true
    },
    {
      icon: Globe2,
      title: 'Market Channel',
      value: 'Domestic & International',
      unit: 'Markets',
      description: 'Produce supplied to national buyers and global export markets.',
      color: 'from-green-700 to-emerald-700',
      delay: 0.4
    }
  ];

  // market 

  const markets = {
    india: {
      flag: '🇮🇳',
      title: 'Domestic Market',
      country: 'India',
      focus: 'Maharashtra',
      description: 'Suran has strong and consistent demand across key regions of Maharashtra, where it is widely used in traditional cuisine and supplied through wholesale vegetable markets.',
      color: 'from-orange-600 to-green-600',
      bgColor: 'bg-orange-50',
      regions: [
        {
          icon: Building2,
          name: 'Mumbai Metropolitan Region',
          description: 'Major urban consumption hub'
        },
        {
          icon: Store,
          name: 'Pune and Surrounding Markets',
          description: 'Strong wholesale demand'
        },
        {
          icon: Package,
          name: 'Satara, Sangli, Kolhapur Belt',
          description: 'Production and distribution center'
        },
        {
          icon: Truck,
          name: 'Nagpur and Vidarbha Region',
          description: 'Regional supply network'
        }
      ],
      highlights: [
        'Local traders and wholesale mandis',
        'Traditional cuisine integration',
        'Stable domestic demand'
      ]
    },
    uae: {
      flag: '🇦🇪',
      title: 'International Market',
      country: 'United Arab Emirates',
      focus: 'Export Focus',
      description: 'The UAE has strong demand for Indian vegetables, especially within Indian and Asian communities. Suran is supplied to ethnic food markets, restaurants, and retail distributors.',
      color: 'from-red-600 to-green-600',
      bgColor: 'bg-red-50',
      regions: [
        {
          icon: Users,
          name: 'Large Indian & Asian Population',
          description: 'Strong ethnic community demand'
        },
        {
          icon: Store,
          name: 'Ethnic Food Markets',
          description: 'Specialized retail channels'
        },
        {
          icon: Building2,
          name: 'Restaurant Supply',
          description: 'Food service distribution'
        },
        {
          icon: Globe2,
          name: 'Import Networks',
          description: 'Established logistics channels'
        }
      ],
      highlights: [
        'Indian-origin vegetable preference',
        'Well-established import channels',
        'Growing export opportunity'
      ]
    }
  };

  // footer 

   const quickLinks = [
      { name: "Home", href: "/" },
      { name: "About BK-Agro", href: "/about-us" },
      { name: "Business", href: "/business" },
      { name: "Services", href: "/services" },
      { name: "Export", href: "/export" },
      { name: "Contact", href: "/contact" }
    ];
  
    const services = [
      { name: "Agricultural Planning", href: "/services/agricultural-planning" },
      { name: "Crop Management", href: "/services/crop_management" },
      { name: "Quality Management", href: "/services/quality-management" },
      { name: "Market Export Support", href: "/services/market-export" },
      { name: "Post Harvest handling", href: "/services/post-harvest" },
      { name: "Consulting & Business Support", href: "/services/consultant" },

    ];
  
    const socialLinks = [
      { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61587359844577", color: "hover:text-green-400" },
      { icon: Instagram, href: "#", color: "hover:text-emerald-400" },
      { icon: Twitter, href: "#", color: "hover:text-green-500" },
      { icon: Linkedin, href: "#", color: "hover:text-emerald-600" },
      { icon: Youtube, href: "#", color: "hover:text-green-500" }
    ];

    //why choose us 

    const reasons = [
  {
    icon: Sprout,
    title: "Structured Farming Model",
    titleMr: "संरचित शेती मॉडेल",
    description:
      "We follow a planned cultivation approach with defined timelines, farming guidance, and quality-focused practices.",
    descriptionMr:
      "निश्चित कालमर्यादा, शेती मार्गदर्शन आणि गुणवत्तेवर आधारित पद्धतींसह नियोजित शेती पद्धतीचे आम्ही पालन करतो.",
    gradient: "from-green-600 to-emerald-600",
    delay: 0.1
  },
  {
    icon: FileCheck,
    title: "Clear Investment Framework",
    titleMr: "स्पष्ट गुंतवणूक संरचना",
    description:
      "Our model provides clarity on investment size, crop duration, and market linkage, helping partners understand the process from start to finish.",
    descriptionMr:
      "आमचे मॉडेल गुंतवणूक रक्कम, पीक कालावधी आणि बाजाराशी जोड याबाबत स्पष्टता देते, ज्यामुळे संपूर्ण प्रक्रिया भागीदारांना समजते.",
    gradient: "from-emerald-600 to-teal-600",
    delay: 0.2
  },
  {
    icon: Globe2,
    title: "Domestic & Export Market Access",
    titleMr: "देशांतर्गत व निर्यात बाजारपेठ प्रवेश",
    description:
      "We balance domestic demand with international export channels, reducing dependency on a single market.",
    descriptionMr:
      "देशांतर्गत मागणी आणि आंतरराष्ट्रीय निर्यात बाजारपेठ यांचा समतोल राखून एका बाजारावर अवलंबित्व कमी केले जाते.",
    gradient: "from-teal-600 to-green-700",
    delay: 0.3
  },
  {
    icon: FlaskConical,
    title: "Focus on Quality & Standards",
    titleMr: "गुणवत्ता व मानकांवर भर",
    description:
      "Emphasis on harvest quality, grading, and handling to meet both domestic and export market expectations.",
    descriptionMr:
      "देशांतर्गत तसेच निर्यात बाजारपेठेच्या अपेक्षा पूर्ण करण्यासाठी काढणी गुणवत्ता, वर्गीकरण आणि हाताळणीवर विशेष भर दिला जातो.",
    gradient: "from-green-700 to-lime-600",
    delay: 0.4
  },
  {
    icon: Handshake,
    title: "End-to-End Support",
    titleMr: "संपूर्ण टप्प्यांवर सहाय्य",
    description:
      "From cultivation planning to post-harvest handling and market supply, support is provided across all stages.",
    descriptionMr:
      "शेती नियोजनापासून काढणीनंतरची हाताळणी आणि बाजार पुरवठ्यापर्यंत प्रत्येक टप्प्यावर संपूर्ण सहाय्य दिले जाते.",
    gradient: "from-lime-600 to-green-600",
    delay: 0.5
  },
  {
    icon: TrendingUp,
    title: "Market-Linked Approach",
    titleMr: "बाजाराशी जोडलेला दृष्टिकोन",
    description:
      "Returns are linked to real market conditions, ensuring transparency and realistic expectations.",
    descriptionMr:
      "परतावा प्रत्यक्ष बाजार परिस्थितीशी जोडलेला असल्याने पारदर्शकता आणि वास्तववादी अपेक्षा सुनिश्चित होतात.",
    gradient: "from-green-600 to-emerald-700",
    delay: 0.6
  }
];

// service component section 

 const service = [
    {
      icon: Sprout,
      title: 'Agricultural Planning',
      description: 'Structured crop planning with guidance on land preparation, plantation methods, and farming best practices.',
      color: 'from-green-600 to-emerald-600',
      bgColor: 'bg-green-50',
      image: '/images/services/service1.png'
    },
    {
      icon: Leaf,
      title: 'Crop Management',
      description: 'Ongoing support during the crop cycle, including growth monitoring and quality-focused practices.',
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'bg-emerald-50',
      image: '/images/services/service2.png'
    },
    {
      icon: FlaskConical,
      title: 'Quality & Harvest Support',
      description: 'Guidance on harvesting, grading, and handling to meet domestic and export quality standards.',
      color: 'from-teal-600 to-cyan-600',
      bgColor: 'bg-teal-50',
      image: '/images/services/service3.png'
    },
    {
      icon: Ship,
      title: 'Market & Export Support',
      description: 'Access to national buyers and international export channels through an established distribution network.',
      color: 'from-green-700 to-emerald-700',
      bgColor: 'bg-green-50',
      image: '/images/services/service4.png'
    },
    {
      icon: Handshake,
      title: 'Consulting & Advisory',
      description: 'Expert consultation to help partners understand the farming process, timelines, and market flow.',
      color: 'from-emerald-700 to-green-700',
      bgColor: 'bg-emerald-50',
      image: '/images/services/service5.png'
    },
    {
      icon: Package,
      title: 'Post-Harvest Assistance',
      description: 'Support for storage, packaging, and logistics to ensure produce reaches markets in good condition.',
      color: 'from-green-600 to-lime-600',
      bgColor: 'bg-lime-50',
      image: '/images/services/service6.png'
    }
  ];

  // service component section end
   

  // about us  section 2 images

   const productImages = [
      {
        src: '/images/suran-about-img1.jpeg', 
        alt: 'Quality Suran Product',
        title: 'Premium Quality'
      },
      {
        src: '/images/suran-sec2-img2.jpeg', 
        alt: 'Fresh Harvest',
        title: 'Export Grade'
      },
      {
        src: '/images/suran-plant.png', 
        alt: 'Growing Suran',
        title: 'Sustainable Farming'
      }
    ];

    
    // about sec3 content 
    
      const businessStep: BusinessStep[] = [
        {
          number: "1",
          title: "Partner Registration",
          description: "Join as an investment partner with a clear agreement outlining roles, expectations, and terms of collaboration.",
          titleMr: "भागीदार नोंदणी",
          descriptionMr: "भूमिका, अपेक्षा आणि सहकार्याच्या अटी स्पष्ट करणाऱ्या करारासह गुंतवणूक भागीदार म्हणून सामील व्हा.",
          icon: Handshake,
          gradient: "from-blue-500 to-blue-600"
        },
        {
          number: "2",
          title: "Investment & Land Allocation",
          description: "Investment is received and allocated towards farming operations, land preparation, and quality seed procurement.",
          titleMr: "गुंतवणूक आणि जमीन वाटप",
          descriptionMr: "गुंतवणूक प्राप्त केली जाते आणि शेती ऑपरेशन्स, जमीन तयारी आणि दर्जेदार बियाणे खरेदीसाठी वाटप केली जाते.",
          icon: TrendingUp,
          gradient: "from-green-500 to-green-600"
        },
        {
          number: "3",
          title: "Farming & Cultivation",
          description: "Planned cultivation is carried out using agricultural best practices, with regular monitoring and guidance.",
          titleMr: "शेती आणि लागवड",
          descriptionMr: "नियमित देखरेख आणि मार्गदर्शनासह कृषी सर्वोत्तम पद्धती वापरून नियोजित लागवड केली जाते.",
          icon: Sprout,
          gradient: "from-emerald-500 to-emerald-600"
        },
        {
          number: "4",
          title: "Crop Duration",
          description: "The suran crop cycle typically spans 12 months, from planting to harvest, based on farming and climatic conditions.",
          titleMr: "पीक कालावधी",
          descriptionMr: "सुरण पीक चक्र सामान्यत: लागवडीपासून कापणीपर्यंत 12 महिने असते, शेती आणि हवामान परिस्थितीवर आधारित.",
          icon: Calendar,
          gradient: "from-teal-500 to-teal-600"
        },
        {
          number: "5",
          title: "Harvest & Quality Control",
          description: "Post-harvest, the produce undergoes quality checks, grading, and proper handling to meet market standards.",
          titleMr: "कापणी आणि गुणवत्ता नियंत्रण",
          descriptionMr: "कापणीनंतर, बाजार मानके पूर्ण करण्यासाठी उत्पादनाची गुणवत्ता तपासणी, ग्रेडिंग आणि योग्य हाताळणी केली जाते.",
          icon: Package,
          gradient: "from-amber-500 to-amber-600"
        },
        {
          number: "6",
          title: "Market Supply & Returns",
          description: "The produce is supplied to domestic and export markets. Returns are processed as per the agreed business terms.",
          titleMr: "बाजार पुरवठा आणि परतावा",
          descriptionMr: "उत्पादन देशांतर्गत आणि निर्यात बाजारपेठांमध्ये पुरवले जाते. मान्य व्यवसाय अटींनुसार परतावा प्रक्रिया केली जाते.",
          icon: Users,
          gradient: "from-purple-500 to-purple-600"
        }
      ];
  
    const approachPoints = [
  {
    title: "Planned cultivation practices",
    icon: Sprout,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Defined crop cycle and timelines",
    icon: Calendar,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Quality-focused harvesting and handling",
    icon: Package,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Balanced domestic and export market access",
    icon: TrendingUp,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Clear communication at every stage",
    icon: MessageSquare,
    color: "from-teal-500 to-green-500"
  }
];

// buiness steps
    const businessSteps = [
        {
          number: '01',
          title: 'Planning & Participation',
          description: 'Participation begins with a clearly defined investment and crop plan per acre.',
          icon: Target
        },
        {
          number: '02',
          title: 'Cultivation Guidance',
          description: 'Suran cultivation is carried out using planned agricultural practices with guidance during the crop cycle.',
          icon: Sprout
        },
        {
          number: '03',
          title: 'Crop Monitoring',
          description: 'The crop is monitored during the 12 month cycle to support healthy growth and quality outcomes.',
          icon: Clock
        },
        {
          number: '04',
          title: 'Harvest & Quality Handling',
          description: 'At maturity, suran is harvested and graded to meet domestic and export market requirements.',
          icon: CheckCircle2
        },
        {
          number: '05',
          title: 'Market Supply',
          description: 'Produce is supplied to domestic markets in India and international export markets such as the UAE.',
          icon: Globe2
        },
        {
          number: '06',
          title: 'Market-Linked Outcome',
          description:"We target returns 100%, depending on crop yield, quality, and current market conditions.",

          icon: TrendingUp
        }
      ];
    
      const whyItWorks = [
        { icon: TrendingUp, text: 'Market-linked, not speculative' },
        { icon: Globe2, text: 'Balanced domestic and export exposure' },
        { icon: CheckCircle2, text: 'Quality-driven execution' },
        { icon: Shield, text: 'Transparent process and timelines' },
        { icon: Leaf, text: 'Long-term agricultural perspective' }
      ];


      // Process Steps Data for busness model page 
const processSteps = [
  {
    number: "01",
    title: "Participation & Planning",
    description: "Participation begins with a clearly defined plan per acre, aligned with the suran crop cycle and operational timeline.",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    delay: 0.1
  },
  {
    number: "02",
    title: "Cultivation Guidance",
    description: "Suran cultivation is carried out using planned agricultural practices, with guidance provided throughout the crop cycle.",
    icon: Sprout,
    color: "from-green-500 to-emerald-500",
    delay: 0.2
  },
  {
    number: "03",
    title: "Crop Growth & Monitoring",
    description: "The crop follows a 12 month growth cycle, during which regular monitoring supports healthy development and quality outcomes.",
    icon: BarChart3,
    color: "from-purple-500 to-pink-500",
    delay: 0.3
  },
  {
    number: "04",
    title: "Harvest & Quality Handling",
    description: "At maturity, suran is harvested and graded to meet domestic and export market quality standards.",
    icon: Package,
    color: "from-orange-500 to-red-500",
    delay: 0.4
  },
  {
    number: "05",
    title: "Market Supply & Distribution",
    description: "Produce is supplied through domestic markets in India (primarily Maharashtra) and international export markets (UAE).",
    icon: Globe,
    color: "from-teal-500 to-green-500",
    delay: 0.5
  },
  {
    number: "06",
    title: "Market-Linked Outcome",
    description: "We target returns 100% fixed, depending on crop yield, quality, and current market conditions.",
    icon: TrendingUp,
    color: "from-indigo-500 to-purple-500",
    delay: 0.6
  }
];

const investmentHighlights = [
  { icon: IndianRupee, label: "Investment Size", value: "₹2.5 Lakhs per Acre", color: "text-blue-600" },
  { icon: Clock, label: "Crop Duration", value: "12 Months", color: "text-green-600" },
  { icon: TrendingUp, label: "Return Potential", value: "₹5 Lakhs per Acre*", color: "text-purple-600" },
  { icon: Globe, label: "Market Type", value: "Domestic & Export", color: "text-orange-600" }
];

const marketRegions = [
  {
    flag: "🇮🇳",
    title: "Domestic Market – India",
    description: "Primary focus on Maharashtra, covering key regions such as Mumbai, Pune, Nashik, and Nagpur, where suran has strong consumption and wholesale demand.",
    regions: ["Mumbai", "Pune", "Nashik", "Nagpur"],
    color: "from-orange-500 to-green-500"
  },
  {
    flag: "🇦🇪",
    title: "International Market – UAE",
    description: "Export supply to the UAE supports demand from Indian and Asian communities through established import and distribution networks.",
    regions: ["Dubai", "Abu Dhabi", "Sharjah"],
    color: "from-red-500 to-green-500"
  }
];

const modelBenefits = [
  "Planned cultivation reduces uncertainty",
  "Balanced domestic and export exposure",
  "Quality-focused execution",
  "Transparent process and timelines",
  "Long-term agricultural approach"
];

// services/consultant page data 

  const benefits = [
    "Improves understanding of the agricultural business model",
    "Reduces confusion and misaligned expectations",
    "Builds confidence through transparency",
    "Supports informed decision-making"
  ];

  const consultationSteps = [
    {
      step: "1",
      title: "Initial Understanding",
      description: "Learn about the complete suran farming business model and process flow"
    },
    {
      step: "2",
      title: "Deep Dive Discussion",
      description: "Explore specific areas of interest, responsibilities, and expectations"
    },
    {
      step: "3",
      title: "Clarity & Alignment",
      description: "Address questions and ensure complete understanding before participation"
    }
  ];

  // Model work 

  const steps = [
    {
      number: 1,
      title: "Invest / Partner",
      description: "Start with a planned investment per acre.",
      icon: TrendingUp,
    },
    {
      number: 2,
      title: "Cultivation Planning",
      description: "We guide suran cultivation using best practices.",
      icon: Sprout,
    },
    {
      number: 3,
      title: "Crop Growth & Monitoring",
      description: "Regular monitoring during the 12 month cycle.",
      icon: Eye,
    },
    {
      number: 4,
      title: "Harvest & Quality Check",
      description: "Produce is harvested and graded for market readiness.",
      icon: CheckCircle,
    },
    {
      number: 5,
      title: "Market & Export",
      description: "Supply to domestic buyers and export markets.",
      icon: Globe,
    }
  ];


  // products data 
  

  const crops = [
    'Suran (Elephant Foot Yam)',
    'Vegetables and leafy greens',
    'Fruit orchards',
    'Field crops and grains',
    'Organic farming systems',
  ];


  const products = [
  {
    title: "Gobar Compost Powder – Standard Grade",
    desc: "Natural compost powder prepared from well-decomposed cow dung to improve soil fertility and structure.",
    image: "/images/product1.png",
  },
  {
    title: "Gobar Compost Powder – Fine Texture",
    desc: "Finely processed compost powder suitable for even soil mixing and smooth application.",
    image: "/images/product2.png",
  },
  {
    title: "Gobar Compost Powder – Soil Enrichment Blend",
    desc: "Organic compost powder designed to enhance soil structure and microbial activity.",
    image: "/images/product3.png",
  },
  {
    title: "Gobar Compost Powder – Bulk Farm Use",
    desc: "Suitable for large-scale agricultural use and bulk soil preparation.",
    image: "/images/product4.png",
  },
  {
    title: "Gobar Compost Powder – Organic Farming Grade",
    desc: "Pure organic compost powder supporting eco-friendly and sustainable farming practices.",
    image: "/images/product8.png",
  },
  {
    title: "Gobar Compost Powder – Soil Conditioner",
    desc: "Helps improve soil aeration, water retention, and nutrient absorption.",
    image: "/images/product5.png",
  },
];
  export {highlights,service, businessStep, investmentData,processSteps, investmentHighlights, marketRegions, modelBenefits, benefits,consultationSteps
 , markets, crops, products, socialLinks, services,quickLinks, reasons, productImages, approachPoints , businessSteps, whyItWorks, steps}