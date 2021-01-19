import React, {useState} from 'react';
import Lolly from './../components/lolly'
import "./styles.css";

const Home = () => {
    const [c1, setC1] = useState('#e95946');
    const [c2, setC2] = useState('#d52358');
    const [c3, setC3] = useState('#deaa43');
    return (
        <div className="container">
        <h1>Create Lolly</h1>
        <div className="main-container">
            <div>
                <Lolly top={c1} middle={c2} bottom={c3} />
                <input type="color" value={c1} onChange={(e) => { setC1(e.target.value) }} />
                <input type="color" value={c2} onChange={(e) => { setC2(e.target.value) }} />
                <input type="color" value={c3} onChange={(e) => { setC3(e.target.value) }} />
            </div>
            <div className="form-container">
                <input type="text" placeholder="To" />
                <textarea  placeholder="Enter your message!" />
                <input type="text" placeholder="From" />

                <button>Send</button>
            </div>
        </div>
        </div>
    )
}
export default Home;