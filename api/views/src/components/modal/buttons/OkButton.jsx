import { Button, CircularProgress, Icon } from '@mui/material';
import React from 'react';
import { dp } from '../../../theme/utils';

export default function OkButton({
	loading,
	onClick,
	title,
	icon,
	disabled,
}) {
	return (
		<Button
			variant='text'
			color='primary'
			disabled={loading || disabled}
			endIcon={
				loading ? (
					<CircularProgress size={dp(16)} sx={{marginLeft: dp(8)}} />
				) : (
					<Icon>{icon || 'check'}</Icon>
				)
			}
			onClick={onClick}
		>
			{title || 'Enviar'}
		</Button>
	);
}
