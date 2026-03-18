import { 
  Shield, 
  HardHat, 
  Flame, 
  HeartPulse, 
  Construction, 
  FileText, 
  Wind, 
  Thermometer, 
  Zap, 
  Trash2, 
  ArrowUpCircle, 
  MoveHorizontal, 
  ClipboardCheck, 
  Users, 
  Briefcase 
} from 'lucide-react';

export const trainerInfo = {
  name: "Ahmed Khurshid",
  title: "HSE Trainer | Safety Officer | Occupational Health & Safety Professional",
  email: "ahmed99hse@gmail.com",
  phone: "+966-554190254",
  whatsapp: "966554190254",
  nationality: "Pakistani",
  languages: ["English", "Urdu", "Arabic"],
  status: "Transferable Iqama",
  summary: "Ahmed Khurshid is a highly qualified HSE professional and trainer with over 5 years of field experience in industrial, oil & gas, and construction safety. Certified by NEBOSH, IOSH, and OSHA, he specializes in implementing world-class safety standards and conducting high-impact training sessions for professionals in Saudi Arabia.",
};

export const courses = [
  {
    id: 'nebosh',
    title: "NEBOSH Exam Training",
    icon: Shield,
    description: "Comprehensive preparation for the NEBOSH International General Certificate.",
    target: "Aspiring HSE professionals and managers.",
    benefits: "Global recognition, deep safety knowledge, career advancement."
  },
  {
    id: 'iosh',
    title: "IOSH Managing Safely",
    icon: ClipboardCheck,
    description: "Essential safety management training for supervisors and managers.",
    target: "Managers and supervisors in any sector.",
    benefits: "Practical safety tools, risk assessment skills, improved safety culture."
  },
  {
    id: 'osha',
    title: "OSHA 30-Hour Training",
    icon: HardHat,
    description: "In-depth safety training for the construction and general industry.",
    target: "Safety directors, foremen, and field supervisors.",
    benefits: "Compliance knowledge, hazard identification, injury prevention."
  },
  {
    id: 'emergency-response',
    title: "Emergency Response",
    icon: Zap,
    description: "Training on how to react effectively during workplace emergencies.",
    target: "All employees and emergency response teams.",
    benefits: "Faster response times, reduced panic, life-saving skills."
  },
  {
    id: 'fire-protection',
    title: "Fire Protection",
    icon: Flame,
    description: "Understanding fire hazards, prevention, and extinguisher use.",
    target: "Fire wardens and general staff.",
    benefits: "Fire risk reduction, equipment proficiency, safe evacuation."
  },
  {
    id: 'first-aid',
    title: "First Aid & BLS",
    icon: HeartPulse,
    description: "Basic Life Support and emergency first aid techniques.",
    target: "Designated first aiders and interested individuals.",
    benefits: "Immediate life-saving capability, confidence in crises."
  },
  {
    id: 'excavation-safety',
    title: "Excavation Safety",
    icon: Construction,
    description: "Safe practices for trenching and excavation operations.",
    target: "Ground workers and site supervisors.",
    benefits: "Cave-in prevention, utility protection, regulatory compliance."
  },
  {
    id: 'hazardous-materials',
    title: "Hazardous Materials",
    icon: Trash2,
    description: "Safe handling, storage, and disposal of dangerous substances.",
    target: "Warehouse staff and chemical handlers.",
    benefits: "Exposure prevention, spill control, environmental protection."
  },
  {
    id: 'heat-stress',
    title: "Heat Stress Management",
    icon: Thermometer,
    description: "Preventing heat-related illnesses in high-temperature environments.",
    target: "Outdoor workers and supervisors in hot climates.",
    benefits: "Reduced heat stroke risk, improved productivity, worker wellness."
  },
  {
    id: 'work-permit',
    title: "Work Permit System",
    icon: FileText,
    description: "Understanding and implementing Permit-to-Work procedures.",
    target: "Permit issuers, receivers, and safety officers.",
    benefits: "Controlled high-risk work, clear communication, accident prevention."
  },
  {
    id: 'working-at-height',
    title: "Working at Height",
    icon: ArrowUpCircle,
    description: "Fall protection systems and safe use of ladders/scaffolding.",
    target: "Construction workers and maintenance staff.",
    benefits: "Fall prevention, equipment inspection skills, height safety awareness."
  },
  {
    id: 'ppe',
    title: "PPE Awareness",
    icon: HardHat,
    description: "Selection, use, and maintenance of Personal Protective Equipment.",
    target: "All industrial and construction workers.",
    benefits: "Correct equipment usage, improved compliance, personal safety."
  }
];

export const experience = [
  {
    project: "Zuluf Onshore Oil Facilities",
    company: "CCC",
    contractor: "JGC",
    duration: "Nov 2023 – Present",
    responsibilities: [
      "Planning, implementing and overseeing company employee's safety at work",
      "Providing training information and personal protective equipment",
      "Conducting daily toolbox talks and site inspections",
      "Reviewing and checking work permits and site safety compliance",
      "Assessing and managing risks across onshore oil facilities",
      "Checking competency of operators and riggers for third-party inspections"
    ]
  },
  {
    project: "Unconventional Resource Maintain Project 15 Gas Well",
    company: "Project Pioneers",
    contractor: "SISCO",
    duration: "May 2023 – Oct 2023",
    responsibilities: [
      "Daily safety inspections to identify hazards and unsafe conditions",
      "Ensuring all activities align with established safety procedures",
      "Disseminating safety publications, instructions, and rules to employees",
      "Initiating immediate stoppage of unsafe operations to prevent injury",
      "Preparing and submitting detailed inspection and investigation reports",
      "Designing and installing various types of safety signage"
    ]
  },
  {
    project: "Jubail Industrial Gases Hub",
    company: "AIC Steel",
    contractor: "Air Product",
    duration: "Aug 2022 – Apr 2023",
    responsibilities: [
      "Overseeing employee safety and welfare facilities at the site",
      "Conducting daily toolbox meetings and tool inspections",
      "Monitoring crane work, scaffolding, and confined space entries",
      "Checking fire extinguisher grounding and machine safety",
      "Continuous communication with workers for safety benefits",
      "Ensuring compliance with all corporate safety policies"
    ]
  },
  {
    project: "South Area Safety Related Facilities (SASRF) KJO",
    company: "Petrojet",
    client: "ENPPI PMT / Jacobzate / OND ISD",
    duration: "May 2021 – Jun 2022",
    responsibilities: [
      "Implementing workplace safety procedures and risk management",
      "Conducting daily site inspections and hazard identification",
      "Responding to emergency situations and monitoring color codes",
      "Reviewing and checking work permits for high-risk activities",
      "Ensuring all activities follow international safety standards",
      "Coordinating with project management for safety audits"
    ]
  }
];

export const certifications = [
  {
    title: "NEBOSH International General Certificate",
    issuer: "NEBOSH",
    date: "11 April 2025",
    verificationUrl: "https://www.nebosh.org.uk/online-verification/",
    image: "input_file_5.png"
  },
  {
    title: "IOSH Managing Safely Certificate",
    issuer: "IOSH",
    date: "18 December 2022",
    verificationUrl: "https://iosh.com/my-iosh/verify-a-certificate/",
    image: "input_file_2.png"
  },
  {
    title: "OSHA 30-Hours General Industry",
    issuer: "OSHAcademy",
    date: "12 June 2023",
    verificationUrl: "https://www.oshatrain.org/pages/verify.html",
    image: "input_file_6.png"
  },
  {
    title: "BLS Provider",
    issuer: "Saudi Heart Association",
    date: "04 Nov 2025",
    verificationUrl: "https://sha.org.sa/",
    image: "input_file_0.png"
  },
  {
    title: "Heart Saver First Aid",
    issuer: "Saudi Heart Association",
    date: "04 Nov 2025",
    verificationUrl: "https://sha.org.sa/",
    image: "input_file_1.png"
  },
  {
    title: "ISO 14001:2015 Environmental Management",
    issuer: "The Knights of Safety Academy",
    date: "13 November 2019",
    verificationUrl: "https://knightssafety.com/",
    image: "input_file_3.png"
  },
  {
    title: "SHA HSFA CPR AED",
    issuer: "Saudi Heart Association",
    date: "18 Dec 2023",
    verificationUrl: "https://sha.org.sa/",
    image: "input_file_4.png"
  }
];

export const faqs = [
  {
    question: "How do I join the training sessions?",
    answer: "You can join our training sessions online via Google Meet. Simply contact Ahmed on WhatsApp to discuss your needs and schedule a session."
  },
  {
    question: "Is the training conducted online?",
    answer: "Yes, all training is conducted online to provide flexibility for students and professionals worldwide."
  },
  {
    question: "Do you teach on Google Meet?",
    answer: "Yes, Google Meet is our primary platform for live, interactive training sessions."
  },
  {
    question: "Can I contact you on WhatsApp for support?",
    answer: "Absolutely! WhatsApp is our main channel for quick inquiries, enrollment, and ongoing learning support."
  },
  {
    question: "Which HSE topics do you cover?",
    answer: "We cover a wide range of topics including NEBOSH, IOSH, OSHA, Fire Safety, First Aid, Working at Height, and more."
  },
  {
    question: "Do you train both workers and students?",
    answer: "Yes, our courses are designed for students starting their HSE career as well as experienced workers needing safety awareness."
  },
  {
    question: "Can companies book team training?",
    answer: "Yes, we offer specialized corporate training packages for companies looking to train their staff online."
  }
];
