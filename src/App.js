import './App.scss';
import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
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

  // Make sure all URLs have the protocol included
  const checkPrefix = url => {
    const prefix = 'http://';

    if (!/^https?:\/\//i.test(url)) {
      url = prefix + url;
    }
    return url;
  };

  const handleAddBookmark = newBookmark => {
    // Only add new bookmarks to the list
    if (!bookmarks.find(bookmark => bookmark.url === newBookmark)) {
      const bookmarksUpdate = [...bookmarks, { url: checkPrefix(newBookmark) }];
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

  const handleEditBookmark = (editedBookmark, updatedBookmark) => {
    const bookmarksUpdate = bookmarks;
    const index = bookmarksUpdate.findIndex(
      bookmark => bookmark.url === editedBookmark
    );
    bookmarksUpdate.splice(index, 1, { url: checkPrefix(updatedBookmark) });
    localStorage.setItem('fiBookmarks', JSON.stringify(bookmarksUpdate));
    setBookmarks([...bookmarksUpdate]);
  };

  return (
    <div className='feastit-bookmarks'>
      <Header />
      <AddBookmark handleAddBookmark={handleAddBookmark} />
      <BookmarkList
        bookmarks={bookmarks}
        handleDeleteBookmark={handleDeleteBookmark}
        handleEditBookmark={handleEditBookmark}
      />
    </div>
  );
}

export default App;
