import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { Link, useNavigate } from "react-router"
import { useEffect, useState } from "react"
import "../css/Navbar.css"
import Lottie from "lottie-react"
import navbarAnimation from "../animations/navbar.json"
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
      className='h-[70px]'
      sx={{
        background: isScrolled ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.1)",
        backdropFilter: isScrolled ? "blur(5px)" : "none",
        transition: "background-color 0.3s, backdrop-filter 0.3s",
      }}
      elevation={0}>
      <Toolbar>
        <span className='2xl:hidden xl:hidden lg:hidden md:hidden xs:flex w-full justify-start items-center'>
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
                borderRadius: "15px",
                backgroundColor: "rgba(4, 40, 106, 0.95)",
                backdropFilter: "blur(8px)",
                color: "white",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "0px 25px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                "&::-webkit-scrollbar": {
                  width: "8px",
                },
                "&::-webkit-scrollbar-track": {
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "rgba(255, 255, 255, 0.3)",
                  borderRadius: "10px",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.5)",
                  },
                },
              },
              "& .MuiMenuItem-root": {
                position: "relative",
                backgroundColor: "transparent",
                padding: "8px 15px",
                margin: "4px 0",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "0%",
                  height: "2px",
                  background: "linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.5) 100%)",
                  transition: "width 0.4s ease",
                },
                "&:hover::after": {
                  width: "100%",
                },
              },
            }}>
            <MenuItem onClick={() => handleClose("/")}>Home</MenuItem>
            <MenuItem onClick={() => handleClose("/about")}>About</MenuItem>
            <MenuItem onClick={() => handleClose("/contact")}>Contact</MenuItem>
          </Menu>
        </span>
        <div className='2xl:flex xl:flex lg:flex md:flex sm:hidden xs:hidden h-full w-full lg:justify-between items-center md:justify-center md:pr-0'>
          <div className='xs:hidden lg:flex h-full xs:pl-0 lg:pl-12'>
            <Lottie animationData={navbarAnimation} loop={true} />
          </div>
          <div className='flex items-center gap-x-20 lg:pr-20 h-full'>
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
        </div>
      </Toolbar>
    </AppBar>
  )
}
