import Layout from '@/components/layouts/layout';
import './globals.css';
import { Providers } from './providers';
export const metadata = {
  title: 'TwOneZero',
  description: 'Portfoilo by Twonezero',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <Providers >
          <Layout>
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  )
}
