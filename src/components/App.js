import React from 'react';
import {Component} from 'react';
import ShapeList from './ShapeList';


export default class App extends Component {
  render() {
    let shapes = [
      {shape:'square', color:'blue'},
      {shape:'diamond', color:'red'},
      {shape:'circle', color:'green'}
    ];

    let moreShapes = [
      {shape:'diamond', color:'green'},
      {shape:'circle', color:'blue'},
      {shape:'square', color:'red'}
    ];

    return (
      <div>
        <ShapeList shapes={shapes} />
        <ShapeList shapes={moreShapes} />
      </div>
    );
  }
}
