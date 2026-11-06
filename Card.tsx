import React from "react";

interface CardProps extends React.ComponentProps<"div"> {
  className?: string;
}

export function Card({ className = "", ...props }: CardProps) {
  return <div className={`card ${className}`} {...props} />;
}

export function CardHeader({ className = "", ...props }: CardProps) {
  return <div className={`card-header ${className}`} {...props} />;
}

export function CardTitle({ className = "", ...props }: CardProps) {
  return <h4 className={`card-title ${className}`} {...props} />;
}

export function CardDescription({ className = "", ...props }: CardProps) {
  return <p className={`card-description ${className}`} {...props} />;
}

export function CardAction({ className = "", ...props }: CardProps) {
  return <div className={`card-action ${className}`} {...props} />;
}

export function CardContent({ className = "", ...props }: CardProps) {
  return <div className={`card-content ${className}`} {...props} />;
}

export function CardFooter({ className = "", ...props }: CardProps) {
  return <div className={`card-footer ${className}`} {...props} />;
}
