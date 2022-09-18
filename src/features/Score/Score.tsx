
import { useEffect } from "react";
import parseBackend from "../../utils/axios-utils";
import axios from "axios";


export function Score() {

    var presScore = 'TBD';

    return(
        <div>
            <h2>Presentation Score:</h2>
            <h2 id='score'></h2>
        </div>
    )
}