/// <reference lib="dom" />
import React from "react"
import * as S from "./style"
import * as C from "./constants"

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: C.Variant
  href?: string
}

const Button: React.FunctionComponent<IButtonProps> & {
  Variant: typeof C.Variant
} = (props: IButtonProps) => {
  const { variant = C.Variant.PRIMARY, children, onClick, href } = props
  const ButtonElement: React.ElementType = href ? S.Link : S.Button

  return (
    <ButtonElement
      variant={variant}
      onClick={onClick}
      href={href}
      children={children}
    />
  )
}

Button.Variant = C.Variant

export default Button
