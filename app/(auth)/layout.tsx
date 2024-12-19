export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <div className="flex flex-col h-screen items-center justify-center min-h-screen">
                {children}
            </div>
        </main>
    );
}