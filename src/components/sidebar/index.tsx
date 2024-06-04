import Drawer from '@mui/material/Drawer';
import dashboard from '../../assets/navbar/dashboard.png'
import time_left from '../../assets/navbar/time_left.png'
import settings from '../../assets/navbar/settings.png'
import parcel_tracking from '../../assets/navbar/parcel_tracking.png'
import local_shipping from '../../assets/navbar/local_shipping.png'
import dynamic_feed from '../../assets/navbar/dynamic_feed.png'
import business_center from '../../assets/navbar/business_center.png'
import bookmarks from '../../assets/navbar/bookmarks.png'
import assignment from '../../assets/navbar/assignment.png'
import add_to_queue from '../../assets/navbar/add_to_queue.png'
import account_balance_wallet from '../../assets/navbar/account_balance_wallet.png'
import { Tooltip } from '@mui/material';

const drawerWidth = 64;

function Sidebar() {
    const logos: {location: string, name: string}[] = [
        {location :dashboard, name: 'Dashboard'},
        {location :add_to_queue, name: 'Add To Queue'},
        {location :bookmarks, name: 'Bookmarks'},
        {location :assignment, name: 'Assignment'},
        {location :time_left, name: 'Time Left'},
        {location :local_shipping, name: 'Local Shipping'},
        {location :parcel_tracking, name: 'Parcel Tracking'},
        {location :business_center, name: 'Business Center'},
        {location :account_balance_wallet, name: 'Account Balance Wallet'},
        {location :dynamic_feed, name: 'Dynamic Feed'},
        {location :settings, name: 'Settings'},
    ]
  return (
    <>
     <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            display: "flex",
            alignItems: "center",
            paddingTop:"24px",
            // border: "none"
            gap:"24px"
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <img src='./logo.png' height={'29px'} width={"32px"} className='mb-2'></img>
        {logos.map((logo, ind) => {
            return (
                <div key={ind}>
                <Tooltip title={logo.name}>
                    <img src={logo.location} height={'24px'} width={"24px"} alt={logo.name}/>
                </Tooltip>
            </div>
            )
        })}
    </Drawer>
    </>
  )
}

export default Sidebar
