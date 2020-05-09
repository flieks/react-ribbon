import styles from './index.css'
import React, { Component } from 'react'
import RibbonRow from './Row'
import PropTypes from 'prop-types'

export default class RibbonGroup extends Component {
  render () {
    const palette = this.props.palette
    const children = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, child.props.hasOwnProperty(palette) ? {palette} : null)
    )
    const popup = this.props.popup

    const isVisible = this.props.visible
    const isEnable = this.props.enabled
    const isActive = this.props.active
    const text = this.props.text

    let events = isEnable ? this.props.events : {}

    if (!isVisible) {
      return null
    }
    return (
      <div className={styles.group}>
        <div className={styles.content}>
          <RibbonRow>
            {children}
          </RibbonRow>
        </div>
        <div className={styles.name}>
          {text}
          <div className={styles.groupIcon + ' ' + (isEnable ? '' : styles.enable)} {...events} >
            <div className={styles.groupList} style={isActive ? {display: 'block'} : {display: 'none'}}>
              {popup}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

RibbonGroup.propTypes = {
  // group name
  text: PropTypes.string,
  // when false - component invisible
  visible: PropTypes.bool,
  // when false - events inactive
  enabled: PropTypes.bool,
  // when true - popup is shown
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  popup: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  // events of component
  events: PropTypes.object,
  // object with color schema
  palette: PropTypes.object,
}

RibbonGroup.defaultProps = {
  text: '',
  visible: true,
  enabled: true,
  active: false,
  events: {},
  palette: {},
}
