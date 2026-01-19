
import React from 'react';
import { 
  Database, 
  Code2, 
  BarChart3, 
  Terminal, 
  GitBranch, 
  Cpu, 
  LineChart, 
  Table as TableIcon 
} from 'lucide-react';
import { Skill, Project, LabExperiment } from './types';

export const SKILLS: Skill[] = [
  { name: 'Python', icon: 'python', category: 'Core', description: 'Pandas, NumPy, Scikit-learn', proficiency: 90 },
  { name: 'SQL', icon: 'database', category: 'Core', description: 'PostgreSQL, MySQL, Complex Queries', proficiency: 85 },
  { name: 'Tableau', icon: 'layout', category: 'Tool', description: 'Interactive Dashboards & Storytelling', proficiency: 88 },
  { name: 'Power BI', icon: 'bar-chart', category: 'Tool', description: 'Business Intelligence Solutions', proficiency: 80 },
  { name: 'Data EDA', icon: 'search', category: 'Core', description: 'Feature Engineering & Statistical Analysis', proficiency: 92 },
  { name: 'Machine Learning', icon: 'cpu', category: 'Core', description: 'Regression, Clustering, Classification', proficiency: 75 },
  { name: 'Git', icon: 'github', category: 'Tool', description: 'Version Control & Collaboration', proficiency: 85 },
  { name: 'Excel VBA', icon: 'file-spreadsheet', category: 'Tool', description: 'Advanced Automation & Modeling', proficiency: 70 },
];

export const PROJECTS: Project[] = [
  {
    id: 'imdb-1',
    title: 'IMDB Movies Analysis',
    problem: 'Large movie datasets make it hard to surface rating drivers and genre trends.',
    insight: 'Cleaned and analyzed IMDB data to surface top predictors of ratings and temporal genre trends.',
    tools: ['Python', 'Pandas', 'Seaborn', 'Jupyter'],
    githubUrl: 'https://github.com/vijayraju-vm/IMDB-Movies-Analysis',
    imageUrl: 'https://picsum.photos/seed/imdb/800/600',
    category: 'Analysis'
  },
  {
    id: 'seg-2',
    title: 'Customer Segmentation Analysis',
    problem: 'One-size-fits-all marketing reduces campaign effectiveness across diverse customer bases.',
    insight: 'Clustering and profiling revealed 4 high-value segments enabling targeted strategies.',
    tools: ['Python', 'Scikit-Learn', 'PCA', 'Tableau'],
    githubUrl: 'https://github.com/vijayraju-vm/Customer-Segmentation-Analysis',
    imageUrl: 'https://picsum.photos/seed/segmentation/800/600',
    category: 'Analysis'
  },
  {
    id: 'supply-3',
    title: 'Supply Chain Shipment Analysis',
    problem: 'Shipment delays and suboptimal routing increase logistics costs and delivery times.',
    insight: 'Route-level analysis highlighted opportunities to reduce transit time and costs through carrier and schedule optimization.',
    tools: ['SQL', 'Python', 'Power BI'],
    githubUrl: 'https://github.com/vijayraju-vm/Supply-Chain-Shipment-Analysis',
    imageUrl: 'https://picsum.photos/seed/supplychain/800/600',
    category: 'Analysis'
  },
  {
    id: 'cust-4',
    title: 'Customer Data Analysis',
    problem: 'Incomplete and inconsistent customer profiles reduce personalization and reporting accuracy.',
    insight: 'A focused data-cleaning and feature engineering pipeline improved model input quality and downstream insights.',
    tools: ['Python', 'Pandas', 'SQL'],
    githubUrl: 'https://github.com/vijayraju-vm/Customer-Data-Analysis',
    imageUrl: 'https://picsum.photos/seed/customer/800/600',
    category: 'Analysis'
  }
];

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    title: 'Exploring Chaos Theory in Data',
    description: 'A deep dive into non-linear dynamics using historical stock market data.',
    date: 'Oct 2023',
    tags: ['Mathematics', 'Python']
  },
  {
    title: 'Sentiment Analysis on Local News',
    description: 'Scraping and analyzing regional sentiment trends during election cycles.',
    date: 'Jan 2024',
    tags: ['NLP', 'Web Scraping']
  },
  {
    title: 'Custom Viz Component Library',
    description: 'Building a set of reusable D3.js components for specialized financial charts.',
    date: 'Mar 2024',
    tags: ['D3.js', 'React']
  }
];

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Lab', href: '#lab' },
  { name: 'Contact', href: '#contact' },
];
