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
      "gap-1",
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
            // "min-w-[190px]",
            "rounded-full",
          ],
        },
        size: {
          default: ["px-2", "py-[2px]"],
          large: ["px-4", "py-3"],
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
