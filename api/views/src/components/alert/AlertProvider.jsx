import { Typography } from '@mui/material';
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OkButton from '../modal/buttons/OkButton';
import Dialog from '../modal/Dialog';
import DialogActions from '../modal/DialogActions';
import DialogContent from '../modal/DialogContent';
import DialogHeader from '../modal/DialogHeader';

const Alert = createContext({
	open: false,
	setOpen: () => {},
	title: '',
	setTitle: () => {},
	titleIcon: null,
	setTitleIcon: () => {},
	content: '',
	setContent: () => {},
});

export const useAlert = () => {
	const navigate = useNavigate();
	const {setOpen, setTitle, setTitleIcon, setContent} = useContext(Alert);

	const fireAlert = ({title, icon, content}) => {
		setTitle(title);
		setTitleIcon(icon);
		setContent(content);
		setOpen(true);
	};

	const fireSuccess = (config = {title: undefined, content: undefined}) => {
		fireAlert({
			title: config && config.title ? config.title : '¡Completado!',
			icon: 'task_alt',
			content:
				config && config.content
					? config.content
					: 'Operación realizada con éxito',
		});
	};

	const fireSuccessInDialog = (
		config = {title: undefined, content: undefined}
	) => {
		navigate(-1);
		fireSuccess(config);
	};

	const fireError = (config = {title: undefined, content: undefined}) => {
		fireAlert({
			title: config && config.title ? config.title : '¡Oops!',
			icon: 'error',
			content:
				config && config.content
					? config.content
					: 'Ocurrio un error, intentalo de nuevo más tarde',
		});
	};

	const fireErrorInDialog = (
		config = {title: undefined, content: undefined}
	) => {
		navigate(-1);
		fireError(config);
	};

	return {
		fireAlert,
		fireSuccess,
		fireError,
		fireSuccessInDialog,
		fireErrorInDialog,
	};
};

export default function AlertProvider({children}) {
	const [open, setOpen] = useState(false);
	const [title, setTitle] = useState('');
	const [titleIcon, setTitleIcon] = useState(null);
	const [content, setContent] = useState('');

	const handleClose = (e) => setOpen(false);

	return (
		<Alert.Provider
			value={{
				open,
				setOpen,
				title,
				setTitle,
				titleIcon,
				setTitleIcon,
				content,
				setContent,
			}}
		>
			{children}
			<Dialog open={open} onClose={handleClose}>
				<DialogHeader title={title} icon={titleIcon} />
				<DialogContent>
					<Typography variant='body1'>{content}</Typography>
				</DialogContent>
				<DialogActions>
					<OkButton title='Ok' onClick={handleClose} />
				</DialogActions>
			</Dialog>
		</Alert.Provider>
	);
}
