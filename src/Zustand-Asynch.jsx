import { useEffect, useState } from 'react'
import { useTodoAsynch } from './store/zustand/zustandAsynch'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import EditSquareIcon from '@mui/icons-material/EditSquare'
import { Button, TextField } from '@mui/material'
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
export default function ZustandAsynch() {
	const { data, getCategory, deletCategory, addCategory, addName, setAddName,idx,setIdx,editName,setEditName,editCategory } =
		useTodoAsynch()

	const [open, setOpen] = useState(false)

	const handleClickOpen = (row) => {
		console.log(row);
		setOpen(true)
		setEditName(row.name)
		setIdx(row.id)
	}
	function handleEdit(){
		let newEditUser={
			id:idx,
			name:editName
		}
		editCategory(newEditUser)
		setOpen(false)

	}

	const handleClose = () => {
		setOpen(false)
	}
	function handleAdd() {
		let newAddUser = {
			name: addName,
		}
		addCategory(newAddUser)
		setAddName('')
	}
	useEffect(() => {
		getCategory()
	}, [])
	return (
		<>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-around',
				}}
			>
				<h1 style={{}}>TodoZustandAsynch</h1>
				<div
					style={{ display: 'flex', alignItems: 'center', gap: '10px 10px' }}
				>
					<TextField
						value={addName}
						onChange={e => setAddName(e.target.value)}
						id='outlined-basic'
						label='Outlined'
						variant='outlined'
					/>
					<Button
						onClick={handleAdd}
						style={{ padding: '12px 15px', fontSize: '18px' }}
						variant='contained'
					>
						+Add
					</Button>
				</div>
			</div>
			<TableContainer
				component={Paper}
				style={{ width: '55%', margin: '100px auto' }}
			>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Id</TableCell>
							<TableCell align='center'>Name</TableCell>
							<TableCell align='center'>Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map(row => (
							<TableRow
								key={row.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component='th' scope='row'>
									{row.id}
								</TableCell>
								<TableCell align='center'>{row.name}</TableCell>
								<TableCell align='center'>
									<div
										style={{
											display: 'flex',
											justifyContent: 'center',
											gap: '5px',
										}}
									>
										<button
											onClick={() => deletCategory(row.id)}
											style={{ borderRadius: '5px', paddingTop: '5px' }}
										>
											<RemoveCircleIcon style={{ color: 'red' }} />
										</button>
										<button
											onClick={() => handleClickOpen(row)}
											style={{ borderRadius: '5px', paddingTop: '5px' }}
										>
											<EditSquareIcon style={{ color: 'blue' }} />
										</button>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			<Dialog
				open={open}
				onClose={handleClose}
				slotProps={{
					paper: {
						component: 'form',
						onSubmit: event => {
							event.preventDefault()
							const formData = new FormData(event.currentTarget)
							const formJson = Object.fromEntries(formData.entries())
							const email = formJson.email
							console.log(email)
							handleClose()
						},
					},
				}}
			>
				<DialogTitle>Subscribe</DialogTitle>
				<DialogContent>
					<DialogContentText>
						To subscribe to this website, please enter your email address here.
						We will send updates occasionally.
					</DialogContentText>
					<TextField
						autoFocus
						required
						margin='dense'
						id='name'
						value={editName}
						onChange={(e)=>setEditName(e.target.value)}
						name='email'
						label='Email Address'
						type='text'
						fullWidth
						variant='standard'
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button type='submit' onClick={handleEdit}>SAVE</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}
