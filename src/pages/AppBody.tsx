import React from 'react'
import styled from 'styled-components'
import { Card } from '@pancakeswap-libs/uikit'

export const BodyWrapper = styled(Card)`
  position: relative;
  z-index: 5;
  width: 100%;
  max-width: 720px;
  background: #ffffff;
  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.19);
  border-radius: 8px;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
