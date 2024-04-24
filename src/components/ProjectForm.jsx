import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProject } from '../store/slices/projectSlice'
const ProjectForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const slug = name.toLowerCase().replace(/\s+/g, '-'); // Generate slug from name
        dispatch(addProject({ id: 1, name, slug, trackedTime: 0 })); // Replace id with actual value
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

export default ProjectForm;
