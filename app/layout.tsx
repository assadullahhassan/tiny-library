import NavBar from "@/components/NavBar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Tiny Library</title>
      </head>
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}