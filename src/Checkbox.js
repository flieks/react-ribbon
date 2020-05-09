import styles from './index.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Checkbox extends Component {
  shouldComponentUpdate (nextProps) {
    let prevString = JSON.stringify(this.props)
    let nextString = JSON.stringify(nextProps)
    return prevString !== nextString
  }
  
  render () {
    // const palette = this.props.palette
    window.ribbonitem += 1
    
    const isVisible = this.props.visible
    const isEnable = this.props.enabled
    const isChecked = this.props.checked
    const text = this.props.text

    let events = isEnable ? this.props.events : {}

    if (!isVisible) {
      return null
    }
    return (
      <div className={styles.checkbox} {...events}>
        <input type="checkbox" id={text} checked={isChecked} disabled={!isEnable} readOnly={true} />
        <label>{text}</label>
      </div>
    )
  }
}

Checkbox.propTypes = {
  // when false - component invisible
  visible: PropTypes.bool,
  // when false - events inactive
  enabled: PropTypes.bool,
  // when true - check box is checked
  checked: PropTypes.bool,
  // check box label
  text: PropTypes.string,
  // events of component
  events: PropTypes.object,
  // object with color schema
  palette: PropTypes.object,
}

Checkbox.defaultProps = {
  visible: true,
  enabled: true,
  checked: false,
  text: '',
  events: {},
  palette: {},
}
