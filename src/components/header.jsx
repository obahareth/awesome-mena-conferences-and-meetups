import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1>
        <Link
          to="/conferences"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Conferences
        </Link>
      </h1>

      <h1>
        <Link
          to="/meetups"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Meetups
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
