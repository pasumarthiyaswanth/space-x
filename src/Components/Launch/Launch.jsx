import React, { Component } from 'react'
import './styles.css'
class Launch extends Component {
    render ( ) {
        return ( 
            <div className="launch">
              <img alt={ Launch} src={this.props.pic}/>
               <div className="content">
                 <div className="info">
                     <h1>{this.props.title}</h1>
                     <h1>{this.props.launchdate}</h1>
                 </div>
                <p className="p">{this.props.description}.</p>
            </div>
            </div>
        )
    }
}
export default Launch