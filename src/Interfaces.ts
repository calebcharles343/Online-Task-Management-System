import { ChangeEvent, ReactNode } from "react";

/*/////////////*/
/*PROPS*/
/*/////////////*/
export interface StyledContainerProps {
  children: ReactNode;
}

export interface Buttons {
  ButtonType:
    | "btn1"
    | "btn2"
    | "mobile"
    | "mobile-2"
    | "long"
    | "btn2project"
    | "delete";
}

export interface CheckboxProps {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export interface CompanyBoxProps {
  logoBg: string;
}

export interface HeadingProps {
  headingType?: "h1" | "h2" | "h3" | "h4" | "h1-mobile";
  color?: string;
}

export interface InputProps {
  width?: string;
  height?: string;
}

export interface ProjectProps {
  project: DataType;
}

export interface IconProps {
  logoBg: string;
}

export interface ModalContextProps {
  open: (name: string) => void;
  close: () => void;
  openName: string;
}

export interface StyledSelectProps {
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface SelectProps {
  options: [
    { value: string; label: string },
    { value: string; label: string },
    { value: string; label: string },
    { value: string; label: string }
  ];
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

export interface CircleProps {
  $isDarkMode: boolean;
}

/*/////////////*/
/*DATA*/
/*/////////////*/

export interface DataType {
  id: number;
  title: string;
  description: string;
  // tasks: string[];
}
