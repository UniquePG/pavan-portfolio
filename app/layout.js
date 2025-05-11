import { Inter } from 'next/font/google'
import './globals.css'
import "../src/styles/globals.css"
import Loader from '@/src/components/WelcomeSplashLoader/Loader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pavan Gupta - Full Stack Developer',
  description: 'Experienced full stack developer specializing in React.js, Next.js, Node.js, and modern web technologies. Based in Gwalior, MP.',
  keywords: 'Full Stack Developer, React.js, Next.js, Node.js, PostgreSQL, DevOps, Web Development',
  author: 'Pavan Gupta',
  themeColor: '#0F172A',
  colorScheme: 'dark'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Loader />
        <div className="main-container">
          {children}
        </div>
      </body>
    </html>
  )
}
