import { useState } from 'react';
import { useForm } from "@mantine/form";
import { Button, Group, Modal, TextInput, Textarea } from "@mantine/core"
import React from 'react';
import { ENDPOINT } from '../App';
import { KeyedMutator } from 'swr';
import { Todo } from '../App';

function AddTodo({mutate}: { mutate: KeyedMutator<Todo[]> }) {
    const [open, setOpen] = useState(false);

    const form = useForm({
        initialValues: {
            title: "",
            body: "",
        }
    })

    async function createTodo(values: { title: string, body: string }) {
        const updated = await fetch(`${ENDPOINT}/api/todos`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        })
        .then(response => response.json())
        
        mutate(updated)
        form.reset()
        setOpen(false)
    }

    return (
        <>
            <Modal 
            opened={open} 
            title="Create Todo"
            onClose={() => setOpen(false)}>
                text
            </Modal>
            <form onSubmit={form.onSubmit(createTodo)}>
                <TextInput 
                    mb={12} 
                    label="todo" 
                    placeholder='What do you want to do?'
                    {...form.getInputProps("title")}/>
                <Textarea 
                    mb={12} 
                    label="body" 
                    placeholder='What do you want to do?'
                    {...form.getInputProps("body")}/>

                <Button type='submit'>Create Todo</Button>
            </form>

            <Group align='center'>
                <Button fullWidth mb={12} onClick={() => setOpen(true)}>
                    ADD TODO</Button>
            </Group>
        </>
    )
}

export default AddTodo;