import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Agridrive - Smart Agricultural Automation System',
  description: 'An intelligent farming automation platform integrating AI/ML, IoT sensors, and autonomous machinery to modernize traditional agriculture. Optimize resources, maximize crop yield, and improve sustainability.',
  keywords: ['agriculture', 'automation', 'AI', 'ML', 'IoT', 'smart farming', 'precision agriculture', 'crop monitoring', 'irrigation management', 'autonomous navigation', 'evapotranspiration', 'weather integration'],
  authors: [{ name: 'Agridrive Team', url: 'https://agridrive.vercel.app' }],
  openGraph: {
    title: 'Agridrive - Smart Agricultural Automation System',
    description: 'Revolutionizing agriculture through intelligent automation and sustainable practices',
    url: 'https://agridrive.vercel.app',
    siteName: 'Agridrive',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}