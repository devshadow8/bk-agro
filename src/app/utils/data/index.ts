
import { Sprout, Clock, TrendingUp, Globe2 , CheckCircle2, Target,ArrowRight, Shield,
   Users,  Package, Store, Truck, Building2, DollarSign, AlertCircle,  MapPin, Mail, Phone,Facebook, Twitter, Instagram,Linkedin,Youtube,Send,ChevronRight,FileCheck,  FlaskConical, 
  Handshake,  Leaf, Calendar,MessageSquare} from 'lucide-react';
 

  

  const highlights = [
    {
      icon: Sprout,
      value: "₹2.5 Lakhs",
      unit: "per Acre",
      title: "Investment Amount",
      description:
        "Structured investment covering cultivation planning, farming guidance, and harvest support.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      delay: 0.1,
      image: "/images/why1.png",
    },
    {
      icon: Clock,
      value: "9–12 Months",
      unit: "Crop Cycle",
      title: "Time Period",
      description:
        "Well-defined crop duration from plantation to harvest, ensuring planned operations.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      delay: 0.2,
      image: "/images/why6.png",
    },
    {
      icon: TrendingUp,
      value: "Up to ₹5 Lakhs",
      unit: "per Acre*",
      title: "Expected Returns",
      description:
        "Projected returns based on yield performance, quality, and market demand.",
      color: "from-teal-500 to-green-600",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
      delay: 0.3,
      image: "/images/why2.png",
    },
    {
      icon: Globe2,
      value: "National & International",
      unit: "Export",
      title: "Market Reach",
      description:
        "Strong distribution network connecting farms to domestic buyers and global markets.",
      color: "from-green-600 to-lime-600",
      bgColor: "bg-lime-50",
      iconColor: "text-green-700",
      delay: 0.4,
      image: "/images/why3.png",
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
      value: '9–12 Months',
      unit: '',
      description: 'A defined crop cycle from plantation to harvest.',
      color: 'from-green-600 to-teal-600',
      delay: 0.2
    },
    {
      icon: TrendingUp,
      title: 'Return Potential',
      value: 'Up to ₹5 Lakhs',
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
          name: 'Nashik Agricultural Belt',
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
      { name: "About BK-Agro", href: "/about-bk-agro" },
      { name: "Business", href: "/business" },
      { name: "Contact", href: "/contact" }
    ];
  
    const services = [
      { name: "Agricultural Solutions", href: "/services/agricultural-solutions" },
      { name: "Crop Management", href: "/services/crop-management" },
      { name: "Consulting Services", href: "/services/consulting" },
      { name: "Organic Farming", href: "/services/organic-farming" },
      { name: "Sustainable Agriculture", href: "/services/sustainable" }
    ];
  
    const socialLinks = [
      { icon: Facebook, href: "#", color: "hover:text-green-400" },
      { icon: Instagram, href: "#", color: "hover:text-emerald-400" },
      { icon: Twitter, href: "#", color: "hover:text-green-500" },
      { icon: Linkedin, href: "#", color: "hover:text-emerald-600" },
      { icon: Youtube, href: "#", color: "hover:text-green-500" }
    ];

    //why choose us 

    const reasons = [
    {
      icon: Sprout,
      title: 'Structured Farming Model',
      description: 'We follow a planned cultivation approach with defined timelines, farming guidance, and quality-focused practices.',
      gradient: 'from-green-600 to-emerald-600',
      delay: 0.1
    },
    {
      icon: FileCheck,
      title: 'Clear Investment Framework',
      description: 'Our model provides clarity on investment size, crop duration, and market linkage, helping partners understand the process from start to finish.',
      gradient: 'from-emerald-600 to-teal-600',
      delay: 0.2
    },
    {
      icon: Globe2,
      title: 'Domestic & Export Market Access',
      description: 'We balance domestic demand with international export channels, reducing dependency on a single market.',
      gradient: 'from-teal-600 to-green-700',
      delay: 0.3
    },
    {
      icon: FlaskConical,
      title: 'Focus on Quality & Standards',
      description: 'Emphasis on harvest quality, grading, and handling to meet both domestic and export market expectations.',
      gradient: 'from-green-700 to-lime-600',
      delay: 0.4
    },
    {
      icon: Handshake,
      title: 'End-to-End Support',
      description: 'From cultivation planning to post-harvest handling and market supply, support is provided across all stages.',
      gradient: 'from-lime-600 to-green-600',
      delay: 0.5
    },
    {
      icon: TrendingUp,
      title: 'Market-Linked Approach',
      description: 'Returns are linked to real market conditions, ensuring transparency and realistic expectations.',
      gradient: 'from-green-600 to-emerald-700',
      delay: 0.6
    }
  ];

  // about us 

   const productImages = [
      {
        src: '/images/suran-hand.png', 
        alt: 'Quality Suran Product',
        title: 'Premium Quality'
      },
      {
        src: '/images/harvested-suran.png', 
        alt: 'Fresh Harvest',
        title: 'Export Grade'
      },
      {
        src: '/images/suran-plant.png', 
        alt: 'Growing Suran',
        title: 'Sustainable Farming'
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
          description: 'The crop is monitored during the 9–12 month cycle to support healthy growth and quality outcomes.',
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
          description: 'Returns depend on yield performance, quality, and prevailing market conditions.',
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

  export {highlights,investmentData, markets, socialLinks, services,quickLinks, reasons, productImages, approachPoints , businessSteps, whyItWorks }