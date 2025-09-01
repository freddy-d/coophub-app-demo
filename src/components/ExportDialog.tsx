import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Download, FileSpreadsheet, FileText } from "lucide-react"

interface ExportDialogProps {
  trigger: React.ReactNode
  data?: any[]
  filename?: string
}

export function ExportDialog({ trigger, data = [], filename = "export" }: ExportDialogProps) {
  const [open, setOpen] = useState(false)
  const [format, setFormat] = useState("xlsx")
  const [fields, setFields] = useState({
    name: true,
    email: true,
    status: true,
    date: true,
    phone: false,
    address: false
  })
  const { toast } = useToast()

  const handleExport = () => {
    const selectedFields = Object.entries(fields)
      .filter(([_, selected]) => selected)
      .map(([field, _]) => field)

    // Simulate export process
    setTimeout(() => {
      toast({
        title: "Exportação concluída!",
        description: `Arquivo ${filename}.${format} foi gerado com ${data.length} registros.`,
      })
      setOpen(false)
    }, 1000)
  }

  const toggleField = (field: string) => {
    setFields(prev => ({
      ...prev,
      [field]: !prev[field as keyof typeof prev]
    }))
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Exportar Dados
          </DialogTitle>
          <DialogDescription>
            Configure as opções de exportação dos dados
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Formato do arquivo</Label>
            <Select value={format} onValueChange={setFormat}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="xlsx">
                  <div className="flex items-center gap-2">
                    <FileSpreadsheet className="h-4 w-4" />
                    Excel (.xlsx)
                  </div>
                </SelectItem>
                <SelectItem value="csv">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    CSV (.csv)
                  </div>
                </SelectItem>
                <SelectItem value="pdf">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    PDF (.pdf)
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label>Campos para exportar</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="name" 
                  checked={fields.name}
                  onCheckedChange={() => toggleField('name')}
                />
                <Label htmlFor="name" className="text-sm">Nome</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="email" 
                  checked={fields.email}
                  onCheckedChange={() => toggleField('email')}
                />
                <Label htmlFor="email" className="text-sm">Email</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="status" 
                  checked={fields.status}
                  onCheckedChange={() => toggleField('status')}
                />
                <Label htmlFor="status" className="text-sm">Status</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="date" 
                  checked={fields.date}
                  onCheckedChange={() => toggleField('date')}
                />
                <Label htmlFor="date" className="text-sm">Data de ingresso</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="phone" 
                  checked={fields.phone}
                  onCheckedChange={() => toggleField('phone')}
                />
                <Label htmlFor="phone" className="text-sm">Telefone</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="address" 
                  checked={fields.address}
                  onCheckedChange={() => toggleField('address')}
                />
                <Label htmlFor="address" className="text-sm">Endereço</Label>
              </div>
            </div>
          </div>

          <div className="pt-4 space-y-2">
            <div className="text-sm text-muted-foreground">
              Total de registros: {data.length}
            </div>
            <div className="text-sm text-muted-foreground">
              Nome do arquivo: {filename}.{format}
            </div>
          </div>
          
          <div className="flex gap-2 pt-4">
            <Button onClick={handleExport} className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}