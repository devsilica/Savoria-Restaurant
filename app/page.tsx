import Header from '@/components/restaurant-header'
import Hero from '@/components/restaurant-hero'
import About from '@/components/restaurant-about'
import Menu from '@/components/restaurant-menu'
import Chef from '@/components/restaurant-chef'
import Gallery from '@/components/restaurant-gallery'
import Reservations from '@/components/restaurant-reservations'
import Footer from '@/components/restaurant-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Chef />
      <Gallery />
      <Reservations />
      <Footer />
    </main>
  )
}
