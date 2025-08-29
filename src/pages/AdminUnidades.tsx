import { useState } from "react"
import { 
  Building2, 
  Plus, 
  Search, 
  MapPin, 
  Phone, 
  Mail,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react"
import { Layout } from "@/components/Layout"
import { usePageSEO } from "@/hooks/usePageSEO"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const unidades = [
  {
    id: 1,
    nome: "Matriz",
    codigo: "MTZ",
    endereco: "Rua Principal, 123 - Centro",
    cidade: "São Paulo",
    uf: "SP",
    cep: "01234-567",
    telefone: "(11) 3456-7890",
    email: "matriz@cooperativa.com",
    gerente: "João Silva",
    status: "Ativa",
    cooperados: 856,
    capacidade: "50.000 ton",
    tipo: "Recebimento"
  },
  {
    id: 2,
    nome: "Filial Norte",
    codigo: "FLN",
    endereco: "Av. Industrial, 456 - Distrito Norte",
    cidade: "Campinas",
    uf: "SP",
    cep: "13456-789",
    telefone: "(19) 3456-7890",
    email: "norte@cooperativa.com",
    gerente: "Maria Santos",
    status: "Ativa",
    cooperados: 234,
    capacidade: "25.000 ton",
    tipo: "Recebimento"
  },
  {
    id: 3,
    nome: "Filial Sul",
    codigo: "FLS",
    endereco: "Rod. Sul, Km 45 - Rural",
    cidade: "Sorocaba",
    uf: "SP",
    cep: "18123-456",
    telefone: "(15) 3456-7890",
    email: "sul@cooperativa.com",
    gerente: "Carlos Oliveira",
    status: "Manutenção",
    cooperados: 157,
    capacidade: "30.000 ton",
    tipo: "Armazenagem"
  },
  {
    id: 4,
    nome: "Centro de Distribuição",
    codigo: "CDI",
    endereco: "Av. Logística, 789 - Industrial",
    cidade: "Jundiaí",
    uf: "SP",
    cep: "13200-123",
    telefone: "(11) 3456-7891",
    email: "distribuicao@cooperativa.com",
    gerente: "Ana Costa",
    status: "Inativa",
    cooperados: 0,
    capacidade: "100.000 ton",
    tipo: "Distribuição"
  }
]

export default function AdminUnidades() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("todas")
  const [tipoFilter, setTipoFilter] = useState("todos")

  usePageSEO({
    title: "Admin • Unidades | Cooperado Agro Hub",
    description: "Cadastro e gestão de unidades do tenant.",
    canonical: window.location.href,
  })

  const filteredUnidades = unidades.filter(unidade => {
    const matchesSearch = unidade.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         unidade.codigo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         unidade.cidade.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "todas" || unidade.status === statusFilter
    const matchesTipo = tipoFilter === "todos" || unidade.tipo === tipoFilter
    
    return matchesSearch && matchesStatus && matchesTipo
  })

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Ativa": return "success"
      case "Manutenção": return "warning"
      case "Inativa": return "destructive"
      default: return "default"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Ativa": return CheckCircle
      case "Manutenção": return AlertCircle
      case "Inativa": return XCircle
      default: return AlertCircle
    }
  }

  return (
    <Layout>
      <header className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Administração • Unidades</h1>
            <p className="text-sm text-muted-foreground">Configuração das unidades</p>
          </div>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Nova Unidade
          </Button>
        </div>
      </header>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Unidades</p>
                <p className="text-xl font-semibold">4</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-success/10 p-2 rounded-lg">
                <CheckCircle className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Ativas</p>
                <p className="text-xl font-semibold">2</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-warning/10 p-2 rounded-lg">
                <AlertCircle className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Em Manutenção</p>
                <p className="text-xl font-semibold">1</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-secondary/10 p-2 rounded-lg">
                <MapPin className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Capacidade Total</p>
                <p className="text-xl font-semibold">205k ton</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por nome, código ou cidade..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todas">Todas</SelectItem>
                <SelectItem value="Ativa">Ativa</SelectItem>
                <SelectItem value="Manutenção">Manutenção</SelectItem>
                <SelectItem value="Inativa">Inativa</SelectItem>
              </SelectContent>
            </Select>
            <Select value={tipoFilter} onValueChange={setTipoFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos Tipos</SelectItem>
                <SelectItem value="Recebimento">Recebimento</SelectItem>
                <SelectItem value="Armazenagem">Armazenagem</SelectItem>
                <SelectItem value="Distribuição">Distribuição</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Lista de Unidades ({filteredUnidades.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Unidade</TableHead>
                <TableHead>Localização</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Gerente</TableHead>
                <TableHead>Cooperados</TableHead>
                <TableHead>Capacidade</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUnidades.map((unidade) => {
                const StatusIcon = getStatusIcon(unidade.status)
                
                return (
                  <TableRow key={unidade.id}>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{unidade.nome}</div>
                        <div className="text-xs text-muted-foreground">
                          <Badge variant="outline">{unidade.codigo}</Badge>
                          <Badge variant="outline" className="ml-1">{unidade.tipo}</Badge>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">{unidade.endereco}</div>
                        <div className="text-xs text-muted-foreground">
                          {unidade.cidade}/{unidade.uf} - {unidade.cep}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-xs flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          {unidade.telefone}
                        </div>
                        <div className="text-xs flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          {unidade.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">{unidade.gerente}</TableCell>
                    <TableCell className="text-center font-medium">{unidade.cooperados}</TableCell>
                    <TableCell className="text-sm">{unidade.capacidade}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(unidade.status)}>
                        <StatusIcon className="h-3 w-3 mr-1" />
                        {unidade.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Layout>
  )
}
