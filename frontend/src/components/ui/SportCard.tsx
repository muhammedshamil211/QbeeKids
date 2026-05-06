import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const cardVariants = cva(
  "relative overflow-hidden rounded-[2rem] border bg-card text-card-foreground transition-all",
  {
    variants: {
      variant: {
        default: "border-border shadow-sm",
        elevated: "border-none shadow-sporty hover:-translate-y-2 hover:shadow-2xl",
        glass: "glass border-none shadow-lg",
        sporty: "border-2 border-primary-electric/10 bg-neutral-gray dark:bg-neutral-graphite hover:border-primary-electric/30",
        gradient: "border-none bg-gradient-to-br from-primary-electric/5 to-accent-sky/10",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-8",
        lg: "p-12",
      }
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
    }
  }
)

export interface SportCardProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  hoverEffect?: boolean
}

const SportCard = React.forwardRef<HTMLDivElement, SportCardProps>(
  ({ className, variant, padding, hoverEffect = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, padding, className }), 
          hoverEffect && "cursor-pointer"
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
SportCard.displayName = "SportCard"

const SportCardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5", className)} {...props} />
)

const SportCardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("text-2xl font-bold leading-tight tracking-tight uppercase italic", className)} {...props} />
)

const SportCardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-sm text-muted-foreground font-medium", className)} {...props} />
)

const SportCardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("pt-4", className)} {...props} />
)

const SportCardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex items-center pt-6", className)} {...props} />
)

export { SportCard, SportCardHeader, SportCardFooter, SportCardTitle, SportCardDescription, SportCardContent }
