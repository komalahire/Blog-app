import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Card extends Component {
  render() {
    return (
      <div className="container">
        <Link to='/blog'>
          {/* <i class="mdi-social-person-outline prefix"> <i class="material-icons">enhanced_encryption

</i></i> */}
          <div style={{ marginTop: "4rem" }} className="row">
            <div className="col s3 offset-s2">
              <div className='card'>
                <i
                  class="mdi-social-person-outline prefix"
                >
                  <i class="material-icons" style=
                    {{ fontSize: "50px", padding: '70px' }}>border_color
                </i>
                  </i>
                <div className='card-image waves-effect waves-block waves-light'>
                  <div className='card-content'>
                    <div className='card-title activator grey-text text-darken-4'>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>


    )
  }
}