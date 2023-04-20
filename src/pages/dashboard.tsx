import React, { FC } from 'react';
import { NavCard } from '../components';

import './dashboard.css';

const Dashboard: FC = () => {
    const navCards: Record<string, string>[] = [
        { label: 'Jobs', to: '/jobs' },
        { label: 'Properties', to: '/properties' },
    ];

    return (
        <div className='dashboard-cards'>
            {navCards.map(({ label, to }) => (
                <NavCard
                    label={label}
                    to={to}
                />
            ))}
        </div>
    )
};

export default Dashboard;
