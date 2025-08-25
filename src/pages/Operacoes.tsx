import { useState } from "react";
import {
  Calendar,
  Plus,
  Truck,
  Clock,
  CheckCircle,
  AlertCircle,
  QrCode,
  Scale,
  FileText,
  Eye,
  Printer,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { usePageSEO } from "@/hooks/usePageSEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const agendamentos = [
  {
    id: 1,
    data: "2024-01-15",
    janela: "08:00 - 10:00",
    placa: "ABC-1234",
    produto: "Soja",
    cooperado: "João Silva Santos",
    status: "Confirmado",
    qrCode: "QR123456",
  },
  {
    id: 2,
    data: "2024-01-15",
    janela: "10:00 - 12:00",
    placa: "DEF-5678",
    produto: "Milho",
    cooperado: "Fazenda Santa Maria",
    status: "Check-in",
    qrCode: "QR789012",
  },
  {
    id: 3,
    data: "2024-01-15",
    janela: "14:00 - 16:00",
    placa: "GHI-9012",
    produto: "Trigo",
    cooperado: "Carlos Roberto",
    status: "Aguardando",
    qrCode: "QR345678",
  },
];

const romaneios = [
  {
    id: 1,
    numero: "ROM-2024-001",
    unidade: "Matriz",
    produto: "Soja",
    cooperado: "João Silva Santos",
    bruto: "25.480",
    tara: "14.230",
    liquido: "11.250",
    umidade: "12.5%",
    impureza: "1.2%",
    status: "Fechado",
  },
  {
    id: 2,
    numero: "ROM-2024-002",
    unidade: "Filial Norte",
    produto: "Milho",
    cooperado: "Fazenda Santa Maria",
    bruto: "28.900",
    tara: "14.100",
    liquido: "14.800",
    umidade: "13.8%",
    impureza: "0.8%",
    status: "Rascunho",
  },
  {
    id: 3,
    numero: "ROM-2024-003",
    unidade: "Matriz",
    produto: "Trigo",
    cooperado: "Maria Oliveira",
    bruto: "22.150",
    tara: "13.950",
    liquido: "8.200",
    umidade: "11.2%",
    impureza: "1.5%",
    status: "Fechado",
  },
];

export default function Operacoes() {
  const [activeTab, setActiveTab] = useState("agendamentos");

  usePageSEO({
    title: "Operações | Cooperado Hub",
    description:
      "Agendamentos e Romaneios para reduzir filas e formalizar entregas.",
    canonical: window.location.href,
  });

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Confirmado":
        return "default";
      case "Check-in":
        return "success";
      case "Aguardando":
        return "warning";
      case "Fechado":
        return "success";
      case "Rascunho":
        return "warning";
      default:
        return "default";
    }
  };

  return (
    <Layout>
      <header className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">
              Operações
            </h1>
            <p className="text-sm text-muted-foreground">
              Agendamentos & Romaneios
            </p>
          </div>
          <div className="flex gap-2">
            {activeTab === "agendamentos" ? (
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Novo Agendamento
              </Button>
            ) : (
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Novo Romaneio
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
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Agendamentos Hoje
                </p>
                <p className="text-xl font-semibold">24</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-warning/10 p-2 rounded-lg">
                <Clock className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Na Fila</p>
                <p className="text-xl font-semibold">8</p>
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
                <p className="text-sm text-muted-foreground">Concluídas</p>
                <p className="text-xl font-semibold">16</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-secondary/10 p-2 rounded-lg">
                <FileText className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Romaneios Abertos
                </p>
                <p className="text-xl font-semibold">5</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="agendamentos">
            <Calendar className="h-4 w-4 mr-2" />
            Agendamentos
          </TabsTrigger>
          <TabsTrigger value="romaneios">
            <Scale className="h-4 w-4 mr-2" />
            Romaneios
          </TabsTrigger>
        </TabsList>

        <TabsContent value="agendamentos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Agendamentos de Hoje</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>Janela</TableHead>
                    <TableHead>Placa</TableHead>
                    <TableHead>Produto</TableHead>
                    <TableHead>Cooperado</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {agendamentos.map((agendamento) => (
                    <TableRow key={agendamento.id}>
                      <TableCell>{agendamento.data}</TableCell>
                      <TableCell className="font-mono text-sm">
                        {agendamento.janela}
                      </TableCell>
                      <TableCell className="font-mono font-medium">
                        {agendamento.placa}
                      </TableCell>
                      <TableCell>{agendamento.produto}</TableCell>
                      <TableCell>{agendamento.cooperado}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(agendamento.status)}>
                          {agendamento.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <QrCode className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          {agendamento.status === "Confirmado" && (
                            <Button variant="ghost" size="sm">
                              <CheckCircle className="h-4 w-4" />
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

        <TabsContent value="romaneios" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Romaneios Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Número</TableHead>
                    <TableHead>Unidade</TableHead>
                    <TableHead>Produto</TableHead>
                    <TableHead>Cooperado</TableHead>
                    <TableHead>Peso Bruto</TableHead>
                    <TableHead>Peso Líquido</TableHead>
                    <TableHead>Classificação</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {romaneios.map((romaneio) => (
                    <TableRow key={romaneio.id}>
                      <TableCell className="font-mono font-medium">
                        {romaneio.numero}
                      </TableCell>
                      <TableCell>{romaneio.unidade}</TableCell>
                      <TableCell>{romaneio.produto}</TableCell>
                      <TableCell>{romaneio.cooperado}</TableCell>
                      <TableCell className="font-mono">
                        {romaneio.bruto} kg
                      </TableCell>
                      <TableCell className="font-mono font-medium">
                        {romaneio.liquido} kg
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="text-xs">
                            Umid: {romaneio.umidade}
                          </div>
                          <div className="text-xs">
                            Imp: {romaneio.impureza}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(romaneio.status)}>
                          {romaneio.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Printer className="h-4 w-4" />
                          </Button>
                          {romaneio.status === "Rascunho" && (
                            <Button variant="ghost" size="sm">
                              <Scale className="h-4 w-4" />
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
  );
}
