import { dir } from 'i18next'
import { ReactNode } from 'react';
import { languages } from '../i18n/settings'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

interface RootLayoutProps {
  children: ReactNode;
  params: {
    lng: string;
  };
}

export default function RootLayout({ children, params: { lng } }: RootLayoutProps) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
