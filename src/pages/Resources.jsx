import Particles from "../components/ParticleBackground"
import Collaborate from "../components/Collaborate"
import { motion } from "framer-motion";
import { useState } from "react";
import { FileText, Link as LinkIcon, Lightbulb, BriefcaseBusiness, Brain, Sparkles, BookMarkedIcon, BookHeadphones } from "lucide-react"; 
import { FaCircleDollarToSlot } from "react-icons/fa6";

function AboutUs() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const TypingText = ({
    text,
    delay = 0,
    duration = 1,
    className = "",
    cursor = false,
    cursorBlink = true
  }) => {
    const letters = text.split("");

    return (
      <span className={`inline-block ${className}`}>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-schibsted text-transparent bg-clip-text bg-gradient-to-r from-[#7fa4fa] via-[#7fa4fa] to-[#7fa4fa]"
            transition={{
              delay: delay + index * (duration / letters.length),
              duration: 0.1
            }}
          >
            {letter}
          </motion.span>
        ))}
        {cursor && (
          <motion.span
            className="inline-block w-1 h-8 bg-current -mb-1 ml-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: cursorBlink ? [0, 1, 0] : 1 }}
            transition={{
              delay: delay + duration,
              duration: 0.8,
              repeat: cursorBlink ? Infinity : 0,
              repeatDelay: 0.4
            }}
          />
        )}
      </span>
    );
  };

  // Section component that can render different types of content
  const ResourceSection = ({ title, description, items, icon, type = "links" }) => {
    const IconComponent = icon;
    
    return (
      <div className="bg-[#1b1a1a] border border-[#5a5a5a] p-6 mb-6">
        <h4 className="flex items-center gap-2 text-white font-semibold text-xl font-schibsted">
          <IconComponent className="w-5 h-5" /> {title}
        </h4>
        {description && <p className="text-[#BBBBBB] py-4 font-outfit">{description}</p>}
        
        {type === "links" && (
          <ul className="space-y-3">
            {items.map((item, idx) => (
              <a 
                key={idx} 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex justify-between text-[#BBBBBB] hover:text-white font-schibsted transition bg-[#121212] border border-[#5a5a5a] p-4"
              >
                {item.label}
                <span className="text-blue-400">
                  <LinkIcon className="w-4 h-4 transform rotate-90 inline-block" />
                </span>
              </a>
            ))}
          </ul>
        )}
        
        {type === "tips" && (
          <ul className="space-y-3 pl-5 list-disc text-[#BBBBBB] font-outfit">
            {items.map((tip, idx) => (
              <li key={idx} className="py-1">{tip}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  const categoryData = {
    Finance: {
      heading: "Finance Resources",
      description: "Essential tools and insights for financial analysis and investment strategies",
      
      sections: [
        {
          title: "Zerodha Varsity",
          description: "Highly recommended for beginners to start with the following module",
          items: [
            { label: "Markets and Taxation", href: "https://zerodha.com/varsity/module/markets-and-taxation/" },
            { label: "Personal Finance - Mutual Funds", href: "https://zerodha.com/varsity/module/personalfinance/" },
            { label: "Personal Finance - Insurance", href: "https://zerodha.com/varsity/module/insurance/" },
            { label: "Sector Analysis", href: "https://zerodha.com/varsity/module/sector-analysis/" },
            { label: "NPS : National Pension Scheme", href: "https://zerodha.com/varsity/module/national-pension-scheme/" },
          ],
          icon: LinkIcon,
          type: "links"
        },
        {
          title: "Online Video & Lecture Series",
          description: "The content dives into real world finance topics in a visually engaging and data backed manner",
          items: [
            { label: "The Money Guy Show", href: "https://www.youtube.com/@MoneyGuyShow" },
            { label: "MIT OpenCourseWare – Prof. Andrew Lo’s Lectures", href: "https://www.youtube.com/watch?v=HdHlfiOAJyE&list=PLUl4u3cNGP63B2lDhyKOsImI7FjCf6eDW" },
            { label: "Zerodha’s YouTube Channel – Zero1", href: "https://www.youtube.com/@Zero1byZerodha" },
          ],
          icon: BookHeadphones,
          type: "links"
        },
        {
          title: "Book Recommendations",
          description: "Proven investment approaches for different market conditions",
          items: [
            { label: "Richest Man in Babylon", },
            { label: "Trading in the Zone", },
            { label: "Investment Valuation", },
          ],
          icon: BookMarkedIcon,
          type: "links"
        },
        {
          title: "Guidelines & Tips",
          description: "Best practices for making informed financial decisions",
          items: [
            "For ongoing learning and peer discussion, browsing forums like 'r/IndianStockMarket' is suggested. It's a platform where people actively discuss the latest news in finance covering both the opportunities (upsides) and the risks or concerns (downsides) associated with them.",
            "We advise you to regularly follow the finance side of the news, especially regarding new policies and schemes. This helps build a habit of staying updated with real-world developments and adds valuable context to your learning.",
          ],
          icon: Lightbulb,
          type: "tips"
        }
      ]
    },

    Consulting: {
      heading: "Consulting Resources",
      description: "Curated frameworks and tools for consultants and aspiring strategists",
      
      sections: [
        {
          title: "Understanding Consulting",
          description: "What Do Consultants Actually Do? – Official videos from McKinsey, BCG, and Bain - and more",
          items: [
            { label: "McKinsey", href: "https://www.youtube.com/playlist?list=PL30C54D951E8E1688" },
            { label: "BCG", href: "https://www.youtube.com/playlist?list=PLMJgyXjV5gML9BkzqSJyCmi_O0NlLd_i_" },
            { label: "Bain and Co", href: "https://www.youtube.com/playlist?list=PLjeKwp4AfbLCiG11ICW1wcoUMT5aKFL_7" },
            { label: "Victor Cheng's Free Guide: 'Consulting 101'", href: "http://caseinterview.com" },
          ],
          icon: LinkIcon,
          type: "links"
        },
        {
          title: "Foundational Learning",
          description: "Frameworks and Thinking Style",
          items: [
            { label: "Case Interview Secrets – Victor Cheng", href: "https://drive.google.com/file/d/1L0QJB2DSOS5xZcCH1u4lBjRssu60Y-ik/view?usp=sharing" },
            { label: "Case Interviews Cracked – Sankalp Kelshikar and Saransh Garg", href: "https://drive.google.com/file/d/1nViRn7ueDUW65zGgepNaKdO8qGWQFCTb/view?usp=sharing" },
            { label: "Case in Point – Marc Cosentino", href: "https://drive.google.com/file/d/1e9ehs29fvovPwCha2CvXnT7Ln0z5shVR/view?usp=sharing" },
            { label: "YouTube Companion: Case Interviews Cracked Playlist", href: "https://www.youtube.com/playlist?list=PLRfC6rXAvJzcp_bkNMbbMgRm0gER0fbr2" },
          ],
          icon: FileText,
          type: "links"
        },
        {
          title: "Case Practice",
          description: "Difficulty-Based Structured cases - Begin with foundational cases and gradually progress to more ambiguous and pressure-driven problems.",
          items: [
            { label: "IIM Ahmedabad Casebook", href: "https://drive.google.com/file/d/1vfXhVZBVXxEkjjSVeEDgUtwI9Ajlvhtn/view?usp=sharing" },
            { label: "FMS Delhi Casebook", href: "https://drive.google.com/file/d/1eB8Ll4CpS5B7L9rxGHWQeQ5xrKWT7T-m/view?usp=sharing" },
            { label: "XLRI Casebook", href: "https://drive.google.com/file/d/1YjEhNpikDuN6y9qGeyd02ft11fwimMCX/view?usp=sharing" },
            { label: "IIM Calcutta Casebook", href: "https://drive.google.com/file/d/1XK8qv9kdN0qsebzFTIhrTdMQeaoLZSl6/view?usp=sharing" },
            { label: "SPJIMR Casebook", href: "https://drive.google.com/file/d/1zXtlUlEECdCUbeNuRCtnruWjAQEtU5tr/view?usp=sharing" },
            { label: "IIM Bangalore Casebook", href: "https://drive.google.com/file/d/1RDGqwopgAP9X1fvSFVAohQOYN_ilnovH/view?usp=sharing" },
            { label: "IIM Lucknow Casebook", href: "https://drive.google.com/file/d/1dyFterTIcMZUR-PJhuk6J9KtwVjB0ya-/view?usp=sharing" },
          ],
          icon: BriefcaseBusiness,
          description: " ",
          type: "links"
        },
        {
          title: "Online Case Practice Platforms",
          description: " ",
          items: [
            { label: "PrepLounge", href: "https://www.preplounge.com/en/management-consulting-cases" },
            { label: "Management Consulted", href: "https://managementconsulted.com/" },
          ],
          icon: LinkIcon,
          type: "links"
        },
        {
          title: "Resume Guide",
          description: " ",
          items: [
            { label: "FCC Consulting Resume Guide", href: "https://drive.google.com/file/d/1nSXvW31tB4XaAZIB18vLFmCLZDnUpzxD/view?usp=sharing" },
          ],
          icon: FileText,
          type: "links"
        }
      ]
    },

    "Product Management": {
      heading: "Product Management Resources",
      description: "Guides and resources for product thinking and delivery",
      
      sections: [
        {
          title: "PM Links",
          description: "Helpful tools for product roadmaps and prioritization",
          items: [
            { label: "Product Roadmap Tools", href: "/pm-link-1" },
            { label: "Prioritization Frameworks", href: "/pm-link-2" },
          ],
          icon: LinkIcon,
          type: "links"
        },
        {
          title: "PM Docs",
          description: "Templates for PRDs and user stories",
          items: [
            { label: "PRD Templates", href: "/pm-doc-1" },
            { label: "User Story Examples", href: "/pm-doc-2" },
          ],
          icon: FileText,
          type: "links"
        },
        {
          title: "PM Tips",
          description: "Advice for successful product management",
          items: [
            "Validate ideas with user feedback early",
            "Balance short-term wins with long-term vision",
            "Focus on solving real user problems",
            "Learn to say no to feature creep",
            "Measure what matters with clear KPIs"
          ],
          icon: Lightbulb,
          type: "tips"
        }
      ]
    },

    Others: {
      heading: "Other Resources",
      description: "Additional resources for general skills and knowledge",
      
      sections: [
        {
          title: "Miscellaneous Links",
          description: "General learning and skill-building platforms",
          items: [
            { label: "General Skill Builders", href: "/other-link-1" },
          ],
          icon: LinkIcon,
          type: "links"
        },
        {
          title: "Misc Docs",
          description: "Templates for various purposes",
          items: [
            { label: "Miscellaneous Templates", href: "/other-doc-1" },
          ],
          icon: FileText,
          type: "links"
        },
        {
          title: "General Tips",
          description: "Broad advice applicable across domains",
          items: [
            "Keep learning continuously",
            "Collaborate and share knowledge",
            "Build a strong professional network",
            "Develop both technical and soft skills",
            "Stay adaptable to industry changes"
          ],
          icon: Lightbulb,
          type: "tips"
        }
      ]
    }
  };

  const [activeCategory, setActiveCategory] = useState("Finance");
  const current = categoryData[activeCategory];

  return (
    <div className="w-full min-h-screen mx-auto max-w-screen-2xl flex flex-col gap-2.5 overflow-hidden">
      {/* Hero Section */}
      <motion.div
        id="Hero Section"
        className="w-full h-[530px] relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 flex flex-col items-center justify-center gap-12 rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div id="Hero Background Container" className="w-[1557px] h-[530px] absolute inset-0">
          <Particles
            particleColors={['#ffffff', '#4E56D3', '#A3ACD9']}
            particleCount={300}
            particleSpread={15}
            speed={0.3}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>

        <motion.div
          id="Hero Container"
          className="w-full max-w-[1006px] mx-auto px-4 py-8 flex flex-col items-center justify-center gap-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div id="Hero text container" className="w-full text-center gap-4">
            <motion.div
              id="Hero title"
              className="font-Family-primary font-semibold text-5xl md:text-6xl leading-tight tracking-normal"
            >
              <span className="text-transparent bg-clip-text">
                <TypingText text="Explore Curated Resources" duration={1.5} cursor={false} />
              </span>
              <span className="text-transparent block bg-clip-text bg-gradient-to-r p-10 from-[#7fa4fa] via-[#7fa4fa] to-[#7fa4fa] font-schibsted"></span>
            </motion.div>
            <motion.div
              id="Hero subtitle"
              className="font-[Body/3/fontFamily] font-normal text-lg md:text-xl leading-relaxed tracking-[Heading/H3/letterSpacing] text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="text-transparent bg-clip-text bg-[var(--Website-Neutral-3,#BBBBBB)] font-outfit">
                Guides, links, and insights across finance, consulting, and product management—handpicked by the FCC team.
              </span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full max-w-screen-xl mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Categories Sidebar */}
          <div className="lg:w-1/4 bg-[#1b1a1a] p-4 h-fit rounded-lg">
            <h3 className="text-[#bdeb5a] font-semibold text-xl mb-4 font-schibsted">Categories</h3>
            <ul className="space-y-3">
              {Object.keys(categoryData).map((cat) => (
                <li
                  key={cat}
                  className={`flex items-center gap-2 cursor-pointer rounded px-2 py-1 transition-colors ${
                    activeCategory === cat 
                      ? "bg-[#191d64] text-white" 
                      : "text-[#BBBBBB] hover:text-white hover:bg-[#2a2a2a]"
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat === "Finance" && <FaCircleDollarToSlot className="w-5 h-5" />}
                  {cat === "Consulting" && <BriefcaseBusiness className="w-5 h-5" />}
                  {cat === "Product Management" && <Brain className="w-5 h-5" />}
                  {cat === "Others" && <Sparkles className="w-5 h-5" />}
                  <span className="font-outfit">{cat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4 flex flex-col gap-8">

            {/* Heading + Description */}
            <div className="bg-[#1b1a1a] border border-[#5a5a5a] p-6 rounded-lg">
              <h2 className="text-white font-bold font-schibsted text-2xl mb-1">{current.heading}</h2>
              <p className="text-[#BBBBBB] font-outfit">{current.description}</p>
            </div>

            {/* Render all sections for the current category */}
            {current.sections.map((section, index) => (
              <ResourceSection
                key={index}
                title={section.title}
                description={section.description}
                items={section.items}
                icon={section.icon}
                type={section.type}
              />
            ))}

          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, rotateY: 15 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{
            duration: 1,
            ease: "backOut",
            delay: 0.2
          }}
          viewport={{ once: true, margin: "-100px" }}
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d"
          }}
        >
          <Collaborate />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AboutUs;
