import './globals.scss';
import {Rubik,Nunito} from 'next/font/google';
import Providers from '@/components/provider';

export const metadata = {
  title: 'Shofy - Онлайн худалдаа',
  description: 'Онлайн худалдааны вэб сайт',
}

const body = Rubik({
  weight: ["300","400", "500", "600", "700","800","900"],
  subsets: ["latin"],
  variable: "--tp-ff-body",
});
const heading = Rubik({
  weight: ["300","400", "500", "600", "700","800","900"],
  subsets: ["latin"],
  variable: "--tp-ff-heading",
});
const p = Nunito({
  weight: ["300","400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--tp-ff-p",
});
const jost = Nunito({
  weight: ["300","400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--tp-ff-jost",
});
const roboto = Nunito({
  weight: ["300","400","500","700"],
  subsets: ["latin"],
  variable: "--tp-ff-roboto",
});
const oregano = Nunito({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-oregano",
});
const charm = Nunito({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--tp-ff-charm",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${heading.variable} ${p.variable} ${jost.variable} ${roboto.variable} ${oregano.variable} ${charm.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
