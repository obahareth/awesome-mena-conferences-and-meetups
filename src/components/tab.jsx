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
      props: { activeTab, label, first, last },
    } = this

    let className =
      'flex-1 text-center text-lg no-underline tracking-wide font-bold py-3 cursor-pointer '

    if (activeTab === label) {
      className += ' bg-purple-dark text-white border-purple border-b-2'
    } else {
      className +=
        ' bg-grey-lightest text-purple-dark border-purple-dark shadow-sm border'
    }

    return (
      <li
        className={`${className} ${first ? 'rounded-l-full' : ''} ${
          last ? 'rounded-r-full' : ''
        }`}
        onClick={onClick}
      >
        {label}
      </li>
    )
  }
}

export default Tab
