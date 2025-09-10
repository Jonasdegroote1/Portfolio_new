// src/app/layout.js
import { Header } from "@/components/header";
import "../styles/main.css"; // of body.css, jouw globale stylesheet
import Footer from "@/components/Footer";

export const metadata = {
  title: "Jonas Portfolio",
  description: "Portfolio website van Jonas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <Header />
        <div className="main-container">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
