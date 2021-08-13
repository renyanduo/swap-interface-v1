import React from 'react'
import { Button, ButtonProps, useWalletModal} from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import useAuth from 'hooks/useAuth'
import styled from 'styled-components'

const UnlockButton: React.FC<ButtonProps> = (props) => {
  const TranslateString = useI18n()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  const NewButton = styled.div`
    button {
      height: 50px;
      background: linear-gradient(180deg, #F9B06C 0%, #FA9124 100%);
      box-shadow: 0px 2px 4px 0px rgba(187, 96, 1, 0.36);
      border-radius: 26px;
    }
  `

  return (
    <NewButton>
      <Button onClick={onPresentConnectModal} {...props}>
        {TranslateString(292, 'Unlock Wallet')}
      </Button>
    </NewButton>
  )
}

export default UnlockButton
