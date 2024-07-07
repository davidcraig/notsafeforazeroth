import React from 'react'
import Navbar from '../Components/Navbar'
import { Inter } from 'next/font/google'
import '../styles/app.scss'

const wowhead = (
  <script dangerouslySetInnerHTML={{
      __html: `
        var wowhead_tooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true};
      `
    }} />,
  <script src="https://wow.zamimg.com/widgets/power.js"></script>
);

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar className={inter.className} />
      {wowhead}
      <Component className={inter.className} {...pageProps} />
    </>
  )
}

export default MyApp
