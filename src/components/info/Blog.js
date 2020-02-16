import React, { Component } from 'react';



export default class Blog extends Component {
  render() {
    return (
      <div className="container">
  
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s10">
                <input
                 autocomplete="off"
                  type = 'search'
                  style={{ fontSize: '30px',placeholderTextColor: '#add8e6', resize: "none", borderColor: 'white' }}
                  placeholder='Type Your Title'
                  id="email"
                  type="text"
                />

              </div>
              <div className="input-field col s10">


                <textarea
                  style={{
                    height: "500px",
                    borderColor: "white",
                    margin: "0px",
                    outline: 'none',
                    fontSize: '20px',
                    resize: "none"
                  }}
                  placeholder='Start Writing'
                  id="password"
                  type="text"
                />

              </div>
            </form>
          </div>
        </div>
      </div>



    )

  }
}