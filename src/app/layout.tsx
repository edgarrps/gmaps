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
      <head><link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
        integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
        crossOrigin="" />
      </head>
      <body>{children}</body>
    </html>
  )
}
