import React from 'react';
import "./header.css";
import { useNavigate } from 'react-router-dom';
import amazon_img from "../Assets/Header/amazon_img.png";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export const Header = () => {
    const navigate = useNavigate();
  return (
      <div className="header">
          <img
              src={amazon_img}
              alt=""
              className="header_logo"
              onClick={()=>navigate("/")}
          />

          <div className="header_search">
              <input
                  type="text"
                  className="header_searchInput"
              />
              <SearchIcon className='header_searchIcon'/>
              {/* Logo */}
          </div>

          <div className="header_nav">
              <div className="header_option">
                  <span className="header_optionLineOne">Hello Guest</span>
                  <span className="header_optionLineTwo">Sign In</span>
              </div>
              <div className="header_option">
                  <span className="header_optionLineOne">Returns</span>
                  <span className="header_optionLineTwo">& Orders</span>
              </div>
              <div className="header_option">
                  <span className="header_optionLineOne">Your</span>
                  <span className="header_optionLineTwo">Prime</span>
              </div>
              <div className="header_optionBasket" onClick={()=>navigate("/cart")}>
                  <ShoppingBasketIcon />
                  <span className="header_optionLineTwo header_cartValue">0</span>
              </div>
          </div>
      </div>
  )
}
