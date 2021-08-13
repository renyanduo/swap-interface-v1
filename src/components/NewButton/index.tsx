/* eslint-disable react/destructuring-assignment */
import React from 'react'
import styled from 'styled-components'

const Button = (props) => {

  const NewButton = styled.div`
    button, a {
      width: 100%;
      height: 50px;
      background: linear-gradient(180deg, #F9B06C 0%, #FA9124 100%);
      box-shadow: 0px 2px 4px 0px rgba(187, 96, 1, 0.36);
      border-radius: 26px;
    }
  `

  return (
    <NewButton>
      {props.children}
    </NewButton>
  )
}

export default Button
