import { Layout } from "@/components/Layout";
import { usePageSEO } from "@/hooks/usePageSEO";

export default function Cooperados() {
  usePageSEO({
    title: "Cooperados | CoopHub",
    description: "Lista e gestão de cooperados com busca e ações rápidas.",
    canonical: window.location.href,
  });

  return (
    <Layout>
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-foreground">Cooperados</h1>
        <p className="text-sm text-muted-foreground">Gestão 360 do cooperado</p>
      </header>
      <section className="rounded-lg border bg-card p-6 text-card-foreground">
        <p className="text-sm text-muted-foreground">
          Página em preparação. Aqui você poderá buscar, cadastrar e gerenciar
          cooperados.
        </p>
      </section>
    </Layout>
  );
}
