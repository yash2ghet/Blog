export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/20">
      {/* <nav className="border-b bg-background px-6 py-4 font-bold">Cogtix Dashboard</nav> */}
      <main>{children}</main>
    </div>
  );
}