import { NavigationMenuDemo } from "@/components/navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <NavigationMenuDemo />
      </header>
      
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}