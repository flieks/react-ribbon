import styles from './index.css'
import React, { Component } from 'react'
// import { detectBlur } from '../helpers'
import PropTypes from 'prop-types'

export default class DropDownWithSmallImage extends Component {
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

    let isVisible = this.props.visible
    let isEnable = this.props.enabled
    let isActive = this.props.active
    const backgroundImage = 'url(' + this.props.image + ')'

    const events = this.props.events

    if (!isVisible) {
      return null
    }
    return (
      <div className={styles.dropDown + ' ' + (isActive ? styles.active : '') + ' ' + (isEnable ? '' : styles.enable)}
           tabIndex={-1}
        {...events}>
        <div className={styles.image} style={{backgroundImage}}>
        </div>
        <div className={styles.arrow}>
        </div>
        <div className={styles.list} style={isActive ? {display: 'block'} : {display: 'none'}}>
          {children}
        </div>
      </div>
    )
  }
}

DropDownWithSmallImage.propTypes = {
  // when false - component invisible
  visible: PropTypes.bool,
  // when false - events inactive
  enabled: PropTypes.bool,
  // url to image
  image: PropTypes.string,
  // when true - dropdown list is open
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  // events of component
  events: PropTypes.object,
  // object with color schema
  palette: PropTypes.object,
}

DropDownWithSmallImage.defaultProps = {
  visible: true,
  enabled: true,
  active: false,
  image: '',
  events: {},
  palette: {},
}
