import React, { Component, Fragment } from 'react'
import OffCanvas from 'react-aria-offcanvas'
import {Button, ListGroup} from 'react-bootstrap'

const Navigation = () => (
  <nav id="menu" className = "menu">
    <ListGroup>
      <ListGroup.Item><a href="#m-i-1">Menu Item 1</a></ListGroup.Item>
      <ListGroup.Item><a href="#m-i-1">Menu Item 1</a></ListGroup.Item>
      <ListGroup.Item><a href="#m-i-1">Menu Item 1</a></ListGroup.Item>
      <ListGroup.Item><a href="#m-i-1">Menu Item 1</a></ListGroup.Item>
      <ListGroup.Item><a href="#m-i-1">Menu Item 1</a></ListGroup.Item>
    </ListGroup>
  </nav>
)

export default class SideNavPage extends Component {
  state = {
    isOpen: false,
  }

  open = () => {
    this.setState(
      { isOpen: true },
    )
  }

  close = () => {
    this.setState(
      { isOpen: false },
    )
  }

  render() {
    return (
      <Fragment>

        <Button
      type="button" data-toggle="collapse" data-target="#navbarSupportedContent15"


          id="menu-button"
          aria-label="  Menu"
          aria-controls="menu"
          aria-expanded={this.state.isOpen}
          onClick={this.open}
          variant="outline-secondary"
        >
        <span class="navbar-toggler-icon"></span>
        </Button>
        <OffCanvas
          isOpen={this.state.isOpen}
          onClose={this.close}
          labelledby="menu-button"
        >
        <div className="sidepane-content">
          <Button variant="outline-secondary" onClick={this.close}>Close</Button>
          <Navigation />
          </div>
        </OffCanvas>
      </Fragment>
    )
  }
}
