import React, { Component } from 'react'
import Launch from '../Launch/Launch'
import './styles.css'
class Launchlist extends Component{
    render (){
        return(
            <div className="launch-list">
                 <Launch
                     pic="https://farm9.staticflickr.com/8597/16856369125_e97cd30ef7_o.jpg"
                     title="FalconSat" 
                     launchdate="2006-03-25T10:30:00+12:00"
                     description="Second launch of the  Falcon 9s"
    />
                  <Launch 
                         pic="https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png"
                         title="Starlink 2" 
                         launchdate="2020-01-06T21:19:00-05:00"
                         description="Second launch of the  Falcon 9s"
    />
                  
                     <Launch 
                         pic="https://images2.imgbox.com/a7/ba/NBZSw3Ho_o.png"
                         title="RazakSat" 
                         launchdate="2009-07-13T15:35:00+12:00"
                         description="Second launch of the  Falcon 9s"
    />

            </div>
        )
    }
}export default Launchlist