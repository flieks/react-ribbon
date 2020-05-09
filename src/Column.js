import styles from './index.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Column extends Component {
  
  render () {
    const palette = this.props.palette
    const children = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, child.props.hasOwnProperty(palette) ? {palette} : null)
    )

    return (
      <div className={styles.column}>
        {
          children.map((child, i) => { // render tabs labels
            return <div key={i} className={styles.colItem}>
              {child}
            </div>
          })
        }
      </div>
    )
  }
}

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  // object with color schema
  palette: PropTypes.object,
}

Column.defaultProps = {
  palette: {},
}
