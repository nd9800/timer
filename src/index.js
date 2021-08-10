import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
class Timer extends React.Component {
    state = {
        min : 0,
        sec : 0
    }
    setTime = () =>
    {
        this.setState({
            min : document.querySelector('.startTime').value,
            sec : 0
        })

    };
    updateSec()
    {
        if(this.state.sec === 0)
        {
            this.setState({
                sec: 60
            })
            if(this.state.min <= 0 )
            {
                this.setState({
                    min: 0
                })
            }
            else {
                this.setState({
                    min: this.state.min - 1,
                });
            }
        }
            this.setState({
                sec: this.state.sec - 1
            })
    };




    startTime = () =>
    {
      let clear =  setInterval(()=>{
            this.updateSec();
            console.log(this.state.sec);
      if(this.state.min ===0 && this.state.sec ===0)
      {
          clearInterval(clear);
      }
        },100);


    }

    render() {

            return  <div className="calButton">
                <h1>TIMER</h1>
                <input className='startTime'/>
                <button onClick={this.setTime}>Choose</button>

                <ul>
                    <li><strong>{this.state.min}</strong> min </li>
                    <li><strong>{this.state.sec}</strong> sec </li>
                </ul>
                <button onClick={this.startTime}>START</button>

            </div>;
    }
}

const el = <Timer />;

ReactDOM.render(
    el,
    document.getElementById("container")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
