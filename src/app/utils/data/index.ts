
import { Sprout, Clock, TrendingUp, Globe2 ,  Users,  Package, Store, Truck, Building2, DollarSign, AlertCircle,  MapPin, Mail, Phone,Facebook, Twitter, Instagram,Linkedin,Youtube,
  Send,
  ChevronRight,
  Leaf} from 'lucide-react';

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

  export {highlights,investmentData, markets, socialLinks, services,quickLinks  }