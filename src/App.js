import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* DESKTOP OR LAPTOP */}
        <MediaQuery query="(min-device-width: 1224px)">
          <div className="stack-display">
            <Queue />
          </div>

          <div className="input-form">
            <p>Input Form</p>
          </div>
        </MediaQuery>

        {/* TABLET or MOBILE PHONE */}
        <MediaQuery query="(max-device-width: 1224px)">
          <div>You are a tablet or mobile phone</div>
        </MediaQuery>
      </div>
    );
  }
}

class Queue extends Component {
  constructor(){
    super();

    var count = 0;
    var maxSize = 7;
    var tempQueue = [];
    // for(var i=maxSize-1;i>=0;i--){
    //   tempQueue[i] = new Block(count);
    //   count++;
    // }

    this.state = {
      queue : tempQueue,
      size : 0,
      maxSize : 7,
      count : count
    }

    this.enqueue = this.enqueue.bind(this);
    this.dequeue = this.dequeue.bind(this);
  }

  enqueue(block){
      let id = this.state.count;

      var temp = {
        name : "Jim",
        description : "Jim is an empty block. Being a block is quite fun! We get to move around a lot :D",
        id : id,
      }

      block.setBlock(temp)

      let newQueue = this.state.queue;
          newQueue.unshift(block);
      let newSize = this.state.size + 1;
      let newCount = this.state.count + 1;

      this.setState({
        queue : newQueue,
        size : newSize,
        count : newCount
      });
  }

  dequeue(){
    if(this.state.size - 1 < 0){
      alert("Underflow!");
      // return null;
    } else {
      // let output = this.state.queue[0];
      let newQueue = this.state.queue.slice(0, this.state.queue.length-1);
      let newSize = this.state.size - 1
      this.setState({
        queue : newQueue,
        size : newSize,
      })
      // return output
    }
  }

  renderQueue(){
    const jsxQueue = this.state.queue.map((block) => (
      <div className="block" key={block.state.id}>
        <p className="block-head">{block.state.name} | {block.state.id}</p>
        <p className="block-body">{block.state.description}</p>
      </div>
    ));

    return jsxQueue
  }

  render(){
    return (
      <div className="Queue">
        <div className="queue-container">
          {this.renderQueue()}
        </div>
        <button className="enqueue-button" onClick={(e) => this.enqueue(new Block())}> EnQueue</button>
        <button className="dequeue-button" onClick={this.dequeue}> DeQueue</button>
      </div>
    )}
}

class Block extends Component {
  constructor(id){
    super();
    this.state = {
      name : "Default",
      description : "Empty",
      id : id,
    }
  }

  setBlock(block){
    this.state = {
      name : block.name,
      description : block.description,
      id : block.id
    };
  }
}

export default App;
