import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Smooch+Sans:wght@100..900&family=Space+Grotesk:wght@300..700&family=Teko:wght@300..700&display=swap" rel="stylesheet" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
