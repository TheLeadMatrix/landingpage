import './globals.css'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta'
})

export const metadata = {
  title: 'YourLeadMatrix | AI-Powered SEO Agents',
  description: 'Fully autonomous SEO agents that handle 100% of your content strategy. AI-generated, SEO-optimized blog content that drives real results.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}>{children}
        <script src="https://link.yourleadmatrix.com/js/form_embed.js" type="text/javascript"></script>
      </body>
    </html>
  )
}

