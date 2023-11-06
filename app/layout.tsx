import { Metadata } from 'next';
import '../styles/global.css';
import { OpenModalProvider } from './hooks/useOpenModal';

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export const metadata: Metadata = {
  title:
    'Exagon Salon | miglior software gestionale per parrucchieri | centri estetici | SPA, solarium CRM e APP',
  keywords: [
    'Software Gestionale',
    'CRM',
    'marketing',
    'gestione',
    'booking on line',
    'strategia marketing',
    'Parrucchieri',
    'barbieri',
    'barber',
    'centri estetici',
    'spa',
    'estetica',
    'solarium',
    'saloni di bellezza',
  ],
  description:
    'Exagon Salon, miglior software gestionale per parrucchieri, barber, centri estetici, SPA, estetica, solarium CRM APP con oltre 10.500 saloni clienti.',
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
      <body>
        <OpenModalProvider>{children}</OpenModalProvider>
      </body>
    </html>
  );
}
