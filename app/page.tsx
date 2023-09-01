import About from '@/Components/About'
import Hero from '@/Components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
    <Hero></Hero>
    <About></About>
    </main>
  )
}
