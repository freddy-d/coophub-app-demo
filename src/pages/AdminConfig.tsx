import { useState } from "react"
import { Layout } from "@/components/Layout"
import { usePageSEO } from "@/hooks/usePageSEO"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { 
  Settings, 
  Database, 
  Mail, 
  Bell, 
  Shield, 
  Upload,
  Download,
  HardDrive,
  RefreshCw,
  Save,
  AlertTriangle,
  CheckCircle
} from "lucide-react"

export default function AdminConfig() {
  usePageSEO({
    title: "Admin • Configurações | Cooperado Agro Hub",
    description: "Configurações do tenant, certificados e integrações.",
    canonical: window.location.href,
  })
  
  const [activeTab, setActiveTab] = useState("geral")
  const [notifications, setNotifications] = useState(true)
  const [autoBackup, setAutoBackup] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(false)

  return (
    <Layout>
      <div className="space-y-6">
        <header>
          <h1 className="text-2xl font-semibold text-foreground">Administração • Configurações</h1>
          <p className="text-sm text-muted-foreground">Tenant, integrações e branding</p>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="geral">Geral</TabsTrigger>
            <TabsTrigger value="notificacoes">Notificações</TabsTrigger>
            <TabsTrigger value="seguranca">Segurança</TabsTrigger>
            <TabsTrigger value="backup">Backup</TabsTrigger>
            <TabsTrigger value="sistema">Sistema</TabsTrigger>
          </TabsList>

          <TabsContent value="geral" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Configurações Gerais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="cooperativa-name">Nome da Cooperativa</Label>
                    <Input 
                      id="cooperativa-name" 
                      defaultValue="Cooperativa Rural Exemplo LTDA"
                      className="max-w-md"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cnpj">CNPJ</Label>
                    <Input 
                      id="cnpj" 
                      defaultValue="12.345.678/0001-90"
                      className="max-w-md"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="endereco">Endereço Principal</Label>
                    <Textarea 
                      id="endereco" 
                      defaultValue="Rua das Cooperativas, 123 - Centro - Cidade Exemplo - SP - CEP: 12345-678"
                      className="max-w-md"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="telefone">Telefone Principal</Label>
                    <Input 
                      id="telefone" 
                      defaultValue="(11) 3333-4444"
                      className="max-w-md"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email Principal</Label>
                    <Input 
                      id="email" 
                      defaultValue="contato@cooperativa.com.br"
                      className="max-w-md"
                    />
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex gap-3">
                  <Button className="gap-2">
                    <Save className="h-4 w-4" />
                    Salvar Alterações
                  </Button>
                  <Button variant="outline">
                    Cancelar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notificacoes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Configurações de Notificações
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Notificações do Sistema</Label>
                      <p className="text-sm text-muted-foreground">
                        Receber notificações sobre eventos do sistema
                      </p>
                    </div>
                    <Switch 
                      checked={notifications} 
                      onCheckedChange={setNotifications}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Notificações por Email</Label>
                      <p className="text-sm text-muted-foreground">
                        Enviar notificações importantes por email
                      </p>
                    </div>
                    <Switch 
                      checked={emailNotifications} 
                      onCheckedChange={setEmailNotifications}
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Configurações de Email</h4>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="smtp-server">Servidor SMTP</Label>
                      <Input 
                        id="smtp-server" 
                        placeholder="smtp.gmail.com"
                        className="max-w-md"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="smtp-port">Porta SMTP</Label>
                      <Input 
                        id="smtp-port" 
                        placeholder="587"
                        className="max-w-xs"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email-usuario">Email do Sistema</Label>
                      <Input 
                        id="email-usuario" 
                        placeholder="sistema@cooperativa.com.br"
                        className="max-w-md"
                      />
                    </div>
                  </div>
                </div>

                <Separator />
                
                <div className="flex gap-3">
                  <Button className="gap-2">
                    <Save className="h-4 w-4" />
                    Salvar Configurações
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Mail className="h-4 w-4" />
                    Testar Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="seguranca" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Configurações de Segurança
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="session-timeout">Timeout da Sessão (minutos)</Label>
                    <Input 
                      id="session-timeout" 
                      defaultValue="60"
                      type="number"
                      className="max-w-xs"
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="password-policy">Política de Senhas</Label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm">Mínimo 8 caracteres</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm">Letras maiúsculas e minúsculas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm">Pelo menos um número</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Log de Auditoria</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Login Admin - João Silva</p>
                        <p className="text-xs text-muted-foreground">IP: 192.168.1.100 - 15/01/2024 14:30</p>
                      </div>
                      <CheckCircle className="h-4 w-4 text-success" />
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Alteração de Configurações</p>
                        <p className="text-xs text-muted-foreground">Usuário: admin - 15/01/2024 12:15</p>
                      </div>
                      <AlertTriangle className="h-4 w-4 text-warning" />
                    </div>
                  </div>
                </div>

                <Separator />
                
                <div className="flex gap-3">
                  <Button className="gap-2">
                    <Save className="h-4 w-4" />
                    Salvar Configurações
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Exportar Logs
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="backup" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HardDrive className="h-5 w-5" />
                  Backup e Restauração
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Backup Automático</Label>
                      <p className="text-sm text-muted-foreground">
                        Realizar backup automático diário às 2:00
                      </p>
                    </div>
                    <Switch 
                      checked={autoBackup} 
                      onCheckedChange={setAutoBackup}
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Backup Manual</h4>
                  <div className="flex gap-3">
                    <Button className="gap-2">
                      <Download className="h-4 w-4" />
                      Criar Backup Agora
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Upload className="h-4 w-4" />
                      Restaurar Backup
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Histórico de Backups</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">backup_20240115_020000.sql</p>
                        <p className="text-xs text-muted-foreground">15/01/2024 02:00 - 45.2 MB</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">backup_20240114_020000.sql</p>
                        <p className="text-xs text-muted-foreground">14/01/2024 02:00 - 44.8 MB</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sistema" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Informações do Sistema
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Versão do Sistema</Label>
                    <p className="text-sm text-muted-foreground">v2.1.0</p>
                  </div>
                  <div className="space-y-2">
                    <Label>Última Atualização</Label>
                    <p className="text-sm text-muted-foreground">15/01/2024</p>
                  </div>
                  <div className="space-y-2">
                    <Label>Banco de Dados</Label>
                    <p className="text-sm text-muted-foreground">PostgreSQL 14.2</p>
                  </div>
                  <div className="space-y-2">
                    <Label>Espaço Utilizado</Label>
                    <p className="text-sm text-muted-foreground">2.3 GB / 10 GB</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Manutenção do Sistema</h4>
                  <div className="flex gap-3">
                    <Button variant="outline" className="gap-2">
                      <RefreshCw className="h-4 w-4" />
                      Verificar Atualizações
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Database className="h-4 w-4" />
                      Otimizar Banco
                    </Button>
                    <Button variant="destructive" className="gap-2">
                      <AlertTriangle className="h-4 w-4" />
                      Limpar Cache
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Status dos Serviços</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Servidor Web</span>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-success rounded-full"></div>
                        <span className="text-sm text-success">Online</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Banco de Dados</span>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-success rounded-full"></div>
                        <span className="text-sm text-success">Online</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Email Service</span>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-warning rounded-full"></div>
                        <span className="text-sm text-warning">Verificando</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}