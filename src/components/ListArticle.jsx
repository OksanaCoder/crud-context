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
                       { article.length == 0 ? 
                          
                                    <h2>No artciles</h2>
                          
                          
                        : 
                        <Row>
                        <Col lg={9} md={9} sm={9}>
                          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginRight: '50px'}}>
                            <small>{item.subHeading}</small>
                            <small style={{letterSpacing: '2px'}}>Category: {item.category}</small>
                          </div>  
                            <h4>{item.heading}</h4>
                            <p>{item.description}</p>
                            <small>By {item.author}</small>
                        </Col>
                        <Col lg={3} md={3} sm={3} style={{textAlign: 'right'}}>
                           <Link to={`/edit/${item.id}`}> <button onCLick={() => editArticle(item.id)} style={{background: 'none', border: 'none', marginRight: '10px'}}><FontAwesomeIcon icon={faEdit} /></button></Link>
                            <button onClick={() => deleteArticle(item.id)} style={{background: 'none', border: 'none'}}><FontAwesomeIcon icon={faTrashAlt} /></button>
                        </Col>
                    </Row>
                       
                    }
                       
                    </Col>
                    )
                })}
                
            </Row>
        </>
    )
}

export default ListArticles

