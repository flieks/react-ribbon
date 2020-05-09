import styles from './index.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class BackStagePage extends Component {
  render () {
    const palette = this.props.palette

    const isEnable = this.props.enable
    const isVisible = this.props.visible

    const styleObj = {
      backgroundColor: '#FFFFFF',
      color: '#444444',
    }

    let events = isEnable ? this.props.events : {}

    if (!isVisible) {
      return null
    }
    return (
      <div className={styles.page} style={styleObj} {...events}>
        {this.props.children}
      </div>
    )
  }
}

BackStagePage.propTypes = {
  // text in page label
  text: PropTypes.string,
  // when false - events inactive
  enable: PropTypes.bool,
  // when false - component invisible
  visible: PropTypes.bool,
  children: PropTypes.any,
  // events of component
  events: PropTypes.object,
  // object with color schema
  palette: PropTypes.object,
}

BackStagePage.defaultProps = {
  text: '',
  enable: true,
  visible: true,
  events: {},
  palette: {},
}
