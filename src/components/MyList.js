import React from 'react';
import {connect} from 'react-redux';
import {loadDataFromDb, deleteFromDb} from '../actions/';
import SearchComponent from './SearchComponent';

class MyList extends React.Component{
    
    componentDidMount(){
        this.props.loadDataFromDb()
    }
    
    renderList = (arr) => {
        return arr.map((element) => {
            return(
                    <div className="ui card" id="card-box" key={element.id}>
                        <div className="image">
                        <img className="ui small image" id="card-img" src={element.img}></img>
                        </div>
                        <div className="content">
                            <a className="header">{element.title}</a>
                        </div>
                            <div className="extra content">
                                <button className="mini ui inverted red button" onClick={() => this.props.deleteFromDb(element.id)}>Remove</button>
                        </div>
                 </div>)}
        )
    }

    render(){
        return(
            <div>
                <SearchComponent/>
                <h2 className="ui header">My List</h2>
                <div className="ui segment">
                    <div className="ui cards">
                        {this.renderList(this.props.favoriteAnimeList)}                
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps  = (state) => {
    return{favoriteAnimeList:state.favouriteList}
}
export default connect(mapStateToProps,{loadDataFromDb, deleteFromDb})(MyList);