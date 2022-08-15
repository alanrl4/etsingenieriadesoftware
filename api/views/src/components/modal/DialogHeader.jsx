import {
    Box, DialogTitle,
    Icon
} from '@mui/material';
import React from 'react';
import { dp } from '../../theme/utils';

export default function DialogHeader({title, icon}) {
	return (
		<>
			{icon && (
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						mb: dp(16),
					}}
				>
					<Icon>{icon}</Icon>
				</Box>
			)}
			<DialogTitle
				sx={{
					padding: dp(0),
					textAlign: icon ? 'center' : 'start',
				}}
			>
				{title}
			</DialogTitle>
		</>
	);
}
