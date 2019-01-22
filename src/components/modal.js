import React, { Component } from 'react'
import classnames from 'classnames'

import styled from 'styled-components'

const ModalWrapper = styled.div`
  display: ${props => (props.on ? 'block !important' : 'none')};
`
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`

const Modal = ({ on, toggle, children }) => (
  <ModalWrapper on={on} className={classnames('modal', 'fade', { show: on })}>
    <Background onClick={toggle} />
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Настройки</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span onClick={toggle} aria-hidden="true">
              &times;
            </span>
          </button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
            onClick={toggle}
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  </ModalWrapper>
)

export default Modal
