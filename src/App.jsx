import axios from "axios";
import { useState } from "react";

function App() {
    const [file, setFile] = useState();
    const upload = () =>{
        const formData = new FormData();
        formData.append('file', file);
        axios.post('http://localhost:3005/uploads', formData);
    }
    return (
        <div className="App">
            <input type="file" onChange={(e) =>{setFile(e.target.files[0])}}/>
            <button onClick={upload}>Upload</button>
        </div>
    );
}

export default App;
