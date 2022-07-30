import React from 'react';
import {DUMMY_WORKBOOKS} from "../../dummyData";
import List from "@mui/material/List";
import {Box, Divider, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import {workBookAuthorSize, workBookCreatedAtSize, workBookNameSize} from "../../style/style-guide";
import AdBoard from "../ad/AdBoard";
import {useNavigate} from "react-router-dom";
import {fakeUser} from "../../fakeAuth";

const WorkBooks = () => {
	const user = fakeUser;
	const workbooks = DUMMY_WORKBOOKS;
	const navigate = useNavigate();
	const clickHandler = (workbook) => {
		navigate(`/${user.nickName}/workbooks/${workbook.workBookId}`, {state : workbook});;
	}

	return (
		<Box height='90vh' width='95vw'>
			<AdBoard/>
			<Box height='70vh'>
				<List>
					{workbooks.map(workbook =>
						<Box key={workbook.workBookId} onClick={() => clickHandler(workbook)}>
							<ListItem>
								<ListItemButton>
									<ListItemAvatar>
										<Avatar
											alt={`image${workbook.workBookId}`}
											src={workbook.bookCoverImage}
											variant='square'
											sx={{width: '8vh', height: '12vh'}}
										/>
									</ListItemAvatar>
									<Box ml={2}
									     height='12vh'
									     display='flex'
									     flexDirection='column'
									     alignItems='space-between'
									>
										<ListItemText primary={workbook.name}
										              primaryTypographyProps={{
											              fontSize: workBookNameSize
										              }}/>
										<Box>
											<ListItemText secondary={workbook.author}
											              secondaryTypographyProps={{
												              fontSize: workBookAuthorSize
											              }}
											/>
											<ListItemText secondary={workbook.createdAt}
											              secondaryTypographyProps={{
												              fontSize: workBookCreatedAtSize
											              }}
											/>
										</Box>
									</Box>
								</ListItemButton>
							</ListItem>
							<Divider variant='inset'/>
						</Box>
					)}
				</List>
			</Box>
		</Box>
	)
}

export default WorkBooks;