/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-expressions */
import React from 'react'
import './index.scss'

function Index(props) {
  return (
    <div
      className={`connect-button ${props.className}`}
      onClick={props.onClick}
      style={props.style}>
      <span>{props.children}</span>
      <div className="connect-button-dot" />
    </div>
  )
}

export default Index
