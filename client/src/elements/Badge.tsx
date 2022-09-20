export type Color =
  | "red"
  | "blue"
  | "orange"
  | "green"
  | "yellow"
  | "indigo"
  | "purple"
  | "pink";
type Size = "sm" | "md" | "lg";

const Badge = ({
  children,
  color,
  size,
}: {
  children: string;
  color?: Color;
  size?: Size;
}) => {
  const getColor = () => {
    if (!color) return "bg-blue-100 text-blue-800";
    switch (color) {
      case "red":
        return "bg-red-100 text-red-800";
      case "yellow":
        return "bg-yellow-100 text-yellow-800";
      case "blue":
        return "bg-blue-100 text-blue-800";
      case "purple":
        return "bg-purple-100 text-purple-800";
      case "pink":
        return "bg-pink-100 text-pink-800";
      case "indigo":
        return "bg-indigo-100 text-indigo-800";
      case "orange":
        return "bg-orange-100 text-orange-800";
      case "green":
        return "bg-green-100 text-green-800";
    }
  };

  const getSize = () => {
    if (!size) return "px-2 py-0.5 text-xs";
    switch (size) {
      case "sm":
        return "px-2 py-0.5 text-xs";
      case "md":
        return "px-2.5 py-0.5 text-base";
      case "lg":
        return "px-3 py-1 text-lg";
    }
  };
  return (
    <span
      className={`inline-flex items-center rounded text-xs font-medium ${getColor()} ${getSize()}`}
    >
      {children}
    </span>
  );
};

export default Badge;
