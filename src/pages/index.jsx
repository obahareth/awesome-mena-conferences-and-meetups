import React from 'react'
import { navigate } from 'gatsby'
import { withNamespaces } from 'react-i18next'

class RedirectIndex extends React.PureComponent {
  constructor(args) {
    super(args)

    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      this.props.i18n.changeLanguage('ar')
      navigate('/ar')
    }
  }

  render() {
    return <div />
  }
}

export default withNamespaces('index')(RedirectIndex)
