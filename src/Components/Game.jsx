import React from 'react'

const Game = (props) => {

    return (
    <>
        <iframe src={props.link} width={window.innerWidth * .9} height={window.innerHeight*.9}  allowFullScreen style={{justifySelf:"center"}}/>
    </>
  )
}

export default Game