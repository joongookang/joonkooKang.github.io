import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import { lightTheme } from "../../theme";
import "../globals.css";
import { Noto_Sans_JP, Audiowide, M_PLUS_Rounded_1c, Dongle } from 'next/font/google'

const audiowide = Audiowide({
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
  variable: '--font-audiowide',
})
const dotGothic16 = Dongle({
  display: 'swap',
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dotGothic16',
})


export const metadata: Metadata = {
  title: "kangjoonkoo portfolio | Develop",
  description: "Created by Newcom Inc.",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale} className={`${dotGothic16.variable} ${audiowide.variable}`}>
      <body>
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
