import { Poppins, Inter, Open_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  title: "Zocial Plug - Videos that Grow, Thumbnails that Click, Content that Converts",
  description: "We help creators, brands, and agencies grow with videos that stop the scroll and drive real results.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${openSans.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
