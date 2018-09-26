import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseAction from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }
  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    const {courses} = this.props; // distructiong
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
                value="Add Course"
                className="btn btn-primary"
                onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  //dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  //createCourse: PropTypes.func.isRequired
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses // the varaiable which is stated at reducer (courseReducer)
  };
}


function mapDispatchToProps(dispatch) { //dispatch injected in by the connect function (connect no longer going to to inject dispatch property)
  return {
    //createCourse: course => dispatch(courseAction.createCourse(course)) // arrow function since 1 param no need for ()
    actions: bindActionCreators(courseAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (CoursesPage);
// If the second paramenter 'mapDispatchToProps' is not provided
// connet is going to inject a dispatch prop for us
