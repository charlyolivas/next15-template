import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <button
        className={`px-4 py-2 rounded-md ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button" 