import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from './src/components/layout'
import 'bootstrap/dist/css/bootstrap.css'

export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      {/* <Helmet>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossorigin="anonymous"
        />
      </Helmet> */}
      <Layout {...props}>{element}</Layout>
    </>
  )
}
