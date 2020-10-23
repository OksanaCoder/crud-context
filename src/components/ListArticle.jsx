import React, { Component, useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'
import ReactDOM from 'react-dom'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ListArticles = () => {
    const { article, deleteArticle, editArticle } =  useContext(GlobalContext)
  
    return (
    
        <>
            <h2>List of Articles</h2>
            <Row>
                {article.map(item =>{
                    return (
                    <Col lg={12} md={12} sm={12} style={{border: '1px solid #000', marginBottom: '10px', padding: '20px', margin: '20px auto', borderRadius: '5px'}}>
                        <Row>
                            <Col lg={9} md={9} sm={9}>
                                <small>{item.subHeading}</small>
                                <h4>{item.heading}</h4>
                                <p>{item.description}</p>
                                <small>By {item.author}</small>
                            </Col>
                            <Col lg={3} md={3} sm={3} style={{textAlign: 'right'}}>
                               <Link to={`/edit/${article.id}`}> <button onCLick={() => editArticle(article.id)} style={{background: 'none', border: 'none', marginRight: '10px'}}><FontAwesomeIcon icon={faEdit} /></button></Link>
                                <button onClick={() => deleteArticle(article.id)} style={{background: 'none', border: 'none'}}><FontAwesomeIcon icon={faTrashAlt} /></button>
                            </Col>
                        </Row>
                    </Col>
                    )
                })}
                 <Col lg={12} md={12} sm={12} style={{border: '1px solid #000', marginBottom: '10px', padding: '20px', margin: '20px auto', borderRadius: '5px'}}>
                        <Row>
                            <Col lg={9} md={9} sm={9}>
                                <small>subHeading</small>
                                <h4>heading</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ea odio aliquam nisi cum, aliquid reprehenderit corporis facilis quisquam quae, nam porro obcaecati mollitia beatae sed modi rerum maiores doloremque!</p>
                                <small>By Oksi</small>
                            </Col>
                            <Col lg={3} md={3} sm={3} style={{textAlign: 'right'}}>
                                <button style={{background: 'none', border: 'none', marginRight: '10px'}}><FontAwesomeIcon icon={faEdit} /></button>
                                <button style={{background: 'none', border: 'none'}}><FontAwesomeIcon icon={faTrashAlt} /></button>
                            </Col>
                        </Row>
                    </Col>
            </Row>
        </>
    )
}

export default ListArticles

