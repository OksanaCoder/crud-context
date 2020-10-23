import React, { Component, useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { GlobalContext } from '../context/GlobalState'
import { v4 as uuidv4 } from 'uuid';


const CreateArticle = () => {
    const [heading, setHeading] = useState('')
    const [subHeading, setSubHeading] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [author, setAuthor] = useState('')

    const { createArticle, article } = useContext(GlobalContext)
    let history = useHistory()

    const submitForm = (e) => {
        e.preventDefault()
        let newArticle = {
            id: uuidv4(),
            heading,
            subHeading,
            description,
            category, 
            author
        }
        createArticle(newArticle)
        history.push('/')
    }

    return (
        
        <>
            <h3 className='mb-5'>New Article</h3>
            <Form onSubmit={submitForm}>
                <Form.Group controlId="formBasiHeading">
                    <Form.Label>Article Heading</Form.Label>
                    <Form.Control type="text" placeholder="Article Heading" value={heading} onChange={(e) => setHeading(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Sub Heading</Form.Label>
                    <Form.Control type="text" placeholder="Subheading" value={subHeading} onChange={(e) => setSubHeading(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control rows={6} valeu={description} onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Article Category</Form.Label>
                    <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Author name</Form.Label>
                    <Form.Control type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                </Form.Group>

                <Link to='/'>
                    <Button className='mr-4' variant="primary" type="submit" onClick={submitForm}>
                        Save article
                    </Button>
                </Link>
                <Link to='/'>
                    <Button variant="secondary" type="submit">
                    Cancel
                    </Button>
                </Link>
                </Form>
        </>
    )
}

export default CreateArticle