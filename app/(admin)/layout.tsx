'use client';

import { AuthProvider } from '@/components/auth-provider';

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AuthProvider>
            <div className="flex min-h-screen flex-col gap-4">
                {children}
            </div>
        </AuthProvider>
    )
}