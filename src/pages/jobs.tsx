import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { Button, Table, Title, Overlay }from'../components';

import './jobs.css';

const jobColumns: Record<string, string> = {
    id: 'ID',
    summary: 'Summary',
    description: 'Description',
    status: 'Status',
    property: 'Property',
};

const Jobs: FC = () => {
    const [jobs, setJobs] = useState([]);
    const [showCreateForm, setCreateForm] = useState<boolean>(false);

    useEffect(() => {
        axios.get('https://localhost/jobs').then((response) => {
            setJobs(response.data);
        });
    }, []);

    const handleCreateClick = () => {
        setCreateForm(true);
    };

    return (
        <div className='jobs-container'>
            <div className='jobs-title-row'>
                <Title>Jobs</Title>
                <Button onClick={handleCreateClick}>
                    Create Job
                </Button>
            </div>
            <Table
                columns={jobColumns}
                data={jobs}
            />
            { showCreateForm ? <Overlay /> : null }
        </div>
    )
};

export default Jobs;