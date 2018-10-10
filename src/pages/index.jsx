import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <Link to="/conferences">Conferences</Link>
    <br />
    <Link to="/meetups">Meetups</Link>
  </Layout>
)

export default IndexPage
