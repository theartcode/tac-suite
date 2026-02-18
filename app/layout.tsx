import "./globals.css";
import { Inter, Instrument_Serif } from 'next/font/google'

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const instrument = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  style: 'italic',
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
