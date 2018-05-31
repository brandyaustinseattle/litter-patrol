import React, { Component } from 'react';
import './App.css';
import Trash from './components/Trash.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bins: this.getBinsState(),
      points: 0
    };

    this.startGame();
    // console.log note
    console.log(this.state.bins);
  }

  startGame() {
    setInterval(() => {
      this.setState( {
        bins: this.getBinsState()
      });
    }, 1500);
  }

  getBinsState() {
    let bins = [];
    for (let i = 0; i < 9; i++){
      bins.push({ index: i, isTrashVisible: (Math.round(Math.random()) ? true : false )});
    }
    return bins;
  }

  incrementPoints = () => {
    // console.log note
    console.log('incrementing points');
    let points = this.state.points;
    this.setState({points: points += 1});
  }

  emptyTrash = (index) => {
    // console.log note
    console.log('emptying trash');

    let bins = this.state.bins;

    // console.log note
    console.log('bins before update');
    console.log(bins);

    let updatedBins = bins.map(function(bin) {
      if (bin.index === index) {
        bin.isTrashVisible = false;
      }
        return bin
      });

      // console.log note
      console.log('bins after update');
      console.log(updatedBins);

      this.setState({bins: updatedBins});
  }

  render() {
    const bins = this.state.bins.map((bin, index) => {
      return (
        <Trash key={`trash-${index}`} index={index} isTrashVisible={bin.isTrashVisible} incrementPoints={this.incrementPoints} emptyTrash={this.emptyTrash} />
      );
    });

    return (
      <div className="App">
        <section className="overall-data">
          <h1>Litter Patrol</h1>
          <h2>Points: { this.state.points }</h2>
        </section>

        <section className="bins">
          { bins }
        </section>
      </div>
    );
  }
}

export default App;
