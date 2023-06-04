import Layout from '@/components/layouts/layout';
import './globals.css';

export const metadata = {
  title: 'TwOneZero',
  description: 'Portfoilo by Twonezero',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
