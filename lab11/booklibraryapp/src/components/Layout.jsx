import { Outlet, Link, NavLink } from 'react-router'
function Layout() {
    return (
        <>
            <div className='header'>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" >Book List</Link>
                        </li>
                        <li>
                            <Link to="/addbook">Add Book</Link>
                        </li>
                        {/* <li>
                            <Link to="/updatebook">Edit Book</Link>
                        </li> */}
                       

                    </ul>
                </nav>
            </div>
            <main className='content'>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;