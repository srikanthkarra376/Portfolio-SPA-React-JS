import React, { Component } from 'react';


class contact extends Component {
  render() {
    return (
      <div className="landing-page">
     <form>
       Name:<input type="text" />
       Email:<input type="text" />
       <input type="button" value="submit"/>
     </form>
    </div>
    );
  }
}

export default contact;