import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { toggleModal } from '../../store/CartSlice'

import styles from './navbar.module.css'

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import { brands } from '../../utils/data/brandInfo'
import { carouselBrandInfo } from '../../utils/data/carouselBrandInfo'

import { FaShoppingCart } from 'react-icons/fa'

const NavbarComponent = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const navigateHandler = (endpoint) => {
		navigate(endpoint)
	}

	return (
		<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" className={styles.container}>
				<Nav>
					<Nav.Link
						onClick={() => navigateHandler('/')}
						className={styles.item}
						href="#home"
					>
						HOME
					</Nav.Link>
					<NavDropdown title="BRANDS" id="basic-nav-dropdown" href="#brands">
						<div className={styles.brandsDropdown}>
							<div>
								<p className={styles.bold}>SPORTS</p>
								{brands.map((brand) => {
									return (
										<NavDropdown.Item
											key={brand.id}
											onClick={() => navigateHandler('brands/' + brand.id)}
											href="#brands"
										>
											{brand.name}
										</NavDropdown.Item>
									)
								})}
							</div>
							<div>
								<p className={styles.bold}>LUXURY SNEAKERS</p>
								{carouselBrandInfo.map((brand) => {
									return (
										<NavDropdown.Item
											key={brand.id}
											onClick={() => navigateHandler('brands/' + brand.id)}
											href="#brands"
										>
											{brand.name}
										</NavDropdown.Item>
									)
								})}
							</div>
						</div>
					</NavDropdown>
					<Nav.Link
						href="#sneakers"
						onClick={() => navigateHandler('sneakers')}
					>
						SNEAKERS
					</Nav.Link>
					<Nav.Link href="#accessories">ACCESSORIES</Nav.Link>
					<Nav.Link href="#models" onClick={() => navigateHandler('model')}>
						3D MODELS
					</Nav.Link>
					<Nav.Link href="#about" onClick={() => navigateHandler('about')}>
						ABOUT
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
			<FaShoppingCart
				className={styles.cartIcon}
				onClick={() => dispatch(toggleModal())}
			/>
		</Navbar>
	)
}

export default NavbarComponent
