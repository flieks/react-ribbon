import styles from './index.css'
import React, { useState, useEffect }  from 'react'
import PropTypes from 'prop-types'

export default function SplitButton(props) {
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
    // let isActive = props.active
    let text = props.text
    const backgroundImage = 'url(' + props.image + ')'

    if (text.indexOf('<br>') === -1) {
      text += '<br>'
    }

    let buttonEvents = props.buttonEvents
    // let arrowEvents = props.arrowEvents

    if (!isVisible) {
      return null
    }
    return (
      <div className={styles.splitBtn + ' ' + (isActive ? styles.active : '') + ' ' + (isEnable ? '' : styles.enable)}>
        <div className={styles.image} style={{backgroundImage}} {...buttonEvents}>
        </div>
        <div className={styles.name} tabIndex={-1}
        onBlur={() => {
          setIsActive(false)
        }}
       >
         <div onClick={() => {
            setIsActive(true)
          }}>
            <span dangerouslySetInnerHTML={{__html: text}}></span>
            <div className={styles.icon}></div>
         </div>
          {isActive && <div className={styles.list}
            onClick={() => {
              setIsActive(false)
            }}>
            {children}
          </div>}
        </div>
      </div>
    )
}

SplitButton.propTypes = {
  // text under the icon
  text: PropTypes.string,
  // when false - component invisible
  visible: PropTypes.bool,
  // when false - events inactive
  enabled: PropTypes.bool,
  // when true - dropdown list is open
  active: PropTypes.bool,
  // url to image
  image: PropTypes.string,
  children: PropTypes.element,
  // events of the button
  buttonEvents: PropTypes.object,
  // events of arrow under the button
  arrowEvents: PropTypes.object,
  // object with color schema
  palette: PropTypes.object,
}

SplitButton.defaultProps = {
  text: '',
  visible: true,
  enabled: true,
  active: false,
  image: '',
  buttonEvents: {},
  arrowEvents: {},
  palette: {},
}
