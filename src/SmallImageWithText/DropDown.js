import styles from './index.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function DropDownWithSmallImageWithText(props) {
  // shouldComponentUpdate (nextProps) {
  //   let prevString = JSON.stringify(this.props)
  //   let nextString = JSON.stringify(nextProps)
  //   return prevString !== nextString
  // }

    window.ribbonitem += 1
    
    const [isActive, setIsActive] = useState(false)

    const palette = props.palette
    const children = React.Children.map(props.children,
      (child) => React.cloneElement(child, child.props.hasOwnProperty(palette) ? {palette} : null)
    )

    let isVisible = props.visible
    let isEnable = props.enabled
    const text = props.text
    const backgroundImage = 'url(' + props.image + ')'

    let events = props.events

    if (!isVisible) {
      return null
    }
  return (
    <div className={styles.dropDown + ' ' + (isActive ? styles.active : '') + ' ' + (isEnable ? '' : styles.enable)}
      tabIndex={-1}
      onBlur={() => {
        setIsActive(false)
      }} >
      <div onClick={() => {
        setIsActive(true)
      }}>
        <div className={styles.image} style={{ backgroundImage }} >
        </div>
        <div className={styles.text}>
          {text}
        </div>
      </div>

      {isActive && <div className={styles.list}
        onClick={() => {
          setIsActive(false)
        }}>
        {children}
      </div>}
    </div>
  )
}

DropDownWithSmallImageWithText.propTypes = {
  // text near the icon
  text: PropTypes.string,
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

DropDownWithSmallImageWithText.defaultProps = {
  text: '',
  visible: true,
  enabled: true,
  active: false,
  image: '',
  events: {},
  palette: {},
}
