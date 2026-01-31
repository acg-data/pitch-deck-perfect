import { Outlet } from 'react-router-dom';
import { Navbar } from '@/sections/Navbar';
import { Footer } from '@/sections/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { CommandPalette } from '@/components/CommandPalette';
import { Toaster } from '@/components/ui/sonner';

export function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <CommandPalette />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
