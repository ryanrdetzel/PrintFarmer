import { Link } from "@reach/router"
import { useLocation } from "@reach/router"

import classNames from 'classnames/bind';
import styles from './styles.module.css'; 

export const Nav = ({props}) => {
  const location = useLocation();
  const path = location.pathname;

  return (<ul className="nav nav-pills ">
    <li className="nav-item">
      <Link className={classNames('nav-link', {'active': path === '/queue' })} aria-current="queue" to="queue">Queue</Link>
    </li>
    <li className="nav-item">
      <Link className={classNames('nav-link', {'active': path === '/printers' })} aria-current="printers" to="printers">Printers</Link>
    </li>
    <li className="nav-item">
      <Link className={classNames('nav-link', {'active': path === '/filament' })} aria-current="filament" to="filament">Filament</Link>
    </li>
  </ul>);
}