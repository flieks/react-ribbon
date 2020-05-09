import styles from './index.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class BackStageView extends Component {
  render () {
    const palette = this.props.palette
    let pages = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, child.props.hasOwnProperty(palette) ? {palette} : null)
    )

    const isVisible = this.props.visible

    const activePage = this.props.currentPage
    const font = this.props.font

    const events = this.props.events

    // if component have only one child wrap it in array
    if (!Array.isArray(pages)) {
      pages = [pages]
    }

    const styleObj = {
      font,
      backgroundColor: palette.backStageButton || '#217346',
      color: palette.backStageText || '#ffffff',
    }

    if (!isVisible) {
      return null
    }
    return (
      <div className={styles.view} style={styleObj}>
        <div className={styles.arrow} {...events}/>
        <PageLabels
          pages={pages}
          activePage={activePage}
          palette={palette} />
          {pages[activePage]}
      </div>
    )
  }
}

BackStageView.propTypes = {
  // index of active page
  currentPage: PropTypes.number,
  // when false - component invisible
  visible: PropTypes.bool,
  // when false - events inactive
  enable: PropTypes.bool,
  // font of Ribbon in format [font-style||font-variant||font-weight] font-size [/line-height] font-family | inherit
  font: PropTypes.string,
  // object with color schema
  palette: PropTypes.object,
  // events of component
  events: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
}

BackStageView.defaultProps = {
  currentPage: 0,
  visible: true,
  enable: true,
  font: '',
  palette: {},
  events: {},
}

class PageLabels extends Component {
  render () {
    return (
      <div className={styles.labels}>
        {
          this.props.pages.map((tab, i) => { // render tabs labels
            const pageText = tab.props.text
            const palette = tab.props.palette
            const pageVisible = tab.props.visible
            const isEnable = tab.props.enable

            const styleObj = this.props.activePage === i ? {
              backgroundColor: palette.activeBackStageButton || '#439467',
              color: palette.backStageText || '#ffffff',
            } : {
              backgroundColor: palette.backStageButton || '#217346',
              color: palette.backStageText || '#ffffff',
            }

            const events = isEnable ? tab.props.events : {}

            if (!pageVisible) {
              return null
            }
            return <div
              key={i}
              className={styles.pageLabel}
              {...events}
              style={styleObj}>
              <div className={styles.inner}>
                {pageText}
              </div>
            </div>
          })
        }
      </div>
    )
  }
}

PageLabels.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.element),
  activePage: PropTypes.number,
  palette: PropTypes.object,
  events: PropTypes.object,
}

PageLabels.defaultProps = {
  pages: [],
  activePage: 0,
  palette: {},
  events: {},
}
