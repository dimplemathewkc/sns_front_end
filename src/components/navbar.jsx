import { Navbar} from 'react-bootstrap'
function Menubar(){
    return(
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home"><img className="navbar__logo" src="https://create-react-app.dev/img/logo.svg" 
    alt="Create React App Logo" style={{ height: '2rem', marginRight: '.5rem'}}/>
    Shop 'N' Sing</Navbar.Brand>
  <Navbar.Toggle />
</Navbar>
    )
}

export default Menubar;