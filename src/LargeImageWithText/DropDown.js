import styles from './index.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function DropDownWithLargeImageWithText(props) {
    const palette = props.palette

    const [isActive, setIsActive] = useState(false)

    const children = React.Children.map(props.children,
      (child) => React.cloneElement(child, child.props.hasOwnProperty(palette) ? {palette} : null)
    )

    let isEnable = props.enabled
    let text = props.text
    const backgroundImage = 'url(' + props.image + ')'

    if (text.indexOf('<br>') === -1) {
      text += '<br>'
    }

    let events = props.events

    return (
      <div className={styles.button + ' ' + (isActive ? styles.active : '') + ' ' + (isEnable ? '' : styles.enable)}
        onBlur={() => {
          setIsActive(false)
        }}
        onClick={() => {
          setIsActive(true)
        }}
        tabIndex={-1} {...events}>
        <div className={styles.image} style={{backgroundImage}}>
        </div>
        <div className={styles.name}>
          <span dangerouslySetInnerHTML={{__html: text}}></span>
          <div className={styles.icon}></div>
        </div>
        {isActive && <div className={styles.list}
        onClick={(e) => {
          e.stopPropagation()
          setIsActive(false)
        }}>
          {children}
        </div>}
      </div>
    )
}

DropDownWithLargeImageWithText.propTypes = {
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
  // events of component
  events: PropTypes.object,
  // object with color schema
  palette: PropTypes.object,
}

DropDownWithLargeImageWithText.defaultProps = {
  text: '',
  visible: true,
  enabled: true,
  active: false,
  image: '',
  events: {},
  palette: {},
}
