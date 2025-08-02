import Hero from "@/components/hero"
import Mission from "@/components/mission"
import BusinessContent from "@/components/activities"
import Members from "@/components/members"
import Access from "@/components/access"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import ScrollHelper from "@/components/scroll-helper"
import ScrollAnimations from "@/components/scroll-animations"
import TechEnvironment from "@/components/tech-environment"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollHelper />
      <ScrollAnimations />
      <Hero />
      <Mission />
      <BusinessContent />
      <TechEnvironment />
      <Members />
      <Access />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
