import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { Link } from "react-router"
import { useState } from "react"
import "../css/Navbar.css"
export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <AppBar position='sticky' sx={{ backgroundColor: "rgba(2, 4, 41, 0.5)" }} className='h-20 flex justify-center' elevation={0}>
      <Toolbar>
        <span className='2xl:hidden xl:hidden lg:hidden md:hidden sm:block'>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            id='basic-button'
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            className='md:hidden'
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{
              "& .MuiPaper-root": {
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                backgroundColor: "#010427",
                padding: "10px",
                color: "white",
                border: "1px solid white",
              },
              "& .MuiMenuItem-root:hover": {
                backgroundColor: "#e0e0e0",
                color: "#020429",
              },
            }}>
            <MenuItem onClick={handleClose}>
              <Link to={"/"}>Home</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to={"/about"}>About</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to={"/contact"}>Contact</Link>
            </MenuItem>
          </Menu>
        </span>
        <div className='2xl:flex xl:flex lg:flex md:flex sm:hidden xs:hidden w-full justify-end items-center gap-x-20'>
          <Link to={"/"} className='link'>
            Home
          </Link>
          <Link to={"/about"} className='link'>
            About
          </Link>
          <Link to={"/contact"} className='link'>
            Contact
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  )
}
