import { Component } from "react";
import React from 'react'

import * as Tone from "tone"

const Synth =  new Tone.Synth().toDestination()


class Keys extends Component {
    
    notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B']
    keys = ['`', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', `=`, '1', '2', '3', '4', '5', '7', '8', '9', '0', '-']
    notesToPlayKey = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5', 'C#4', 'D#4', 'F#4', 'G#4', 'A#4', 'C#5', 'D#5', 'F#5', 'G#5', 'A#5']



    state = {
        className: ''
    }

    componentDidMount(){
        document.addEventListener("keydown", (event) => {
            let keyDown = event.key
            
            for (let i = 0; i < this.keys.length; i++) {
                if (keyDown === this.keys[i]) {
                    Synth.triggerAttackRelease(this.notesToPlayKey[i], '8n')
                } 
            }
        }, false);
    }

    render () {
        return (this.notes.map((element, index) => {
            
            if (index <= 6 && element !== 'E' && element !== 'B') {
            return(
                    <div>
                    <div key={index} 
                            onClick={() => {
                                Synth.triggerAttackRelease((element + 4), '8n')
                            }} 
                            className='whiteNotes'
                            id={element + 4}
                        > </div>
                    <div key={index} 
                                onClick={() => {
                                    Synth.triggerAttackRelease((element +'#'+ 4), '8n')
                                }} 
                                className='blackNotes' 
                                id={element +'#'+ 4}
                        >
                        </div>
                    </div>
                    // console.log('elem', element + 4)
                )
            } else if (index > 6 &&  (element !== 'E' && element !== 'B')) {
                return(
                    <div>
                    <div key={index} 
                            onClick={() => {
                                Synth.triggerAttackRelease((element + 5), '8n')
                            }}  
                            className='whiteNotes'
                            id={element + 5}
                        ></div>
                            <div key={index} 
                                onClick={() => {
                                    Synth.triggerAttackRelease((element +'#'+ 5), '8n')
                                }} 
                                className='blackNotes' 
                                id={element +'#'+ 5}
                            >
                            </div>
                    </div>
                    )
            } else if (index <= 6 && (element === 'E' || element === 'B')) {
                return (
                    <div >
                        <div key={index} 
                            onClick={() => {
                                Synth.triggerAttackRelease((element + 4), '8n')
                            }} 
                            className='whiteNotes' 
                            id={element + 4}
                        ></div>
                    </div>
                )
            } else {
                return (
                    <div >
                        <div key={index} 
                            onClick={() => {
                                Synth.triggerAttackRelease((element + 5 ), '8n')
                            }} 
                            className='whiteNotes' 
                            id={element + 5}
                        ></div>
                    </div>
                )
            }
        }))
    }       
}


export default Keys