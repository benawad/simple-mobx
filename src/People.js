import React from "react";
import { observer } from "mobx-react";

export default observer(
  class People extends React.Component {
    componentWillMount() {
      this.props.store.loadPeople();
    }

    person = ({ phone, name, picture }) =>
      <div key={phone}>
        <h1>{`${name.first} ${name.last}`}</h1>
        <img src={picture.medium} alt="face" />
      </div>;

    render() {
      if (this.props.store.loading) {
        return <div>loading...</div>;
      }

      return (
        <div>
          <button onClick={this.props.store.loadPeople}>load people</button>
          {this.props.store.people.map(this.person)}
        </div>
      );
    }
  }
);
