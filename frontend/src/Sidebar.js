import React from 'react';
import './Sidebar.css'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='company-container'>
          <h1 className='company'>Blackcoffer</h1>
        </div>
        <div className='container'>
          <div><DashboardRoundedIcon/>  Dashboard</div>
          <div><ContactsRoundedIcon/>  Contacts</div>
          <div><CampaignRoundedIcon/>  Campaigns</div>
          <div><AssignmentRoundedIcon/>  Forms</div>
          <div><CalendarTodayRoundedIcon/>  Events</div>
          <div><SettingsApplicationsRoundedIcon/>  settings</div>
        </div>
          



    </div>);
}

export default Sidebar;
