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
      'flex-1 rounded text-center text-lg no-underline tracking-wide font-bold py-3 cursor-pointer '

    if (activeTab === label) {
      className += ' bg-purple-dark text-white border-purple border-b-2'
    } else {
      className += ' bg-grey-lightest text-grey-dark border-grey-dark shadow-sm border-b'
    }

    return (
      <li className={className} onClick={onClick}>
        {label}
      </li>
    )
  }
}

export default Tab
