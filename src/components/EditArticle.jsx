import React, { Component, useContext, useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { GlobalContext } from '../context/GlobalState'


const EditArticle = (props) => {
   
    const [editedPost, setEditedPost] = useState({
            id: '',
            heading: '',
            subHeading: '',
            description: '',
            category: '', 
            author: ''
    })

    const { article , editArticle} = useContext(GlobalContext)
    let history = useHistory()
    const currentId = props.match.params.id


    useEffect(() => {
        const postId = currentId
        const editedPost = article.find(art => art.id === postId)
        setEditedPost(editedPost)
    }, [currentId, article])


    const submitForm = (e) => {
        e.preventDefault()
        editArticle(editedPost)
        }
        // createArticle(newArticle)
        // history.push('/')
    
  const onChange = (e) => {
    setEditedPost({
        ...editedPost, 
        [e.target.name] : e.target.value
    })
  }
    return (
        
        <>
            <h3 className='mb-5'>EDIT Article</h3>
            <Form onSubmit={submitForm}>
                <Form.Group controlId="formBasiHeading">
                    <Form.Label>Article Heading</Form.Label>
                    <Form.Control type="text" placeholder="Article Heading" name='heading' value={editedPost.heading} onChange={onChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Sub Heading</Form.Label>
                    <Form.Control type="text" placeholder="Subheading" name='subHeading' value={editedPost.subHeading} onChange={onChange}/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control rows={6} value={editedPost.description} name='description' onChange={onChange}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Article Category</Form.Label>
                    <Form.Control type="text" value={editedPost.category} name='category' onChange={onChange}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Author name</Form.Label>
                    <Form.Control type="text" value={editedPost.author} name='author' onChange={onChange}/>
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

export default EditArticle