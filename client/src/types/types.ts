export interface Project {
  name: string;
  date: string;
  description: string;
  imgUrl: string;
  badges?: ProjectBadge[];
}

export type ProjectBadge =
  | "robotics"
  | "cad"
  | "digital marketing"
  | "entrepreneurship"
  | "leadership"
  | "solidworks"
  | "inventor"
  | "java"
  | "python"
  | "javascript"
  | "react"
  | "express"
  | "typescript"
  | "mongodb"
  | "c++";
