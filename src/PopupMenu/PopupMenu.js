import styles from './index.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class PopupMenu extends Component {
  // shouldComponentUpdate (nextProps) {
  //   let prevString = JSON.stringify(this.props)
  //   let nextString = JSON.stringify(nextProps)
  //   return prevString !== nextString
  // }

  render () {
    const isEnable = this.props.enabled
    // const isActive = this.props.active

    const events = isEnable ? this.props.events : {}

    return (
      <div className={styles.menu + ' ' + (isEnable ? '' : styles.enable)} {...events}>
        {this.props.children}
      </div>
    )
  }
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
