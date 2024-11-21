import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./components/Header";
import { TodoThemeProvider } from "./context/TodoThemeContext";
import Head from "next/head";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Task Master To-Do App | Boost Your Productivity",
  description:
    "Task Master is a powerful and intuitive to-do app that helps you manage tasks, and boost productivity with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Task Master To-Do App",
              url: "https://abdulrahman-alkhalaileh-welab-todo.netlify.app/",
              description:
                "Task Master is a powerful and intuitive to-do app that helps you manage tasks and boost productivity with ease.",
              operatingSystem: "Web",
              applicationCategory: "ProductivityApplication",
              creator: {
                "@type": "Organization",
                name: "Abdulrahman Alkhalaileh",
                url: "https://abdulrahman-alkhalaileh-portfolio.netlify.app/",
              },
              offers: {
                "@type": "Offer",
                price: "0", // Free app
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8", // Example average rating
                reviewCount: "120", // Example number of reviews
              },
              keywords: [
                "best to-do app",
                "free task manager",
                "productivity tool",
                "Next.js to-do app",
                "task organizer",
              ],
            }),
          }}
        />
      <TodoThemeProvider>
        <body className={poppins.className}>
          <Header />
          {children}
        </body>
      </TodoThemeProvider>
    </html>
  );
}
