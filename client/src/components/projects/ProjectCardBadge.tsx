import Badge, { Color } from "../../elements/Badge";
import { ProjectBadge } from "../../types/types";

const ProjectCardBadge = ({ badge }: { badge: ProjectBadge }) => {
  const getBadgeAttributes = (): { text: string; color: Color } => {
    switch (badge) {
      case "cad":
        return { text: "CAD", color: "green" };
      case "digital marketing":
        return { text: "Digital Marketing", color: "yellow" };
      case "entrepreneurship":
        return { text: "Entrepreneurship", color: "orange" };
      case "express":
        return { text: "Express JS", color: "yellow" };
      case "inventor":
        return { text: "Inventor", color: "green" };
      case "solidworks":
        return { text: "Solidworks", color: "blue" };
      case "java":
        return { text: "Java", color: "yellow" };
      case "javascript":
        return { text: "Javascript", color: "pink" };
      case "typescript":
        return { text: "Typescript", color: "blue" };
      case "leadership":
        return { text: "Leadership", color: "red" };
      case "python":
        return { text: "Python", color: "orange" };
      case "react":
        return { text: "ReactJS", color: "indigo" };
      case "robotics":
        return { text: "Robotics", color: "green" };
      case "mongodb":
        return { text: "MongoDB", color: "blue" };
      case "c++":
        return { text: "C++", color: "indigo" };
      default:
        return { text: "Default", color: "pink" };
    }
  };
  const badgeAttributes = getBadgeAttributes();
  return <Badge color={badgeAttributes.color}>{badgeAttributes.text}</Badge>;
};

export default ProjectCardBadge;
