import { Layout } from "@/components/Layout"
import { usePageSEO } from "@/hooks/usePageSEO"

export default function AdminConfig() {
  usePageSEO({
    title: "Admin • Configurações | Cooperado Hub",
    description: "Configurações do tenant, certificados e integrações.",
    canonical: window.location.href,
  })

  return (
    <Layout>
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-foreground">Administração • Configurações</h1>
        <p className="text-sm text-muted-foreground">Tenant, integrações e branding</p>
      </header>
      <section className="rounded-lg border bg-card p-6 text-card-foreground">
        <p className="text-sm text-muted-foreground">As configurações administrativas ficarão disponíveis aqui.</p>
      </section>
    </Layout>
  )
}
