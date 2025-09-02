import { ReactNode } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <SidebarInset>
          <div className="w-full bg-blue-600 text-white px-4 py-2 flex justify-between items-center">
            <span className="text-sm md:text-base">
              Protótipo CoopHub — para saber mais ou se cadastrar na lista de
              espera clique no seguinte botão
            </span>
            <a
              href="https://coophub-app.vercel.app/"
              className="ml-4 bg-white text-blue-600 px-3 py-1 rounded-lg text-sm font-semibold hover:bg-gray-100"
            >
              Voltar Site Espera
            </a>
          </div>

          <Header />
          <main className="flex-1 p-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
