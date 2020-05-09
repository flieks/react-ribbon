import styles from './index.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MenuDropDown extends Component {
  shouldComponentUpdate (nextProps) {
    let prevString = JSON.stringify(this.props)
    let nextString = JSON.stringify(nextProps)
    return prevString !== nextString
  }
  
  render () {
    const isVisible = this.props.visible
    const isEnable = this.props.enabled
    // const isActive = this.props.active
    const text = this.props.text
    const hotKey = this.props.hotKey
    const backgroundImage = 'url(' + this.props.image + ')'

    const events = isEnable ? this.props.events : {}

    if (!isVisible) {
      return null
    }
    return (
      <div className={styles.menuItem + ' ' + (isEnable ? '' : styles.enable)} {...events} >
        <div className={styles.image} style={{backgroundImage}} />
        <div className={styles.text}>
          {text}
        </div>
        <div className={styles.hotKey}>
          {hotKey}
        </div>
        <div className={styles.arrow} style={{visibility: 'hidden'}} />
      </div>
    )
  }
}

MenuDropDown.propTypes = {
  // name of menu item
  text: PropTypes.string,
  // text in right part of menu item
  hotKey: PropTypes.string,
  // url to image
  image: PropTypes.string,
  // when false - component invisible
  visible: PropTypes.bool,
  // when false - events inactive
  enabled: PropTypes.bool,
  // when true - component is active
  active: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
  // events of component
  events: PropTypes.object,
}

MenuDropDown.defaultProps = {
  visible: true,
  enabled: true,
  active: true,
  text: '',
  hotKey: '',
  image: '',
  events: {},
}

