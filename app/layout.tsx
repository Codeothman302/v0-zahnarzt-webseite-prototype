import { DirectionWrapper } from "@/components/direction-wrapper";
import { LanguageProvider } from "@/components/language-context";
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { VoiceflowChat } from '@/components/voiceflow-chat'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Zahnzentrum Neckarblick | Moderne Zahnmedizin in Horb am Neckar',
  description: 'Ihr Zahnarzt in Horb am Neckar. Implantate, Zahnreinigung, Kieferorthopädie und ästhetische Zahnmedizin. Termin online buchen - schnell und unkompliziert.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2CB1BC',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={`${inter.variable} font-sans antialiased`}>

        <LanguageProvider>
          <DirectionWrapper>
            {children}
          </DirectionWrapper>
        </LanguageProvider>

        <VoiceflowChat />
        <Analytics />
      </body>
    </html>
  )
}