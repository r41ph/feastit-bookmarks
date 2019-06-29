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
    if (!bookmarks.find(bookmark => bookmark.url === newBookmark)) {
      const bookmarksUpdate = [...bookmarks, { url: newBookmark }];
      localStorage.setItem('fiBookmarks', JSON.stringify(bookmarksUpdate));
      setBookmarks(bookmarksUpdate);
    }
  };

  return (
    <div className='feastit-bookmarks'>
      <AddBookmark handleAddBookmark={handleAddBookmark} />
      <BookmarkList bookmarks={bookmarks} />
    </div>
  );
}

export default App;
