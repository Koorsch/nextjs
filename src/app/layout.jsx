import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Nice Dogs, a Next App",
  description: "This will be populated at some point.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col bg-slate-700">
      <Header />
        {children}
      <Footer />
        </body>
    </html>
  );
}
