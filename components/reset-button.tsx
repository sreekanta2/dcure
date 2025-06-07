import { Button } from "./ui/button";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  variant?: "soft" | "outline" | "ghost";
  color?:
    | "default"
    | "primary"
    | "info"
    | "warning"
    | "success"
    | "destructive"
    | "secondary"
    | "dark";
  onClick?: () => void;
}

const ResetButton = ({
  className,
  children,
  variant,
  color,
  onClick,
}: ButtonProps) => {
  return (
    <Button
      type="button"
      variant={variant}
      color={color}
      className={className}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ResetButton;
