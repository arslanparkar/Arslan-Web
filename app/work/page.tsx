"use client"

import { useState } from "react"
import Link from "next/link"
import PageLayout from "@/components/page-layout"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"

interface Project {
  id: string
  name: string
  website: string
  industry: string
  category: string
  timeline: string
  description: string
  challenge: string
  solution: string[]
  features: string[]
  results: string[]
  metrics: { label: string; value: string }[]
  technologies: string[]
}

const projects: Project[] = [
  // Technology & SaaS
  {
    id: "konnect-insights",
    name: "Konnect Insights",
    website: "konnectinsights.com",
    industry: "Technology & SaaS",
    category: "Enterprise Customer Experience Platform",
    timeline: "12 weeks",
    description:
      "Enterprise-grade social listening platform tracking brand mentions across 50+ platforms with AI-powered sentiment analysis.",
    challenge:
      "Critical performance issues with WordPress-based platform, experiencing severe speed bottlenecks and traffic handling problems while needing to handle enterprise-level social listening.",
    solution: [
      "Complete WordPress to Headless CMS migration",
      "React.js frontend with real-time data visualization",
      "GraphQL integration for efficient data fetching",
      "Performance optimization resolving speed issues",
    ],
    features: [
      "Social Listening Engine across 50+ platforms",
      "AI-Powered Sentiment Analysis with 92% accuracy",
      "Crisis Management System with real-time alerts",
      "Competitive Analysis Tools and benchmarking",
      "Publishing Automation for social media",
      "Omnichannel Response Management workflow",
    ],
    results: [
      "Monthly conversation tracking increased from 10K to 50K",
      "Significant platform performance improvements",
      "17% higher customer satisfaction rates",
      "Up to 25% improvement in campaign ROI",
    ],
    metrics: [
      { label: "Conversations Tracked", value: "50K/month" },
      { label: "Sentiment Accuracy", value: "92%" },
      { label: "Customer Satisfaction", value: "+17%" },
      { label: "Campaign ROI", value: "+25%" },
    ],
    technologies: ["React.js", "GraphQL", "Headless CMS", "AI/ML", "Real-time Analytics"],
  },
  {
    id: "prudence-software",
    name: "Prudence Software",
    website: "prudencesoftware.com",
    industry: "Technology & SaaS",
    category: "SaaS Parent Company Platform",
    timeline: "10 weeks",
    description:
      "Enterprise corporate platform for software development parent company showcasing technical capabilities and market leadership.",
    challenge:
      "Required comprehensive corporate platform showcasing software development capabilities and establishing market leadership in analytics and customer experience solutions.",
    solution: [
      "Enterprise corporate web application development",
      "Service portfolio management system",
      "Technology showcase and innovation demonstrations",
      "Integration hub for 3000+ business applications",
    ],
    features: [
      "Enterprise Corporate Web Application",
      "Service Portfolio Management",
      "Technology Showcase and Innovation Hub",
      "Integration with 3000+ business applications",
      "B2B Client Portal and management",
      "Subsidiary company support system",
    ],
    results: [
      "Established strong technology parent company presence",
      "200% increase in enterprise client inquiries",
      "Industry recognition for innovative platform design",
      "Enhanced visibility for all subsidiary companies",
    ],
    metrics: [
      { label: "Lead Generation", value: "+200%" },
      { label: "App Integrations", value: "3000+" },
      { label: "Market Recognition", value: "Industry Awards" },
      { label: "Corporate Positioning", value: "Market Leader" },
    ],
    technologies: ["Enterprise Web Apps", "Integration APIs", "B2B Portals", "Corporate CMS"],
  },

  // Financial Services & FinTech
  {
    id: "axis-direct",
    name: "Axis Direct",
    website: "simplehai.axisdirect.in",
    industry: "Financial Services",
    category: "Investment Trading Platform",
    timeline: "16 weeks",
    description:
      "Comprehensive investment platform handling complex financial data, real-time market updates, serving millions of users with enterprise-grade security.",
    challenge:
      "Required comprehensive investment platform handling complex financial data, real-time market updates, and serving millions of users with enterprise-grade security and regulatory compliance.",
    solution: [
      "React.js frontend with real-time data streaming",
      "Advanced security framework with multi-factor authentication",
      "Real-time market data with sub-second updates",
      "Mobile trading platform for on-the-go trading",
    ],
    features: [
      "Real-time Market Data Streaming",
      "Advanced Security Framework",
      "Mobile Trading Platform",
      "Automated Investment Engine",
      "AI-powered Investment Recommendations",
      "Regulatory Compliance Systems",
    ],
    results: [
      "Successfully onboarded 9 lakh+ investors",
      "200% increase in daily active users",
      "70% reduction in transaction processing time",
      "Multiple awards including Best Financial App",
      "99.9% uptime with zero security breaches",
    ],
    metrics: [
      { label: "Users Onboarded", value: "9 Lakh+" },
      { label: "Daily Active Users", value: "+200%" },
      { label: "Processing Speed", value: "70% Faster" },
      { label: "System Uptime", value: "99.9%" },
    ],
    technologies: ["React.js", "Real-time Data", "Financial APIs", "Security Framework", "Mobile Apps"],
  },
  {
    id: "sbi-realty",
    name: "SBI Realty",
    website: "sbirealty.in",
    industry: "Financial Services",
    category: "Real Estate Investment Platform",
    timeline: "14 weeks",
    description:
      "Unified marketplace for 1000+ properties, managing 800+ developers and 2400+ under-construction projects with SBI financial integration.",
    challenge:
      "Needed unified marketplace for 1000+ properties, managing 800+ developers and 2400+ under-construction projects while integrating with SBI's financial services.",
    solution: [
      "Property marketplace for all property types",
      "Financial integration with SBI loan processing",
      "Developer management portal for 800+ developers",
      "Real-time project tracking system",
    ],
    features: [
      "Unified Property Marketplace",
      "SBI Loan Processing Integration (7.50%+ rates)",
      "Developer Management Portal",
      "Real-time Project Tracking",
      "Advanced Property Analytics",
      "Market Analysis and Insights",
    ],
    results: [
      "Managing 1000+ SBI-approved properties",
      "800+ registered property developers",
      "Real-time tracking of 2400+ construction projects",
      "High customer satisfaction with fast loan processing",
    ],
    metrics: [
      { label: "Properties Listed", value: "1000+" },
      { label: "Registered Developers", value: "800+" },
      { label: "Active Projects", value: "2400+" },
      { label: "Loan Interest Rate", value: "7.50%+" },
    ],
    technologies: ["Property Management", "Financial Integration", "Real-time Tracking", "Analytics Dashboard"],
  },
  {
    id: "logo-infosoft",
    name: "Logo Infosoft",
    website: "logoinfosoft.com",
    industry: "Financial Services",
    category: "GST Compliance & Billing Platform",
    timeline: "14 weeks",
    description:
      "Comprehensive GST billing platform helping Indian organizations achieve tax compliance with government portal integration.",
    challenge:
      "Needed comprehensive GST billing platform helping Indian organizations achieve tax compliance while integrating with government portals.",
    solution: [
      "GST-compliant billing system with automated calculations",
      "Government portal integration for seamless filing",
      "Multi-tenant architecture for scalability",
      "Automated compliance and regulatory reporting",
    ],
    features: [
      "GST-Compliant Billing System",
      "Government Portal Integration",
      "Multi-tenant Architecture",
      "Invoice Management System",
      "Compliance Automation",
      "Regulatory Reporting",
    ],
    results: [
      "Enabled 5,000+ small businesses GST compliance",
      "60% reduction in GST filing time",
      "85% decrease in GST calculation errors",
      "40% reduction in compliance costs",
    ],
    metrics: [
      { label: "Businesses Served", value: "5000+" },
      { label: "Filing Time Reduction", value: "60%" },
      { label: "Error Reduction", value: "85%" },
      { label: "Cost Savings", value: "40%" },
    ],
    technologies: ["GST APIs", "Government Integration", "Multi-tenant SaaS", "Compliance Automation"],
  },

  // Healthcare & Life Sciences
  {
    id: "buddhi-clinic",
    name: "Buddhi Clinic",
    website: "buddhiclinic.com",
    industry: "Healthcare",
    category: "Advanced Healthcare Technology Infrastructure",
    timeline: "12 weeks",
    description:
      "Complete hospital technology infrastructure for Chennai's leading neurosurgery hospital with patient management and medical equipment integration.",
    challenge:
      "Required complete technology infrastructure overhaul including patient management, medical equipment integration, and HIPAA compliance for neurosurgery specialization.",
    solution: [
      "Hospital management system for patient care lifecycle",
      "Electronic health records with secure compliance",
      "Medical equipment digital integration",
      "Telemedicine platform for remote consultations",
    ],
    features: [
      "Hospital Management System",
      "Electronic Health Records (HIPAA compliant)",
      "Medical Equipment Integration",
      "Telemedicine Platform",
      "Professional Medical Website",
      "Appointment Booking System",
    ],
    results: [
      "40% improvement in hospital operations",
      "Enhanced patient experience through digital services",
      "Reduced errors through digital record management",
      "100% regulatory compliance maintenance",
      "30% reduction in administrative overhead",
    ],
    metrics: [
      { label: "Operational Efficiency", value: "+40%" },
      { label: "Compliance Rate", value: "100%" },
      { label: "Admin Cost Reduction", value: "30%" },
      { label: "Patient Satisfaction", value: "Enhanced" },
    ],
    technologies: ["Hospital Management", "EHR Systems", "HIPAA Compliance", "Telemedicine", "Medical Integration"],
  },
  {
    id: "dierks-company",
    name: "Dierks + Company",
    website: "dierks.company",
    industry: "Healthcare",
    category: "German Pharmaceutical Legal Platform",
    timeline: "8 weeks",
    description:
      "Sophisticated digital presence for German pharmaceutical legal firm serving international clients across Europe with GDPR compliance.",
    challenge:
      "Leading German pharmaceutical legal firm needed sophisticated digital presence for healthcare law and strategy consulting serving international clients.",
    solution: [
      "Professional legal platform with clean authority design",
      "Multi-language support for German and English",
      "Secure client portal for confidential communication",
      "GDPR compliance for European data protection",
    ],
    features: [
      "Professional Legal Platform",
      "Multi-language Support (German/English)",
      "Secure Client Portal",
      "Legal Content Management",
      "GDPR Compliance",
      "Pharmaceutical Law Specialization",
    ],
    results: [
      "Expanded European pharmaceutical market presence",
      "300% increase in qualified legal consultations",
      "85% improvement in client onboarding",
      "Leading digital-forward pharmaceutical law firm",
    ],
    metrics: [
      { label: "Market Reach", value: "European" },
      { label: "Legal Consultations", value: "+300%" },
      { label: "Client Efficiency", value: "+85%" },
      { label: "Market Position", value: "Digital Leader" },
    ],
    technologies: ["Legal CMS", "GDPR Compliance", "Multi-language", "Secure Portals", "European Standards"],
  },

  // Creative & Design Solutions
  {
    id: "deckor",
    name: "Deckor",
    website: "deckor.co",
    industry: "Creative & Design",
    category: "3D Architectural Visualization Platform",
    timeline: "10 weeks",
    description:
      "Sophisticated platform for 3D architectural visualizations, client project management, and digital asset e-commerce with Web3 technologies.",
    challenge:
      "Specializing in CGI and Web3 technologies, needed sophisticated platform for 3D architectural visualizations and digital asset e-commerce.",
    solution: [
      "React.js with Three.js for interactive 3D models",
      "Progressive Web App for mobile optimization",
      "Cloud asset management for large 3D files",
      "Custom CMS for design workflow management",
    ],
    features: [
      "Interactive 3D Model Viewer",
      "Progressive Web App (PWA)",
      "Cloud Asset Management",
      "Advanced Image Optimization",
      "Custom Design CMS",
      "3D File Processing",
    ],
    results: [
      "400% increase in website exploration time",
      "250% improvement in mobile usability",
      "60% faster project delivery and approval cycles",
      "180% increase in online asset sales",
      "45% reduction in revision cycles",
    ],
    metrics: [
      { label: "Engagement Time", value: "+400%" },
      { label: "Mobile Experience", value: "+250%" },
      { label: "Project Efficiency", value: "60% Faster" },
      { label: "Digital Sales", value: "+180%" },
    ],
    technologies: ["React.js", "Three.js", "WebGL", "PWA", "3D Processing", "Cloud Storage"],
  },
  {
    id: "artchanted",
    name: "Artchanted",
    website: "artchanted.in",
    industry: "Creative & Design",
    category: "Creative Arts & E-commerce Platform",
    timeline: "8 weeks",
    description:
      "Visually stunning platform showcasing artistic works with e-commerce functionality for art sales and commissioned work management.",
    challenge:
      "Required visually stunning platform showcasing artistic works while providing e-commerce functionality for art sales and commissioned work management.",
    solution: [
      "Visual-first React.js design for art presentation",
      "High-resolution image optimization for artwork",
      "Artist portfolio management tools",
      "E-commerce integration for art sales",
    ],
    features: [
      "Visual-First Design",
      "High-Resolution Image Optimization",
      "Artist Portfolio Management",
      "E-commerce Integration",
      "Social Community Features",
      "Commission Management",
    ],
    results: [
      "400% increase in artist portfolio views",
      "180% improvement in art sales rates",
      "65% increase in commissioned artwork inquiries",
      "250% growth in artist participation",
    ],
    metrics: [
      { label: "Portfolio Views", value: "+400%" },
      { label: "Sales Conversion", value: "+180%" },
      { label: "Commission Growth", value: "+65%" },
      { label: "Artist Participation", value: "+250%" },
    ],
    technologies: ["React.js", "Image Optimization", "E-commerce", "Portfolio Management", "Social Features"],
  },

  // Professional Services & Consulting
  {
    id: "nriway",
    name: "NRIway",
    website: "nriway.com",
    industry: "Professional Services",
    category: "US-Based Legal Services for NRIs",
    timeline: "10 weeks",
    description:
      "Comprehensive platform serving Non-Resident Indians for Indian property and legal matters with dual-jurisdiction expertise.",
    challenge:
      "Needed comprehensive platform serving Non-Resident Indians for Indian property and legal matters, requiring understanding of both US and Indian legal systems.",
    solution: [
      "Dual-jurisdiction website for US and Indian markets",
      "Secure client portal for confidential documents",
      "Multi-currency integration for international clients",
      "Remote consultation system with video conferencing",
    ],
    features: [
      "Dual-Jurisdiction Legal Platform",
      "Secure Client Portal",
      "Multi-Currency Integration",
      "Legal Resource Library",
      "Remote Consultation System",
      "NRI-Specific Legal Solutions",
    ],
    results: [
      "Client base across major US metropolitan areas",
      "Streamlined legal delivery for distributed NRI community",
      "Improved accessibility and transparency",
      "Leading NRI legal services provider in US",
    ],
    metrics: [
      { label: "Market Coverage", value: "Major US Cities" },
      { label: "Service Efficiency", value: "Streamlined" },
      { label: "Market Position", value: "Leading Provider" },
      { label: "Client Satisfaction", value: "High" },
    ],
    technologies: ["Legal CMS", "Multi-currency", "Video Conferencing", "Secure Portals", "International Compliance"],
  },
  {
    id: "lynx-institute",
    name: "Lynx Institute",
    website: "lynxinst.com",
    industry: "Professional Services",
    category: "Industrial Equipment Division",
    timeline: "10 weeks",
    description:
      "Industrial equipment division of Lawrence & Mayo's 145+ year heritage company with specialized B2B portal and technical documentation.",
    challenge:
      "Industrial equipment division of Lawrence & Mayo's 145+ year heritage company required specialized platform for industrial equipment catalog and B2B clients.",
    solution: [
      "Industrial equipment platform with comprehensive catalog",
      "Technical documentation system with specifications",
      "B2B client portal for industrial clients",
      "Product configuration tools for equipment",
    ],
    features: [
      "Comprehensive Equipment Catalog",
      "Technical Specification System",
      "B2B Client Portal",
      "Quote Generation System",
      "Maintenance and Service Portal",
      "Supply Chain Integration",
    ],
    results: [
      "Enhanced B2B client portal usage and satisfaction",
      "Streamlined access to complex industrial specifications",
      "70% reduction in equipment quote generation time",
      "Improved after-sales service coordination",
    ],
    metrics: [
      { label: "Quote Processing", value: "70% Faster" },
      { label: "Client Engagement", value: "Enhanced" },
      { label: "Service Efficiency", value: "Improved" },
      { label: "Heritage Integration", value: "145+ Years" },
    ],
    technologies: ["Industrial Catalog", "B2B Portals", "Technical Documentation", "Quote Systems", "Supply Chain"],
  },

  // Retail & E-commerce Solutions
  {
    id: "lawrence-mayo",
    name: "Lawrence & Mayo",
    website: "lawrenceandmayo.com",
    industry: "Retail & E-commerce",
    category: "Heritage Brand Digital Transformation",
    timeline: "12 weeks",
    description:
      "Digital transformation for 145+ year heritage brand in eyewear and industrial equipment with multi-microsite architecture.",
    challenge:
      "145+ year heritage brand (established 1877) had poor web presence despite being leading industrial and optical equipment brand requiring complete digital transformation.",
    solution: [
      "Heritage-modern website balancing legacy with contemporary experience",
      "Multi-microsite architecture for different product categories",
      "E-commerce integration with heritage storytelling",
      "Brand modernization respecting tradition",
    ],
    features: [
      "Heritage-Modern Website Design",
      "Multi-Microsite Architecture",
      "E-commerce Integration",
      "Brand Modernization",
      "SEO Implementation",
      "Legacy Storytelling",
    ],
    results: [
      "300% increase in organic traffic",
      "Successfully bridged heritage with modern presence",
      "Significant improvement in qualified inquiries",
      "Enhanced visibility in competitive market",
    ],
    metrics: [
      { label: "Organic Traffic", value: "+300%" },
      { label: "Heritage", value: "145+ Years" },
      { label: "Lead Generation", value: "Significant" },
      { label: "Market Position", value: "Enhanced" },
    ],
    technologies: ["Heritage Design", "Multi-site Architecture", "E-commerce", "SEO", "Brand Modernization"],
  },
  {
    id: "hks-flooring",
    name: "HKS Flooring",
    website: "hksflooring.in",
    industry: "Retail & E-commerce",
    category: "Premium Flooring Digital Presence",
    timeline: "10 weeks",
    description:
      "Complete digital presence creation for 185+ year heritage premium flooring manufacturer with B2B e-commerce platform.",
    challenge:
      "185+ year heritage company (established 1835) specialized in premium wooden floors but had no digital presence for residential and commercial markets.",
    solution: [
      "Heritage-focused website honoring 185+ year history",
      "Premium product catalog presentation",
      "B2B e-commerce platform with dealer portal",
      "Interactive product configurator for flooring",
    ],
    features: [
      "Heritage-Focused Website",
      "Premium Product Catalog",
      "B2B E-commerce Platform",
      "Project Gallery Showcase",
      "Interactive Product Configurator",
      "Dealer Portal",
    ],
    results: [
      "Created comprehensive online presence from zero",
      "300% increase in business-to-business orders",
      "70% improvement in dealer network engagement",
      "85% reduction in quote processing time",
    ],
    metrics: [
      { label: "Digital Presence", value: "From Zero" },
      { label: "B2B Orders", value: "+300%" },
      { label: "Dealer Engagement", value: "+70%" },
      { label: "Quote Efficiency", value: "85% Faster" },
    ],
    technologies: ["Heritage Design", "B2B E-commerce", "Product Configurator", "Dealer Portals", "Premium Catalogs"],
  },

  // Fashion & Lifestyle
  {
    id: "1947-india",
    name: "1947 India",
    website: "1947ind.com",
    industry: "Fashion & Lifestyle",
    category: "Heritage Fashion & Lifestyle Brand",
    timeline: "10 weeks",
    description:
      "E-commerce fashion platform with heritage brand storytelling connecting with India's independence heritage.",
    challenge:
      "Needed sophisticated e-commerce platform effectively telling brand story while providing modern shopping experience, connecting with India's independence heritage.",
    solution: [
      "React.js fashion platform with modern e-commerce",
      "Heritage brand storytelling connecting with independence",
      "Fashion catalog management with variations",
      "Mobile shopping experience optimization",
    ],
    features: [
      "React.js Fashion Platform",
      "Heritage Brand Storytelling",
      "Fashion Catalog Management",
      "Visual Commerce",
      "Mobile Shopping Experience",
      "Independence Heritage Connection",
    ],
    results: [
      "Successfully connected fashion with historical heritage",
      "Significant increase in online sales and engagement",
      "Enhanced mobile shopping for fashion customers",
      "Strengthened brand identity through digital storytelling",
    ],
    metrics: [
      { label: "Heritage Connection", value: "1947 Independence" },
      { label: "E-commerce Growth", value: "Significant" },
      { label: "Mobile Commerce", value: "Enhanced" },
      { label: "Brand Recognition", value: "Strengthened" },
    ],
    technologies: ["React.js", "Fashion E-commerce", "Heritage Storytelling", "Mobile Commerce", "Visual Design"],
  },
  {
    id: "mas-fashion",
    name: "MAS Fashion",
    website: "masfashion.io",
    industry: "Fashion & Lifestyle",
    category: "Fashion E-commerce Platform",
    timeline: "8 weeks",
    description:
      "Modern fashion e-commerce platform with advanced catalog management, size variations, and mobile-optimized shopping experience.",
    challenge:
      "Required modern e-commerce platform with advanced fashion catalog management, size variations, inventory tracking, and mobile-optimized shopping experience.",
    solution: [
      "Modern fashion e-commerce responsive platform",
      "Advanced inventory management with real-time tracking",
      "Size and color management for variations",
      "Mobile-first design for touch optimization",
    ],
    features: [
      "Modern Fashion E-commerce",
      "Advanced Inventory Management",
      "Size and Color Management",
      "Mobile-First Design",
      "Payment Integration",
      "Fashion Catalog System",
    ],
    results: [
      "Streamlined online fashion retail operations",
      "Real-time stock management and tracking",
      "Enhanced mobile shopping conversion rates",
      "Improved fashion discovery and purchasing",
    ],
    metrics: [
      { label: "E-commerce Performance", value: "Streamlined" },
      { label: "Inventory Efficiency", value: "Real-time" },
      { label: "Mobile Sales", value: "Enhanced" },
      { label: "Customer Experience", value: "Improved" },
    ],
    technologies: [
      "Fashion E-commerce",
      "Inventory Management",
      "Mobile-First",
      "Payment Integration",
      "Catalog Management",
    ],
  },

  // Sports & Media Technology
  {
    id: "speedshifter-sports",
    name: "Speedshifter Sports",
    website: "speedshiftersports.com",
    industry: "Sports & Media",
    category: "F1 News & Motorsport Media Platform",
    timeline: "8 weeks",
    description:
      "High-performance F1 and motorsport news platform with real-time race updates, analysis, and community engagement features.",
    challenge:
      "Formula 1 and motorsport news company required high-performance news platform for real-time F1 updates, race analysis, and motorsport enthusiast engagement.",
    solution: [
      "High-performance news platform optimized for real-time delivery",
      "Real-time race updates with timing and results",
      "Community engagement with discussion forums",
      "Mobile news experience for on-the-go consumption",
    ],
    features: [
      "Real-Time F1 News",
      "Race Analysis Platform",
      "Community Forums",
      "Multimedia Content",
      "Mobile News App",
      "Social Sharing Integration",
    ],
    results: [
      "Significant increase in F1 news readership and engagement",
      "Active motorsport fan community with regular participation",
      "Enhanced mobile news consumption and user experience",
      "Established as credible source for F1 and motorsport news",
    ],
    metrics: [
      { label: "News Engagement", value: "Significant Increase" },
      { label: "Community Growth", value: "Active Participation" },
      { label: "Mobile Traffic", value: "Enhanced" },
      { label: "Industry Recognition", value: "Credible Source" },
    ],
    technologies: [
      "News Platform",
      "Real-time Updates",
      "Community Features",
      "Mobile Optimization",
      "Social Integration",
    ],
  },
  {
    id: "lootmogul",
    name: "LootMogul",
    website: "lootmogul.com",
    industry: "Sports & Media",
    category: "AI Sports Tech & Fan Engagement Platform",
    timeline: "16 weeks",
    description:
      "AI-powered fan-centric gaming and e-commerce platform with blockchain integration, enabling fans to create and monetize games.",
    challenge:
      "Needed AI-powered fan-centric gaming and e-commerce platform enabling fans to create, play, and monetize games using favorite athletes with blockchain integration.",
    solution: [
      "AI-powered gaming platform with fan-centric tools",
      "Blockchain integration with Web3 e-commerce",
      "Sports metaverse with immersive experiences",
      "MogulX.ai engine with developer APIs",
    ],
    features: [
      "AI-Assisted Game Creation",
      "Fan-Created Merchandise",
      "Sports Metaverse Integration",
      "Real-Time Analytics",
      "Revenue Sharing",
      "Athlete Partnerships",
    ],
    results: [
      "Revolutionary AI-powered sports fan experiences",
      "Enabled fans to monetize their creativity",
      "Pioneered sports metaverse and Web3 integration",
      "Leading AI sports technology platform",
    ],
    metrics: [
      { label: "Fan Engagement", value: "Revolutionary" },
      { label: "Creator Economy", value: "Monetization Enabled" },
      { label: "Blockchain Innovation", value: "Web3 Pioneer" },
      { label: "Industry Recognition", value: "Leading Platform" },
    ],
    technologies: ["AI/ML", "Blockchain", "Web3", "Gaming Platform", "Sports Metaverse", "Developer APIs"],
  },

  // Automotive & Luxury Brands
  {
    id: "audi-india",
    name: "Audi India",
    website: "audi.in",
    industry: "Automotive & Luxury",
    category: "Premium Automotive Digital Experience",
    timeline: "16 weeks",
    description:
      "Premium digital experience for luxury vehicles with 3D visualization, dealer integration, and personalized customer journeys.",
    challenge:
      "Required premium digital experience showcasing luxury vehicles, integrating with dealer networks, and providing personalized customer journeys while maintaining sophisticated European design standards.",
    solution: [
      "Luxury-focused React.js platform with high-end design",
      "3D vehicle visualization with interactive configuration",
      "Dealer network integration with inventory",
      "AI-powered experience personalization",
    ],
    features: [
      "Luxury-Focused Platform",
      "3D Vehicle Visualization",
      "Dealer Network Integration",
      "Personalized Customer Journeys",
      "High-Performance Architecture",
      "Vehicle Configuration Tools",
    ],
    results: [
      "400% increase in premium engagement metrics",
      "250% improvement in qualified luxury leads",
      "60% increase in test drive bookings",
      "180% growth in vehicle customization usage",
    ],
    metrics: [
      { label: "Digital Engagement", value: "+400%" },
      { label: "Lead Quality", value: "+250%" },
      { label: "Test Drive Bookings", value: "+60%" },
      { label: "Vehicle Configuration", value: "+180%" },
    ],
    technologies: ["React.js", "3D Visualization", "Luxury Design", "Dealer Integration", "AI Personalization"],
  },

  // Agriculture & Sustainability
  {
    id: "upl-limited",
    name: "UPL Limited",
    website: "upl-ltd.com",
    industry: "Agriculture & Sustainability",
    category: "Global Agricultural Technology Platform",
    timeline: "14 weeks",
    description:
      "Global agricultural technology platform serving 130+ countries with $5B+ revenue, featuring IoT integration and sustainability reporting.",
    challenge:
      "Operating in 130+ countries with $5B+ revenue, required comprehensive platform serving global audience, showcasing agricultural technologies, and providing data-driven stakeholder insights.",
    solution: [
      "Multi-regional architecture serving 130+ countries",
      "Advanced data visualization for agricultural metrics",
      "IoT integration for agricultural sensors",
      "Automated ESG and environmental impact reporting",
    ],
    features: [
      "Multi-Regional Architecture",
      "Advanced Data Visualization",
      "IoT Integration",
      "Sustainability Reporting",
      "Mobile Optimization",
      "Global Localization",
    ],
    results: [
      "500% increase in international engagement",
      "80% improvement in sustainability reporting",
      "200% increase in global stakeholder interaction",
      "45% reduction in multi-regional content overhead",
    ],
    metrics: [
      { label: "Global Engagement", value: "+500%" },
      { label: "Countries Served", value: "130+" },
      { label: "Revenue Impact", value: "$5B+" },
      { label: "Sustainability Reporting", value: "+80%" },
    ],
    technologies: [
      "Multi-regional Architecture",
      "IoT Integration",
      "Data Visualization",
      "Sustainability Tech",
      "Global Platforms",
    ],
  },

  // Non-Profit & Social Impact
  {
    id: "team-prakruthi",
    name: "Team Prakruthi",
    website: "teamprakruthi.org",
    industry: "Non-Profit & Social Impact",
    category: "NGO Social Impact Platform",
    timeline: "6 weeks",
    description:
      "NGO platform showcasing women's empowerment work with donation integration and volunteer management for social impact.",
    challenge:
      "NGO needed platform to showcase work in women's empowerment, social justice, and community development while facilitating donations and volunteer engagement.",
    solution: [
      "Impact-focused website showcasing empowerment work",
      "Donation integration with secure processing",
      "Volunteer management and engagement systems",
      "Digital advocacy and rights awareness tools",
    ],
    features: [
      "Social Impact Showcase",
      "Community Stories",
      "Donation Platform",
      "Volunteer Portal",
      "Awareness Resources",
      "Partnership Network",
    ],
    results: [
      "Enhanced visibility for women's empowerment initiatives",
      "Increased volunteer participation and support",
      "Improved online fundraising capabilities",
      "Expanded educational outreach and rights advocacy",
    ],
    metrics: [
      { label: "Social Impact", value: "Enhanced Visibility" },
      { label: "Community Engagement", value: "Increased" },
      { label: "Donation Growth", value: "Improved" },
      { label: "Awareness Reach", value: "Expanded" },
    ],
    technologies: ["NGO Platform", "Donation Integration", "Volunteer Management", "Social Impact", "Awareness Tools"],
  },
  {
    id: "icoh-2027",
    name: "ICOH 2027 Mumbai",
    website: "icoh2027mumbai.com",
    industry: "Non-Profit & Social Impact",
    category: "International Conference Platform",
    timeline: "8 weeks",
    description:
      "International occupational health conference platform with registration, program management, and attendee engagement features.",
    challenge:
      "International occupational health conference required comprehensive platform for registration, program management, speaker coordination, and attendee engagement.",
    solution: [
      "Conference management system for event registration",
      "Program schedule platform with interactive agenda",
      "Speaker management with profile coordination",
      "International accessibility with multi-language support",
    ],
    features: [
      "Conference Management System",
      "Program Schedule Platform",
      "Speaker Management",
      "Attendee Networking",
      "International Accessibility",
      "Multi-language Support",
    ],
    results: [
      "Streamlined international conference management",
      "Simplified attendee registration and payment",
      "Enhanced speaker management and scheduling",
      "Facilitated international attendee engagement",
    ],
    metrics: [
      { label: "Conference Success", value: "Streamlined" },
      { label: "Registration Efficiency", value: "Simplified" },
      { label: "Speaker Coordination", value: "Enhanced" },
      { label: "Global Participation", value: "Facilitated" },
    ],
    technologies: [
      "Conference Management",
      "Event Registration",
      "Speaker Coordination",
      "International Platform",
      "Multi-language",
    ],
  },

  // Integrated Marketing & Digital Services
  {
    id: "blustream-integrated",
    name: "Blustream Integrated",
    website: "blustream.in",
    industry: "Marketing & Digital Services",
    category: "Integrated Marketing Agency Platform",
    timeline: "10 weeks",
    description:
      "Integrated marketing agency platform showcasing services, thought leadership content, and client success stories for bold brands.",
    challenge:
      "Marketing agency for bold brands needed comprehensive platform showcasing integrated marketing services, thought leadership content, and client success stories.",
    solution: [
      "Agency website showcasing marketing expertise",
      "Service portfolio with integrated marketing services",
      "Thought leadership content and blog management",
      "Client case studies and testimonials",
    ],
    features: [
      "Integrated Marketing Services",
      "Thought Leadership Blog",
      "Brand Portfolio",
      "Client Testimonials",
      "Contact and Consultation",
      "Team Expertise",
    ],
    results: [
      "Established strong integrated marketing agency presence",
      "Enhanced content marketing and industry recognition",
      "Improved lead generation and consultation bookings",
      "Strengthened agency brand and market positioning",
    ],
    metrics: [
      { label: "Agency Positioning", value: "Strong Presence" },
      { label: "Thought Leadership", value: "Enhanced" },
      { label: "Client Acquisition", value: "Improved" },
      { label: "Brand Recognition", value: "Strengthened" },
    ],
    technologies: ["Agency Platform", "Content Management", "Portfolio Showcase", "Lead Generation", "Brand Building"],
  },
  {
    id: "covertree",
    name: "Covertree",
    website: "covertree.com",
    industry: "Marketing & Digital Services",
    category: "Technology Consulting Digital Presence",
    timeline: "8 weeks",
    description:
      "Technology consulting company digital presence with social media management and thought leadership in technology solutions.",
    challenge:
      "Technology consulting company required comprehensive digital marketing and web presence management to establish position in competitive technology consulting market.",
    solution: [
      "Corporate website showcasing technology consulting",
      "Social media management for LinkedIn and industry platforms",
      "Content marketing for thought leadership",
      "Digital marketing campaigns for business development",
    ],
    features: [
      "Corporate Website Development",
      "Social Media Management",
      "Content Marketing",
      "Brand Positioning",
      "Lead Generation",
      "Technology Consulting Showcase",
    ],
    results: [
      "Strong thought leadership in technology consulting",
      "Significant increase in qualified B2B inquiries",
      "Enhanced professional networking and recognition",
      "Improved visibility in competitive consulting market",
    ],
    metrics: [
      { label: "Digital Authority", value: "Strong Leadership" },
      { label: "B2B Lead Generation", value: "Significant Increase" },
      { label: "Social Media Growth", value: "Enhanced" },
      { label: "Brand Recognition", value: "Improved" },
    ],
    technologies: [
      "Corporate Website",
      "Social Media",
      "Content Marketing",
      "B2B Lead Generation",
      "Technology Consulting",
    ],
  },

  // Distribution & Supply Chain
  {
    id: "previ-distribution",
    name: "Previ Distribution",
    website: "previdistribution.com",
    industry: "Distribution & Supply Chain",
    category: "Supply Chain Management Platform",
    timeline: "12 weeks",
    description:
      "Comprehensive supply chain management platform with inventory tracking, distributor management, and logistics optimization.",
    challenge:
      "Needed comprehensive supply chain management platform for inventory tracking, distributor management, and logistics optimization across multiple product categories.",
    solution: [
      "Supply chain management system with inventory tracking",
      "Distributor portal for B2B network management",
      "Logistics optimization with route planning",
      "Analytics dashboard for performance monitoring",
    ],
    features: [
      "Supply Chain Management System",
      "Distributor Portal",
      "Logistics Optimization",
      "Inventory Management",
      "Analytics Dashboard",
      "Performance Monitoring",
    ],
    results: [
      "Streamlined distribution and logistics operations",
      "Reduced stock outs and improved inventory turnover",
      "Enhanced distributor portal and communication",
      "Improved logistics efficiency and cost control",
    ],
    metrics: [
      { label: "Supply Chain Efficiency", value: "Streamlined" },
      { label: "Inventory Optimization", value: "Improved" },
      { label: "Distributor Satisfaction", value: "Enhanced" },
      { label: "Cost Reduction", value: "Improved" },
    ],
    technologies: [
      "Supply Chain Management",
      "B2B Portals",
      "Logistics Optimization",
      "Inventory Tracking",
      "Analytics",
    ],
  },

  // AR/VR & Immersive Technology
  {
    id: "imersive-io",
    name: "Imersive.io",
    website: "imersive.io",
    industry: "AR/VR & Immersive Tech",
    category: "AR/VR E-commerce Revolution",
    timeline: "16 weeks",
    description:
      "Cutting-edge AR/VR technology solutions revolutionizing e-commerce through augmented reality with meta fashion innovation.",
    challenge:
      "Needed cutting-edge AR/VR technology solutions revolutionizing traditional e-commerce through augmented reality, requiring meta fashion innovation and cross-platform compatibility.",
    solution: [
      "WebXR implementation for browser-based AR/VR",
      "3D product visualization with real-time rendering",
      "Virtual try-on technology for fashion fitting",
      "Cross-platform compatibility across devices",
    ],
    features: [
      "Virtual Showrooms",
      "AR Product Visualization",
      "Virtual Fashion Try-On",
      "3D Product Customization",
      "Social VR Shopping",
      "Meta Fashion Marketplace",
    ],
    results: [
      "Pioneered browser-based AR/VR e-commerce",
      "Revolutionary improvement in shopping engagement",
      "Leadership in AR/VR e-commerce technology",
      "Innovation leader in immersive e-commerce",
    ],
    metrics: [
      { label: "Technology Innovation", value: "Pioneered WebXR" },
      { label: "User Engagement", value: "Revolutionary" },
      { label: "Market Differentiation", value: "Leadership" },
      { label: "Industry Recognition", value: "Innovation Leader" },
    ],
    technologies: ["WebXR", "AR/VR", "3D Visualization", "Meta Fashion", "Immersive E-commerce", "Cross-platform"],
  },
]

const industries = [
  "All Projects",
  "Technology & SaaS",
  "Financial Services",
  "Healthcare",
  "Creative & Design",
  "Professional Services",
  "Retail & E-commerce",
  "Fashion & Lifestyle",
  "Sports & Media",
  "Automotive & Luxury",
  "Agriculture & Sustainability",
  "Non-Profit & Social Impact",
  "Marketing & Digital Services",
  "Distribution & Supply Chain",
  "AR/VR & Immersive Tech",
]

export default function WorkPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("All Projects")
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const filteredProjects =
    selectedIndustry === "All Projects" ? projects : projects.filter((project) => project.industry === selectedIndustry)

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-px h-24 bg-gray-200 dark:bg-gray-800 mx-auto mb-12"></div>
          <h1 className="text-6xl md:text-8xl font-extralight mb-12 tracking-tight text-black dark:text-white">
            Digital Masterpieces
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400 mb-12 font-light tracking-wide">
            Where Vision Meets Execution
          </p>
          <p className="text-xl text-gray-500 max-w-4xl mx-auto font-light leading-relaxed">
            25+ enterprise projects across 15+ industries, serving 500,000+ users globally with $5M+ in delivered
            technology solutions.
          </p>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mb-24">
            <div className="text-center">
              <div className="w-px h-20 bg-gray-200 dark:bg-gray-800 mx-auto mb-8"></div>
              <div className="text-4xl font-extralight mb-4 text-black dark:text-white">25+</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Enterprise Projects</div>
            </div>
            <div className="text-center">
              <div className="w-px h-20 bg-gray-200 dark:bg-gray-800 mx-auto mb-8"></div>
              <div className="text-4xl font-extralight mb-4 text-black dark:text-white">500K+</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Users Served</div>
            </div>
            <div className="text-center">
              <div className="w-px h-20 bg-gray-200 dark:bg-gray-800 mx-auto mb-8"></div>
              <div className="text-4xl font-extralight mb-4 text-black dark:text-white">15+</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Industry Verticals</div>
            </div>
            <div className="text-center">
              <div className="w-px h-20 bg-gray-200 dark:bg-gray-800 mx-auto mb-8"></div>
              <div className="text-4xl font-extralight mb-4 text-black dark:text-white">$5M+</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Project Value</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-px h-16 bg-gray-200 dark:bg-gray-800 mx-auto mb-8"></div>
            <h2 className="text-3xl font-light mb-8 tracking-wide text-black dark:text-white">Filter by Industry</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-3 text-sm font-light tracking-wide transition-all duration-300 border ${
                  selectedIndustry === industry
                    ? "border-black dark:border-white text-black dark:text-white bg-gray-50 dark:bg-white/5"
                    : "border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-500 dark:hover:border-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>

          <div className="text-center text-gray-600 dark:text-gray-400">
            <p className="text-lg font-light">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
              {selectedIndustry !== "All Projects" && ` in ${selectedIndustry}`}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700"
              >
                {/* Project Header */}
                <div className="p-8 cursor-pointer" onClick={() => toggleProject(project.id)}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-light tracking-wide text-black dark:text-white">{project.name}</h3>
                        <a
                          href={`https://${project.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">{project.category}</p>
                      <p className="text-gray-500 text-sm mb-4">
                        {project.industry} • {project.timeline}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.description}</p>
                    </div>
                    <div className="ml-8">
                      {expandedProject === project.id ? (
                        <ChevronUp className="text-gray-600 dark:text-gray-400" size={24} />
                      ) : (
                        <ChevronDown className="text-gray-600 dark:text-gray-400" size={24} />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedProject === project.id && (
                  <div className="border-t border-gray-200 dark:border-gray-800 p-8 bg-gray-50 dark:bg-gray-900/20">
                    <div className="grid lg:grid-cols-2 gap-12">
                      {/* Left Column */}
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-xl font-light mb-4 tracking-wide text-black dark:text-white">
                            The Challenge
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-xl font-light mb-4 tracking-wide text-black dark:text-white">
                            Our Solution
                          </h4>
                          <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                            {project.solution.map((item, index) => (
                              <li key={index} className="leading-relaxed">
                                • {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-light mb-4 tracking-wide text-black dark:text-white">
                            Key Features
                          </h4>
                          <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                            {project.features.map((feature, index) => (
                              <li key={index} className="leading-relaxed">
                                • {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-xl font-light mb-4 tracking-wide text-black dark:text-white">
                            Results Achieved
                          </h4>
                          <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                            {project.results.map((result, index) => (
                              <li key={index} className="leading-relaxed">
                                • {result}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-light mb-4 tracking-wide text-black dark:text-white">
                            Impact Metrics
                          </h4>
                          <div className="space-y-4">
                            {project.metrics.map((metric, index) => (
                              <div key={index} className="flex justify-between items-center">
                                <span className="text-gray-600 dark:text-gray-400">{metric.label}</span>
                                <span className="text-gray-800 dark:text-gray-200 font-light">{metric.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xl font-light mb-4 tracking-wide text-black dark:text-white">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-px h-24 bg-gray-200 dark:bg-gray-800 mx-auto mb-12"></div>
          <p className="text-2xl text-gray-600 dark:text-gray-400 mb-16 italic leading-relaxed font-light">
            "Every project is a canvas, every challenge an opportunity to create something extraordinary. This portfolio
            represents not just what I've built, but what's possible when vision meets execution."
          </p>
          <div className="flex flex-wrap justify-center gap-16">
            <Link href="/about">
              <button className="text-gray-600 dark:text-gray-300 border-b border-gray-400 dark:border-gray-700 hover:border-gray-600 dark:hover:border-gray-400 hover:text-black dark:hover:text-white transition-all duration-500 pb-2 text-lg tracking-wide">
                Learn About My Journey
              </button>
            </Link>
            <Link href="/contact">
              <button className="text-black dark:text-white border-b border-gray-400 dark:border-gray-600 hover:border-black dark:hover:border-white transition-colors duration-500 pb-2 text-lg tracking-wide">
                Start Your Project
              </button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
