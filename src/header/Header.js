import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLinetwo">Sign in</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Return</span>
          <span className="header__optionLinetwo">Ordera</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLinetwo">Prime</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
