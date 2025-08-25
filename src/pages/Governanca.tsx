import { useState } from "react"
import { 
  Users, 
  Plus, 
  Vote, 
  Calendar, 
  FileText, 
  CheckCircle,
  Clock,
  UserCheck,
  Wrench,
  MapPin,
  Eye,
  Download,
  Play,
  Square,
  TrendingUp
} from "lucide-react"
import { Layout } from "@/components/Layout"
import { usePageSEO } from "@/hooks/usePageSEO"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

const assembleias = [
  {
    id: 1,
    titulo: "Assembleia Ordinária 2024",
    data: "2024-03-15",
    horario: "14:00",
    quorum: "30%",
    participacao: "63%",
    status: "Ativa",
    totalVotos: 789,
    totalCooperados: 1247
  },
  {
    id: 2,
    titulo: "Aprovação Sobras Exercício 2023",
    data: "2024-02-20",
    horario: "19:00",
    quorum: "25%",
    participacao: "78%",
    status: "Encerrada",
    totalVotos: 972,
    totalCooperados: 1247
  },
  {
    id: 3,
    titulo: "Assembleia Extraordinária - Expansão",
    data: "2024-01-10",
    horario: "16:00",
    quorum: "40%",
    participacao: "45%",
    status: "Encerrada",
    totalVotos: 561,
    totalCooperados: 1247
  }
]

const ordemServico = [
  {
    id: 1,
    cooperado: "João Silva Santos",
    tecnico: "Dr. Carlos Agrônomo",
    motivo: "Análise de Solo",
    prioridade: "Alta",
    data: "2024-01-15",
    status: "Agendada",
    sla: "2 dias"
  },
  {
    id: 2,
    cooperado: "Fazenda Santa Maria",
    tecnico: "Eng. Maria Técnica",
    motivo: "Pragas na Cultura",
    prioridade: "Urgente",
    data: "2024-01-14",
    status: "Em Andamento",
    sla: "1 dia"
  },
  {
    id: 3,
    cooperado: "Carlos Roberto",
    tecnico: "Dr. João Especialista",
    motivo: "Consultoria Plantio",
    prioridade: "Normal",
    data: "2024-01-13",
    status: "Concluída",
    sla: "5 dias"
  }
]

const visitas = [
  {
    id: 1,
    tecnico: "Dr. Carlos Agrônomo",
    cooperado: "João Silva Santos",
    data: "2024-01-15",
    horario: "09:00",
    talhao: "Talhão A-12",
    recomendacoes: "Aplicar calcário conforme análise",
    receituario: true
  },
  {
    id: 2,
    tecnico: "Eng. Maria Técnica",
    cooperado: "Fazenda Santa Maria",
    data: "2024-01-14",
    horario: "14:30",
    talhao: "Área Norte",
    recomendacoes: "Monitoramento de pragas semanal",
    receituario: false
  }
]

export default function Governanca() {
  const [activeTab, setActiveTab] = useState("assembleias")

  usePageSEO({
    title: "Governança | Cooperado Hub",
    description: "Assembleias, votos e assistência técnica.",
    canonical: window.location.href,
  })

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Ativa": case "Em Andamento": return "success"
      case "Encerrada": case "Concluída": return "default"
      case "Agendada": return "warning"
      default: return "default"
    }
  }

  const getPrioridadeVariant = (prioridade: string) => {
    switch (prioridade) {
      case "Urgente": return "destructive"
      case "Alta": return "warning"
      case "Normal": return "default"
      default: return "default"
    }
  }

  return (
    <Layout>
      <header className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Governança</h1>
            <p className="text-sm text-muted-foreground">Assembleias & Assistência Técnica</p>
          </div>
          <div className="flex gap-2">
            {activeTab === "assembleias" ? (
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Nova Assembleia
              </Button>
            ) : activeTab === "assistencia" ? (
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Nova OS
              </Button>
            ) : (
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Registrar Visita
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Vote className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Assembleias Ativas</p>
                <p className="text-xl font-semibold">1</p>
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
                <p className="text-sm text-muted-foreground">Participação Média</p>
                <p className="text-xl font-semibold">63%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-warning/10 p-2 rounded-lg">
                <Wrench className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">OS Abertas</p>
                <p className="text-xl font-semibold">12</p>
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
                <p className="text-sm text-muted-foreground">Visitas Hoje</p>
                <p className="text-xl font-semibold">5</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="assembleias">
            <Vote className="h-4 w-4 mr-2" />
            Assembleias
          </TabsTrigger>
          <TabsTrigger value="assistencia">
            <Wrench className="h-4 w-4 mr-2" />
            Assistência Técnica
          </TabsTrigger>
          <TabsTrigger value="visitas">
            <MapPin className="h-4 w-4 mr-2" />
            Visitas
          </TabsTrigger>
        </TabsList>

        <TabsContent value="assembleias" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Assembleias</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Título</TableHead>
                    <TableHead>Data/Horário</TableHead>
                    <TableHead>Quórum</TableHead>
                    <TableHead>Participação</TableHead>
                    <TableHead>Votos</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {assembleias.map((assembleia) => (
                    <TableRow key={assembleia.id}>
                      <TableCell className="font-medium">{assembleia.titulo}</TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="text-sm">{assembleia.data}</div>
                          <div className="text-xs text-muted-foreground">{assembleia.horario}</div>
                        </div>
                      </TableCell>
                      <TableCell>{assembleia.quorum}</TableCell>
                      <TableCell>
                        <div className="space-y-2">
                          <div className="text-sm font-medium">{assembleia.participacao}</div>
                          <Progress 
                            value={parseInt(assembleia.participacao)} 
                            className="h-2"
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {assembleia.totalVotos} / {assembleia.totalCooperados}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(assembleia.status)}>
                          {assembleia.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          {assembleia.status === "Ativa" ? (
                            <>
                              <Button variant="ghost" size="sm">
                                <Vote className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Square className="h-4 w-4" />
                              </Button>
                            </>
                          ) : (
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assistencia" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Ordens de Serviço</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cooperado</TableHead>
                    <TableHead>Técnico</TableHead>
                    <TableHead>Motivo</TableHead>
                    <TableHead>Prioridade</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>SLA</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ordemServico.map((os) => (
                    <TableRow key={os.id}>
                      <TableCell className="font-medium">{os.cooperado}</TableCell>
                      <TableCell>{os.tecnico}</TableCell>
                      <TableCell>{os.motivo}</TableCell>
                      <TableCell>
                        <Badge variant={getPrioridadeVariant(os.prioridade)}>
                          {os.prioridade}
                        </Badge>
                      </TableCell>
                      <TableCell>{os.data}</TableCell>
                      <TableCell className="text-sm">{os.sla}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(os.status)}>
                          {os.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          {os.status === "Agendada" && (
                            <Button variant="ghost" size="sm">
                              <Play className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visitas" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Visitas Técnicas</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Técnico</TableHead>
                    <TableHead>Cooperado</TableHead>
                    <TableHead>Data/Horário</TableHead>
                    <TableHead>Local</TableHead>
                    <TableHead>Recomendações</TableHead>
                    <TableHead>Receituário</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {visitas.map((visita) => (
                    <TableRow key={visita.id}>
                      <TableCell className="font-medium">{visita.tecnico}</TableCell>
                      <TableCell>{visita.cooperado}</TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="text-sm">{visita.data}</div>
                          <div className="text-xs text-muted-foreground">{visita.horario}</div>
                        </div>
                      </TableCell>
                      <TableCell>{visita.talhao}</TableCell>
                      <TableCell className="max-w-[200px] truncate">
                        {visita.recomendacoes}
                      </TableCell>
                      <TableCell>
                        {visita.receituario ? (
                          <Badge variant="success">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Sim
                          </Badge>
                        ) : (
                          <Badge variant="outline">Não</Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          {visita.receituario && (
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Layout>
  )
}
