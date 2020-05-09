import styles from './index.css'
import React, { useState } from 'react'
import { detectBlur } from '../helpers'
import PropTypes from 'prop-types'

export default function SplitButtonWithSmallImage(props) {
  // shouldComponentUpdate (nextProps) {
  //   let prevString = JSON.stringify(props)
  //   let nextString = JSON.stringify(nextProps)
  //   return prevString !== nextString
  // }

    const [isActive, setIsActive] = useState(false)

    const palette = props.palette
    const children = React.Children.map(props.children,
      (child) => React.cloneElement(child, child.props.hasOwnProperty(palette) ? {palette} : null)
    )

    let isEnable = props.enabled
    const backgroundImage = 'url(' + props.image + ')'

    let borderBottom = 'none'

    if (props.color !== '') {
      borderBottom = '4px solid ' + props.color
    }

    const marginTop = '17px'

    const buttonEvents = props.buttonEvents
    const arrowEvents = props.arrowEvents

    // if (!props.isVisible) {
    //   return null
    // }
    return (
      <div className={styles.splitBtn + ' ' + (isActive ? styles.active : '') + ' ' + (isEnable ? '' : styles.enable)}
      onBlur={() => {
        setIsActive(false)
      }}
      onClick={() => {
        setIsActive(true)
      }}>
        <div className={styles.image} style={{backgroundImage}} {...buttonEvents}>
          <div style={{borderBottom, marginTop}} ></div>
        </div>
        <div className={styles.arrow} tabIndex={-1} {...arrowEvents}>
        </div>
        {isActive && <div className={styles.list} onClick={(e) => {
          e.stopPropagation()
          setIsActive(false)
        }}>
          {children}
        </div>}
      </div>
    )
}

SplitButtonWithSmallImage.propTypes = {
  // when false - component invisible
  visible: PropTypes.bool,
  // when false - events inactive
  enabled: PropTypes.bool,
  // url to image
  image: PropTypes.string,
  // when true - dropdown list is open
  active: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  // events of the button
  buttonEvents: PropTypes.object,
  // events of arrow near the button
  arrowEvents: PropTypes.object,
  // object with color schema
  palette: PropTypes.object,
}

SplitButtonWithSmallImage.defaultProps = {
  visible: true,
  enabled: true,
  active: false,
  color: '',
  image: '',
  buttonEvents: {},
  arrowEvents: {},
  palette: {},
}
