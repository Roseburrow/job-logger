import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './nav-card.css';

interface Props {
    label: string,
    to: string,
}

const NavCard: FC<Props> = ({ label, to }) => (
    <div className="nav-card">
        <Link className="nav-link" to={to}>{label}</Link>
    </div>
);

export default NavCard;
