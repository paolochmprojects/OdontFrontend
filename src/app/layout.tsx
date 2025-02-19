import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas-neue"});

export const metadata: Metadata = {
  title: "OdontPRO",
  description: "Aplicación para la gestión de tus pacientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" >
      <body className={`${inter.className} ${bebasNeue.variable}`}>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </ThemeProvider>
      </body>
    </html>
  );
}
