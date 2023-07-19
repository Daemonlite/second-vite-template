import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PoolIcon from "@mui/icons-material/Pool";
import WavesIcon from "@mui/icons-material/Waves";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import HotTubIcon from "@mui/icons-material/HotTub";
import FireplaceIcon from "@mui/icons-material/Fireplace";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import HomeIcon from "@mui/icons-material/Home";
import HealingIcon from "@mui/icons-material/Healing";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

export default function Nav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  return (
    <div className="basenav shadow-sm">
      <br />
      <br />

      <Box
        sx={{
          maxWidth: { xs: 450, sm: 1200 },
          bgcolor: "background.paper",
          marginLeft: "50px",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          <Tooltip title="pool houses">
            <Tab
              icon={<PoolIcon />}
              aria-label="phone"
              onClick={() => navigate("/")}
            />
          </Tooltip>
          <Tooltip title="beach houses">
            <Tab icon={<WavesIcon />} onClick={() => navigate("/beach")} />
          </Tooltip>
          <Tooltip title="Bars and clubs">
            <Tab icon={<NightlifeIcon />} />
          </Tooltip>
          <Tooltip title="attractions">
            <Tab icon={<LocationOnIcon />} />
          </Tooltip>
          <Tooltip title="family apartments">
            <Tab icon={<FamilyRestroomIcon />} />
          </Tooltip>
          <Tooltip title="fireplace">
            <Tab icon={<FireplaceIcon />} />
          </Tooltip>
          <Tooltip title="baths">
            <Tab icon={<HotTubIcon />} />
          </Tooltip>
          <Tooltip title="apartments">
            <Tab icon={<ApartmentIcon />} />
          </Tooltip>
          <Tooltip title="banks">
            <Tab icon={<AccountBalanceIcon />} />
          </Tooltip>
          <Tooltip title="home away from home">
            <Tab icon={<HomeIcon />} />
          </Tooltip>
          <Tooltip title="healthcare">
            <Tab icon={<HealingIcon />} />
          </Tooltip>
          <Tooltip title="Outdoor">
            <Tab icon={<OutdoorGrillIcon />} />
          </Tooltip>
          <Tooltip title="top locations">
            <Tab icon={<LeaderboardIcon />} />
          </Tooltip>
        </Tabs>
      </Box>
      <hr className="divider" />
    </div>
  );
}
