import styled from 'styled-components'
import SettingsIcon from '../../images/settings-icon.svg'

export default styled.button`
  display: block;
  height: 32px;
  width: 32px;
  background-image: url(${SettingsIcon});
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:active {
  }
`
