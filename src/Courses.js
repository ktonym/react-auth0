import React, { Component } from "react";

class Courses extends Component {
  state = {
    courses: [],
    error: ""
  };

  componentDidMount() {
    fetch("/courses", {
      headers: { Authorization: `Bearer ${this.props.auth.getAccessToken()}` }
    })
      .then(res => {
        if (res.ok) return res.json();
        throw new Error("Network response was not ok");
      })
      .then(res => this.setState({ courses: res.courses }))
      .catch(error => this.setState({ error: error.message }));
  }

  render() {
    const { courses, error } = this.state;
    return (
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    );
  }
}

export default Courses;
