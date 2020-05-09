import styles from './index.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Separator extends Component {
  shouldComponentUpdate (nextProps) {
    let prevString = JSON.stringify(this.props)
    let nextString = JSON.stringify(nextProps)
    return prevString !== nextString
  }
  
  render () {
    // const palette = this.props.palette

    const isVisible = this.props.visible
    const isEnable = this.props.enabled

    let events = isEnable ? this.props.events : {}

    if (!isVisible) {
      return null
    }
    return (
      <div className={styles.separator} {...events}></div>
    )
  }
}

Separator.propTypes = {
  // when false - component invisible
  visible: PropTypes.bool,
  // when false - events inactive
  enabled: PropTypes.bool,
  // events of component
  events: PropTypes.object,
  // object with color schema
  palette: PropTypes.object,
}

Separator.defaultProps = {
  visible: true,
  enabled: true,
  events: {},
  palette: {},
}
