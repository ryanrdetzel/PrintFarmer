import { Link } from "@reach/router"
import { useLocation } from "@reach/router"

import classNames from 'classnames/bind';

export const Nav = ({props}) => {
  const location = useLocation();
  const path = location.pathname;

  return (<ul className="nav nav-pills ">
    <li className="nav-item">
      <Link className={classNames('nav-link', {'active': path === '/' })} to="/">Dashboard</Link>
    </li>
    <li className="nav-item">
      <Link className={classNames('nav-link', {'active': path === '/queue' })} to="queue">Queue</Link>
    </li>
    <li className="nav-item">
      <Link className={classNames('nav-link', {'active': path === '/history' })} to="history">History</Link>
    </li>
    <li className="nav-item">
      <Link className={classNames('nav-link', {'active': path === '/models' })} to="models">Models</Link>
    </li>
    <li className="nav-item">
      <Link className={classNames('nav-link', {'active': path === '/printers' })} to="printers">Printers</Link>
    </li>
    <li className="nav-item">
      <Link className={classNames('nav-link', {'active': path === '/filament' })} to="filament">Filament</Link>
    </li>
  </ul>);
}