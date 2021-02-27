import React from "react"
import Button from "../Button"
import { IButtonProps } from "../Button/Button"
import * as S from "./style"

export interface IHeaderProps {
  buttons: IButtonProps[]
  title?: string
}

const Header: React.FunctionComponent<IHeaderProps> = (props: IHeaderProps) => {
  const { buttons, title } = props

  return (
    <S.Header>
      {buttons && (
        <S.Buttons>
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
        </S.Buttons>
      )}
      {title && <S.Title>{title}</S.Title>}
    </S.Header>
  )
}

export default Header
