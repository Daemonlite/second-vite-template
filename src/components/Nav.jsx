import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PoolIcon from '@mui/icons-material/Pool';
import WavesIcon from '@mui/icons-material/Waves';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import HotTubIcon from '@mui/icons-material/HotTub';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HomeIcon from '@mui/icons-material/Home';
import HealingIcon from '@mui/icons-material/Healing';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';


export default function Nav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
<div className='basenav shadow-sm'>
<br />
    <br />

    <Box sx={{ maxWidth: { xs: 450, sm: 1200 }, bgcolor: 'background.paper',marginLeft:"50px" }} >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        
        
      >
       <Tab icon={<PoolIcon  />} aria-label="phone" />
        <Tab icon={<WavesIcon/>} />
        <Tab icon={<NightlifeIcon/>}/>
        <Tab icon={< LocationOnIcon/>}/>
        <Tab icon={< FamilyRestroomIcon/>}/>
        <Tab icon={< FireplaceIcon  />}/>
        <Tab icon={< HotTubIcon/>}/>
        <Tab icon={< ApartmentIcon/>}/>
        <Tab icon={<  AccountBalanceIcon/>}/>
        <Tab icon={<HomeIcon/>}/>
        <Tab icon={< HealingIcon />}/>
        <Tab icon={< OutdoorGrillIcon/>}/>
        <Tab icon={< LeaderboardIcon/>}/>
 
      </Tabs>
    </Box>
<hr className='divider' />
</div>
  );
}