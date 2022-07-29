import React from 'react';
import {DUMMY_WORKBOOKS} from "../../dummyData";
import List from "@mui/material/List";
import {Box, Divider, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import {workBookAuthorSize, workBookCreatedAtSize, workBookNameSize} from "../../style/style-guide";

const WorkBooks = () => {
	const workbooks = DUMMY_WORKBOOKS;
	return (
		<Box height='90vh' width='95vw'>
			<Box height='20vh'
			     border={'3px solid blue'}
			>
				{/*//TODO: 광고 보드로 사용하면 제격이겠다!*/}
				<p>광고보드, 일괄적으로 처리해야지!</p>
			</Box>
			<Box height='70vh'>
				<List>
					{workbooks.map(workbook =>
						<Box>
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