import { Plus, Upload, Users, FileText, Calendar, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const quickActions = [
  {
    label: "+ Agendamento",
    icon: Calendar,
    variant: "default" as const,
    description: "Agendar descarga"
  },
  {
    label: "+ Romaneio",
    icon: FileText,
    variant: "default" as const,
    description: "Novo documento"
  },
  {
    label: "+ Cobrança",
    icon: DollarSign,
    variant: "default" as const,
    description: "Gerar cobrança"
  },
  {
    label: "Ingestar XML",
    icon: Upload,
    variant: "outline" as const,
    description: "Processar documentos"
  },
  {
    label: "Abrir Assembleia",
    icon: Users,
    variant: "outline" as const,
    description: "Nova votação"
  },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Ações Rápidas
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              className="h-auto p-4 flex flex-col items-start gap-2 text-left"
              onClick={() => console.log(`Clicked: ${action.label}`)}
            >
              <div className="flex items-center gap-2 w-full">
                <action.icon className="h-4 w-4" />
                <span className="font-medium">{action.label}</span>
              </div>
              <span className="text-xs opacity-70">{action.description}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}