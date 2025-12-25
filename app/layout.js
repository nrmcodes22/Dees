import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Geist } from "next/font/google";
import { Work_Sans } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-geist",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-worksans",
});

export const metadata = {
  title: "Dees",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${workSans.variable} ${geist.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1 bg-white">
            {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}