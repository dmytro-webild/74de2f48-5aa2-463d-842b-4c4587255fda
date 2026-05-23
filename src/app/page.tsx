"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Phone, Target, TrendingUp } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="largeSizeMediumTitles"
        background="grid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Elevate Media Co."
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Websites That Get Local Businesses More Calls"
      description="We build high-converting, SEO-optimized digital systems designed to generate consistent, high-intent leads for service professionals."
      tag="Elevate Your Business"
      buttons={[
        {
          text: "Book a Free 10-Minute Demo",
          href: "#contact",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-people-discussing-work_23-2149097910.jpg",
          imageAlt: "Hero slide 1",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-woman-holding-tablet_23-2149762489.jpg",
          imageAlt: "Hero slide 2",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/standing-vote-graduation-conference-room-bargain_1134-1130.jpg",
          imageAlt: "Hero slide 3",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/modern-office-space-interior_158595-5206.jpg",
          imageAlt: "Hero slide 4",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/system-administrator-debugging-company-servers-preventing-failures_482257-124403.jpg",
          imageAlt: "Hero slide 5",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-ai-data-visualization_23-2151977857.jpg",
          imageAlt: "Hero slide 6",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="Performance at the Core"
      metrics={[
        {
          icon: Phone,
          label: "Calls Generated",
          value: "15,000+",
        },
        {
          icon: TrendingUp,
          label: "Avg. SEO Rank Increase",
          value: "240%",
        },
        {
          icon: Target,
          label: "Conversion Rate",
          value: "12%",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "s1",
          title: "Website Design",
          subtitle: "Premium, conversion-focused sites",
          category: "Web Design",
          value: "Custom",
        },
        {
          id: "s2",
          title: "Local SEO",
          subtitle: "Dominate local maps and rankings",
          category: "SEO",
          value: "High Growth",
        },
        {
          id: "s3",
          title: "GBP Optimization",
          subtitle: "Claim your spot at the top",
          category: "SEO",
          value: "Instant Trust",
        },
        {
          id: "s4",
          title: "Lead Gen Systems",
          subtitle: "Automated pipeline management",
          category: "Growth",
          value: "Qualified",
        },
        {
          id: "s5",
          title: "Conversion Rate Opt",
          subtitle: "More calls from existing traffic",
          category: "UX",
          value: "15% Boost",
        },
        {
          id: "s6",
          title: "Professional Content",
          subtitle: "Engaging copy that sells",
          category: "Content",
          value: "Premium",
        },
      ]}
      title="Our Specialized Services"
      description="Comprehensive digital solutions tailored for plumbers, roofers, HVAC contractors, and more."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Plumbers",
          price: "High Growth",
          imageSrc: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721575.jpg",
        },
        {
          id: "p2",
          name: "Landscapers",
          price: "High Growth",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-taking-care-her-plants_23-2148509914.jpg",
        },
        {
          id: "p3",
          name: "Roofers",
          price: "High Growth",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-working-with-earphones_23-2149343656.jpg",
        },
        {
          id: "p4",
          name: "HVAC Pros",
          price: "High Growth",
          imageSrc: "http://img.b2bpic.net/free-photo/yung-bearded-master-looks-inside-disassembled-electronic-device-while-repairing-it-with-tools_346278-1786.jpg",
        },
        {
          id: "p5",
          name: "Electricians",
          price: "High Growth",
          imageSrc: "http://img.b2bpic.net/free-photo/male-electrician-working-electrical-panel-male-electrician-overalls_169016-67471.jpg",
        },
        {
          id: "p6",
          name: "Contractors",
          price: "High Growth",
          imageSrc: "http://img.b2bpic.net/free-photo/construction-worker_329181-2851.jpg",
        },
      ]}
      title="Industry Solutions"
      description="We specialize in high-growth industries that rely on local search."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "starter",
          name: "Starter",
          price: "$1,500/mo",
          features: [
            "Basic Web Presence",
            "Local SEO Setup",
            "Google Business Setup",
          ],
          buttons: [
            {
              text: "Start Now",
              href: "#contact",
            },
          ],
        },
        {
          id: "growth",
          name: "Growth",
          price: "$3,000/mo",
          features: [
            "Full Web Redesign",
            "Advanced Local SEO",
            "Lead Gen Pipeline",
            "Monthly Reporting",
          ],
          buttons: [
            {
              text: "Get Growth",
              href: "#contact",
            },
          ],
        },
        {
          id: "premium",
          name: "Premium",
          price: "$5,000/mo",
          features: [
            "Unlimited Web Updates",
            "Enterprise SEO",
            "Full Ad Management",
            "Priority Support",
          ],
          buttons: [
            {
              text: "Book Now",
              href: "#contact",
            },
          ],
        },
      ]}
      title="Scaling Packages"
      description="Transparent, ROI-focused pricing for every stage of your business growth."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "John Doe",
          imageSrc: "http://img.b2bpic.net/free-photo/successful-entrepreneurs-analyzing-perspectives_1163-5270.jpg",
        },
        {
          id: "t2",
          name: "Jane Smith",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-senior-woman-professional-blazer-outdoors_23-2150296627.jpg",
        },
        {
          id: "t3",
          name: "Bob Johnson",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-portrait-successful-goodlooking-young-professional-headhunter-female-entrepreneur-office-worker-beige-blazer-look-away-cross-hands-chest-confident-manage-own-business_197531-30576.jpg",
        },
        {
          id: "t4",
          name: "Alice Brown",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-business-owner_23-2149434600.jpg",
        },
        {
          id: "t5",
          name: "Chris White",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-female-employee-standing-with-crossed-arms-looking-confident-wearing-white-shirt-standing-office_141793-21248.jpg",
        },
      ]}
      cardTitle="Client Success"
      cardTag="Testimonials"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "What's the timeline?",
          content: "Our typical turnaround is 4-6 weeks.",
        },
        {
          id: "f2",
          title: "Do you offer SEO?",
          content: "Yes, it is baked into everything we build.",
        },
        {
          id: "f3",
          title: "Can I request changes?",
          content: "We offer unlimited minor updates for growth packages.",
        },
      ]}
      sideTitle="Frequently Asked Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Ready to Grow?"
      description="Book your free 10-minute strategy call today."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Your Phone Number",
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Tell us about your business",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/online-school-equipment-home_23-2149041148.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Elevate Media Co."
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
