import { 
  Users, 
  Truck, 
  FileText, 
  DollarSign, 
  AlertCircle, 
  TrendingUp,
  Clock,
  CheckCircle
} from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Layout } from "@/components/Layout"
import { DashboardCard } from "@/components/DashboardCard"
import { QuickActions } from "@/components/QuickActions"

const Index = () => {
  const navigate = useNavigate()

  return (
    <Layout>
      <div className="space-y-6">
        {/* Page Title */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Visão geral das operações da cooperativa</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            title="Cooperados Ativos"
            value="1,247"
            description="Membros registrados e ativos"
            icon={<Users className="h-4 w-4" />}
            variant="success"
            trend={{
              value: "+12%",
              label: "este mês",
              isPositive: true
            }}
            actions={[
              { label: "Ver todos", onClick: () => navigate("/cooperados") }
            ]}
          />

          <DashboardCard
            title="Operações Hoje"
            value="24"
            description="Agendamentos e entregas"
            icon={<Truck className="h-4 w-4" />}
            badges={[
              { label: "8 na fila", variant: "warning" },
              { label: "16 concluídas", variant: "success" }
            ]}
            actions={[
              { label: "Ver fila", onClick: () => navigate("/operacoes") }
            ]}
          />

          <DashboardCard
            title="Financeiro"
            value="R$ 892.450"
            description="Valor a receber este mês"
            icon={<DollarSign className="h-4 w-4" />}
            badges={[
              { label: "R$ 45.320 em atraso", variant: "destructive" }
            ]}
            actions={[
              { label: "Ver detalhes", onClick: () => navigate("/fiscal") }
            ]}
          />

          <DashboardCard
            title="Documentos Fiscais"
            value="156"
            description="Processados esta semana"
            icon={<FileText className="h-4 w-4" />}
            variant="warning"
            badges={[
              { label: "3 com erro", variant: "destructive" }
            ]}
            actions={[
              { label: "Verificar", onClick: () => navigate("/fiscal") }
            ]}
          />
        </div>

        {/* Detailed Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <DashboardCard
            title="Romaneios Pendentes"
            value="8"
            description="Aguardando pesagem/classificação"
            icon={<Clock className="h-4 w-4" />}
            actions={[
              { label: "+ Novo Romaneio", onClick: () => navigate("/operacoes"), variant: "default" },
              { label: "Ver todos", onClick: () => navigate("/operacoes"), variant: "outline" }
            ]}
          />

          <DashboardCard
            title="Assembleia Ativa"
            value="1"
            description="Votação em andamento - Safra 2024"
            icon={<CheckCircle className="h-4 w-4" />}
            variant="success"
            badges={[
              { label: "789 votos", variant: "success" },
              { label: "63% participação", variant: "default" }
            ]}
            actions={[
              { label: "Ver resultados", onClick: () => navigate("/governanca") }
            ]}
          />

          <DashboardCard
            title="Assistência Técnica"
            value="12"
            description="Visitas agendadas para hoje"
            icon={<TrendingUp className="h-4 w-4" />}
            actions={[
              { label: "+ Nova OS", onClick: () => navigate("/operacoes"), variant: "default" },
              { label: "Ver agenda", onClick: () => navigate("/operacoes"), variant: "outline" }
            ]}
          />
        </div>

        {/* Quick Actions */}
        <QuickActions />
      </div>
    </Layout>
  );
};

export default Index;
