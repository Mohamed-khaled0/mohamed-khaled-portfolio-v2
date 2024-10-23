import Header from "@/components/header";
import { Nunito } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Footer from "@/components/footer";
import LanguageSwitch from "@/components/language-switch";

const nunito = Nunito({ subsets: ["latin"] });


export const metadata = {
  title: "Mohamed Khaled | Software Engineer",
  description: "Hi, I'm Mohamed Khaled, a passionate Software Engineer with expertise in front-end development using Next.js, HTML, and Tailwind CSS. My portfolio showcases my projects, skills, and achievements, designed with modern aesthetics and smooth animations using Framer Motion. Explore my work and get to know me better!",
  keywords: "Mohamed Khaled, Software Engineer, Frontend Developer, Next.js, HTML, Tailwind CSS, Portfolio, Web Development, Framer Motion, UI/UX",
  authors:[{ name: "Mohamed Khaled" }] ,
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  icons: {
    icon: "./icon.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${nunito.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <ThemeSwitch />
            <Footer/>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
