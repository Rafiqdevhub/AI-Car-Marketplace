import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterComponent from "@/components/FooterComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CarSahulat",
  description:
    'CarSahulat is Pakistan’s first AI-powered car marketplace that makes buying and selling cars fast, easy, and reliable. From intelligent price suggestions to image-based search and instant chat with sellers, CarSahulat brings convenience ("sahulat") right to your fingertips. Whether you\'re upgrading, selling, or just browsing — let AI do the hard work for you.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="min-h-screen">{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
