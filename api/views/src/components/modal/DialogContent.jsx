import { DialogContent as MuiDialogContent } from '@mui/material';
import React from 'react';
import { dp } from '../../theme/utils';

export default function DialogContent({children}) {
	return (
		<MuiDialogContent
			sx={{
				padding: dp(0),
			}}
		>
			<div
				style={{
					paddingTop: dp(16),
					paddingBottom: dp(24),
					display: 'flex',
					flexDirection: 'column',
					gap: dp(24),
					minWidth: dp(320),
				}}
			>
				{children}
			</div>
		</MuiDialogContent>
	);
}
