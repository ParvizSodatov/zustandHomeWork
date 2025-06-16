import { Link, Outlet } from 'react-router'
export default function Layout(){
	return <>
	<div>
		<button>
<Link to='/'>synch</Link>
		</button>
		<button>
<Link to='/ZustandAsynch'>ZustandAsynch</Link>
		</button>
		<Outlet/>
	</div>
	</>
}