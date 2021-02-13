import React from "react"
import Header from "../Header"
import { IHeaderProps } from "../Header/Header"
import * as S from "./style"

interface ILayoutProps {
  headerButtons: IHeaderProps["buttons"]
  children: React.ReactNode
}

const Layout: React.FunctionComponent<ILayoutProps> = (props: ILayoutProps) => {
  const { headerButtons, children } = props

  return (
    <S.Wrapper>
      {headerButtons && <Header buttons={headerButtons} />}
      {children}
    </S.Wrapper>
  )
}

export default Layout
