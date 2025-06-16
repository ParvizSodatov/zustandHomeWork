import { useTodoSinch } from './store/zustand/zustand'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import EditSquareIcon from '@mui/icons-material/EditSquare'
import { Button, Select } from '@mui/material'
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export default function ZustandSynch() {
	const {
		data,
		deletUser,
		openAdd,
		setOpenAdd,
		addName,
		setAddName,
		addAge,
		setAddAge,
		addStatus,
		setAddStatus,
		addUser,
		editName,
		editAge,
		editStatus,
		openEdit,
		setEditAge,
		setEditName,
		setOpenEdit,
		setEditStatus,
		idx,
		setIdx,
		editUser
	} = useTodoSinch()
	const handleClickOpen = () => {
		setOpenAdd(true)
	}
	const handleAddClose = () => {
		setOpenAdd(false)
	}


		const handleEditClickOpen = (row) => {
		setOpenEdit(true)
		setEditName(row.name)
		setEditAge(row.age)
		setEditStatus(row.status)
		setIdx(row.id)
	}
	const handleEditClose = () => {
		setOpenEdit(false)
	}
const handleEdit=()=>{
let newEditUser={
	id:idx,
	name:editName,
	age:editAge,
	status:editStatus
}
editUser(newEditUser)
}


	function handleAdd() {
		let newAddUser = {
			id: Date.now(),
			name: addName,
			age: addAge,
			status: addStatus,
		}
		addUser(newAddUser)
		setAddName('')
		setAddAge('')
		setAddStatus(false)
		setOpenAdd(false)
	}
	return (
		<>
			<Button
				style={{ marginLeft: '100px', marginTop: '30px' }}
				onClick={handleClickOpen}
				variant='contained'
			>


				+AddUser
			</Button>
			<TableContainer
				component={Paper}
				style={{ width: '90%', margin: '100px auto' }}
			>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Id</TableCell>
							<TableCell align='center'>Name</TableCell>
							<TableCell align='center'>Age</TableCell>
							<TableCell align='center'>Status</TableCell>
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
								<TableCell align='center'>{row.age}</TableCell>
								<TableCell align='center'>
									<span
										style={{
											backgroundColor: row.status ? 'green' : 'red',
											color: 'white',
											padding: '6px 15px',
											fontSize: '15px',
										}}
									>
										{row.status == true ? 'Active' : 'Inactive'}
									</span>
								</TableCell>
								<TableCell align='right'>
									<div
										style={{
											display: 'flex',
											justifyContent: 'center',
											gap: '10px',
										}}
									>
										<button onClick={() => deletUser(row.id)}>
											<DeleteForeverIcon style={{ color: 'red' }} />
										</button>
										<button onClick={()=>handleEditClickOpen(row)}>
											<EditSquareIcon style={{ color: 'blueviolet' }} />
										</button>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			{/* addModal */}

			<Dialog
				open={openAdd}
				onClose={handleAddClose}
				slotProps={{
					paper: {
						component: 'form',
						onSubmit: event => {
							event.preventDefault()
							const formData = new FormData(event.currentTarget)
							const formJson = Object.fromEntries(formData.entries())
							const email = formJson.email
							console.log(email)
							handleAddClose()
						},
					},
				}}
			>
				<DialogTitle>Please,add your new User</DialogTitle>
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
						name='name'
						label='Add Name'
						value={addName}
						onChange={e => setAddName(e.target.value)}
						type='text'
						fullWidth
						variant='standard'
					/>
					<TextField
						autoFocus
						required
						margin='dense'
						id='age'
						name='age'
						label='Add Age'
						value={addAge}
						onChange={e => setAddAge(e.target.value)}
						type='text'
						fullWidth
						variant='standard'
					/>
					<select
						name=''
						onChange={e => setAddStatus(e.target.value === 'true')}
						value={addStatus.toString()}
						id=''
					>
						<option value='false'>Inactive</option>

						<option value='true'>Active</option>
					</select>

				</DialogContent>
				<DialogActions>
					<Button onClick={handleAddClose}>Cancel</Button>
					<Button type='submit' onClick={handleAdd}>
						Save
					</Button>
				</DialogActions>
			</Dialog>







			{/* editModal */}

				<Dialog
				open={openEdit}
				onClose={handleEditClose}
				slotProps={{
					paper: {
						component: 'form',
						onSubmit: event => {
							event.preventDefault()
							const formData = new FormData(event.currentTarget)
							const formJson = Object.fromEntries(formData.entries())
							const email = formJson.email
							console.log(email)
							handleEditClose()
						},
					},
				}}
			>
				<DialogTitle>Please,add your new User</DialogTitle>
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
						name='name'
						label='Add Name'
						value={editName}
						onChange={e => setEditName(e.target.value)}
						type='text'
						fullWidth
						variant='standard'
					/>
					<TextField
						autoFocus
						required
						margin='dense'
						id='age'
						name='age'
						label='Add Age'
						value={editAge}
						onChange={e => setEditAge(e.target.value)}
						type='text'
						fullWidth
						variant='standard'
					/>
					<select
						name=''
						onChange={e => setEditStatus(e.target.value === 'true')}
						value={editStatus.toString()}
						id=''
					>
						<option value='false'>Inactive</option>

						<option value='true'>Active</option>
					</select>

				</DialogContent>
				<DialogActions>
					<Button onClick={handleEditClose}>Cancel</Button>
					<Button type='submit' onClick={handleEdit}>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}
