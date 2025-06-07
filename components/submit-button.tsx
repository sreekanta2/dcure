import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

interface ButtonProps {
  isLoading: boolean;
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
}

const SubmitButton = ({
  isLoading,
  className,
  children,
  variant,
  color,
}: ButtonProps) => {
  return (
    <Button
      type="submit"
      variant="soft"
      color="info"
      disabled={isLoading}
      className={className}
    >
      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : children}
    </Button>
  );
};

export default SubmitButton;
