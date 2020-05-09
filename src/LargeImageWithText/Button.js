import styles from './index.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ButtonWithLargeImageWithText extends Component {

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

    const events = this.props.events

    if (!isVisible) {
      return null
    }
    return (
      <div className={styles.button + ' ' + (isActive ? styles.active : '') + ' ' + (isEnable ? '' : styles.enable)}
        {...events}>
        <div className={styles.image} style={{backgroundImage}}>
        </div>
        <div className={styles.name}>
          <span dangerouslySetInnerHTML={{__html: text}}></span>
        </div>
      </div>
    )
  }
}

ButtonWithLargeImageWithText.propTypes = {
  // text under the icon
  text: PropTypes.string,
  // when false - component invisible
  visible: PropTypes.bool,
  // when false - events inactive
  enabled: PropTypes.bool,
  // url to image
  image: PropTypes.string,
  // when true - button is pressed
  active: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
  // events of component
  events: PropTypes.object,
  // object with color schema
  palette: PropTypes.object,
}

ButtonWithLargeImageWithText.defaultProps = {
  text: '',
  visible: true,
  enabled: true,
  active: false,
  image: '',
  events: {},
  palette: {},
}
