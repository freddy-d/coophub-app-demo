import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Filter, X } from "lucide-react"

interface FilterDialogProps {
  trigger: React.ReactNode
  onApplyFilters?: (filters: any) => void
}

export function FilterDialog({ trigger, onApplyFilters }: FilterDialogProps) {
  const [open, setOpen] = useState(false)
  const [filters, setFilters] = useState({
    status: "",
    unidade: "",
    dataInicio: "",
    dataFim: "",
    ativo: true,
    inativo: false,
    pendente: false
  })

  const handleApplyFilters = () => {
    if (onApplyFilters) {
      onApplyFilters(filters)
    }
    setOpen(false)
  }

  const handleClearFilters = () => {
    setFilters({
      status: "",
      unidade: "",
      dataInicio: "",
      dataFim: "",
      ativo: true,
      inativo: false,
      pendente: false
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filtros Avançados
          </DialogTitle>
          <DialogDescription>
            Configure os filtros para refinar sua busca
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select value={filters.status} onValueChange={(value) => setFilters(prev => ({ ...prev, status: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ativo">Ativo</SelectItem>
                <SelectItem value="inativo">Inativo</SelectItem>
                <SelectItem value="pendente">Pendente</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="unidade">Unidade</Label>
            <Select value={filters.unidade} onValueChange={(value) => setFilters(prev => ({ ...prev, unidade: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione a unidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="matriz">Matriz</SelectItem>
                <SelectItem value="filial-a">Filial A</SelectItem>
                <SelectItem value="filial-b">Filial B</SelectItem>
                <SelectItem value="filial-c">Filial C</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="dataInicio">Data Início</Label>
              <Input 
                id="dataInicio" 
                type="date" 
                value={filters.dataInicio}
                onChange={(e) => setFilters(prev => ({ ...prev, dataInicio: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dataFim">Data Fim</Label>
              <Input 
                id="dataFim" 
                type="date" 
                value={filters.dataFim}
                onChange={(e) => setFilters(prev => ({ ...prev, dataFim: e.target.value }))}
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label>Status dos Cooperados</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="ativo" 
                  checked={filters.ativo}
                  onCheckedChange={(checked) => setFilters(prev => ({ ...prev, ativo: !!checked }))}
                />
                <Label htmlFor="ativo" className="text-sm">Incluir ativos</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="inativo" 
                  checked={filters.inativo}
                  onCheckedChange={(checked) => setFilters(prev => ({ ...prev, inativo: !!checked }))}
                />
                <Label htmlFor="inativo" className="text-sm">Incluir inativos</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="pendente" 
                  checked={filters.pendente}
                  onCheckedChange={(checked) => setFilters(prev => ({ ...prev, pendente: !!checked }))}
                />
                <Label htmlFor="pendente" className="text-sm">Incluir pendentes</Label>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2 pt-4">
            <Button onClick={handleApplyFilters} className="flex-1">
              Aplicar Filtros
            </Button>
            <Button variant="outline" onClick={handleClearFilters}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}