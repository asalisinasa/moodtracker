import styled, { css } from "styled-components"
import { rgba } from "polished"
import { typography } from "../../styled"
import * as C from "./constants"

const getTheme = (
  variant: C.Variant,
  state: "default" | "hover" | "active",
  theme
) => {
  const buttonTheme = {
    [C.Variant.PRIMARY]: {
      default: {
        background: theme.color.grey,
        color: rgba(theme.color.light, 0.88),
      },
      hover: {
        background: rgba(theme.color.grey, 0.88),
        color: theme.color.light,
      },
      active: {
        background: rgba(theme.color.grey, 0.8),
        color: rgba(theme.color.light, 0.8),
      },
    },
    [C.Variant.GHOST]: {
      default: {
        background: "transparent",
        color: rgba(theme.color.light, 0.88),
      },
      hover: {
        background: theme.color.dark,
        color: theme.color.light,
      },
      active: {
        background: rgba(theme.color.grey, 0.6),
        color: rgba(theme.color.light, 0.6),
      },
    },
  }

  return buttonTheme[variant][state]
}

const getStyles = ({ variant, theme }) => css`
  ${typography.action}
  padding: 16px 8px;
  border-radius: 8px;
  background: ${getTheme(variant, "default", theme).background};
  color: ${getTheme(variant, "default", theme).color};

  &:hover,
  &:focus {
    background: ${getTheme(variant, "hover", theme).background};
    color: ${getTheme(variant, "hover", theme).color};
  }

  &:active {
    background: ${getTheme(variant, "active", theme).background};
    color: ${getTheme(variant, "active", theme).color};
  }
`

/* eslint-disable prettier/prettier */
export const Button = styled.button < { variant: C.Variant } > `
  ${({ variant, theme }) => getStyles({ variant, theme })}
`

/* eslint-disable prettier/prettier */
export const Link = styled.a < { variant: C.Variant } > `
  ${({ variant, theme }) => getStyles({ variant, theme })}
`
