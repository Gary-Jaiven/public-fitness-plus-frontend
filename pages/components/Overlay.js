import styles from '../../styles/Home.module.css'
// import background from '../public/Rob_RoseMarie.png'
import { withRouter } from 'next/router'

var collectionWindowStyle = {
    div:{
        backgroundImage: "url({/Rob_RoseMarie.png})",
        backgroundPosition: 'center',
        backgroundSize: 'cover',  
        color: "white",
        margin: "5px",
        padding: "5px",
         '&::before': {
          content: "This is my content, bitch",
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          background: "rgba(255,255,255,.5)",
        padding: "5px",
        }
    }
}

export default function Overlay(){
    return <div style={collectionWindowStyle.div}>
        <h1>This is my content. Bitch.</h1>
    </div>
}