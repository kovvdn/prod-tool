import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

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
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper className="bg-dark">
    <div className="header_content">
      <h1>{siteTitle}</h1>
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
