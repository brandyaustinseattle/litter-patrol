import React, { Component } from 'react';
import '../App.css';
import TrashIcon from '../trash.svg';
import PropTypes from 'prop-types';

class Trash extends Component {
  static propTypes = {
    index: PropTypes.integer,
    isTrashVisible: PropTypes.bool,
    incrementPoints: PropTypes.func,
    emptyTrash: PropTypes.func,
  }

  onTrashClicked = () => {
    // console.log note
    console.log("processing trash click");
    this.props.incrementPoints();
    let index = this.props.index;
    this.props.emptyTrash(index);
  }

  render() {

    let display = null;

    if (this.props.isTrashVisible) {
      display =
        <img onClick={this.onTrashClicked} src={ TrashIcon } alt="Trash" className="trash"></img>;
    }

    return (
      <div className="bin">
        {display}
      </div>
    );
  }
}

export default Trash;
