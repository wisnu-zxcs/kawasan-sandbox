import "@repo/ui/global.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@repo/ui/components/tooltip"
import { cn } from "@repo/ui/utils"

const fontSans = Inter({
    subsets: ["latin"],
    variable: "--font-sans"
})

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="id"
            suppressHydrationWarning
        >
            <body
                className={cn(
                    "antialiased",
                    "font-sans",
                    fontSans.variable
                )}
            >
                <ThemeProvider>
                    <TooltipProvider>
                        {children}
                    </TooltipProvider>
                </ThemeProvider>
            </body>
        </html >
    )
}