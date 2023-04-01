import './globals.css'

export const metadata = {
  title: 'Mapa',
  description: 'Leaflet Map',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
