import React from 'react';

import './_navbar.scss';

import { MdTimer, MdNotificationsNone, MdSearch } from 'react-icons/md';
import { AiFillCaretDown } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav>
      <div className="timer">
        <MdTimer size="18" /> Timer
      </div>
      <form>
        <MdSearch size="20" className="MdSearch" />{' '}
        <input type="text" placeholder="Search . . ." />
      </form>
      <div className="nav_rigth">
        <button className="new_button">
          New <AiFillCaretDown className="AiFillCaretDown" />
        </button>
        <span className="notification">
          <MdNotificationsNone size={20} color="#505d8c" />{' '}
          <span className="active">.</span>
        </span>
        <div className="user_name">Nick Robins</div>
      </div>
    </nav>
  );
};

export default Navbar;
