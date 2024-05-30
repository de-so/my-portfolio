import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Souvik D.",
  description: "A next level Portfolio of Souvik D.",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest"></link>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
