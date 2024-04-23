import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdRestartAlt } from "react-icons/md";
import { IoPlayCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { fetchProjectData } from '../store/slices/projectSlice';

export default function TaskCart({ tasks }) {
    const { data, loading, error } = useSelector((state) => state.app)

    return (
        <ul>

        </ul>
    )
}
