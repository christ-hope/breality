import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/themes/provider";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "300", "500", "700"]});

export const metadata: Metadata = {
  title: "Breality.studio",
  description:
    "Agence spécialisée dans le développement d'applications web, mobiles et la creation de solutions numériques innovantes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
