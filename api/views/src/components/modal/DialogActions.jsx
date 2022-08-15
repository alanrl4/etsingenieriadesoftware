import { DialogActions as MuiDialogActions } from '@mui/material';
import React from 'react';
import { dp } from '../../theme/utils';

export default function DialogActions({children}) {
	return <MuiDialogActions sx={{padding: dp(0)}}>{children}</MuiDialogActions>;
}
