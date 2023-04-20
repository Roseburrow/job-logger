import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { Button, Table, Title, Overlay } from '../components';
import { CreateJobForm } from './forms';

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
            <Title>Jobs</Title>
            <div className='layout'>
                <div className='job-table'>
                    <Table
                        columns={jobColumns}
                        data={jobs}
                    />
                </div>
                <div className='job-form'>
                    <CreateJobForm />
                </div>
            </div>
        </div>
    )
};

export default Jobs;