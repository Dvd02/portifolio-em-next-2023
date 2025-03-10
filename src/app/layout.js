import './globals.css'

export const metadata = {
    title: 'Portifólio em next 2023',
    description: 'Portifólio de projetos feitos em next no ano de 2023',
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
