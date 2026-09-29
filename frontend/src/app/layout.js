export const metadata = {
  title: "Brad FitzGerald - Developer",
  description: "Brad FitzGerald is a developer with 14 years of experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
