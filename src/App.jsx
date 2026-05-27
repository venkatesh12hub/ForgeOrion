import { motion } from 'framer-motion';
import {
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleDollarSign,
  DatabaseZap,
  FileCheck2,
  HelpCircle,
  Home,
  LineChart,
  Lock,
  Mail,
  Menu,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Star,
  WalletCards,
  X,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

const navItems = ['Features', 'Benefits', 'Pricing', 'Testimonials'];

const ledgerRows = [
  ['2023/11/05', 'Office Supplies', '-$245.99'],
  ['2023/11/06', 'Client Payment', '+$1500.00'],
  ['2023/11/07', 'Web Hosting', '-$29.99'],
  ['2023/11/08', 'Consultant Fee', '-$750.00'],
  ['2023/11/10', 'Software License', '-$199.99'],
];

const featureCards = [
  ['Smart Transaction Recording', '/assets/feature-smart-transaction.png'],
  ['Automated Ledger Posting', '/assets/feature-ledger-posting.png'],
  ['Account Closing in One Click', '/assets/feature-account-closing.png'],
  ['Personal Finance Tools', '/assets/feature-personal-finance.png'],
  ['Real-Time Insights & Reports', '/assets/feature-reports.png'],
  ['Bank & ERP Integration', '/assets/feature-bank-erp.png'],
];

const pricing = [
  {
    name: 'Free',
    price: '$0',
    button: 'Get Started',
    description: 'Perfect for personal finance management and basic needs.',
    features: ['Personal finance tools', 'Basic transaction tracking', 'Monthly summary reports', 'Mobile app access', 'Email support'],
  },
  {
    name: 'Business',
    price: '$49',
    button: 'Start 14-Day Trial',
    featured: true,
    description: 'Advanced automation for small to medium businesses.',
    features: ['Everything in Free, plus:', 'Smart transaction categorization', 'Automated ledger posting', 'One-click account closing', 'Custom reports and analytics', 'Bank integrations', 'Priority support'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    button: 'Contact Sales',
    description: 'Tailored solutions for large organizations with complex needs.',
    features: ['Everything in Business, plus:', 'Custom ERP integrations', 'Advanced compliance features', 'Multi-entity management', 'Dedicated account manager', 'Custom AI model training', '24/7 premium support'],
  },
];

function scrollToSection(label) {
  document.getElementById(label.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
}

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <span className="brand-basket">
        <span />
      </span>
      <span className="text-[26px] font-black tracking-tight">
        <span className="text-white">Forge</span><span className="text-blue-400">Orion</span>
      </span>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#02060d]/82 backdrop-blur-xl">
      <nav className="flex w-full items-center justify-between px-9 py-5">
        <button onClick={() => scrollToSection('home')} aria-label="ForgeOrion home">
          <BrandMark />
        </button>
        <div className="hidden items-center gap-[66px] lg:flex">
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollToSection(item)} className="text-[14px] font-semibold text-white/86 transition hover:text-blue-400">
              {item}
            </button>
          ))}
        </div>
        <div className="hidden items-center gap-10 lg:flex">
          <button className="text-[14px] font-semibold text-white/90 transition hover:text-blue-400">Log In</button>
          <button className="rounded-md bg-blue-600 px-[48px] py-[14px] text-[14px] font-black text-white shadow-blue transition hover:-translate-y-0.5 hover:bg-blue-500">
            Get Started
          </button>
        </div>
        <button onClick={() => setOpen(!open)} className="rounded-md border border-blue-400/25 p-2 text-white lg:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="mx-5 mb-4 rounded-xl border border-blue-400/20 bg-[#07101f] p-4 lg:hidden">
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollToSection(item)} className="block w-full py-3 text-left text-sm text-white/80">
              {item}
            </button>
          ))}
          <div className="mt-3 grid grid-cols-2 gap-3">
            <button className="rounded-md border border-blue-400/25 py-3 text-sm font-semibold text-white">Log In</button>
            <button className="rounded-md bg-blue-600 py-3 text-sm font-bold text-white">Get Started</button>
          </div>
        </div>
      )}
    </header>
  );
}

function RobotVisual() {
  return (
    <motion.div
      className="robot-wrap"
      initial={{ opacity: 0, scale: 0.9, y: 28 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      <motion.div className="orbit-ring" animate={{ rotate: 360 }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }} />
      <motion.img
        src="/assets/forgeorion-robot.png"
        alt="ForgeOrion AI assistant robot"
        className="robot-image"
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4.5, repeat: Infinity }}
      />
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[570px] overflow-hidden px-9 pb-10 pt-[118px]">
      <div className="network-bg" />
      <div className="grid w-full items-start gap-8 lg:grid-cols-[52%_48%]">
        <Reveal className="relative z-10">
          <h1 className="hero-title">
            <span>Simplify Your Finances with</span>
            <span className="block whitespace-nowrap font-black text-blue-400">AI-Powered Automation</span>
          </h1>
          <p className="mt-[22px] max-w-[560px] text-[16px] font-medium leading-[1.65] text-white/90">
            ForgeOrion, a product of EPICFORGESOFTWARE, is designed to streamline your business processes and elevate your success.
          </p>
          <label className="mt-[24px] block text-[13px] font-black text-white">Request a Live Demo</label>
          <input className="mt-2 h-[48px] w-full max-w-[515px] rounded-[5px] border border-blue-500/35 bg-[#0b2a58] px-6 text-[13px] font-semibold text-white outline-none placeholder:text-white/85 focus:border-blue-400" placeholder="Enter your email address" type="email" />
          <button className="mt-[28px] block rounded-[7px] bg-blue-600 px-[49px] py-[16px] text-[14px] font-black text-white shadow-blue transition hover:-translate-y-0.5 hover:bg-blue-500">
            Start For Free
          </button>
        </Reveal>
        <RobotVisual />
      </div>
    </section>
  );
}

function LedgerSection() {
  return (
    <section className="relative overflow-hidden px-5 py-[58px] lg:px-8">
      <div className="ledger-network" />
      <Reveal className="mx-auto max-w-[980px] text-center">
        <h2 className="text-[32px] font-normal leading-tight text-white sm:text-[40px]">
          Experience <span className="font-black text-blue-400">AI-Powered</span> Financial Management
        </h2>
        <p className="mx-auto mt-5 max-w-[620px] text-[16px] leading-[1.6] text-white/82">
          See how our intelligent system automates complex financial processes with precision and speed.
        </p>
        <div className="mx-auto mt-11 grid max-w-[620px] grid-cols-2 border-b border-white/22 text-[16px] text-white/90">
          <button className="flex items-center justify-center gap-3 border-b-2 border-blue-400 pb-4 font-black text-white"><FileCheck2 className="h-4 w-4" />Automated Ledgering</button>
          <button className="flex items-center justify-center gap-3 pb-4"><RefreshCcw className="h-4 w-4" />Smart Transaction Recording</button>
        </div>
      </Reveal>
      <div className="mx-auto mt-[66px] grid max-w-[1140px] items-start gap-10 lg:grid-cols-[460px_1fr]">
        <Reveal>
          <div className="ledger-card">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-[16px] font-black text-white sm:text-[18px]">Digital Ledger</h3>
              <p className="text-[10px] text-white/42">Auto-updated in real-time</p>
            </div>
            <div className="grid grid-cols-[1fr_1.45fr_.8fr] border-b border-white/65 pb-[10px] text-[10px] font-bold text-white">
              <span>Date</span><span>Description</span><span className="text-right">Amount</span>
            </div>
            {ledgerRows.map(([date, description, amount], index) => (
              <div key={description} className={`ledger-row ${index === 2 ? 'active' : ''} ${index > 2 ? 'muted' : ''}`}>
                <span>{date}</span>
                <span>{description}</span>
                <span className={`text-right ${amount.startsWith('+') ? 'text-emerald-400' : 'text-white'}`}>{amount}</span>
              </div>
            ))}
            <div className="mt-[18px] flex items-center justify-between text-[10px]">
              <span className="text-white">Ledger automatically reconciled</span>
              <span className="rounded-full bg-blue-500 px-4 py-1.5 font-black text-white">✓ Balanced</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="pt-0">
            <h3 className="text-[32px] font-black leading-tight text-white">Automated <span className="text-blue-400">Ledger Posting</span></h3>
            <p className="mt-4 max-w-[640px] text-[16px] leading-[1.55] text-white/90">
              ForgeOrion's AI-powered system eliminates manual data entry by automatically recording and categorizing transactions in your digital ledger.
            </p>
            <div className="mt-6 space-y-5">
              {[
                ['Real-time Updates', 'Transactions are recorded instantly, maintaining up-to-date financial records.', BarChart3],
                ['Error-Free Processing', 'AI validation ensures accurate entries and reduces human errors.', ShieldCheck],
                ['Automatic Reconciliation', 'Ledgers are balanced automatically, saving hours of manual reconciliation work.', Check],
              ].map(([title, text, Icon]) => (
                <div key={title} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-white text-blue-400 shadow-[0_0_18px_rgba(45,156,255,.22)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h4 className="text-[17px] font-black text-white">{title}</h4>
                    <p className="mt-1 text-[15px] leading-[1.45] text-white/86">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="relative overflow-hidden px-5 py-[70px] lg:px-8">
      <div className="features-network" />
      <Reveal className="mx-auto max-w-[760px] text-center">
        <h2 className="text-[34px] font-normal leading-tight text-white sm:text-[40px]">Powerful Features for <span className="font-black text-blue-400">Modern Finance</span></h2>
        <p className="mx-auto mt-5 max-w-[650px] text-[16px] leading-[1.55] text-white/86">
          Our AI-powered platform streamlines financial processes, eliminates manual work, and provides actionable insights.
        </p>
      </Reveal>
      <div className="mx-auto mt-12 grid max-w-[950px] gap-x-10 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
        {featureCards.map(([title, image], index) => (
          <Reveal key={title} delay={index * 0.04}>
            <img className="feature-card-image" src={image} alt={title} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PersonScene() {
  return (
    <img className="benefits-person" src="/assets/benefits-person.png" alt="ForgeOrion customer using finance automation" />
  );
}

function Benefits() {
  return (
    <section id="benefits" className="benefits-panel relative overflow-hidden px-5 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_.9fr]">
        <Reveal>
          <h2 className="text-4xl font-medium text-white">Why Choose <span className="font-black text-blue-400">ForgeOrion?</span></h2>
          <p className="mt-5 max-w-lg text-sm leading-6 text-white/75">
            ForgeOrion, a product of EPICFORGESOFTWARE, is designed to streamline your business processes and elevate your success.
          </p>
          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-y-6 sm:grid-cols-4">
            {[
              ['80%', 'Less Manual Effort'],
              ['100%', 'Compliance'],
              ['90%', 'Error Reduction'],
              ['24/7', 'Access & Support'],
            ].map(([value, label]) => (
              <div key={label} className="border-r border-white/25 last:border-r-0 sm:text-center">
                <p className="text-2xl font-black text-white">{value}</p>
                <p className="mt-1 text-xs text-white/55">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <PersonScene />
        </Reveal>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden px-5 py-[72px] lg:px-8">
      <div className="pricing-network" />
      <Reveal className="mx-auto max-w-[710px] text-center">
        <h2 className="text-[32px] font-normal leading-tight text-white sm:text-[40px]">Transparent Pricing for <span className="font-black text-blue-400">Every Need</span></h2>
        <p className="mx-auto mt-5 max-w-[610px] text-[15px] leading-[1.55] text-white/88">
          Choose the plan that works best for you, from individual users to large enterprises. All plans include our core AI technology.
        </p>
      </Reveal>
      <div className="mx-auto mt-[64px] grid max-w-[1347px] items-center gap-[21px] md:grid-cols-3">
        {pricing.map((plan, index) => (
          <Reveal key={plan.name} delay={index * 0.06}>
            <div className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
              <h3>{plan.name}</h3>
              <div className="mt-2">
                <span className="pricing-price">{plan.price}</span>
                {plan.name !== 'Enterprise' && <span className="pricing-month">/month</span>}
              </div>
              <p className="pricing-description">{plan.description}</p>
              <div className="pricing-list">
                {plan.features.map((item) => (
                  <p key={item}>
                    <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                    {item}
                  </p>
                ))}
              </div>
              <button className={`pricing-button ${plan.featured ? 'primary' : ''}`}>
                {plan.button}
              </button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function WorldMap() {
  const dots = [
    [8, 34], [14, 28], [21, 39], [29, 31], [38, 44], [49, 36], [58, 26], [66, 34], [72, 44], [82, 32], [90, 48],
    [16, 54], [28, 60], [42, 62], [54, 56], [64, 64], [78, 61], [87, 70],
  ];
  return (
    <div className="world-map">
      {dots.map(([left, top], i) => (
        <motion.span
          key={`${left}-${top}`}
          style={{ left: `${left}%`, top: `${top}%` }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.25, 0.9] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.13 }}
        />
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <h2 className="text-4xl font-medium text-white">What Our <span className="font-black text-blue-400">Customers Say</span></h2>
          <p className="mt-5 max-w-lg text-sm leading-6 text-white/70">
            Discover how ForgeOrion has helped businesses and individuals transform their financial management processes.
          </p>
          <img className="testimonial-image" src="/assets/testimonial-card.png" alt="Meera L. testimonial" />
        </Reveal>
        <Reveal delay={0.1}>
          <img className="map-image" src="/assets/world-map.png" alt="Global ForgeOrion customer map" />
        </Reveal>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta-band px-5 py-20 text-center lg:px-8">
      <Reveal className="relative z-10 mx-auto max-w-3xl">
        <h2 className="text-3xl font-black uppercase leading-tight text-white">
          Join 10,000+ Users Simplifying Their <span className="text-blue-400">Finances with ForgeOrion</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/72">
          Start transforming your financial management today. Experience the power of AI-driven automation.
        </p>
        <div className="cta-email-bar">
          <input placeholder="Enter Your Email" type="email" />
          <button>Get Connected</button>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div>
          <BrandMark />
          <p className="mt-5 text-sm leading-6 text-white/55">
            A product of EPICFORGESOFTWARE, designed to streamline your business processes and elevate your success.
          </p>
          <div className="mt-4 flex gap-3 text-white/50">
            {[Home, Sparkles, Bot, HelpCircle].map((Icon, i) => <Icon key={i} className="h-4 w-4" />)}
          </div>
        </div>
        <div>
          <h3 className="font-black text-white">Product</h3>
          {['Features', 'Pricing', 'Case Studies', 'Integrations', 'API Documentation'].map((item) => <a key={item} href="#" className="footer-link">{item}</a>)}
        </div>
        <div>
          <h3 className="font-black text-white">Resources</h3>
          {['Blog', 'Help Center', 'Webinars', 'Community', 'Privacy Policy'].map((item) => <a key={item} href="#" className="footer-link">{item}</a>)}
        </div>
        <div>
          <h3 className="font-black text-white">Contact</h3>
          <p className="mt-5 flex items-center gap-2 text-sm text-white/55"><Mail className="h-4 w-4" />founder@forgeorion.com</p>
          <p className="mt-3 text-sm text-white/55">+1 (234) 567-890</p>
          <p className="mt-5 text-xs font-bold text-white">Subscribe to our newsletter</p>
          <div className="mt-3 flex overflow-hidden rounded-sm bg-[#071b3d]">
            <input className="min-w-0 flex-1 bg-transparent px-3 py-2 text-xs outline-none placeholder:text-white/50" placeholder="Your email" />
            <button className="bg-blue-500 px-4 text-xs font-bold text-white">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2025 All rights reserved by EPICFORGE SOFTWARE PVT LTD.</p>
        <div className="flex gap-7">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#02060d] text-white">
      <Navbar />
      <Hero />
      <LedgerSection />
      <Features />
      <Benefits />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
