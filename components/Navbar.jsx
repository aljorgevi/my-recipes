import { useState } from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import Link from 'next/link';
import logo from '../public/logo.svg';

const Navbar = () => {
	const [show, setShow] = useState(false);

	return (
		<nav className='navbar'>
			<div className='nav-center'>
				<div className='nav-header'>
					<Link href='/'>
						{/*  TODO: use nextJs image */}
						<img src={logo} alt='simply recipes' />
					</Link>
					<button className='nav-btn' onClick={() => setShow(!show)}>
						<FiAlignJustify />
					</button>
				</div>
				<div className={show ? 'nav-links show-links' : 'nav-links'}>
					<Link
						href='/'
						className='nav-link'
						activeClassName='active-link'
						onClick={() => setShow(false)}
					>
						<a>home</a>
					</Link>
					<Link
						href='/recipes'
						className='nav-link'
						activeClassName='active-link'
						onClick={() => setShow(false)}
					>
						<a>recipes</a>
					</Link>
					<Link
						href='/tags'
						className='nav-link'
						activeClassName='active-link'
						onClick={() => setShow(false)}
					>
						<a>tags</a>
					</Link>

					<Link
						href='/about'
						className='nav-link'
						activeClassName='active-link'
						onClick={() => setShow(false)}
					>
						<a>about</a>
					</Link>
					<div className='nav-link contact-link'>
						<Link href='/contact' className='btn' onClick={() => setShow(false)}>
							contact
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
