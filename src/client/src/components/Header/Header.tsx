import React from "react"
import Button from "../Button"
import { IButtonProps } from "../Button/Button"
import * as S from "./style"

export interface IHeaderProps {
  buttons: IButtonProps[]
}

const Header: React.FunctionComponent<IHeaderProps> = (props: IHeaderProps) => {
  const { buttons } = props

  return (
    <S.Header>
      {buttons.map(({ href, children, onClick }, index) => (
        <Button
          variant={Button.Variant.GHOST}
          key={index}
          href={href}
          onClick={onClick}
        >
          {children}
        </Button>
      ))}
    </S.Header>
  )
}

export default Header
