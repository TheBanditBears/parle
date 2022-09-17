import { useState, useEffect } from 'react';
import { useTimer } from "react-timer-hook";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import parseBackend from "../../utils/axios-utils";

function MyTimer({ expiryTimestamp }: any) {
  const {
    seconds,
    minutes,
    hours,
    days,
    start,
    pause,
    resume,
    restart
  } = useTimer({
    autoStart:false,
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called")
  });

  // State true = play
  // State false = pause

  const [state, setState] = useState(false);

  const toggleState = () => {
    
    console.log(state)
    setState(state => {

      if (state) {
        pause();
      } else {
        start();
      }
      return !state;
    });
  };

  useEffect(() => {
      parseBackend.get("/")
      .then(response => response.data)
      .then(data => {
          console.log(data);
      }).catch(e => {
          console.log(e);
      })
  }, [state]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>react-timer-hook </h1>
      <p>Timer Demo</p>

      <div style={{ fontSize: "100px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>


      <p>{state ? "Running" : "Not running"}</p>
      <IconButton onClick={toggleState}>
          <PlayCircleIcon/>
      </IconButton>

      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button
        onClick={() => {
          const time = new Date();
          time.setSeconds(time.getSeconds() + 600);
          restart(time);
        }}
      >
        Restart
      </button>
    </div>
  );
}

export default function Countup() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
