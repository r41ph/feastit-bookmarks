import './App.scss';
import React, { useState, useEffect } from 'react';
import AddBookmark from './AddBookmark/AddBookmark';
import BookmarkList from './Bookmarks/BookmarksList/BookmarksList';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    getBookmarks();
  }, []);

  const getBookmarks = () => {
    const bookmarks = JSON.parse(localStorage.getItem('fiBookmarks'))
      ? JSON.parse(localStorage.getItem('fiBookmarks'))
      : [];
    setBookmarks(bookmarks);
  };

  const handleAddBookmark = newBookmark => {
    const prefix = 'http://';

    if (!/^https?:\/\//i.test(newBookmark)) {
      newBookmark = prefix + newBookmark;
    }

    if (!bookmarks.find(bookmark => bookmark.url === newBookmark)) {
      const bookmarksUpdate = [...bookmarks, { url: newBookmark }];
      localStorage.setItem('fiBookmarks', JSON.stringify(bookmarksUpdate));
      setBookmarks(bookmarksUpdate);
    }
  };

  const handleDeleteBookmark = delBookmark => {
    const bookmarksUpdate = bookmarks;
    const index = bookmarksUpdate.findIndex(
      bookmark => bookmark.url === delBookmark
    );
    bookmarksUpdate.splice(index, 1);
    localStorage.setItem('fiBookmarks', JSON.stringify(bookmarksUpdate));
    setBookmarks([...bookmarksUpdate]);
  };

  return (
    <div className='feastit-bookmarks'>
      <AddBookmark handleAddBookmark={handleAddBookmark} />
      <BookmarkList
        bookmarks={bookmarks}
        handleDeleteBookmark={handleDeleteBookmark}
      />
    </div>
  );
}

export default App;
