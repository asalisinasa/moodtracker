import React from "react"
import Header from "../Header"
import Button from "../Button"
import { IButtonProps } from "../Button/Button"
import { IHeaderProps } from "../Header/Header"
import * as S from "./style"

interface ILayoutProps {
  headerButtons: IHeaderProps["buttons"]
  headerTitle: IHeaderProps["title"]
  children: React.ReactNode
  footerButton?: IButtonProps
}

const Layout: React.FunctionComponent<ILayoutProps> = (props: ILayoutProps) => {
  const { headerButtons, headerTitle, children, footerButton } = props

  return (
    <S.Wrapper>
      {headerButtons && <Header buttons={headerButtons} title={headerTitle} />}
      <S.Content>{children}</S.Content>
      {footerButton && (
        <S.Footer>
          <Button
            variant={Button.Variant.PRIMARY}
            href={footerButton.href}
            onClick={footerButton.onClick}
            isFullWidth
          >
            {footerButton.children}
          </Button>
        </S.Footer>
      )}
    </S.Wrapper>
  )
}

export default Layout
