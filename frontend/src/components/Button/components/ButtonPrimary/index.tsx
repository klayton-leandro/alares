import { ButtonHTMLAttributes } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

export function ButtonPrimary({ label, ...props }: ButtonProps) {
  return (
    <Container>
      <button {...props}>
        {label}
      </button>
    </Container>
  );
}
