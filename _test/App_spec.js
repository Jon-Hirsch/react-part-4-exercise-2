import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ShapeList from '../src/components/ShapeList';
import App from '../src/components/App';

describe('App', function () {
  let component, shapes, moreShapes;
  before(function () {
    shapes = [
      {shape:'square', color:'blue'},
      {shape:'diamond', color:'red'},
      {shape:'circle', color:'green'}
    ];

    moreShapes = [
      {shape:'diamond', color:'green'},
      {shape:'circle', color:'blue'},
      {shape:'square', color:'red'}
    ];

    component = shallow(<App/>);
  });

  it('should contain a ShapeList with a blue square, a red diamond, and a green circle', function () {
    expect(component.contains(<ShapeList shapes={shapes} />)).to.equal(true);
  });

  it('should contain a ShapeList with a green diamond, a blue circle, and a red square', function () {
    expect(component.contains(<ShapeList shapes={moreShapes} />)).to.equal(true);
  });

});
