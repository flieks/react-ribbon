import styles from './index.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MenuItem extends Component {
  shouldComponentUpdate (nextProps) {
    let prevString = JSON.stringify(this.props)
    let nextString = JSON.stringify(nextProps)
    return prevString !== nextString
  }
  
  render () {
    window.ribbonitem += 1
    
    const isVisible = this.props.visible
    const isEnable = this.props.enabled
    const text = this.props.text
    const hotKey = this.props.hotKey
    const backgroundImage = 'url(' + this.props.image + ')'

    // const events = isEnable ? this.props.events : {}
    // {...events}
    if (!isVisible) {
      return null
    }
    return (
      <div className={styles.menuItem + ' ' + (isEnable ? '' : styles.enable)} onClick={() => {
        if(this.props.onClick) {
          this.props.onClick();
        }
      }}>
        {this.props.image && <div className={styles.image} style={{backgroundImage}} />}
        <div className={styles.text} style={{marginLeft: !this.props.image && '10px'}}>
          {text}
        </div>
        <div className={styles.hotKey}>
          {hotKey}
        </div>
        <div className={styles.arrow} style={{visibility: 'hidden'}} />
      </div>
    )
  }
}

MenuItem.propTypes = {
  // name of menu item
  text: PropTypes.string,
  // text in right part of menu item
  hotKey: PropTypes.string,
  // url to image
  image: PropTypes.string,
  // when false - component invisible
  visible: PropTypes.bool,
  // when false - events inactive
  enabled: PropTypes.bool,
  // events of component
  events: PropTypes.object,
}

MenuItem.defaultProps = {
  visible: true,
  enabled: true,
  text: '',
  hotKey: '',
  image: '',
  events: {},
}
