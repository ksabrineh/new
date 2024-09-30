import Providers from "@/tools/Providers";
import "./globals.css";

export const metadata = {
  title: "To Do List Next App",
  description: "Little to do list app",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en" dir="rtl">
        <body>{children}</body>
      </html>
    </Providers>
  );
}
