import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";

import "./globals.css";

export const metadata = {
  title: "Paw Friends",
  description: "Generated by create next app",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main className="px-[20px] lg:px-[150px] grow animate-fadeInLeft">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
