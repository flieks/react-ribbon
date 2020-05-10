import styles from './index.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default function MenuItem(props) { 
    const isVisible = props.visible
    const isEnable = props.enabled
    const text = props.text
    const hotKey = props.hotKey
    const backgroundImage = 'url(' + props.image + ')'

    return (
      <div className={styles.menuItem + ' ' + (isEnable ? '' : styles.enable)} 
        onMouseDown={() => {
          if(props.onClick) {
            props.onClick();
          }
        }}>
        {props.image && <div className={styles.image} style={{backgroundImage}} />}
        <div className={styles.text} style={{marginLeft: !props.image && '10px'}}>
          {text}
        </div>
        <div className={styles.hotKey}>
          {hotKey}
        </div>
        <div className={styles.arrow} style={{visibility: 'hidden'}} />
      </div>
    )
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
