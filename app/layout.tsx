import './globals.css'
import { JetBrains_Mono } from 'next/font/google'

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'AI-Powered SEO Blog Service',
  description: 'Boost your rankings with AI-generated, SEO-optimized blog content.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>{children}
        <script src="https://link.yourleadmatrix.com/js/form_embed.js" type="text/javascript"></script>
      </body>
    </html>
  )
}

