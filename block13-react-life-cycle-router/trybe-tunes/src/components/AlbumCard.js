import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AlbumCard extends Component {
  render() {
    const { album:
      { collectionId, artworkUrl100, collectionName, artistName },
    } = this.props;

    return (
      <Link
        to={ `/album/${collectionId}` }
        data-testid={ `link-to-album-${collectionId}` }
      >
        <img
          src={ artworkUrl100 }
          alt={ collectionName }
        />
        <h4>{ collectionName }</h4>
        <p>{ artistName }</p>
      </Link>
    );
  }
}

AlbumCard.propTypes = {
  album: PropTypes.shape({
    collectionId: PropTypes.number,
    artworkUrl100: PropTypes.string,
    collectionName: PropTypes.string,
    artistName: PropTypes.string,
  }).isRequired,
};

export default AlbumCard;