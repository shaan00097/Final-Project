import React, { useContext, useState} from 'react';
import { Box,Tab, Tabs, Typography } from '@mui/material';
import MainTab from "../../../CommonComponents/TabComponent";
import { MyContext } from '../../..';
import MessageList from '../Messages';
import SentMessageList from '../SentMessages';
import UserApprovals from '../ApproveUsers';
import DonorList from '../DonorList';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        {...other}
       
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  

  function ContentTabs({currentTab,handleTabChange}){

    

    return(
      <div>
        <Tabs
        value={currentTab}
        onChange={handleTabChange}
        aria-label="Multiple Tabs Example"
        sx={{alignSelf:'flex-start',marginTop:3}}
      >
        <Tab label="Donor Approvals" />
        <Tab label="Donors" />
      </Tabs>
      <TabPanel value={currentTab} index={0} >
      <UserApprovals />
     
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
      <DonorList />
      </TabPanel>
    </div>
    )
  }


  function DonorsTabs() {
    
    const {  darkColor } = useContext(MyContext);

    const [currentTab, setCurrentTab] = useState(0);

    const handleTabChange = (event, newValue) => {
      setCurrentTab(newValue);
    };
    
  
    return (
      <MainTab
          title="Donors"
          fontSize="h4"
          fontColor="white"
          titleBackColor={darkColor}
          renderContent={<ContentTabs currentTab={currentTab} handleTabChange={handleTabChange} />}
        ></MainTab>

    );
  }
  
  export default DonorsTabs;
  