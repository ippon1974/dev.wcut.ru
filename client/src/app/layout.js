import { Geist, Geist_Mono } from "next/font/google";
//import "./globals.css";
import Metrika from "@/lib/metrika";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Разработка веб сайтов",
  description: "Создание веб сайтов. Полный цикл.",
  keywords: "JavaScript, React.js, Next.js, CSS, OS Linux, NGINX, Node.js, Next.js, MySQL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
		<Metrika />
      </body>
    </html>
  );
}
