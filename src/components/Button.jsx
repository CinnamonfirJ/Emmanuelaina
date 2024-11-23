import { cva } from "class-variance-authority";

// const variants = buttonStyle({ variant: "primary" });

const Button = ({ variant, children, icon }) => {
  const buttonStyle = cva(
    [
      "flex",
      "justify-center",
      "items-center",
      "px-4",
      "py-3",
      "gap-3",
      "border",
      "rounded-full",
      "cursor-pointer",
    ],
    {
      variants: {
        variant: {
          light: [
            "bg-white",
            "border-grayBorder",
            "hover:border-primary",
            "hover:text-white",
            "hover:bg-primary",
            "text-background",
          ],
          primary: [
            "bg-primary",
            "border-primary",
            "hover:bg-white",
            "text-white",
            "hover:text-background",
          ],
        },
      },
      defaultVariants: {
        variant: "primary",
      },
    }
  );

  // Apply the variant class
  const variantClass = buttonStyle({ variant });

  return <div className={variantClass}>{...children} {icon}</div>;
};

export default Button;
