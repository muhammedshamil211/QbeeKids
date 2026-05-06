import * as React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
}

export const PageContainer = ({ className, as: Component = "div", ...props }: ContainerProps) => (
  <Component className={cn("min-h-screen flex flex-col pt-24", className)} {...props} />
)

export const SectionContainer = ({ className, as: Component = "section", ...props }: ContainerProps) => (
  <Component className={cn("py-16 md:py-24 px-6 md:px-12", className)} {...props} />
)

export const ContentWrapper = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("max-w-7xl mx-auto w-full", className)} {...props} />
)

export const SportGrid = ({ className, cols = 3, ...props }: React.HTMLAttributes<HTMLDivElement> & { cols?: number }) => (
  <div 
    className={cn("grid gap-8", className)} 
    style={{ gridTemplateColumns: `repeat(auto-fill, minmax(min(100%, ${300}px), 1fr))` }}
    {...props} 
  />
)
