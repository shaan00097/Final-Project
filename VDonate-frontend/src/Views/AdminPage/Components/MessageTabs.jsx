import React, { useContext, useState} from 'react';
import { Box,Tab, Tabs, Typography } from '@mui/material';
import MainTab from "../../../CommonComponents/TabComponent";
import { MyContext } from '../../..';
import MessageList from '../Messages';
import SentMessageList from '../SentMessages';


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
        <Tab label="New Messages" />
        <Tab label="Messages Sent" />
      </Tabs>
      <TabPanel value={currentTab} index={0} >


        <MessageList  />
     
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <SentMessageList />
      </TabPanel>
    </div>
    )
  }


  function MessageTabs() {
    
    const {  darkColor } = useContext(MyContext);

    const [currentTab, setCurrentTab] = useState(0);

    const handleTabChange = (event, newValue) => {
      setCurrentTab(newValue);
    };
    
  
    return (
      <MainTab
          title="Requests"
          fontSize="h4"
          fontColor="white"
          titleBackColor={darkColor}
          renderContent={<ContentTabs currentTab={currentTab} handleTabChange={handleTabChange} />}
        ></MainTab>

    );
  }
  
  export default MessageTabs;
  