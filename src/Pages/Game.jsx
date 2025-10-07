import React from 'react'

const Game = (props) => {

    return (
    <>
        <div className={`aspect-square border-1 border-black bg-white flex flex-cols items-center justify-center`} style={{"width":'90%',"height":'90%', margin:'4em'}} id={props.id}>
            <iframe src={props.link} title={props.title} height={"90%"} width={"90%"}/>
        </div>
    </>
  )
}

export default Game