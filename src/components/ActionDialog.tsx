import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Trash2, Edit, Eye, UserPlus, Plus } from "lucide-react"

interface ActionDialogProps {
  trigger: React.ReactNode
  title: string
  description: string
  action: "edit" | "delete" | "view" | "add"
  onConfirm?: () => void
  data?: any
}

export function ActionDialog({ trigger, title, description, action, onConfirm, data }: ActionDialogProps) {
  const [open, setOpen] = useState(false)
  const { toast } = useToast()

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm()
    }
    
    toast({
      title: "Ação executada!",
      description: `${title} foi ${action === 'delete' ? 'removido' : action === 'edit' ? 'editado' : 'processado'} com sucesso.`,
    })
    
    setOpen(false)
  }

  const getActionIcon = () => {
    switch (action) {
      case "edit":
        return <Edit className="h-4 w-4" />
      case "delete":
        return <Trash2 className="h-4 w-4" />
      case "view":
        return <Eye className="h-4 w-4" />
      case "add":
        return <Plus className="h-4 w-4" />
      default:
        return null
    }
  }

  const getActionColor = () => {
    switch (action) {
      case "delete":
        return "destructive"
      case "edit":
        return "default"
      case "view":
        return "outline"
      case "add":
        return "default"
      default:
        return "default"
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {getActionIcon()}
            {title}
          </DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {action === "edit" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" defaultValue={data?.name} placeholder="Nome" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue={data?.email} placeholder="email@exemplo.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Função</Label>
                <Select defaultValue={data?.role}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a função" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrador</SelectItem>
                    <SelectItem value="user">Usuário</SelectItem>
                    <SelectItem value="viewer">Visualizador</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          {action === "add" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="newName">Nome</Label>
                <Input id="newName" placeholder="Nome completo" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newEmail">Email</Label>
                <Input id="newEmail" type="email" placeholder="email@exemplo.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newRole">Função</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a função" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrador</SelectItem>
                    <SelectItem value="user">Usuário</SelectItem>
                    <SelectItem value="viewer">Visualizador</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha inicial</Label>
                <Input id="password" type="password" placeholder="Senha temporária" />
              </div>
            </>
          )}

          {action === "view" && data && (
            <div className="space-y-3">
              <div>
                <Label className="text-sm font-medium">Nome</Label>
                <p className="text-sm text-muted-foreground">{data.name}</p>
              </div>
              <div>
                <Label className="text-sm font-medium">Email</Label>
                <p className="text-sm text-muted-foreground">{data.email}</p>
              </div>
              <div>
                <Label className="text-sm font-medium">Função</Label>
                <p className="text-sm text-muted-foreground">{data.role}</p>
              </div>
              <div>
                <Label className="text-sm font-medium">Status</Label>
                <p className="text-sm text-muted-foreground">{data.status}</p>
              </div>
              <div>
                <Label className="text-sm font-medium">Último acesso</Label>
                <p className="text-sm text-muted-foreground">{data.lastAccess}</p>
              </div>
            </div>
          )}

          {action === "delete" && (
            <div className="py-4">
              <p className="text-sm text-muted-foreground">
                Esta ação não pode ser desfeita. O item será permanentemente removido.
              </p>
            </div>
          )}
          
          <div className="flex gap-2 pt-4">
            <Button 
              onClick={handleConfirm}
              variant={getActionColor() as any}
              className="flex-1"
            >
              {action === "delete" ? "Confirmar Exclusão" : 
               action === "edit" ? "Salvar Alterações" :
               action === "add" ? "Criar" : "OK"}
            </Button>
            <Button 
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1"
            >
              Cancelar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}