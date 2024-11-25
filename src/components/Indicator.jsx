import { cva } from "class-variance-authority";

const Indicator = ({ variant, size, children, icon }) => {
  const indicatorType = cva(
    [
      "flex",

      "justify-center",
      "items-center",
      "border",
      "text-[18px]",
      "font-medium",
      "gap-2",
    ],
    {
      variants: {
        variant: {
          default: [
            "border-statusGreen",
            "text-[13px]",
            "font-nornal",
            "rounded-lg",
          ],
          primary: [
            "border-primary",
            "text-[13px]",
            "font-nornal",
            "rounded-lg",
          ],
          title: [
            "border-background",
            "bg-background",
            "text-white",
            "text-nowrap",
            "rounded-full",
          ],
        },
        size: {
          default: ["px-2", "py-[2px]"],
          large: ["px-6", "py-3"],
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  );

  const variantClass = indicatorType({ variant, size });

  return (
    <div className={variantClass}>
      {icon}
      {children}
    </div>
  );
};

export default Indicator;
