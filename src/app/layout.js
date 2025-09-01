// src/app/layout.js
import "../styles/main.css"; // of body.css, jouw globale stylesheet

export const metadata = {
  title: "Jonas Portfolio",
  description: "Portfolio website van Jonas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        {children}
      </body>
    </html>
  );
}
