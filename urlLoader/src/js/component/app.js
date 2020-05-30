import React, { useState } from 'react';
import data from './data.json';
import Loader from './loader';
import brumier from '../../images/brumier.png';
import video from '../../video/que-es-core.mp4';

console.log(data);

function App() {
    const [loaderList, setLoaderList] = useState([]);
    function handleClick () {
       setLoaderList(data.loaders);
    }
    return (
        <div>
            Que linda app con React
            <video src={video} width={360} controls></video>
            <p>
                <img src={brumier} alt="logoBrumier"></img>
            </p>
            <ul>
                {
                   loaderList.map(item => <Loader {...item} key={item.id} />)
                }
            </ul>
            <button onClick={handleClick}>Mostrar lo aprendido</button>
        </div>
    )
}

export default App