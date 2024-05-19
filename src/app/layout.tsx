
import ToastProvider from "@/components/notification/toasProvider"
import AppProvider from "."
import "../styles/globals.css"

export const metadata = {
  title: 'Color-Ecommerce',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <AppProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </AppProvider>
      </body>
    </html>
  )
}
