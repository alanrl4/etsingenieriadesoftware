import { Button, Icon } from '@mui/material';
import React from 'react';

export default function CancelButton({
	loading,
	title,
	icon,
	onClick,
}) {
	return (
		<Button
			variant='text'
			color='secondary'
			endIcon={<Icon>{icon || 'close'}</Icon>}
			onClick={onClick}
			disabled={loading}
		>
			{title || 'Cancelar'}
		</Button>
	);
}
