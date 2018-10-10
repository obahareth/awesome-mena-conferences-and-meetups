import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div>
    <div>
        <Link to="/" ><svg className="h-10 w-10"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z"/></svg></Link>
        <Link to="/conferences">Conferences</Link>
        <Link to="/meetups">Meetups</Link>
    </div>
  </div>
)

export default Header
