import { Search, Bell, ChevronDown, Wifi, WifiOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SidebarTrigger } from "@/components/ui/sidebar"

interface HeaderProps {
  isOnline?: boolean
}

export function Header({ isOnline = true }: HeaderProps) {
  return (
    <header className="h-16 border-b bg-card/50 backdrop-blur-sm flex items-center px-4 gap-4">
      <SidebarTrigger className="mr-2" />
      
      {/* Tenant/Unit selector */}
      <Select defaultValue="unidade-1">
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Selecionar unidade" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="unidade-1">Unidade Central</SelectItem>
          <SelectItem value="unidade-2">Unidade Norte</SelectItem>
          <SelectItem value="unidade-3">Unidade Sul</SelectItem>
        </SelectContent>
      </Select>

      {/* Global search */}
      <div className="flex-1 max-w-md relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Buscar cooperado, documento, romaneio..." 
          className="pl-10"
        />
      </div>

      <div className="flex items-center gap-3">
        {/* Connection status */}
        <div className="flex items-center gap-2">
          {isOnline ? (
            <>
              <Wifi className="h-4 w-4 text-success" />
              <Badge variant="outline" className="text-success border-success">
                Online
              </Badge>
            </>
          ) : (
            <>
              <WifiOff className="h-4 w-4 text-warning" />
              <Badge variant="outline" className="text-warning border-warning">
                Offline
              </Badge>
            </>
          )}
        </div>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-destructive">
            3
          </Badge>
        </Button>

        {/* User menu */}
        <Button variant="ghost" className="gap-2">
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-primary">JD</span>
          </div>
          <span className="text-sm">João Silva</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
    </header>
  )
}