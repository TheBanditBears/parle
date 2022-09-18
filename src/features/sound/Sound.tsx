// Taken and inspired from https://medium.com/front-end-weekly/recording-audio-in-mp3-using-reactjs-under-5-minutes-5e960defaf10

import { Button, ButtonGroup, Box } from "@mui/material";
import ffmpegExport from "../../utils/rrmpeg-utils";

export function Sound() {
  const MicRecorder = require("mic-recorder-to-mp3");

  // New instance
  const recorder = new MicRecorder({
    bitRate: 128,
  });
  const startRecording = () => {
    // Start recording. Browser will request permission to use your microphone.
    recorder
      .start()
      .then(() => {
        // something else
      })
      .catch((e: any) => {
        console.error(e);
      });
  };

  const stopRecording = () => {
    // Once you are done singing your best song, stop and get the mp3.
    recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]: any) => {
        // do what ever you want with buffer and blob
        // Example: Create a mp3 file and play
        const file = new File(buffer, "audio.mp3", {
          type: blob.type,
          lastModified: Date.now(),
        });

        var FileSaver = require("file-saver");

        FileSaver.saveAs(file, "audio.mp3");

        const player = new Audio(URL.createObjectURL(file));
        player.play();
      })
      .catch((e: any) => {
        alert("We could not retrieve your message");
        console.log(e);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={startRecording}>
          Start Recording
        </Button>
        <Button onClick={stopRecording}>
          Stop Recording
        </Button>
      </ButtonGroup>
    </Box>
  );
}
