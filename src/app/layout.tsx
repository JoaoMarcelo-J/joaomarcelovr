import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joaomarcelo.dev"),
  title: "João Marcelo | Software Engineer",
  description:
    "Portfólio de João Marcelo Vieira Ramos — Software Engineer especialista em GoLang, JavaScript, Node.js, arquitetura de sistemas, APIs REST, microsserviços e software de pagamentos.",
  keywords: [
    "João Marcelo",
    "Software Engineer",
    "Fullstack Developer",
    "GoLang",
    "Node.js",
    "TypeScript",
    "React",
    "Next.js",
    "Web3",
    "Microsserviços",
  ],
  authors: [{ name: "João Marcelo Vieira Ramos" }],
  openGraph: {
    title: "João Marcelo | Software Engineer",
    description:
      "Software Engineer especialista em GoLang, Node.js, arquitetura de sistemas escaláveis e software de pagamentos.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    (function () {
      try {
        var stored = localStorage.getItem('theme');
        var theme = stored || 'dark';
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        document.documentElement.style.colorScheme = theme;
      } catch (e) {}
    })();
  `;

  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
