import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', function() {
  it('Should handle creating courses', function() {
    // arrage
    const sotre = createStore(rootReducer, initialState);
    const course = {
      title: "Clean Code"
    }

    // act
    const action = courseActions.createCourseSuccess(course);
    sotre.dispatch(action);

    // assert
    const actual = sotre.getState().courses[0];
    const expected = {
      title: "Clean Code"
    };

    expect(actual).toEqual(expected);
  });

});
