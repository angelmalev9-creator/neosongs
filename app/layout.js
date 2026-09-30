import './style.css';

export const metadata = {
  title: 'NEO Songs',
  description: 'AI Music Studio'
};

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <body>{children}</body>
    </html>
  );
}
