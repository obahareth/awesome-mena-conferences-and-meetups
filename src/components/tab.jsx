import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  onClick = () => {
    const { label, onClick } = this.props
    onClick(label)
  }

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this

    let className =
      'text-lg no-underline border-b-2 tracking-wide font-bold text-xs py-3 mr-8 cursor-pointer'

    if (activeTab === label) {
      className += ' text-purple-dark border-purple-dark'
    } else {
      className += ' text-grey-dark border-transparent'
    }

    return (
      <li className={className} onClick={onClick}>
        {label}
      </li>
    )
  }
}

export default Tab
