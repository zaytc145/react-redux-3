import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top         : '250px',
    left        : '30%',
    right       : '30%',
    bottom      : '330px',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.8)'
  }
};


class LoginForm extends React.Component {
  state = {
    modalIsOpen:false
  }
  
  closeModal = (e) => {
    e.preventDefault();
    this.setState({modalIsOpen:false})
  }

  showModal = () => {
    this.setState({modalIsOpen:true})
  }


  render(){
    return(
      <div>
        <a onClick={this.showModal} className="item">Log In</a>
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles}>
        <form class="ui form">
          <div class="field">
            <label>Login</label>
            <input type="text" name="first-name" placeholder="Login"></input>
          </div>
          <div class="field">
            <label>Password</label>
            <input type="text" name="last-name" placeholder="Password"></input>
          </div>
          <button class="ui button" type="submit">Submit</button>
          <button class="ui red basic button" type="close" onClick={this.closeModal}>close</button>
        </form>
        </Modal>
      </div>)
  }  
  
}

export default LoginForm;