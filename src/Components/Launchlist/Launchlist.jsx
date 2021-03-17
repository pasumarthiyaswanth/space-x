import React, { Component } from 'react'
import Launch from '../Launch/Launch'
import './styles.css'
import axios from 'axios';
class Launchlist extends Component{
     state={
         launches : []
     }

    componentDidMount =( )=>{
    this.getLaunches()
    }
    getLaunches=()=>{ 
       axios.get('https://api.spacexdata.com/v3/launches').then((response)=>{
     this.setState(
    
     {launches:response.data}
    
)

    
})
.catch((error)=>{
    console.log(error)
})

    }
   Launchlist=()=>{
      const LaunchlistComponents= this.state.launches.map((launch,index )=>{
          const image= launch.links.flickr_images.length===0?
           'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Soyuz_TMA-9_launch.jpg/1200px-Soyuz_TMA-9_launch.jpg':launch.links.flickr_images[0];
          console.log(launch.links.flickr_images[0])
           return<Launch
           key={"launch_"+index}
           pic={image}
           title={launch.mission_name} 
           launchdate={launch.launch_date_local}
           description={launch.details}  />

       })

       return LaunchlistComponents;
   }

    render (){
        return(
            <div className="launch-list">     
                  {this.Launchlist ( )}
            </div>
        )
    }
}export default Launchlist