
import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


const Navbar = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top shadow-sm  bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img
            src="data:image/jpeg;base64,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"
            alt=""
            width='50px'
          />Black Halo</a>
       

          <form className="d-flex mt-2 w-5" role="search">
            <div className="input-group">
              <input
                className="form-control search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </form>

          <ul className="nav-lim">
          <a href="#" className="lim btn btn-outlined-primary">
              The black halo Home
            </a>
            <a href="#" className="lim">
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
            </a>
          </ul>

          <button
            className="navbar-toggler hide"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark "
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Black Halo
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;