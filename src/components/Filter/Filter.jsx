import React from "react";
import { InputFind } from '../Components.styled';

export default function Filter({ filterString }) {
    return (
        <InputFind type="text" onChange={filterString} autocomplete="off" />
    )
}