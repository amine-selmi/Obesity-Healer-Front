import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  row: PropTypes.object.isRequired,
};

class ListePatientsAction extends Component {
  render() {
    const row = this.props.row;
    return (
      <Link to={`/profile/${row.id}`}>
        Settings
      </Link>
    );
  }
}
ListePatientsAction.propTypes = propTypes;
export default ListePatientsAction;
