import styles from './index.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class DropDown extends Component {
  shouldComponentUpdate (nextProps) {
    let prevString = JSON.stringify(this.props)
    let nextString = JSON.stringify(nextProps)
    return prevString !== nextString
  }
  
  render () {
    window.ribbonitem += 1
    const palette = this.props.palette
    const children = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, child.props.hasOwnProperty(palette) ? {palette} : null)
    )

    const isVisible = this.props.visible
    const isEnable = this.props.enabled
    const isActive = this.props.active
    const width = this.props.width
    const text = this.props.text

    let events = isEnable ? this.props.events : {}

    if (!isVisible) {
      return null
    }
    return (
      <div className={styles.dropDown + ' ' + (isActive ? styles.active : '')}
        style={{width}}
        {...events}>
        <div className={styles.text}>
          {text}
        </div>
        <div className={styles.list} style={isActive ? {display: 'block'} : {display: 'none'}}>
          {children}
        </div>
      </div>
    )
  }
}

DropDown.propTypes = {
  text: PropTypes.string,
  width: PropTypes.number,
  visible: PropTypes.bool,
  enabled: PropTypes.bool,
  image: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  events: PropTypes.object,
  palette: PropTypes.object,
}

DropDown.defaultProps = {
  text: '',
  width: 26,
  visible: true,
  enabled: true,
  active: false,
  image: '',
  events: {},
  palette: {},
}
