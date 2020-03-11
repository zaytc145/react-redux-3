import React from 'react';
import {connect} from 'react-redux';
import {searchRequest} from '../actions'
import {Field, reduxForm} from 'redux-form';

class SearchComponent extends React.Component{
    
    renderInput = (formValues) => {
        return <input {...formValues.input} placeholder="Search..."/>
    }
    
    onSubmit = (formValues) => {
        this.props.searchRequest(formValues.searchBar)
    }

    render(){
        return(
            <form className="ui form " onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div className="ui fluid action input">
                 <Field name="searchBar" component={this.renderInput}/>
                    <button className="ui button">Search</button>
                </div>
                <div className="ui divider"></div>
            </form>
        )
    }
}

const formWrapped = reduxForm({
    form:'search',
})(SearchComponent)

export default connect(null,{searchRequest})(formWrapped)
    