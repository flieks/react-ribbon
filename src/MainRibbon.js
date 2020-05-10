import styles from './index.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MainRibbon extends Component {
  render () {
    const palette = this.props.palette
    let tabs = React.Children.map(this.props.children,
      (child, k) => React.cloneElement(child, {key: k, palette})
    )

    const font = this.props.font
    const activeTab = this.props.currentTab

    const quickAccessButtons = this.props.quickAccessButtons ? ((Array.isArray(this.props.quickAccessButtons)
      ? this.props.quickAccessButtons
      : [this.props.quickAccessButtons])
      .map(
      (child, k) => React.cloneElement(child, {key: k}))) : null
    const text = this.props.text

    let fileButtonEvents = this.props.fileButtonEvents
    let tabEvents = this.props.tabEvents

    // if component have only one child wrap it in array
    if (tabs && !Array.isArray(tabs)) {
      tabs = [tabs]
    }

    const styleObj = {
      font,
      backgroundColor: palette.main || "#2a569a",
      cursor: 'default',
      height: '100%',
    }

    return (
      <div className={styles.main} style={styleObj}>
        <span className={styles.ribbonTitle}>{text}</span>
        <div className={styles.quickAccessBtn}>
          {quickAccessButtons}
        </div>
        <div className={styles.backstageViewButton}
             {...fileButtonEvents} >
          <div className={styles.inner}
            style={{
              backgroundColor: palette.main,
              color: palette.inActiveTab || '#ffffff',
            }} >File</div>
        </div>
        <TabLabels
          tabs={tabs}
          activeTab={activeTab}
          events={tabEvents}
          palette={palette} />
        <div>
          {/* render selected tab content*/}
          {tabs && tabs[activeTab]}
        </div>
      </div>
    )
  }
}

MainRibbon.propTypes = {
  // title
  text: PropTypes.string,
  // index of active tab
  currentTab: PropTypes.number,
  // font of Ribbon in format [font-style||font-variant||font-weight] font-size [/line-height] font-family | inherit
  font: PropTypes.string,
  // when false - events inactive
  enabled: PropTypes.bool,
  // object with color schema
  palette: PropTypes.object,
  // events of file button
  fileButtonEvents: PropTypes.object,
  // events of tab label (first argument is index of tab)
  tabEvents: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  // array of elements which will be set in quick access button line
  quickAccessButtons: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
}

MainRibbon.defaultProps = {
  text: '',
  currentTab: 0,
  font: '',
  enabled: true,
  palette: {},
  fileButtonEvents: {},
  tabEvents: {},
}

// tab labels component
class TabLabels extends Component {
  render () {
    let tabs = this.props.tabs && this.props.tabs.map((tab, i) => {
      // render tabs labels
      const tabText = tab.props.text
      const palette = tab.props.palette
      const tabVisible = tab.props.visible
      const isEnable = tab.props.enable

      const styleObj = this.props.activeTab === i ? {
        backgroundColor: palette.tabBody || '#f1f1f1',
        color: palette.main,
      } : {
        backgroundColor: palette.main,
        color: palette.inActiveTab || '#ffffff',
      }

      let tabEvents = isEnable ? this.props.events : {}
      let events = {}

      for (var key in tabEvents) {
        if (tabEvents.hasOwnProperty(key)) {
          let eventTmp = tabEvents[key]

          events[key] = function () {
            eventTmp(i)
          }
        }
      }

      if (!tabVisible) {
        return null
      }
      return <div
        key={i}
        className={this.props.activeTab === i ? styles.activeTabLable : styles.tabLable}
        {...events}
        style={styleObj}>
        <div className={styles.inner}>
          {tabText}
        </div>
      </div>
    })

    return (
      <div style={{display: 'inline'}}>
        {tabs}
      </div>
    )
  }
}

TabLabels.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.element),
  activeTab: PropTypes.number,
  palette: PropTypes.object,
  events: PropTypes.object,
}

TabLabels.defaultProps = {
  tabs: [],
  activeTab: 0,
  palette: {},
  events: {},
}
