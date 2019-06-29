import './BookmarksList.scss';
import React from 'react';
import Bookmark from '../Bookmark/Bookmark';
import PropTypes from 'prop-types';
import cx from 'classnames';

const propTypes = {
  /**
   * Specifies button click action
   */
  onClick: PropTypes.func,

  /**
   * Bookmarks list
   */
  bookmarks: PropTypes.array
};

const BookmarksList = props => {
  const { bookmarks } = props;
  const bookmarksListClasses = cx('fi-bookmarks-list');

  return (
    <div className={bookmarksListClasses}>
      {bookmarks
        ? bookmarks.map(bookmark => {
            return <Bookmark key={bookmark.url} bookmark={bookmark.url} />;
          })
        : null}
    </div>
  );
};

BookmarksList.propTypes = propTypes;

export default BookmarksList;
