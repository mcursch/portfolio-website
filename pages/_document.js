import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html suppressHydrationWarning className="dark">
            <Head>
                {/* Display + UI + mono faces. Local fallbacks are declared in
                    tailwind.config.js, so the page still reads well if these
                    never arrive. */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:wght@500;600;700;800&display=swap"
                    rel="stylesheet"
                />
                <meta name="theme-color" content="#050912" />
            </Head>
            <body className="bg-base-dark">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
