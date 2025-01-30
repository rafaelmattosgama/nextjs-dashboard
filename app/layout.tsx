import '@/app/ui/global.css';
import {pacifico} from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${pacifico.className} antialiased`}>{children}</body>
    </html>
  );
}
