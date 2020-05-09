import styles from './index.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function ComboBox(props) {
  // shouldComponentUpdate (nextProps) {
  //   let prevString = JSON.stringify(this.props)
  //   let nextString = JSON.stringify(nextProps)
  //   return prevString !== nextString
  // }
    const [isActive, setIsActive] = useState(false)

    const isVisible = props.visible
    const isEnable = props.enabled
    const text = props.text
    const label = props.label
    const data = props.data
    const index = props.index
    const width = props.width + 'px'

    let events = isEnable ? props.events : {}

    if (!isVisible) {
      return null
    }

    let text2 = text
    if(index > -1 && data){
      text2 = data[index]
    }
    return (
      <div className={styles.comboBox}  onBlur={() => {
        setIsActive(false)
      }}>
        <div className={styles.label}>
          {label}
        </div>
        <div className={styles.dropDown + ' ' + (isActive ? styles.active : '')}
            style={{width}}
            tabIndex={-1}
            onClick={() => {
              setIsActive(true)
            }}
            {...events}>
          <div className={styles.text}>
            {text2}
          </div>
          {isActive && <div className={styles.list} onClick={(e) => {
            e.stopPropagation()
            setIsActive(false)
          }}>
            {data.map((item, index) => {
              return <div className={styles.item} key={index} onClick={() => { props.onSelectionIndexChanged && props.onSelectionIndexChanged(index, item)}}>
                {item}
              </div>
            })}
          </div>}
        </div>
      </div>
    )
}

ComboBox.propTypes = {
  // text in combo box
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  // text near combo box
  label: PropTypes.string,
  // when false - component invisible
  visible: PropTypes.bool,
  // when false - events inactive
  enabled: PropTypes.bool,
  // when true - dropdown list is open
  active: PropTypes.bool,
  // array of data shown in dropdown
  data: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
  ])),
  // width of component
  width: PropTypes.number,
  // events of component
  events: PropTypes.object,
  // object with color schema
  palette: PropTypes.object,
}

ComboBox.defaultProps = {
  text: '',
  label: '',
  visible: true,
  enabled: true,
  active: false,
  width: 45,
  data: [],
  events: {},
  palette: {},
}
