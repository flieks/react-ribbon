import styles from './index.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default function PopupMenu(props) {
    const isEnable = props.enabled

    const events = isEnable ? props.events : {}

    return (
      <div className={styles.menu + ' ' + (isEnable ? '' : styles.enable)} {...events}>
        {props.children}
      </div>
    )
}

PopupMenu.propTypes = {
  // when false - component invisible
  visible: PropTypes.bool,
  // when false - events inactive
  enabled: PropTypes.bool,
  // when true - dropdown list is open
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  // events of component
  events: PropTypes.object,
}

PopupMenu.defaultProps = {
  visible: true,
  enabled: true,
  active: false,
  events: {},
}
