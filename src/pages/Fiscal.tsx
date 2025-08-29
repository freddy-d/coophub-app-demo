import { useState } from "react"
import { 
  Upload, 
  Plus, 
  FileText, 
  AlertCircle, 
  CheckCircle, 
  DollarSign,
  QrCode,
  CreditCard,
  Download,
  Eye,
  RefreshCw,
  Send
} from "lucide-react"
import { Layout } from "@/components/Layout"
import { usePageSEO } from "@/hooks/usePageSEO"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const documentosFiscais = [
  {
    id: 1,
    tipo: "NF-e",
    chave: "35240112345678901234567890123456789012345678",
    emissao: "2024-01-15",
    emitente: "Fornecedor ABC Ltda",
    valor: "R$ 25.450,00",
    status: "Autorizado",
    unidade: "Matriz"
  },
  {
    id: 2,
    tipo: "NFS-e",
    chave: "12345678901234567890",
    emissao: "2024-01-14",
    emitente: "Prestador Serviços XYZ",
    valor: "R$ 3.200,00",
    status: "Erro",
    unidade: "Filial Norte"
  },
  {
    id: 3,
    tipo: "CT-e",
    chave: "35240198765432109876543210987654321098765432",
    emissao: "2024-01-13",
    emitente: "Transportadora Rápida",
    valor: "R$ 1.850,00",
    status: "Autorizado",
    unidade: "Matriz"
  }
]

const cobrancas = [
  {
    id: 1,
    cooperado: "João Silva Santos",
    valor: "R$ 2.450,00",
    vencimento: "2024-01-20",
    tipo: "Pix",
    status: "Aberta",
    descricao: "Fornecimento de Insumos"
  },
  {
    id: 2,
    cooperado: "Fazenda Santa Maria",
    valor: "R$ 15.800,00",
    vencimento: "2024-01-18",
    tipo: "Boleto",
    status: "Paga",
    descricao: "Serviços de Colheita"
  },
  {
    id: 3,
    cooperado: "Carlos Roberto",
    valor: "R$ 890,50",
    vencimento: "2024-01-25",
    tipo: "Pix",
    status: "Atrasada",
    descricao: "Taxa de Associação"
  }
]

export default function Fiscal() {
  const [activeTab, setActiveTab] = useState("documentos")

  usePageSEO({
    title: "Fiscal & Financeiro | Cooperado Agro Hub",
    description: "Inbox fiscal, emissão básica e cobranças Pix/Boletos.",
    canonical: window.location.href,
  })

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Autorizado": case "Paga": return "success"
      case "Erro": case "Atrasada": return "destructive"
      case "Aberta": return "warning"
      default: return "default"
    }
  }

  return (
    <Layout>
      <header className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Fiscal & Financeiro</h1>
            <p className="text-sm text-muted-foreground">XML, Emissão, Cobranças e Conciliação</p>
          </div>
          <div className="flex gap-2">
            {activeTab === "documentos" ? (
              <>
                <Button variant="outline" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  Ingestar XML
                </Button>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Emitir NF-e
                </Button>
              </>
            ) : (
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Nova Cobrança
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
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Docs. Esta Semana</p>
                <p className="text-xl font-semibold">156</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-destructive/10 p-2 rounded-lg">
                <AlertCircle className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Com Erro</p>
                <p className="text-xl font-semibold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-warning/10 p-2 rounded-lg">
                <DollarSign className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">A Receber</p>
                <p className="text-xl font-semibold">R$ 892.450</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-destructive/10 p-2 rounded-lg">
                <AlertCircle className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Em Atraso</p>
                <p className="text-xl font-semibold">R$ 45.320</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="documentos">
            <FileText className="h-4 w-4 mr-2" />
            Documentos Fiscais
          </TabsTrigger>
          <TabsTrigger value="cobrancas">
            <DollarSign className="h-4 w-4 mr-2" />
            Cobranças
          </TabsTrigger>
          <TabsTrigger value="emissao">
            <Send className="h-4 w-4 mr-2" />
            Emissão
          </TabsTrigger>
        </TabsList>

        <TabsContent value="documentos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Inbox Fiscal</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Chave de Acesso</TableHead>
                    <TableHead>Emissão</TableHead>
                    <TableHead>Emitente</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Unidade</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {documentosFiscais.map((documento) => (
                    <TableRow key={documento.id}>
                      <TableCell>
                        <Badge variant="outline">{documento.tipo}</Badge>
                      </TableCell>
                      <TableCell className="font-mono text-xs max-w-[200px] truncate">
                        {documento.chave}
                      </TableCell>
                      <TableCell>{documento.emissao}</TableCell>
                      <TableCell>{documento.emitente}</TableCell>
                      <TableCell className="font-mono font-medium">{documento.valor}</TableCell>
                      <TableCell>{documento.unidade}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(documento.status)}>
                          {documento.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          {documento.status === "Erro" && (
                            <Button variant="ghost" size="sm">
                              <RefreshCw className="h-4 w-4" />
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

        <TabsContent value="cobrancas" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Cobranças</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cooperado</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Vencimento</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cobrancas.map((cobranca) => (
                    <TableRow key={cobranca.id}>
                      <TableCell className="font-medium">{cobranca.cooperado}</TableCell>
                      <TableCell>{cobranca.descricao}</TableCell>
                      <TableCell className="font-mono font-medium">{cobranca.valor}</TableCell>
                      <TableCell>{cobranca.vencimento}</TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {cobranca.tipo === "Pix" ? (
                            <><QrCode className="h-3 w-3 mr-1" />Pix</>
                          ) : (
                            <><CreditCard className="h-3 w-3 mr-1" />Boleto</>
                          )}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(cobranca.status)}>
                          {cobranca.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          {cobranca.status === "Aberta" && (
                            <>
                              <Button variant="ghost" size="sm">
                                <Send className="h-4 w-4" />
                              </Button>
                              {cobranca.tipo === "Pix" && (
                                <Button variant="ghost" size="sm">
                                  <QrCode className="h-4 w-4" />
                                </Button>
                              )}
                            </>
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

        <TabsContent value="emissao" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Emissão de Documentos Fiscais</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="text-center space-y-4">
                    <div className="bg-primary/10 p-4 rounded-lg inline-block">
                      <FileText className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold">Emitir NF-e</h3>
                    <p className="text-sm text-muted-foreground">
                      Emissão de Nota Fiscal Eletrônica de produtos
                    </p>
                    <Button className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Nova NF-e
                    </Button>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="text-center space-y-4">
                    <div className="bg-secondary/10 p-4 rounded-lg inline-block">
                      <Send className="h-8 w-8 text-secondary-foreground" />
                    </div>
                    <h3 className="font-semibold">Emitir NFS-e</h3>
                    <p className="text-sm text-muted-foreground">
                      Emissão de Nota Fiscal de Serviços Eletrônica
                    </p>
                    <Button variant="secondary" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Nova NFS-e
                    </Button>
                  </div>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Layout>
  )
}
