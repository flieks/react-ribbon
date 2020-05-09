import styles from './index.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ButtonWithSmallImageWithText extends Component {
  shouldComponentUpdate (nextProps) {
    let prevString = JSON.stringify(this.props)
    let nextString = JSON.stringify(nextProps)
    return prevString !== nextString
  }
  
  render () {
    // const palette = this.props.palette
    window.ribbonitem += 1

    let isVisible = this.props.visible
    let isEnable = this.props.enabled
    let isActive = this.props.active
    const text = this.props.text
    const backgroundImage = 'url(' + this.props.image + ')'

    let events = this.props.events

    if (!isVisible) {
      return null
    }
    return (
      <div className={styles.button + ' ' + (isActive ? styles.active : '') + ' ' + (isEnable ? '' : styles.enable)}
        {...events}>
        <div className={styles.image} style={{backgroundImage}}>
        </div>
        <div className={styles.text}>
          {text}
        </div>
      </div>
    )
  }
}

ButtonWithSmallImageWithText.propTypes = {
  // text near the icon
  text: PropTypes.string,
  // when false - component invisible
  visible: PropTypes.bool,
  // when false - events inactive
  enabled: PropTypes.bool,
  // url to image
  image: PropTypes.string,
  // when true - dropdown list is open
  active: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
  // events of component
  events: PropTypes.object,
  // object with color schema
  palette: PropTypes.object,
}

ButtonWithSmallImageWithText.defaultProps = {
  text: '',
  visible: true,
  enabled: true,
  active: false,
  image: '',
  events: {},
  palette: {},
}
