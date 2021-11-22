
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import React,{useEffect,useState} from "react";
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const[data,setData] = useState([]);

  useEffect(() =>{
      fetch ('https://reqres.in/api/users/2')
      .then(res => res.json())
      .then(res => setData(res.data))
  }, []); 
  return (
    <div>
      {[''].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}<img className="rounded-circle avatarprofile"src= {data.avatar} alt="pic1" /></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
       <div className="sile-profile">
         <ul>
           <li><div className="col" key={data.id}><img className="rounded-circle"src= {data.avatar} alt="pic1" /></div> </li>
           <li> bdddhfr</li>
           <li>fggh </li>
           <li> dfhtrhrh</li>
         </ul>

       </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}