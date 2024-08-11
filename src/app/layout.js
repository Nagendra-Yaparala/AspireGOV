import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: " AspireGOV",
  description: "AspireGov is your ultimate destination for mastering government job exams. Tailored for aspirants aiming to secure their dream position in the public sector, AspireGov offers comprehensive resources, expert-guided strategies, and up-to-date content to ensure you're always a step ahead. Whether you're just starting out or fine-tuning your preparation, AspireGov provides personalized learning paths, mock tests, and insightful tips to help you achieve your goals. With AspireGov, turn your aspirations into reality and pave your way to a successful career in government service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NavBar/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
