import styles from './index.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default function ButtonWithSmallImage(props) {
    const isEnable = props.enabled
    const isActive = props.active
    const backgroundImage = 'url(' + props.image + ')'

    let events = props.events

    return (
      <div className={styles.button + ' ' + (isActive ? styles.active : '') + ' ' + (isEnable ? '' : styles.enable)}
        {...events} >
        <div className={styles.image} style={{backgroundImage}}>
        </div>
      </div>
    )
}

ButtonWithSmallImage.propTypes = {
  // when false - component invisible
  visible: PropTypes.bool,
  // when false - events inactive
  enabled: PropTypes.bool,
  // url to image
  image: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
  // events of component
  events: PropTypes.object,
  // object with color schema
  palette: PropTypes.object,
}

ButtonWithSmallImage.defaultProps = {
  visible: true,
  enabled: true,
  active: false,
  image: '',
  events: {},
  palette: {},
}
