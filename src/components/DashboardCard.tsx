import { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DashboardCardProps {
  title: string
  value: string | number
  description?: string
  icon: ReactNode
  variant?: "default" | "success" | "warning" | "destructive"
  trend?: {
    value: string
    label: string
    isPositive: boolean
  }
  actions?: Array<{
    label: string
    onClick: () => void
    variant?: "default" | "secondary" | "outline"
  }>
  badges?: Array<{
    label: string
    variant?: "default" | "destructive" | "warning" | "success"
  }>
}

export function DashboardCard({
  title,
  value,
  description,
  icon,
  variant = "default",
  trend,
  actions,
  badges,
}: DashboardCardProps) {
  const cardVariants = {
    default: "border-border",
    success: "border-success/20 bg-success/5",
    warning: "border-warning/20 bg-warning/5",
    destructive: "border-destructive/20 bg-destructive/5",
  }

  return (
    <Card className={cn("transition-all duration-200 hover:shadow-card", cardVariants[variant])}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="text-muted-foreground">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-baseline gap-3">
            <div className="text-2xl font-bold text-foreground">{value}</div>
            {trend && (
              <Badge 
                variant={trend.isPositive ? "success" : "destructive"}
                className="text-xs"
              >
                {trend.value} {trend.label}
              </Badge>
            )}
          </div>
          
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}

          {badges && badges.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {badges.map((badge, index) => (
                <Badge key={index} variant={badge.variant || "default"} className="text-xs">
                  {badge.label}
                </Badge>
              ))}
            </div>
          )}

          {actions && actions.length > 0 && (
            <div className="flex gap-2 flex-wrap pt-2">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant={action.variant || "outline"}
                  onClick={action.onClick}
                  className="text-xs"
                >
                  {action.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}