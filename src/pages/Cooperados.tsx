import { useState } from "react"
import { Layout } from "@/components/Layout"
import { usePageSEO } from "@/hooks/usePageSEO"
import { DashboardCard } from "@/components/DashboardCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Users, 
  UserPlus, 
  UserCheck, 
  UserX, 
  Search, 
  Filter,
  Download,
  Upload,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit,
  Trash2
} from "lucide-react"

export default function Cooperados() {
  usePageSEO({
    title: "Cooperados | Cooperado Agro Hub",
    description: "Lista e gestão de cooperados com busca e ações rápidas.",
    canonical: window.location.href,
  })
  
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("ativos")

  const cooperados = [
    { id: 1, nome: "João Silva", cpf: "123.456.789-00", email: "joao@email.com", telefone: "(11) 99999-9999", status: "Ativo", ingresso: "15/03/2020", unidade: "Matriz" },
    { id: 2, nome: "Maria Santos", cpf: "987.654.321-00", email: "maria@email.com", telefone: "(11) 88888-8888", status: "Ativo", ingresso: "22/07/2019", unidade: "Filial A" },
    { id: 3, nome: "Pedro Costa", cpf: "456.789.123-00", email: "pedro@email.com", telefone: "(11) 77777-7777", status: "Inativo", ingresso: "10/11/2021", unidade: "Filial B" },
    { id: 4, nome: "Ana Oliveira", cpf: "321.654.987-00", email: "ana@email.com", telefone: "(11) 66666-6666", status: "Pendente", ingresso: "05/01/2024", unidade: "Matriz" },
  ]

  const filteredCooperados = cooperados.filter(cooperado =>
    cooperado.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cooperado.cpf.includes(searchTerm) ||
    cooperado.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <header>
            <h1 className="text-2xl font-semibold text-foreground">Cooperados</h1>
            <p className="text-sm text-muted-foreground">Gestão 360 do cooperado</p>
          </header>
          <Button className="gap-2">
            <UserPlus className="h-4 w-4" />
            Novo Cooperado
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <DashboardCard
            title="Total de Cooperados"
            value="1,247"
            description="Todos os membros cadastrados"
            icon={<Users className="h-4 w-4" />}
            variant="default"
            trend={{
              value: "+12",
              label: "este mês",
              isPositive: true
            }}
          />
          <DashboardCard
            title="Cooperados Ativos"
            value="1,198"
            description="Membros com status ativo"
            icon={<UserCheck className="h-4 w-4" />}
            variant="success"
            badges={[
              { label: "96% ativos", variant: "success" }
            ]}
          />
          <DashboardCard
            title="Aguardando Aprovação"
            value="23"
            description="Solicitações pendentes"
            icon={<UserX className="h-4 w-4" />}
            variant="warning"
            actions={[
              { label: "Revisar", onClick: () => {}, variant: "outline" }
            ]}
          />
          <DashboardCard
            title="Novos este Mês"
            value="49"
            description="Cooperados ingressantes"
            icon={<UserPlus className="h-4 w-4" />}
            variant="default"
            trend={{
              value: "+18%",
              label: "vs mês anterior",
              isPositive: true
            }}
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Gestão de Cooperados</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
              <TabsList>
                <TabsTrigger value="ativos">Ativos</TabsTrigger>
                <TabsTrigger value="inativos">Inativos</TabsTrigger>
                <TabsTrigger value="pendentes">Pendentes</TabsTrigger>
                <TabsTrigger value="todos">Todos</TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Buscar por nome, CPF ou email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filtros
                </Button>
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Exportar
                </Button>
                <Button variant="outline" className="gap-2">
                  <Upload className="h-4 w-4" />
                  Importar
                </Button>
              </div>

              <TabsContent value="ativos" className="space-y-4">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>CPF</TableHead>
                        <TableHead>Contato</TableHead>
                        <TableHead>Unidade</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Ingresso</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredCooperados
                        .filter(c => activeTab === "todos" || 
                          (activeTab === "ativos" && c.status === "Ativo") ||
                          (activeTab === "inativos" && c.status === "Inativo") ||
                          (activeTab === "pendentes" && c.status === "Pendente"))
                        .map((cooperado) => (
                        <TableRow key={cooperado.id}>
                          <TableCell className="font-medium">{cooperado.nome}</TableCell>
                          <TableCell>{cooperado.cpf}</TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex items-center gap-1 text-sm">
                                <Mail className="h-3 w-3" />
                                {cooperado.email}
                              </div>
                              <div className="flex items-center gap-1 text-sm">
                                <Phone className="h-3 w-3" />
                                {cooperado.telefone}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {cooperado.unidade}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant={
                              cooperado.status === "Ativo" ? "success" :
                              cooperado.status === "Inativo" ? "destructive" : "warning"
                            }>
                              {cooperado.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {cooperado.ingresso}
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="inativos">
                <div className="text-center py-8">
                  <UserX className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Nenhum cooperado inativo encontrado</p>
                </div>
              </TabsContent>

              <TabsContent value="pendentes">
                <div className="text-center py-8">
                  <UserPlus className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Nenhuma solicitação pendente</p>
                </div>
              </TabsContent>

              <TabsContent value="todos">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>CPF</TableHead>
                        <TableHead>Contato</TableHead>
                        <TableHead>Unidade</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Ingresso</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredCooperados.map((cooperado) => (
                        <TableRow key={cooperado.id}>
                          <TableCell className="font-medium">{cooperado.nome}</TableCell>
                          <TableCell>{cooperado.cpf}</TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex items-center gap-1 text-sm">
                                <Mail className="h-3 w-3" />
                                {cooperado.email}
                              </div>
                              <div className="flex items-center gap-1 text-sm">
                                <Phone className="h-3 w-3" />
                                {cooperado.telefone}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {cooperado.unidade}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant={
                              cooperado.status === "Ativo" ? "success" :
                              cooperado.status === "Inativo" ? "destructive" : "warning"
                            }>
                              {cooperado.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {cooperado.ingresso}
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}