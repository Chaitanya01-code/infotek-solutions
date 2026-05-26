import { useState, useEffect, FormEvent } from 'react';
import { motion } from 'motion/react';
import { 
  Monitor, 
  Smartphone, 
  ShoppingCart, 
  Palette, 
  RefreshCw, 
  Settings,
  ArrowRight,
  Menu,
  X,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Code,
  Zap,
  Check,
  Star,
  Globe,
  Sparkles,
  Rocket
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formStatusMessage, setFormStatusMessage] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const web3formsAccessKey = (import.meta.env as any).VITE_WEB3FORMS_ACCESS_KEY || '1d025149-c594-456a-b9d1-48b7213296f0';

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus('sending');
    setFormStatusMessage('Sending your message...');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: web3formsAccessKey,
          name: contactName,
          email: contactEmail,
          phone: contactPhone,
          message: contactMessage,
          plan: selectedPlan || 'General Inquiry',
          subject: 'New contact request from website',
          redirect: '',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormStatus('success');
        setFormStatusMessage('Message sent! We will get back to you soon.');
        setContactName('');
        setContactEmail('');
        setContactPhone('');
        setContactMessage('');
      } else {
        throw new Error(data.message || 'Unable to send message');
      }
    } catch (error) {
      setFormStatus('error');
      setFormStatusMessage(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      );
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    {
      icon: Monitor,
      title: 'Business Websites',
      description: 'Professional websites tailored for your business needs with modern design and functionality.'
    },
    {
      icon: Globe,
      title: 'Landing Pages',
      description: 'High-converting landing pages that capture leads and drive business growth.'
    },
    {
      icon: Code,
      title: 'Portfolio Websites',
      description: 'Showcase your work beautifully with custom portfolio designs that impress clients.'
    },
    {
      icon: ShoppingCart,
      title: 'Basic E-commerce',
      description: 'Simple online stores to sell your products with secure payment integration.'
    },
    {
      icon: Palette,
      title: 'Website Redesign',
      description: 'Modernize your existing website with fresh design and improved user experience.'
    },
    {
      icon: Settings,
      title: 'Website Maintenance',
      description: 'Keep your website running smoothly with regular updates and technical support.'
    },
    {
      icon: Rocket,
      title: 'Application Development',
      description: 'Custom software solutions tailored to your business needs.'
    },
    {
      icon: Sparkles,
      title: 'AI Agents',
      description: 'Keep your work faster with AI agents that can automate tasks and provide intelligent assistance.'
    }
  ];

  const projects = [
    {
      title: 'Modern Business Site',
      category: 'Business Website',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Product Launch Page',
      category: 'Landing Page',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Creative Portfolio',
      category: 'Portfolio',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Online Store',
      category: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
      gradient: 'from-green-500 to-teal-600'
    }
  ];

  const pricingPlans = [
    {
      name: 'Simple Website',
      price: '₹2,999',
      description: 'Perfect for small businesses and personal sites',
      features: [
        'Up to 5 pages',
        'Mobile responsive',
        'Basic SEO optimization',
        'Contact form',
        '1 month support'
      ]
    },
    {
      name: 'Business Website',
      price: '₹4,999',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10 pages',
        'Custom design',
        'Advanced SEO',
        'Content management',
        'Analytics integration',
        '3 months support'
      ],
      popular: true
    },
    {
      name: 'Landing Page',
      price: '₹6,999',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10 pages',
        'Custom design',
        'Advanced SEO',
        'Content management',
        'Analytics integration',
        '3 months support'
      ],
    },
    {
      name: 'Custom Website',
      price: '₹1,999',
      description: 'Tailored solutions for unique needs',
      features: [       
        'Custom functionality',
        'Premium support',
        'Ongoing maintenance',
        'Priority updates',
        '3 months support'
      ],
      popular: true
    },
    {
      name: 'AI Agents',
      price: '₹9,999',
      description: 'automate tasks and provide intelligent assistance',
      features: [       
        'Custom functionality',
        'Premium support',
        'Ongoing maintenance',
        'Priority updates',
        '3 months support'
      ],
      popular: true
    },
    {
      name: 'maintenance',
      price: '₹499/month',
      description: 'Tailored solutions for unique needs',
      features: [
        'Regular updates',
        'Security monitoring',
        'Performance optimization',
        'Premium support',
        'Ongoing maintenance',
        'Priority updates'
      ],  
      popular: true
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Owner, Kumar Electronics',
      content: 'Infotek Solutions delivered a fantastic website for my electronics store. Professional work and great communication throughout!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Founder, Artisan Crafts',
      content: 'They created a beautiful portfolio website that perfectly showcases my handmade products. Highly recommend their services!',
      rating: 5
    },
    {
      name: 'Amit Patel',
      role: 'Director, TechStart Solutions',
      content: 'Fast, affordable, and professional. Our new business website has helped us attract more clients. Thank you!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b !m-0 !rounded-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Infotek Solutions
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-foreground hover:text-primary transition-colors">
                Pricing
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
                Contact
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-card border-t border-border"
          >
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors">
                Pricing
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors">
                Contact
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="block w-full text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors"
              >
                {darkMode ? 'Light Mode ☀️' : 'Dark Mode 🌙'}
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">Modern Web Solutions</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Tech Solutions for{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  bussinesses and startups
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We build fast, modern, and affordable websites,apps and ai agents that help your business stand out online. Professional web solutions designed for startups and small businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="border-2 border-border px-8 py-4 rounded-xl font-semibold hover:bg-accent transition-all"
                >
                  View Services
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
                  <div className="bg-card rounded-lg p-6 mb-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-muted rounded w-3/4"></div>
                      <div className="h-3 bg-muted rounded w-full"></div>
                      <div className="h-3 bg-muted rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-card rounded-lg p-4 flex items-center justify-center">
                      <Monitor className="w-8 h-8 text-primary" />
                    </div>
                    <div className="bg-card rounded-lg p-4 flex items-center justify-center">
                      <Smartphone className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              About Infotek Solutions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We're a small, dedicated tech business focused on helping local businesses and startups create a professional online presence. 
              With expertise in modern web technologies, we deliver clean, efficient, and affordable websites that drive results.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our approach is simple: understand your needs, design with purpose, and deliver on time. 
              We believe every business deserves a website that looks great and works flawlessly, without breaking the bank.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web solutions tailored to your business needs
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={containerVariants}
                className="glass-card-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/40">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take a look at some of our recent work
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={containerVariants}
                className="group relative glass-card overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity`}></div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose a plan that fits your business needs
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={containerVariants}
                className={`relative glass-card-lg hover:shadow-lg transition-all duration-300 ${plan.popular ? 'scale-105 shadow-lg shadow-primary/30' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => { setSelectedPlan(plan.name); scrollToSection('contact'); }}
                  className={`w-full py-3 rounded-xl font-semibold transition-all backdrop-blur-md ${
                    plan.popular 
                      ? 'glass-button bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-purple-500/50' 
                      : 'glass-button !bg-accent/50 border-primary/30 hover:!bg-accent/70'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">What Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={containerVariants}
                className="glass-card-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.content}</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your project? Contact us today
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <form className="space-y-6" onSubmit={handleContactSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-2">Selected Plan</label>
                  <select
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="glass-input"
                  >
                    <option value="">General Inquiry</option>
                    {pricingPlans.map((p) => (
                      <option key={p.name} value={p.name}>{p.name} {p.price ? `- ${p.price}` : ''}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={contactName}
                    onChange={(event) => setContactName(event.target.value)}
                    className="glass-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={contactEmail}
                    onChange={(event) => setContactEmail(event.target.value)}
                    className="glass-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="8329042487"
                    value={contactPhone}
                    onChange={(event) => setContactPhone(event.target.value)}
                    className="glass-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    value={contactMessage}
                    onChange={(event) => setContactMessage(event.target.value)}
                    className="glass-input resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="glass-button w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-purple-500/50"
                >
                  Send Message
                </button>
                {formStatus !== 'idle' && (
                  <div
                    className={`text-sm pt-3 ${
                      formStatus === 'success'
                        ? 'text-emerald-500'
                        : formStatus === 'error'
                        ? 'text-red-500'
                        : 'text-slate-500'
                    }`}
                  >
                    {formStatusMessage}
                  </div>
                )}
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="glass-card-lg">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-muted-foreground">info@infoteksolutions.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <p className="text-muted-foreground">
                        <a
                          href="tel:+918329042487"
                          className="hover:underline"
                          aria-label="Call Infotek Solutions"
                        >
                          8329042487
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Location</p>
                      <p className="text-muted-foreground">Nashik, Maharashtra, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/918329042487?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
                aria-label="Chat on WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button w-full !bg-green-500/80 hover:!bg-green-600 border-green-400/30 flex items-center justify-center space-x-3"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="glass-card-lg bg-gradient-to-br from-blue-500/40 to-purple-600/40 text-white">
                <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2 text-white/90">
                  <p>anytime</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg font-bold">Infotek Solutions</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Give online identity to your business.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => scrollToSection('home')} className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-primary transition-colors">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('projects')} className="text-muted-foreground hover:text-primary transition-colors">
                    Projects
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Business Websites</li>
                <li>application development</li>
                <li>ai agents</li>
                <li>maintenance</li>
                <li>Landing Pages</li>
                <li>Portfolio Websites</li>
                <li>E-commerce Sites</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2026 Infotek Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
