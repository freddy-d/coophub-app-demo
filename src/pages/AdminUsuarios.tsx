import { useState } from "react"
import { 
  Users, 
  Plus, 
  Search, 
  Shield, 
  UserCheck, 
  UserX,
  Eye,
  Edit,
  Ban,
  RotateCcw,
  Building2,
  Crown,
  User
} from "lucide-react"
import { Layout } from "@/components/Layout"
import { usePageSEO } from "@/hooks/usePageSEO"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const usuarios = [
  {
    id: 1,
    nome: "Admin Sistema",
    email: "admin@cooperativa.com",
    papel: "Administrador",
    unidades: ["Todas"],
    status: "Ativo",
    ultimoLogin: "2024-01-15 09:30",
    created: "2023-01-01"
  },
  {
    id: 2,
    nome: "João Gerente",
    email: "joao.gerente@cooperativa.com",
    papel: "Gerente",
    unidades: ["Matriz", "Filial Norte"],
    status: "Ativo",
    ultimoLogin: "2024-01-15 08:15",
    created: "2023-03-15"
  },
  {
    id: 3,
    nome: "Maria Operador",
    email: "maria.operador@cooperativa.com",
    papel: "Operador",
    unidades: ["Matriz"],
    status: "Ativo",
    ultimoLogin: "2024-01-14 16:45",
    created: "2023-06-20"
  },
  {
    id: 4,
    nome: "Carlos Técnico",
    email: "carlos.tecnico@cooperativa.com",
    papel: "Técnico",
    unidades: ["Filial Sul"],
    status: "Bloqueado",
    ultimoLogin: "2024-01-10 14:20",
    created: "2023-08-10"
  },
  {
    id: 5,
    nome: "Ana Fiscal",
    email: "ana.fiscal@cooperativa.com",
    papel: "Fiscal",
    unidades: ["Matriz", "Filial Norte", "Filial Sul"],
    status: "Pendente",
    ultimoLogin: "Nunca",
    created: "2024-01-14"
  }
]

const papeis = [
  { nome: "Administrador", cor: "destructive", icon: Crown },
  { nome: "Gerente", cor: "warning", icon: Shield },
  { nome: "Operador", cor: "default", icon: User },
  { nome: "Técnico", cor: "success", icon: UserCheck },
  { nome: "Fiscal", cor: "secondary", icon: Building2 }
]

export default function AdminUsuarios() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("todos")
  const [papelFilter, setPapelFilter] = useState("todos")

  usePageSEO({
    title: "Admin • Usuários | Cooperado Hub",
    description: "Gerencie usuários e permissões do sistema.",
    canonical: window.location.href,
  })

  const filteredUsuarios = usuarios.filter(usuario => {
    const matchesSearch = usuario.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         usuario.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "todos" || usuario.status === statusFilter
    const matchesPapel = papelFilter === "todos" || usuario.papel === papelFilter
    
    return matchesSearch && matchesStatus && matchesPapel
  })

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Ativo": return "success"
      case "Pendente": return "warning"
      case "Bloqueado": return "destructive"
      default: return "default"
    }
  }

  const getPapelInfo = (papel: string) => {
    return papeis.find(p => p.nome === papel) || { nome: papel, cor: "default", icon: User }
  }

  return (
    <Layout>
      <header className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Administração • Usuários</h1>
            <p className="text-sm text-muted-foreground">Controle de usuários e papéis</p>
          </div>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Novo Usuário
          </Button>
        </div>
      </header>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Usuários</p>
                <p className="text-xl font-semibold">25</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-success/10 p-2 rounded-lg">
                <UserCheck className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Ativos</p>
                <p className="text-xl font-semibold">22</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-warning/10 p-2 rounded-lg">
                <User className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pendentes</p>
                <p className="text-xl font-semibold">2</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-destructive/10 p-2 rounded-lg">
                <UserX className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Bloqueados</p>
                <p className="text-xl font-semibold">1</p>
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
                  placeholder="Buscar por nome ou email..."
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
                <SelectItem value="todos">Todos Status</SelectItem>
                <SelectItem value="Ativo">Ativo</SelectItem>
                <SelectItem value="Pendente">Pendente</SelectItem>
                <SelectItem value="Bloqueado">Bloqueado</SelectItem>
              </SelectContent>
            </Select>
            <Select value={papelFilter} onValueChange={setPapelFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Papel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos Papéis</SelectItem>
                <SelectItem value="Administrador">Administrador</SelectItem>
                <SelectItem value="Gerente">Gerente</SelectItem>
                <SelectItem value="Operador">Operador</SelectItem>
                <SelectItem value="Técnico">Técnico</SelectItem>
                <SelectItem value="Fiscal">Fiscal</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Lista de Usuários ({filteredUsuarios.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Papel</TableHead>
                <TableHead>Unidades</TableHead>
                <TableHead>Último Login</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsuarios.map((usuario) => {
                const papelInfo = getPapelInfo(usuario.papel)
                const PapelIcon = papelInfo.icon
                
                return (
                  <TableRow key={usuario.id}>
                    <TableCell className="font-medium">{usuario.nome}</TableCell>
                    <TableCell className="text-sm">{usuario.email}</TableCell>
                    <TableCell>
                      <Badge variant={papelInfo.cor as any}>
                        <PapelIcon className="h-3 w-3 mr-1" />
                        {usuario.papel}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {usuario.unidades.map((unidade, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {unidade}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">
                      {usuario.ultimoLogin}
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(usuario.status)}>
                        {usuario.status}
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
                        {usuario.status === "Ativo" ? (
                          <Button variant="ghost" size="sm">
                            <Ban className="h-4 w-4" />
                          </Button>
                        ) : usuario.status === "Bloqueado" ? (
                          <Button variant="ghost" size="sm">
                            <UserCheck className="h-4 w-4" />
                          </Button>
                        ) : (
                          <Button variant="ghost" size="sm">
                            <RotateCcw className="h-4 w-4" />
                          </Button>
                        )}
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
