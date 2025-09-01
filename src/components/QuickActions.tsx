import { Plus, Upload, Users, FileText, Calendar, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

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
  const { toast } = useToast()
  const [open, setOpen] = useState<string | null>(null)

  const handleAction = (actionLabel: string) => {
    setOpen(actionLabel)
  }

  const handleSubmit = (actionLabel: string) => {
    toast({
      title: "Ação executada com sucesso!",
      description: `${actionLabel} foi processado com sucesso.`,
    })
    setOpen(null)
  }

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
            <Dialog key={index} open={open === action.label} onOpenChange={(isOpen) => setOpen(isOpen ? action.label : null)}>
              <DialogTrigger asChild>
                <Button
                  variant={action.variant}
                  className="h-auto p-4 flex flex-col items-start gap-2 text-left"
                  onClick={() => handleAction(action.label)}
                >
                  <div className="flex items-center gap-2 w-full">
                    <action.icon className="h-4 w-4" />
                    <span className="font-medium">{action.label}</span>
                  </div>
                  <span className="text-xs opacity-70">{action.description}</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <action.icon className="h-5 w-5" />
                    {action.label}
                  </DialogTitle>
                  <DialogDescription>
                    {action.description}. Preencha os dados abaixo para prosseguir.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  {action.label === "+ Agendamento" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="vehicle">Veículo</Label>
                        <Input id="vehicle" placeholder="Placa do veículo" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date">Data</Label>
                        <Input id="date" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Horário</Label>
                        <Input id="time" type="time" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="product">Produto</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o produto" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="soja">Soja</SelectItem>
                            <SelectItem value="milho">Milho</SelectItem>
                            <SelectItem value="trigo">Trigo</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  )}
                  
                  {action.label === "+ Romaneio" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="origin">Origem</Label>
                        <Input id="origin" placeholder="Local de origem" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="destination">Destino</Label>
                        <Input id="destination" placeholder="Local de destino" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quantity">Quantidade (kg)</Label>
                        <Input id="quantity" type="number" placeholder="0" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="driver">Motorista</Label>
                        <Input id="driver" placeholder="Nome do motorista" />
                      </div>
                    </>
                  )}
                  
                  {action.label === "+ Cobrança" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="member">Cooperado</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o cooperado" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="joao">João Silva</SelectItem>
                            <SelectItem value="maria">Maria Santos</SelectItem>
                            <SelectItem value="pedro">Pedro Costa</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="amount">Valor (R$)</Label>
                        <Input id="amount" type="number" placeholder="0,00" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Descrição</Label>
                        <Textarea id="description" placeholder="Descrição da cobrança" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dueDate">Vencimento</Label>
                        <Input id="dueDate" type="date" />
                      </div>
                    </>
                  )}
                  
                  {action.label === "Ingestar XML" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="file">Arquivo XML</Label>
                        <Input id="file" type="file" accept=".xml" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="type">Tipo de Documento</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nfe">Nota Fiscal Eletrônica</SelectItem>
                            <SelectItem value="cte">CT-e</SelectItem>
                            <SelectItem value="mdfe">MDF-e</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  )}
                  
                  {action.label === "Abrir Assembleia" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="title">Título da Assembleia</Label>
                        <Input id="title" placeholder="Título da votação" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Descrição</Label>
                        <Textarea id="description" placeholder="Descrição detalhada da pauta" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="startDate">Data de Início</Label>
                        <Input id="startDate" type="datetime-local" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="endDate">Data de Término</Label>
                        <Input id="endDate" type="datetime-local" />
                      </div>
                    </>
                  )}
                  
                  <div className="flex gap-2 pt-4">
                    <Button 
                      onClick={() => handleSubmit(action.label)}
                      className="flex-1"
                    >
                      Confirmar
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => setOpen(null)}
                      className="flex-1"
                    >
                      Cancelar
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}