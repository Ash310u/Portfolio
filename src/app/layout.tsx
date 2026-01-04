import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/contexts/theme-context';
import { Toaster } from '@/components/ui/toaster';
import ThemeCustomizer from '@/components/theme-customizer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Ashutosh Saha | Software Engineer',
  description: 'Building Scalable Systems & AI-Powered Products.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          inter.variable
        )}
      >
        <ThemeProvider>
          {children}
          <ThemeCustomizer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
