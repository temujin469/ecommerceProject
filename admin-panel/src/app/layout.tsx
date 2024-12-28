import "./globals.css";
import { Metadata } from "next";
import "/public/assets/css/custom.css";
import 'react-toastify/dist/ReactToastify.css';
import { Poppins } from "next/font/google";
import { Providers } from "@/redux/provider";

export const metadata: Metadata = {
  title: "Удирдлагын систем",
};

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});


export default function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="Удирдлагын систем" />
        <meta name="robots" content="noindex, follow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={poppins.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
