import './globals.css'

export const metadata = {
    title: 'Site',
    description: 'site do Dvd em next',
}

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <body>
                {children}
            </body>
        </html>
    )
}
