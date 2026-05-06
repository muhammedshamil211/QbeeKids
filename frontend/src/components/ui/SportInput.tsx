import * as React from "react"
import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  error?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const SportInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, helperText, error, leftIcon, rightIcon, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const isPassword = type === "password"
    
    const togglePassword = () => setShowPassword(!showPassword)

    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="text-sm font-bold uppercase tracking-widest italic text-foreground ml-1">
            {label}
          </label>
        )}
        <div className="relative group">
          {leftIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary">
              {leftIcon}
            </div>
          )}
          <input
            type={isPassword ? (showPassword ? "text" : "password") : type}
            className={cn(
              "flex h-14 w-full rounded-2xl border-2 border-input bg-background px-4 py-2 text-base font-medium ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary transition-all disabled:cursor-not-allowed disabled:opacity-50",
              leftIcon && "pl-12",
              (rightIcon || isPassword) && "pr-12",
              error && "border-destructive focus-visible:border-destructive",
              className
            )}
            ref={ref}
            {...props}
          />
          {isPassword ? (
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          ) : rightIcon ? (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
              {rightIcon}
            </div>
          ) : null}
        </div>
        {(error || helperText) && (
          <p className={cn("text-xs font-semibold ml-1", error ? "text-destructive" : "text-muted-foreground")}>
            {error || helperText}
          </p>
        )}
      </div>
    )
  }
)
SportInput.displayName = "SportInput"

export { SportInput }
