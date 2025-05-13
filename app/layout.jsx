import { Inter } from "next/font/google";
import "./globals.css";
import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CarSahulat - Pakistan's Smart Car Marketplace",
  description:
    "CarSahulat is Pakistan's smart car marketplace, using AI to make buying and selling vehicles fast, easy, and secure.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="min-h-screen antialiased">
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body
          className={`${inter.className} flex min-h-screen flex-col bg-background text-foreground`}
        >
          <HeaderComponent />
          <main className="flex-1">
            <div className="min-h-screen">{children}</div>
          </main>
          <Toaster richColors position="top-center" />
          <FooterComponent />
        </body>
      </html>
    </ClerkProvider>
  );
}
