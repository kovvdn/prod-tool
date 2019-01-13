import React from 'react'
import Layout from './src/components/layout'

import 'bootstrap/dist/css/bootstrap.css'

export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <Layout {...props}>{element}</Layout>
    </>
  )
}
