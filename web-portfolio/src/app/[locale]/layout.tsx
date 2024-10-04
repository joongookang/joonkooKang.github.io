import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import { Dongle, Zen_Kurenaido } from "next/font/google";
import { lightTheme } from "../../theme";
import "../globals.css";

const dongle = Dongle({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dongle",
});

const m_plus = Zen_Kurenaido({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
  variable: "--font-m_plus",
});

export const metadata: Metadata = {
  title: "kangjoonkoo portfolio | Develop",
  description: "Created by Newcom Inc.",
};

const getStatusMessage = (locale: string): string => {
  switch (locale) {
    case "ja":
      return m_plus.className;
    default:
      return dongle.className;
  }
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const font = getStatusMessage(locale);

  return (
    <html
      lang={locale}
      className={locale === "ja" ? m_plus.variable : dongle.variable}
    >
      <body className={font}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
