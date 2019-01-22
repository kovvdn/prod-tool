import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import Header from './header'
import Modal from './modal'
import Settings from './settings'

import Toggle from './Toggle'

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
`

const Layout = ({ children, clearOutput, set12HoursDay }) => (
  <Toggle>
    {({ on, toggle }) => (
      <>
        <Header clearOutput={clearOutput} toggle={toggle} />
        <Modal on={on} toggle={toggle}>
          <Settings set12HoursDay={set12HoursDay} />
        </Modal>
        <ContentContainer>{children}</ContentContainer>
      </>
    )}
  </Toggle>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
