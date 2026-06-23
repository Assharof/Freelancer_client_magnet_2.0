import React from 'react';
import { 
  CheckCircle2, 
  Users, 
  TrendingUp, 
  Mail, 
  MessageSquare, 
  Award, 
  Calendar, 
  Zap,
  Globe,
  FileText,
  DollarSign,
  Star,
  ArrowRight,
  Target,
  Rocket,
  ShieldCheck,
  Video,
  Monitor
} from 'lucide-react';
import { motion } from 'framer-motion';

const WHATSAPP_URL = "https://chat.whatsapp.com/your-group-link";

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const Button = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`bg-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 uppercase tracking-wider text-sm md:text-base flex items-center justify-center gap-2 ${className}`}
    onClick={() => window.open(WHATSAPP_URL, '_blank')}
  >
    {children}
  </motion.button>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded border border-blue-400 mb-4">
    {children}
  </span>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Mini Cart Header - Mimicking the prompt */}
      <div className="bg-gray-50 border-b border-gray-100 py-2 px-4 text-xs flex justify-end gap-6 text-gray-500 font-medium">
        <span className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition"><Users size={12} /> My cart</span>
        <span className="cursor-pointer hover:text-blue-600 transition">Checkout</span>
        <span>Subtotal: <span className="text-gray-900">₦ 0</span></span>
        <span className="bg-blue-600 text-white px-2 py-0.5 rounded cursor-pointer">NGN</span>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-2 rounded-lg font-bold">M</div>
            <span className="font-bold text-xl tracking-tight uppercase hidden sm:block">Freelancer Client Magnet 2.0</span>
            <span className="font-bold text-xl tracking-tight uppercase sm:hidden">FCM 2.0</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-sm hidden md:block">Instructor: Gbenga Adebiyi</span>
            <Button className="py-2 px-4 md:py-2 md:px-6 text-xs md:text-sm">Join Group</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-blue-50 to-white pt-12 md:pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center items-center gap-2 mb-6 text-amber-500">
               {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
               <span className="text-gray-600 font-medium ml-2">(21 ratings)</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
              Stop Chasing Clients. <br />
              <span className="text-blue-600">Make Them Chase You.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              The complete system used by 5,000+ freelancers to land high-paying clients and earn in dollars on any platform, with any skill.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button className="w-full sm:w-auto text-lg px-10 py-5">
                YES — I WANT MORE CLIENTS <ArrowRight size={20} />
              </Button>
              <div className="flex items-center gap-2 text-gray-500">
                <CheckCircle2 size={18} className="text-green-500" />
                <span className="text-sm">931 People already joined</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Problem Section */}
      <Section className="bg-white border-y border-gray-100">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge>THE PROBLEM</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let Me Ask You Something Honest.</h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>How long have you been freelancing, or trying to freelance, without landing the clients you deserve? Weeks? Months? Maybe years?</p>
              <p>You have real skills. You work hard. You send proposals, pitch on platforms, maybe even reach out cold.</p>
              <p className="font-semibold text-gray-900 italic">And yet the clients aren't coming. Or when they do, they want to pay peanuts.</p>
            </div>
          </div>
          <div className="bg-red-50 p-8 rounded-3xl border border-red-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <TrendingUp size={120} className="text-red-600" />
            </div>
            <h3 className="text-5xl font-extrabold text-red-600 mb-4">91%</h3>
            <p className="text-xl font-bold text-gray-900 mb-4">of Freelancers Share Your Exact Struggle.</p>
            <p className="text-gray-700 leading-relaxed">
              I interviewed 56 freelancers and asked their #1 challenge. <br/>
              <span className="font-bold">51 out of 56 said: "I don't have enough clients."</span>
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-white px-3 py-1 rounded-full text-sm font-medium border border-red-200">Not Skills</span>
              <span className="bg-white px-3 py-1 rounded-full text-sm font-medium border border-red-200">Not Time</span>
              <span className="bg-white px-3 py-1 rounded-full text-sm font-medium border border-red-200">Not Tools</span>
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">IT'S CLIENTS</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Solution Introduction */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <Badge>THE SOLUTION</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Introducing: FREELANCER CLIENT MAGNET</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Proven System for Attracting More High-Paying Clients Than You Can Handle — Even With Zero Experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Target className="text-blue-600" size={32} />,
              title: "Positioning Mastery",
              desc: "Stop being a generalist and become the obvious choice for high-ticket clients."
            },
            {
              icon: <Zap className="text-blue-600" size={32} />,
              title: "Attraction System",
              desc: "Stop hunting. Build systems that make clients come to you on autopilot."
            },
            {
              icon: <Users className="text-blue-600" size={32} />,
              title: "2,000+ Successes",
              desc: "Battle-tested by over 5,000 students with proven results across every niche."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Who Is This For */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Who Is Freelancer Client Magnet Built For?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Freelancers on Upwork, Fiverr, or LinkedIn",
              "Those with inconsistent and unpredictable income",
              "Freelancers getting zero responses to proposals",
              "Attracting low-paying, difficult clients",
              "Talented but unknown freelancers",
              "Anyone wanting a full pipeline of clients"
            ].map((text, i) => (
              <div key={i} className="flex gap-4 items-start bg-blue-50 p-6 rounded-xl">
                <CheckCircle2 size={24} className="text-blue-600 shrink-0" />
                <p className="text-gray-800 font-medium">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center bg-gray-900 text-white p-8 rounded-3xl">
            <p className="text-lg italic">
              "Whether you're a writer, designer, developer, marketer, VA, video editor, or any other kind of freelancer, this system works for any skill, on any platform."
            </p>
          </div>
        </div>
      </Section>

      {/* Instructor Section */}
      <Section className="bg-blue-600 text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square bg-blue-500 rounded-3xl overflow-hidden shadow-2xl relative z-10">
               {/* Placeholder for image */}
               <div className="w-full h-full flex items-center justify-center bg-blue-400">
                  <Users size={120} className="text-blue-200" />
               </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-400 rounded-3xl -z-0 opacity-50"></div>
          </div>
          <div>
            <Badge>MEET YOUR INSTRUCTOR</Badge>
            <h2 className="text-4xl font-extrabold mb-6">Gbenga Adebiyi</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              "I've been in the trenches myself. I started freelancing on April 15th, 2015, and I've spent 11 years perfecting this craft."
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Award className="shrink-0 text-blue-300" />
                <span>Helped over 5,000+ freelancers across every niche transform their careers.</span>
              </li>
              <li className="flex gap-3">
                <TrendingUp className="shrink-0 text-blue-300" />
                <span>Expert in Upwork, Fiverr, LinkedIn, cold email, and referral systems.</span>
              </li>
              <li className="flex gap-3">
                <ShieldCheck className="shrink-0 text-blue-300" />
                <span>Proven results: Students consistently landing high-paying clients.</span>
              </li>
            </ul>
            <div className="mt-10">
               <Button className="bg-white text-blue-600 hover:bg-gray-100 border-none">
                Learn From My System
               </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Course Modules */}
      <Section className="bg-white" id="modules">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything You Get Inside FCM:</h2>
          <p className="text-gray-600">6 Specialized Modules to Transform Your Freelance Business</p>
        </div>

        <div className="space-y-8">
          {[
            {
              number: "01",
              title: "The Client Magnet Foundation",
              icon: <Globe size={24} />,
              items: [
                "The mindset shift that changes everything",
                "How to be in the 9% of successful freelancers",
                "Positioning as the obvious choice",
                "The 'Magnet vs. Hunter' framework"
              ]
            },
            {
              number: "02",
              title: "The Proposal Arsenal",
              icon: <FileText size={24} />,
              items: [
                "50+ done-for-you winning templates",
                "The anatomy of proposals that get responses",
                "Common mistakes that get you ignored",
                "Tweaking templates for instant sending"
              ]
            },
            {
              number: "03",
              title: "Cold Email Client Machine",
              icon: <Mail size={24} />,
              items: [
                "500+ ready-made cold email templates",
                "The 3-line formula that gets replies",
                "Building an outreach pipeline on autopilot",
                "Converting strangers without being pushy"
              ]
            },
            {
              number: "04",
              title: "Pricing & Negotiation Mastery",
              icon: <DollarSign size={24} />,
              items: [
                "10 powerful pricing and negotiation tactics",
                "Commanding $50 - $200/hour rates",
                "Handling 'your rate is too high' objections",
                "Value-based pricing methods"
              ]
            },
            {
              number: "05",
              title: "Platform Domination",
              icon: <Monitor size={24} />,
              items: [
                "Deep-dive on Upwork and Fiverr algorithms",
                "LinkedIn inbound strategies (no paid ads)",
                "Finding hidden jobs on remote platforms",
                "Off-platform client acquisition"
              ]
            },
            {
              number: "06",
              title: "Free High-Income Skill Training",
              icon: <Award size={24} />,
              items: [
                "Sharpening existing skills for high demand",
                "Learning materials for in-demand digital skills",
                "The fastest path from beginner to billable",
                "Becoming a high-value specialist"
              ]
            }
          ].map((module, i) => (
            <div key={i} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4">
                <span className="text-5xl font-extrabold text-blue-100 block mb-4">{module.number}</span>
                <div className="bg-blue-600 text-white p-4 rounded-2xl w-fit mb-4">
                  {module.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">{module.title}</h3>
              </div>
              <div className="md:w-3/4 grid sm:grid-cols-2 gap-4">
                {module.items.map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Bonuses Section */}
      <Section className="bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="text-center mb-16 relative z-10">
          <Badge>WAIT, THERE'S MORE</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">This is where good becomes extraordinary.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {[
            {
              icon: <Calendar className="text-blue-400" size={48} />,
              title: "52 Weekend Coaching Classes",
              desc: "Live, interactive sessions every weekend for a full year. Real-time guidance from Gbenga.",
              value: "$7,800 Value"
            },
            {
              icon: <MessageSquare className="text-blue-400" size={48} />,
              title: "Daily Support Team",
              desc: "A year of access to top-rated freelancers who review your proposals and answer questions.",
              value: "Priceless"
            },
            {
              icon: <Users className="text-blue-400" size={48} />,
              title: "Exclusive Community",
              desc: "A buzzing network of ambitious freelancers sharing wins, opportunities, and accountability.",
              value: "$500 Value"
            }
          ].map((bonus, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <div className="mb-6">{bonus.icon}</div>
              <h3 className="text-xl font-bold mb-4">{bonus.title}</h3>
              <p className="text-gray-400 mb-6">{bonus.desc}</p>
              <div className="text-blue-400 font-bold uppercase tracking-wider text-sm">{bonus.value}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Real Freelancers. Real Results.</h2>
          <div className="flex justify-center items-center gap-2 text-amber-500 mb-4">
             {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          <p className="text-gray-600">Join 5,000+ others who changed their stories.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              text: "I landed 3 new clients in my first 2 weeks using just the cold email templates. I'd been struggling for 8 months before this.",
              author: "Course Student"
            },
            {
              text: "The proposal templates alone are worth 10x the price. I used to get ignored. Now I get replies and interviews consistently.",
              author: "Course Student"
            },
            {
              text: "I raised my rate from $15/hour to $75/hour using the negotiation tactics in Module 4. My clients didn't even blink.",
              author: "Course Student"
            },
            {
              text: "I was about to quit freelancing entirely. Six weeks after joining, I had to turn down a client because I was fully booked.",
              author: "Course Student"
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 italic relative">
              <span className="text-6xl text-blue-200 absolute top-4 left-4 font-serif">"</span>
              <p className="text-gray-700 relative z-10 text-lg mb-4">{testimonial.text}</p>
              <div className="flex items-center gap-2 font-bold text-gray-900">— {testimonial.author}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing Section */}
      <Section className="bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-blue-100">
            <div className="bg-blue-600 p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-2">Investment in Your Future</h2>
              <p className="opacity-90">Get instant access to everything today</p>
            </div>
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Rocket className="text-blue-600" /> What You're Getting:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { name: "Full Video Course & Training", val: 500 },
                      { name: "50+ Proposal Templates", val: 200 },
                      { name: "500+ Cold Email Templates", val: 300 },
                      { name: "Pricing & Negotiation Skills", val: 150 },
                      { name: "Other Platforms & LinkedIn Training", val: 200 },
                      { name: "eBooks, Webinars & Guides", val: 150 },
                      { name: "Free Skill Learning Materials", val: 200 },
                      { name: "52 Weekend Coaching Classes", val: 7800 },
                      { name: "1 Year Daily Team Support", val: 1000 },
                      { name: "1 Year Community Access", val: 500 }
                    ].map((item, i) => (
                      <li key={i} className="flex justify-between text-xs sm:text-sm text-gray-600 border-b border-gray-50 pb-2">
                        <span>{item.name}</span>
                        <span className="font-medium">${item.val.toLocaleString()}</span>
                      </li>
                    ))}
                    <li className="flex justify-between font-bold text-gray-900 pt-4 text-lg">
                      <span>Total Value</span>
                      <span className="text-blue-600">$11,000+</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                  <p className="text-gray-500 line-through text-2xl mb-2">Regularly $500</p>
                  <div className="mb-6">
                    <span className="text-6xl font-extrabold text-blue-600">$85</span>
                    <span className="text-xl text-gray-400 font-medium"> / ₦85,000</span>
                  </div>
                  <Badge>ONE-TIME PAYMENT</Badge>
                  <Button className="w-full text-xl py-6 rounded-2xl mb-4">
                    BUY NOW
                  </Button>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Secure Checkout via WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Course Content Accordion/List */}
      <Section className="bg-white">
        <h2 className="text-3xl font-bold mb-12 text-center">Full Course Curriculum</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { id: "01", title: "Welcome to FCM", sub: ["Why Client Magnet"] },
            { id: "02", title: "Acquiring Unlimited clients", sub: ["The Science, the Art, the HOW", "10 steps to becoming a better Freelancer (Ebook)"] },
            { id: "03", title: "Introduction to Freelancing", sub: ["For NEWBIE Freelancers only", "Freelance Guide (Ebook)"] },
            { id: "04", title: "Learning Digital Skills", sub: ["What Online Skill Should I Learn?"] },
            { id: "05", title: "Upwork Client Magnet", sub: ["Winning Jobs on Upwork", "30 WINNING Proposal Templates", "Profile Vetting", "Project Catalogs"] },
            { id: "07", title: "Freelancer Pricing Magnet", sub: ["Pricing 101", "Value Based Pricing", "Negotiation"] },
            { id: "09", title: "Linkedin Client Magnet", sub: ["Optimizing your profile", "Inbound & Outbound strategies", "Resume & Interview Guide"] },
            { id: "11", title: "Cold Email MAGNET", sub: ["130 Cold Email Templates", "600 Free Templates", "Cold Email Mastery"] },
            { id: "13", title: "Fiverr Client Magnet", sub: ["Gig Creation", "Ranking Tips", "Communication"] }
          ].map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
               <div className="bg-gray-50 p-6 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition">
                  <div className="flex items-center gap-4">
                    <span className="text-blue-600 font-bold">{item.id}</span>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <CheckCircle2 className="text-gray-300" size={20} />
               </div>
               <div className="p-6 bg-white border-t border-gray-100">
                  <ul className="space-y-3">
                    {item.sub.map((sub, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <Video size={14} className="text-blue-400" />
                        {sub}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Free Resources List */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Fully Loaded Free Resources (Updated)</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "28 FREE Proposal Templates",
              "How to make clients read your proposals",
              "17 Powerful Hooks to supercharge proposals",
              "How to build your portfolio as a freelancer",
              "10 Different ways to earn on Upwork",
              "How to avoid writing proposals that get ignored"
            ].map((resource, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition border border-gray-100">
                <CheckCircle2 size={18} className="text-blue-600" />
                <span className="font-medium text-gray-700">{resource}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Upwork Positioning Content - Extra Value */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white p-12 rounded-[40px] shadow-sm border border-gray-100">
          <Badge>BONUS INSIGHT</Badge>
          <h2 className="text-3xl font-bold mb-8">How to Position Multiple Skills on Upwork Without Looking Like a Generalist</h2>
          <div className="prose prose-blue lg:prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Upwork’s removal of specialized profiles has sparked anxiety. If you serve two distinct verticals, your gut reaction might be panic. 
              How do I showcase automation expertise without sidelining AI consulting clients?
            </p>
            <p className="font-bold text-gray-900">
              The solution: Stop listing tactics and instead, position yourself around the universal bridge that connects your expertise.
            </p>
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600">
              <h4 className="font-bold text-blue-900 mb-2">Macro-Headline Upgrade Example:</h4>
              <p className="italic text-blue-800">"Growth Design & Copywriting Partner — Engineering High-Converting Visual & Verbal Funnels"</p>
            </div>
            <p>
              Your headline has one mission: open the door to opportunity. Its purpose is to project a bold, unifying macro-identity that captures your full skill set under one strategic banner.
            </p>
          </div>
          <div className="mt-12 text-center">
            <Button className="inline-flex">GET THE FULL BLUEPRINT IN THE COURSE</Button>
          </div>
        </div>
      </Section>

      {/* AI Era Headline Bonus Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto border-2 border-dashed border-blue-200 p-8 md:p-12 rounded-[40px]">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="text-amber-500" fill="currentColor" />
            <h3 className="text-2xl font-bold">New for 2026: The AI Era Upwork Strategy</h3>
          </div>
          <h2 className="text-3xl font-bold mb-6">How to Build a High-Converting Upwork Headline for the AI Era</h2>
          <div className="space-y-6 text-gray-700">
            <p>With Upwork’s shift to a single, unified profile powered by Uma (their semantic AI engine), rewriting your profile headline is now urgent and non-negotiable.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-red-50 p-6 rounded-2xl">
                <p className="text-red-600 font-bold mb-2">The Weak Approach:</p>
                <p className="text-sm italic text-red-800">"Copywriter | Blog Writer | SEO Content Creator"</p>
                <p className="text-xs mt-2 text-red-700 opacity-70">Why: You appear to sell words instead of solutions. The market for commoditized words has collapsed.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl">
                <p className="text-green-600 font-bold mb-2">The Premium Approach:</p>
                <p className="text-sm italic text-green-800">"B2B SaaS Content Strategist — Driving Organic Pipeline & Product-Led Growth"</p>
                <p className="text-xs mt-2 text-green-700 opacity-70">Why: Shift perception from expense to growth engine.</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 italic">Inside the course, we deep-dive into the "Super Profile Headline" framework for every niche.</p>
          </div>
        </div>
      </Section>

      {/* Customer Reviews Detailed */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Student Success</h2>
            <div className="text-right">
              <div className="text-4xl font-extrabold text-blue-600">4.71/5</div>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
            </div>
          </div>
          <div className="space-y-6">
             {[
               { name: "oyebode David", text: "Truly life changing content." },
               { name: "Micheal Edidiong Camilus", text: "The templates are gold." },
               { name: "Belynda Aisiokuedo", text: "Oh mine, you are a gift. Thank you for availing this course to us, thank you for the opportunity to learn from you. Thank you for a job well done, the course is packed with a lot, oh mine." },
               { name: "Izuchukwu Victory Ekejiuba", text: "Its been wonderful" },
               { name: "Favour Oojah Echekwu", text: "Your coaching skills are quite exceptional sir. keep it up." }
             ].map((review, i) => (
               <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                 <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs">
                      {review.name.charAt(0)}
                    </div>
                    <span className="font-bold text-gray-900">{review.name}</span>
                    <div className="flex text-amber-500 ml-auto">
                      {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                 </div>
                 <p className="text-gray-600 text-sm">{review.text}</p>
               </div>
             ))}
          </div>
        </div>
      </Section>

      {/* Final Call to Action */}
      <Section className="bg-white border-t border-gray-100">
        <div className="text-center max-w-3xl mx-auto">
          <Badge>READY TO START?</Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
            You're Exactly One Decision Away From a Full Pipeline.
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Path 2: Invest in the system that has already worked for 5,000+ freelancers. Follow the steps. Use the templates. Land your next 3–5 high-paying clients in 30 days or less.
          </p>

          <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl mb-10 inline-block text-left">
            <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-2">
              <ShieldCheck size={20} /> Bank Transfer Available:
            </h4>
            <p className="text-amber-700 text-sm">Join the WhatsApp group below to get bank details for manual payment and instant enrollment.</p>
          </div>

          <div className="flex flex-col items-center gap-4">
             <Button className="w-full sm:w-auto text-xl px-12 py-6 shadow-2xl shadow-blue-200">
              [GET INSTANT ACCESS NOW →]
             </Button>
             <p className="text-gray-400 font-medium">One-Time Payment. Results That Compound Forever.</p>
          </div>
        </div>
      </Section>

      {/* One More Thing */}
      <Section className="bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">One More Thing</h2>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-6 italic">
              "If you genuinely operate across two distinct niches, say you're both an automation specialist and an AI consultant, don't try to force both into one headline. Find the thread that connects them and lead with that."
            </p>
            <div className="bg-white p-8 rounded-3xl border-2 border-amber-200">
              <p className="font-bold text-gray-900 text-xl mb-4 text-center">
                AI & Automation Consultant — Building End-to-End Intelligent Workflows for Operations Teams
              </p>
              <p className="text-sm text-center text-gray-500">
                One positioning statement that covers both, without the alphabet soup. The headline gets you in the room. That's the only job it has.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Anniversary Section */}
      <Section className="bg-blue-900 text-white text-center">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">11 Years of Excellence</h2>
            <p className="text-xl text-blue-200 mb-8">
              "From Introducing Students to Freelancing at Ajegunle (2017) to creating thousands of Nigerian Freelancers earning hundreds of thousands of dollars. It's been an incredible journey."
            </p>
            <div className="text-blue-400 font-bold text-lg">April 15th 2015 — Present</div>
            <div className="mt-8 flex justify-center gap-4">
               <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                  <div className="text-3xl font-bold">5k+</div>
                  <div className="text-xs uppercase opacity-70">Students</div>
               </div>
               <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                  <div className="text-3xl font-bold">2k+</div>
                  <div className="text-xs uppercase opacity-70">Success Stories</div>
               </div>
               <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                  <div className="text-3xl font-bold">11</div>
                  <div className="text-xs uppercase opacity-70">Years Exp</div>
               </div>
            </div>
         </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-2 rounded-lg font-bold">M</div>
            <span className="font-bold text-xl tracking-tight uppercase">FREELANCER CLIENT MAGNET</span>
          </div>
          <div className="flex gap-8 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Support</a>
          </div>
          <div className="text-gray-500 text-sm">
            © 2026 Gbenga Adebiyi Shop. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Floating Buy Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.open(WHATSAPP_URL, '_blank')}
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
        >
          <MessageSquare size={24} />
        </motion.button>
      </div>
    </div>
  );
}
