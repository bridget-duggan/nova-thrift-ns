import type { Metadata } from "next";

import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/fira-code/400.css";
import "@fontsource/fira-code/600.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import "./../styles/constants.css"; 

export const metadata: Metadata = {
  title: "Nova Thrift NS",
  description: "Find good deals. Support good causes.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
