import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class PictureBox extends Component {
  render () {
    // const palette = this.props.palette

    const isVisible = this.props.visible
    const isEnable = this.props.enabled
    const backgroundImage = 'url(' + this.props.image + ')'
    const width = this.props.width + 'px'
    const height = this.props.height + 'px'

    let events = isEnable ? this.props.events : {}

    if (!isVisible) {
      return null
    }
    return (
      <div style={{backgroundImage, width, height}} {...events} />
    )
  }
}

PictureBox.propTypes = {
  // when false - component invisible
  visible: PropTypes.bool,
  // when false - events inactive
  enabled: PropTypes.bool,
  // url to image
  image: PropTypes.string,
  // width of component in px
  width: PropTypes.number,
  // height of component in px
  height: PropTypes.number,
  // events of component
  events: PropTypes.object,
  // object with color schema
  palette: PropTypes.object,
}

PictureBox.defaultProps = {
  visible: true,
  enabled: true,
  image: '',
  width: 40,
  height: 66,
  events: {},
  palette: {},
}
