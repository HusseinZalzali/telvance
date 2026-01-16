export interface Solution {
  id: number;
  title: string;
  description: string;
  category: string;
  icon: string;
  features: string[];
  useCases: string[];
}

export const SOLUTIONS: Solution[] = [
  {
    id: 1,
    title: 'Enterprise Solutions',
    description: 'Comprehensive technology solutions tailored for large-scale enterprises.',
    category: 'Enterprise',
    icon: '🏢',
    features: [
      'Scalable Architecture',
      'Enterprise Integration',
      'High Availability',
      '24/7 Support'
    ],
    useCases: [
      'Multi-national corporations',
      'Financial institutions',
      'Healthcare systems',
      'Manufacturing operations'
    ]
  },
  {
    id: 2,
    title: 'Smart City Solutions',
    description: 'IoT and connectivity solutions to transform urban infrastructure and services.',
    category: 'Smart Cities',
    icon: '🏙️',
    features: [
      'IoT Integration',
      'Real-time Monitoring',
      'Data Analytics',
      'Citizen Services'
    ],
    useCases: [
      'Traffic management',
      'Energy optimization',
      'Public safety',
      'Transportation systems'
    ]
  },
  {
    id: 3,
    title: 'ISP Systems',
    description: 'Complete infrastructure and management systems for Internet Service Providers.',
    category: 'Telecom',
    icon: '📶',
    features: [
      'Billing Systems',
      'Network Management',
      'Customer Portal',
      'Bandwidth Management'
    ],
    useCases: [
      'Fiber ISPs',
      'Wireless providers',
      'Cable operators',
      'Regional carriers'
    ]
  },
  {
    id: 4,
    title: 'Government & Defense Tech',
    description: 'Secure, compliant solutions for government agencies and defense organizations.',
    category: 'Government',
    icon: '🛡️',
    features: [
      'Security Clearance',
      'Compliance Standards',
      'Secure Communications',
      'Classified Systems'
    ],
    useCases: [
      'Defense networks',
      'Public safety',
      'Emergency services',
      'Government agencies'
    ]
  },
  {
    id: 5,
    title: 'Custom Digital Platforms',
    description: 'Bespoke digital platforms designed to meet unique business requirements.',
    category: 'Custom',
    icon: '🚀',
    features: [
      'Custom Development',
      'API-First Design',
      'Microservices Architecture',
      'Cloud-Native'
    ],
    useCases: [
      'Digital transformation',
      'Platform modernization',
      'Startup MVPs',
      'Innovation projects'
    ]
  }
];
