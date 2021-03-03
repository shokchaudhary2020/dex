import React , {useEffect} from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';





function  Camera (props){

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      width : 200,
      height : 140,
      margin : 10,
      backgroundColor : '#f3f3f3',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
  }));

  const classes = useStyles();
  const theme = useTheme();

  useEffect(()=> streamCamVideo(), [])

  function streamCamVideo() {

    var constraints = { audio: true, video: { width: 180, height: 100 } };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function(mediaStream) {
        var video = document.querySelector("video");

        video.srcObject = mediaStream;
        video.onloadedmetadata = function(e) {
          video.play();
        };
      })
      .catch(function(err) {
        console.log(err.name + ": " + err.message);
      }); // always check for errors at the end.
  }

    return (
      <div className="camera-card">
        <Card className={classes.root}>
           <div className={classes.details}>
             <CardContent className={classes.content}>
               <div id="container">
                 <video autoPlay={true} id="videoElement"></video>
               </div>
             </CardContent>
           </div>
         </Card>
    </div>
    );

}
export default Camera;
