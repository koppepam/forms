import './globals.css';
import { fontVariablesClassName } from '@/lib/fonts';
import { SessionProvider } from 'next-auth/react';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forms',
  description: 'フォームアプリ Forms',
}

export default function RootLayout(props: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={fontVariablesClassName}>
        <SessionProvider>
          {props.children}
        </SessionProvider>
      </body>
    </html>
  )
}