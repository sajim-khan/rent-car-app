import Navbar from '@/Components/Navbar'
import './globals.css'
import Footer from '@/Components/Footer'

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
      <body className='relative'>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
      </body>
    </html>
  )
}
