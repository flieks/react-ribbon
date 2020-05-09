import styles from './ButtonWithLargeImageWithText.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const mock = () => {}

export default class ButtonWithLargeImageWithText extends Component {
  shouldComponentUpdate (nextProps) {
    let prevString = JSON.stringify(this.props)
    let nextString = JSON.stringify(nextProps)
    return prevString !== nextString
  }
  
  render () {
    let isVisible = this.props.visible
    let isEnable = this.props.enabled
    const font = this.props.font
    const text = this.props.text
    const backgroundImage = 'url(' + this.props.image + ')'
    let onClick

    onClick = isEnable ? this.props.onClick : mock

    if (!isVisible)
      return null
    return (
      <div className={styles.button} style={{font}} onClick={onClick}>
        <div className={styles.image} style={{backgroundImage}}>
        </div>
        <div className={styles.name}>
          {text}
        </div>
      </div>
    )
  }
}

ButtonWithLargeImageWithText.propTypes = {
  font: PropTypes.string,
  text: PropTypes.string,
  visible: PropTypes.bool,
  enabled: PropTypes.bool,
  image: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
  onClick: PropTypes.func,
}

ButtonWithLargeImageWithText.defaultProps = {
  text: '',
  visible: true,
  enabled: true,
  font: '',
  image: '',
  onClick: mock,
}
