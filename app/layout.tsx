import Navbar from '@/Components/Navbar'
import './globals.css'
import Footer from '@/Components/Footer'
import Gallery from '@/Components/Gallery'
import Blog from '@/Components/Blog'
import Contact from '@/Components/Contact'
import Star from '@/Components/Star'
import Testimonials from '@/Components/Testimonials'

export const metadata = {
  title: 'CarHub',
  description: 'Discover the best car in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative bg-cyan-100'>
      <Navbar></Navbar>
      {children}
      <Gallery></Gallery>
      <Blog></Blog>
      <Star></Star>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
      </body>
    </html>
  )
}


