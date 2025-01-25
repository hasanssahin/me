import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { Link, useNavigate } from "react-router"
import { useEffect, useState } from "react"
import "../css/Navbar.css"
export const Navbar = () => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = (path?: string) => {
    setAnchorEl(null)
    if (path) {
      navigate(path)
    }
  }
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <AppBar
      position='sticky'
      className='h-[70px] flex justify-center'
      sx={{
        background: isScrolled ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.1)",
        backdropFilter: isScrolled ? "blur(5px)" : "none",
        transition: "background-color 0.3s, backdrop-filter 0.3s",
      }}
      elevation={0}>
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
            onClose={() => handleClose()}
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
            <MenuItem onClick={() => handleClose("/")}>Home</MenuItem>
            <MenuItem onClick={() => handleClose("/about")}>About</MenuItem>
            <MenuItem onClick={() => handleClose("/contact")}>Contact</MenuItem>
          </Menu>
        </span>
        <div className='h-full 2xl:flex xl:flex lg:flex md:flex sm:hidden xs:hidden w-full justify-end items-center gap-x-20 pr-20'>
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
