import styles from './index.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class RibbonTabPage extends Component {
  render () {
    // transmit palette to children
    const palette = this.props.palette
    const children = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, child.props.hasOwnProperty(palette) ? {palette} : null)
    )

    const isEnable = this.props.enable
    const isVisible = this.props.visible

    const styleObj = {
      backgroundColor: palette.tabBody || '#F1F1F1',
    }

    // events if component disabled
    let events = isEnable ? this.props.events : {}

    if (!isVisible) {
      return null
    }
    return (
      <div className={styles.tab} style={styleObj} {...events}>
        {children}
      </div>
    )
  }
}

RibbonTabPage.propTypes = {
  // text in tab label
  text: PropTypes.string,
  // when false - events inactive
  enable: PropTypes.bool,
  // when false - component invisible
  visible: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  // events of component
  events: PropTypes.object,
  // object with color schema
  palette: PropTypes.object,
}

RibbonTabPage.defaultProps = {
  text: '',
  enable: true,
  visible: true,
  events: {},
  palette: {},
}
