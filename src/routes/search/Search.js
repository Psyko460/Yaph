import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: PropTypes.string.isRequired,
    };
  }


  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>
            {this.props.title}
          </h1>
          <p>Afficher le resultat</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Search);
