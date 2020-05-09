import styles from './index.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MenuSeparator extends Component {
  shouldComponentUpdate (nextProps) {
    let prevString = JSON.stringify(this.props)
    let nextString = JSON.stringify(nextProps)
    return prevString !== nextString
  }
  
  render () {
    const isVisible = this.props.visible
    const isEnable = this.props.enabled
    const text = this.props.text

    const events = isEnable ? this.props.events : {}

    if (!isVisible) {
      return null
    }
    return (
      <div className={styles.separator + ' ' + (isEnable ? '' : styles.enable)} {...events} >
        <div className={styles.text}>
          {text}
        </div>
      </div>
    )
  }
}

MenuSeparator.propTypes = {
  // text in the separator
  text: PropTypes.string,
  // when false - component invisible
  visible: PropTypes.bool,
  // when false - events inactive
  enabled: PropTypes.bool,
  // events of component
  events: PropTypes.object,
}

MenuSeparator.defaultProps = {
  visible: true,
  enabled: true,
  text: '',
  events: {},
}
