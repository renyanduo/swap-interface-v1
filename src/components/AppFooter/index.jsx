/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-expressions */
import React from 'react'
import './index.scss'
import github from '../../assets/images/github.png'
import twitter from '../../assets/images/twitter.png'
import telegram from '../../assets/images/telegram.png'

function Index(props) {
  return (
    <footer className="footer">
      <div className="footer-item">
        <a href="https://pizzap.gitbook.io/pizzap/" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github" />
        </a>
      </div>
      <div className="footer-item">
        <a href="https://twitter.com/pizzap_io" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="twitter" />
        </a>
      </div>
      <div className="footer-item">
        <a href="https://t.me/pizzap_io" target="_blank" rel="noopener noreferrer">
          <img src={telegram} alt="telegram" />
        </a>
      </div>
    </footer>
  )
}

export default Index
