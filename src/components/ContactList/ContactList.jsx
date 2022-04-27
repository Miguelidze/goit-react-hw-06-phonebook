// import React from "react";
import { ContainerForm, Ul, Li, Span, Button } from '../Components.styled';
import { useSelector, useDispatch } from "react-redux"
// export default function ContactList({ contacts, filter, deleteContact }) {

//     function filtered() {
//         return 
//     }
 // function renderMarkUp() {
    //     return filtered().map(({ id, name, number }) => {
    //         return (<Li key={id}>
    //             <Span>{name}: {number}</Span>
    //             <Button onClick={() => deleteContact({ id })}>Delete</Button>
    //         </Li>)
    //     })
    
//     }


export const ContactsList = () => {
    const filtered = useSelector(state => state.contacts.filter(({ name }) =>
            name.toLowerCase().indexOf(filter.toLowerCase()) !== -1))
    return (
        <ContainerForm>
            <Ul>
                {renderMarkUp()}
            </Ul>
        </ContainerForm>
    )
};