import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk'
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>{children}
        <script src="https://link.yourleadmatrix.com/js/form_embed.js" type="text/javascript"></script>
      </body>
    </html>
  )
}

