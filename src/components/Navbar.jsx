import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

// import { logo } from "../utils/constants";
import logo from '../assets/logo-white.png';
import { SearchBar, SearchBarMobile, Menu } from "./";

const Navbar = () => (
  <>
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img className="logo" src={logo} alt="logo" height={16} />
    </Link>
    <Menu />
    <SearchBar />
  </Stack>
      {/* <div>
      <SearchBarMobile />
      </div> */}
      </>
);

export default Navbar;
