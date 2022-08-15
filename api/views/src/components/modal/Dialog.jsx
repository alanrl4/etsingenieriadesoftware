import { Dialog as MuiDialog } from '@mui/material';
import React from 'react';
import { dp } from '../../theme/utils';

export default function Dialog({open, onClose, children, sx, width}) {
	return (
		<MuiDialog
			open={open}
			PaperProps={{
				sx: {
					bgcolor: 'background.paper.default',
					borderRadius: dp(28),
					padding: dp(24),
					minWidth: dp(320),
					maxWidth: width || dp(560),
					boxShadow: 0,
					...sx,
				},
			}}
			onClose={onClose}
			scroll='body'
		>
			{children}
		</MuiDialog>
	);
}
