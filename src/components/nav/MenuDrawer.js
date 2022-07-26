import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';

export default function MenuDrawer() {
	const [state, setState] = React.useState({
		left: false
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setState({...state, [anchor]: open});
	};

	const list = (anchor) => (
		<Box
			sx={{width: '75vw'}}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem key={index + text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
							</ListItemIcon>
							<ListItemText primary={text}/>
						</ListItemButton>
						<Divider/>
					</ListItem>
				))}
			</List>
		</Box>
	);
	return (
		<Box
			display='flex'
			justifyContent='center'
		>
			<MenuIcon onClick={toggleDrawer('left', true)}/>
			<Drawer
				anchor='left'
				open={state['left']}
				onClose={toggleDrawer('left', false)}
			>
				{list('left')}
			</Drawer>
		</Box>
	);
}
