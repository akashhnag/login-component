import React, { Component } from 'react'
import PropTypes from 'prop-types';

import {InputBox,CustomButton} from 'custo-input';

import styles from './styles.css'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div>
        <React.Fragment>
          <form>
          <p>
          <label><b>Email:</b></label>
          {/* <input type="text" placeholder="Enter Username" name="uname" required/> */}
          <InputBox type="email" placeholder="Enter Email" name="email" required> </InputBox>
          </p>

          <p>
            <label><b>Password:</b></label>
            {/* <input type="password" placeholder="Enter Password" name="psw" required min/> */}
            <InputBox type="password" placeholder="Enter Password" name="psw" required min-length={5}/>
          </p>

          <button onClick={this.login}>Login</button>
          <button type="button" style={{marginLeft:'15px'}}>Cancel</button>

          </form>

          <p>
          <label>
            <input type="checkbox" name="remember"/> Remember me
          </label>
          </p>
        <p>
        <span >Forgot <a href="#">password?</a></span>
        </p>
        </React.Fragment>

      </div>
    )
  }

  login=()=>{
    console.log('login');

  }
}
