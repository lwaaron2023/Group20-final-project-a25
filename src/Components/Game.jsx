import React from 'react'
import IframeResizer from 'iframe-resizer-react'

const Game = (props) => {

    return (
    <>
        <iframe src={props.link} width={window.innerWidth} height={window.innerHeight*.9}  allowFullScreen/>
    </>
  )
}

export default Game