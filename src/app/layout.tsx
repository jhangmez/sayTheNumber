import localFont from 'next/font/local'
import './globals.css'
import { Suspense } from 'react'
import Loading from './loading'
import { Toaster } from 'react-hot-toast'

const myFont = localFont({
  src: '/PlusJakartaSans-VariableFont_wght.ttf'
})

const shortTitle = 'Detecta el numero'
const description = 'Detecta el numero'
const jhangmez = ' | jhangmez'
const title = `${shortTitle}${jhangmez}`
const imageUrl = `https://jhangmez.vercel.app/api/og?title=${shortTitle}&description=${description}`

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
    url: 'https://jhangmez.xyz/',
    images: [{ url: imageUrl }]
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [imageUrl]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body
        className={`${myFont.className} absolute top-0 z-[-2] min-h-screen w-full 
  bg-[radial-gradient(100%_50%_at_50%_0%,rgba(142,206,249,0.13)_0,rgba(142,206,249,0)_50%,rgba(142,206,249,0)_100%)]
  dark:bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,86,121,0.13)_0,rgba(0,86,121,0)_50%,rgba(0,86,121,0)_100%)] bg-light-background dark:bg-dark-background selection:bg-light-primary selection:text-light-onPrimary dark:selection:bg-dark-primary dark:selection:text-dark-onPrimary`}
      >
        <Toaster
          containerClassName='font-semibold text-light-primary dark:text-dark-primary'
          position='bottom-right'
          reverseOrder={false}
        />
        <noscript>Página realizada por Jhan Gómez P. @jhangmez</noscript>
        <Suspense fallback={<Loading />}>{children} </Suspense>
      </body>
    </html>
  )
}
