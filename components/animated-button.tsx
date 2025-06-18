import { Icon } from "@iconify/react";
import { motion, MotionProps } from "framer-motion";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type BaseButtonProps = {
  text: string | ReactNode;
  icon?: string;
  iconPosition?: "left" | "right";
  color?: "primary" | "secondary" | "accent" | "custom";
  size?: "sm" | "md" | "lg";
  className?: string;
  fullWidth?: boolean;
  iconClassName?: string;
  gradientFrom?: string;
  gradientTo?: string;
  hoverFrom?: string;
  hoverTo?: string;
  delay?: number;
  animationType?: "fade" | "slide" | "scale";
} & MotionProps;

type LinkButtonProps = BaseButtonProps & {
  as: "link";
  href: string;
} & Omit<LinkProps, "href" | "passHref" | "legacyBehavior"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

type RegularButtonProps = BaseButtonProps & {
  as?: "button";
  href?: never;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type AnimatedButtonProps = LinkButtonProps | RegularButtonProps;

const colorClasses = {
  primary: {
    base: "from-blue-600 to-blue-500",
    hover: "hover:from-blue-700 hover:to-blue-600",
  },
  secondary: {
    base: "from-purple-600 to-purple-500",
    hover: "hover:from-purple-700 hover:to-purple-600",
  },
  accent: {
    base: "from-emerald-600 to-emerald-500",
    hover: "hover:from-emerald-700 hover:to-emerald-600",
  },
  custom: {
    base: "",
    hover: "",
  },
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-3 text-lg",
};

export const AnimatedButton = ({
  as = "button",
  href,
  text,
  icon,
  iconPosition = "right",
  color = "primary",
  size = "md",
  className = "",
  fullWidth = false,
  iconClassName = "w-5 h-5",
  gradientFrom,
  gradientTo,
  hoverFrom,
  hoverTo,
  delay = 0.2,
  animationType = "fade",
  ...props
}: AnimatedButtonProps) => {
  // Custom gradient handling
  const customGradient =
    color === "custom"
      ? {
          base: `${gradientFrom} ${gradientTo}`,
          hover: `${hoverFrom} ${hoverTo}`,
        }
      : { base: "", hover: "" };

  const containerVariants = {
    hidden: {
      opacity: animationType === "fade" ? 0 : 1,
      y: animationType === "slide" ? 10 : 0,
      scale: animationType === "scale" ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.2,
      },
    },
  };

  const iconVariants = {
    hover: {
      x: iconPosition === "right" ? 5 : -5,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const textVariants = {
    hover: {
      x: iconPosition === "right" ? -1 : 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const buttonClass = `
    inline-flex items-center gap-2 font-medium rounded-lg shadow-md
    bg-gradient-to-r text-white transition-all duration-300
    ${color !== "custom" ? colorClasses[color].base : customGradient.base}
    ${color !== "custom" ? colorClasses[color].hover : customGradient.hover}
    ${sizeClasses[size]}
    ${fullWidth ? "w-full justify-center" : ""}
    ${className}
  `;

  const motionProps = {
    className: buttonClass,
    whileHover: "hover",
    whileTap: "tap",
    variants: buttonVariants,
    ...props,
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      variants={containerVariants}
      className={`flex justify-center mt-8 ${fullWidth ? "w-full" : ""}`}
    >
      {as === "link" ? (
        <Link href={href || ""} passHref legacyBehavior>
          <div>
            {iconPosition === "left" && icon && (
              <motion.span variants={iconVariants}>
                <Icon icon={icon} className={iconClassName} />
              </motion.span>
            )}
            <motion.span variants={textVariants}>{text}</motion.span>
            {iconPosition === "right" && icon && (
              <motion.span variants={iconVariants}>
                <Icon icon={icon} className={iconClassName} />
              </motion.span>
            )}
          </div>
        </Link>
      ) : (
        <button>
          {iconPosition === "left" && icon && (
            <motion.span variants={iconVariants}>
              <Icon icon={icon} className={iconClassName} />
            </motion.span>
          )}
          <motion.span variants={textVariants}>{text}</motion.span>
          {iconPosition === "right" && icon && (
            <motion.span variants={iconVariants}>
              <Icon icon={icon} className={iconClassName} />
            </motion.span>
          )}
        </button>
      )}
    </motion.div>
  );
};
