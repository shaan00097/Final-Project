import styled from "@emotion/styled";
import {
  Group,
  Explore,
  Person,
  Bloodtype,
  Report,
  Inbox,
  Dashboard,
  RequestPage,
} from "@mui/icons-material";

import EmergencyShareIcon from "@mui/icons-material/EmergencyShare";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid,

} from "@mui/material";
import React, { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import { CustomListLinkButton } from "../../../CommonComponents/LinkButton";
import { MyContext } from "../../..";



const ListButtonProp = (props) => {
  return {
    "&.Mui-selected": {
      borderLeft: "solid 5px " + props.bordeColor,
      backgroundColor: props.backColor,
      color: "white",
      
    },
    "&.Mui-selected:hover": { backgroundColor: props.bordeColor },
    "&:hover": {
      backgroundColor: props.backHoverColor,
      color: "white",
    },
    border:'0px solid',
    borderRadius:'0px 5px 5px 0px'
    
  };
};

const IconProp = (prop) => {
  return {
    "&": {
      color: prop.bordeColor,
    },
    "&:hover": {
      color: "white",
    },
  };
};

const ListItemBtn = styled(CustomListLinkButton)(({ theme }) => ({}));

/*sidebar options */

const state = [
  "Donors",
  "Campaigns",
  "Blood Stock",
  "Emergencies",
  "Inbox",
  "Complaints",
  "Reports",
  "Admins",
  "Donation Requests"

];

/*sidebar */

const Sidebar = (props) => {
  const [selectedItem, setSelectedItem] = useState("Campaigns");
  const { updateData } = useContext(MyContext);

  updateData(props.bordeColor, props.backColor);

  return (
    <Grid container spacing={2} sx={{ height: "93vh", marginTop:10 }}>
      <Grid item xs={1.3} md={3} lg={2}>
        <Box
          position="fixed"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: {
              sm: "center",
              lg: "flex-start",
              md: "flex-start",
            },
          }}
        >
          {/*Campaign */}
          <List
            id="List"
            sx={{
              overflowX: "scroll",
              display: "flex",
              flexDirection: {
                sm: "row",
                lg: "column",
                md: "column",
              },
              
              scrollbarWidth: "none", // Firefox
              "&::-webkit-scrollbar": {
                display: "none", // Chrome, Safari, Edge, and Opera
              },
            }}
          >

            {/*Approve donors */}
            <ListItem disablePadding>
              <ListItemBtn
                to="approvedonor"
                selected={selectedItem === state[0]}
                onClick={() => {
                  setSelectedItem(state[0]);
                }}
                sx={ListButtonProp(props)}
              >
                <ListItemIcon>
                  <Group sx={IconProp(props)} />
                </ListItemIcon>
                <ListItemText
                  sx={{ display: { xs: "none", md: "block" } }}
                  primary={state[0]}
                />
              </ListItemBtn>
            </ListItem>

        {/*New admins */}
            <ListItem disablePadding>
              <ListItemBtn
                to="newadmins"
                selected={selectedItem === state[7]}
                onClick={() => {
                  setSelectedItem(state[7]);
                }}
                sx={ListButtonProp(props)}
              >
                <ListItemIcon>
                  <Person sx={IconProp(props)} />
                </ListItemIcon>
                <ListItemText
                  sx={{ display: { xs: "none", md: "block" } }}
                  primary={state[7]}
                />
              </ListItemBtn>
            </ListItem>

            <ListItem disablePadding>
              <ListItemBtn
                to="donationrequests"
                selected={selectedItem === state[8]}
                onClick={() => {
                  setSelectedItem(state[8]);
                }}
                sx={ListButtonProp(props)}
              >
                <ListItemIcon>
                  <RequestPage sx={IconProp(props)} />
                </ListItemIcon>
                <ListItemText
                  sx={{ display: { xs: "none", md: "block" } }}
                  primary={state[8]}
                />
              </ListItemBtn>
            </ListItem>

            {/*Pending Campaigns*/}
            <ListItem disablePadding>
              <ListItemBtn
                to="campaign"
                selected={selectedItem === state[1]}
                onClick={() => {
                  setSelectedItem(state[1]);
                }}
                sx={ListButtonProp(props)}
              >
                <ListItemIcon>
                  <Explore sx={IconProp(props)} />
                </ListItemIcon>
                <ListItemText
                  sx={{ display: { xs: "none", md: "block" } }}
                  primary={state[1]}
                />
              </ListItemBtn>
            </ListItem>
            
            {/*Emergencies*/}
            <ListItem disablePadding>
              <ListItemButton
                selected={selectedItem === state[3]}
                onClick={() => {
                  setSelectedItem(state[3]);
                }}
                sx={ListButtonProp(props)}
              >
                <ListItemIcon>
                  <EmergencyShareIcon sx={IconProp(props)} />
                </ListItemIcon>
                <ListItemText
                  sx={{ display: { xs: "none", md: "block" } }}
                  primary={state[3]}
                />
              </ListItemButton>
            </ListItem>

            {/*Inbox*/}
            <ListItem disablePadding>
              <ListItemBtn to="inbox"
                selected={selectedItem === state[4]}
                onClick={() => {
                  setSelectedItem(state[4]);
                }}
                sx={ListButtonProp(props)}
              >
                <ListItemIcon>
                  <Inbox sx={IconProp(props)} />
                </ListItemIcon>
                <ListItemText
                  sx={{ display: { xs: "none", md: "block" } }}
                  primary={state[4]}
                />
              </ListItemBtn>
            </ListItem>

            {/*Complains*/}
            <ListItem disablePadding>
              <ListItemBtn to="complaints"
                selected={selectedItem === state[5]}
                onClick={() => {
                  setSelectedItem(state[5]);
                }}
                sx={ListButtonProp(props)}
              >
                <ListItemIcon>
                  <Report sx={IconProp(props)} />
                </ListItemIcon>
                <ListItemText
                  sx={{ display: { xs: "none", md: "block" } }}
                  primary={state[5]}
                />
              </ListItemBtn>
            </ListItem>
            {/*Reports*/}
            <ListItem disablePadding>
              <ListItemBtn to="uploadtests"
                selected={selectedItem === state[6]}
                onClick={() => {
                  setSelectedItem(state[6]);
                }}
                sx={ListButtonProp(props)}
              >
                <ListItemIcon>
                  <Dashboard sx={IconProp(props)} />
                </ListItemIcon>
                <ListItemText
                  sx={{ display: { xs: "none", md: "block" } }}
                  primary={state[6]}
                />
              </ListItemBtn>
            </ListItem>
          </List>
        </Box>
      </Grid>
      <Grid item xs={10.4} md={9} lg={10}>
        {/*content */}
        <Box
          sx={{
            marginLeft: {
              xs: 0,
              lg: 1,
            },
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            height: "100%",
            overflow: "scroll",
          }}
        >
          {/**reders the sub content here */}
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Sidebar;