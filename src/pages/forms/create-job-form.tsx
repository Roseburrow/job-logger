import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { Card, FormLabel, FormRow, Button } from '../../components';

import './create-job-form.css';

const CreateJobForm: FC = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios.get('https://localhost/properties').then((response) => {
            setProperties(response.data);
        });
    }, [])

    return (
        <Card>
            <div className='form-title'>
                Create Job
            </div>
            <form className='form-container'>
                <FormRow>
                    <FormLabel htmlFor="summary" label="Summary" />
                    <input type='text' maxLength={150} />
                </FormRow>
                <FormRow>
                    <FormLabel htmlFor="description" label="Description" />
                    <textarea maxLength={500}/>
                </FormRow>
                <FormRow>
                    <FormLabel htmlFor="property" label="Property" />
                    <select>
                        <option>The House</option>
                        <option>The Cottage</option>
                    </select>
                </FormRow>
                <Button onClick={() => {}}>Create Job</Button>
            </form>
        </Card>
    )
};

export default CreateJobForm;
