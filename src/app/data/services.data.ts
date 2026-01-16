import { Service } from '../shared/service-card/service-card.component';

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Telecom Infrastructure',
    description: 'Design, deploy, and maintain robust telecommunications infrastructure for enterprise and carrier networks.',
    icon: '📡',
    features: [
      '5G Network Deployment',
      'Fiber Optic Solutions',
      'Network Optimization',
      'Infrastructure Monitoring'
    ]
  },
  {
    id: 2,
    title: 'Software Development',
    description: 'Custom software solutions built with modern technologies to drive business innovation and efficiency.',
    icon: '💻',
    features: [
      'Enterprise Applications',
      'Mobile App Development',
      'API Development',
      'Legacy System Modernization'
    ]
  },
  {
    id: 3,
    title: 'Cloud & DevOps',
    description: 'Accelerate your digital transformation with cloud-native architectures and automated DevOps pipelines.',
    icon: '☁️',
    features: [
      'Cloud Migration',
      'Container Orchestration',
      'CI/CD Pipelines',
      'Infrastructure as Code'
    ]
  },
  {
    id: 4,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with comprehensive security solutions and threat intelligence.',
    icon: '🔒',
    features: [
      'Security Audits',
      'Threat Detection',
      'Identity Management',
      'Compliance Solutions'
    ]
  },
  {
    id: 5,
    title: 'Networking Solutions',
    description: 'Advanced networking solutions for seamless connectivity and optimal performance.',
    icon: '🌐',
    features: [
      'SD-WAN Implementation',
      'Network Architecture',
      'Performance Tuning',
      'Multi-site Connectivity'
    ]
  },
  {
    id: 6,
    title: 'AI & Data Systems',
    description: 'Leverage artificial intelligence and big data to unlock insights and automate processes.',
    icon: '🤖',
    features: [
      'Machine Learning Models',
      'Data Analytics Platforms',
      'Predictive Analytics',
      'AI Integration Services'
    ]
  }
];
