import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import SettingsButton from './styled/settingsButton'

const HeaderWrapper = styled.div`
  margin-bottom: 1.5rem;
  .header_content {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  }
  h1 {
    font-family: 'Open Sans';
    font-weight: lighter;
    font-size: 2rem;
    margin: 0;
    color: #fff;
    cursor: pointer;
  }
`

const Header = ({ toggle, clearOutput }) => (
  <HeaderWrapper className="bg-dark">
    <div className="header_content row justify-content-between">
      <h1 onClick={clearOutput}>Линия №3</h1>
      <SettingsButton onClick={toggle} />
    </div>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
