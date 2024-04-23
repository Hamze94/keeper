import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProject } from '../store/slices/projectSlice';

export default function ProjectForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProject({ name }));
        setName('');
    };

    return (
        <div>
            <h2>Add Project</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter project name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">Add Project</button>
            </form>
        </div>
    );
};


