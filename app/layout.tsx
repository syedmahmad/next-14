import { Metadata } from 'next';
import '../styles/global.css';

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export const metadata: Metadata = {
  title: 'Exagon Landing Page',
  description: 'descirpiton of exagon',
};

export default function Layout({ children }) {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
      </head>
      <body>{children}</body>
    </html>
  );
}
