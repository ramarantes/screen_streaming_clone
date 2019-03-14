import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import StreamList from './Streams/StreamList'
import StreamShow from './Streams/StreamShow'
import StreamEdit from './Streams/StreamEdit'
import StreamDelete from './Streams/StreamDelete'
import StreamCreate from './Streams/StreamCreate'
import Header from './Header'


export default () => 
    <div className="ui container">
        <BrowserRouter>
        <Header />
        <Route path="/" exact  component={StreamList} />        
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/edit"  component={StreamEdit} />
        <Route path="/streams/delete" component={StreamDelete} />
        <Route path="/streams/show"  component={StreamShow} />
        </BrowserRouter>
    </div>