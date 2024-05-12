import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Arrow from "../assets/arrow .svg";


const TextToSpeech = ({ text }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const [pitch, setPitch] = useState(1);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    setUtterance(u);
    

    // Add an event listener to the speechSynthesis object to listen for the voiceschanged event
    // synth.addEventListener("voiceschanged", () => {
  
    // });

    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    } else {
      console.log("=========");
      console.log(synth.getVoices());
      let voices = synth.getVoices()
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].lang === 'en-US' && voices[i].name.includes('Male')) {
          utterance.voice = voices[i];
        }
      }
      // utterance.voice = synth.getVoices()[6];
      utterance.pitch = pitch;
      utterance.rate = 0.9;
      utterance.volume = volume;
      synth.speak(utterance);
    }

    setIsPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;
    setIsPaused(true);
    synth.pause();
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;
    setIsPaused(false);
    synth.cancel();
  };

 

  return (
    <div>

    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Button variant="contained"  style={{height:32,width:50,background:'#252525',borderRadius:30}}onClick={handlePlay}>
        {/* <img src={Arrow} style={{width:32,height:32}}/> */}
        Read
      </Button>
      {/* <Button variant="contained" style={{height:32,width:50,background:'#252525',marginLeft:10,borderRadius:30}}onClick={handlePause}>Pause</Button> */}
      <Button variant="contained" style={{height:32,width:50,background:'#252525',marginLeft:10,borderRadius:30}} onClick={handleStop}>Stop</Button>
      </div>


    </div>
  );
};

export default TextToSpeech;
