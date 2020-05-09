import styles from './index.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function MenuDropDown(props) {
  // shouldComponentUpdate (nextProps) {
  //   let prevString = JSON.stringify(this.props)
  //   let nextString = JSON.stringify(nextProps)
  //   return prevString !== nextString
  // }

    const [isActive, setIsActive] = useState(false)
    
    const isEnable = props.enabled
    const text = props.text
    const hotKey = props.hotKey
    const backgroundImage = 'url(' + props.image + ')'

    const events = isEnable ? props.events : {}

    // stop event propogation for click
    if(events.onClick){
      let click = events.onClick;

      events.onClick = (e) => {
        e.stopPropagation();
        click(e);
      }
    }

    return (
      <div className={styles.menuItem + ' ' + (isEnable ? '' : styles.enable)} {...events}>
        <div className={styles.menuItem} style={{width: '100%'}}
        onClick={(e) => {
          e.stopPropagation()
          setIsActive(true)
        }}
        onBlur={() => {
          setIsActive(false)
        }}>
          <div className={styles.image} style={{backgroundImage}} />
          <div className={styles.text}>
            {text}
          </div>
          <div className={styles.hotKey}>
            {hotKey}
          </div>

          <div className={styles.arrow} style={{textAlign: 'right', paddingRight: '1em'}}/>
        </div>
        
        {isActive && <div className={styles.submenu}  onClick={(e) => {
          debugger
          setIsActive(false)
        }}>
          {props.children}
        </div>}
      </div>
    )
}

MenuDropDown.propTypes = {
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
  // when true - dropdown list is open
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  // events of component
  events: PropTypes.object,
}

MenuDropDown.defaultProps = {
  visible: true,
  enabled: true,
  active: false,
  text: '',
  hotKey: '',
  image: '',
  events: {},
}
