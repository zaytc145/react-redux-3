import React from 'react';
import {connect} from 'react-redux';
import {topRequest, addToList, addToDb} from '../actions';
import SearchComponent from './SearchComponent';

class TopList extends React.Component{
    
    componentDidMount(){
        this.props.topRequest()
    }

    renderList = (arr) => {
        return arr.map((element) => {
            return(
                <div className="ui card" id="card-box" key={element.mal_id}>
                    <div className="image">
                    <img className="ui small image" id="card-img" src={element.image_url}></img>
                    </div>
                    <div className="content">
                        <a className="header">{element.title}</a>
                        <div className="meta">Score:{element.score}</div>
                    </div>
                        <div className="extra content">
                            <button className="mini ui inverted red button"
                            onClick={
                                () => {
                                this.props.addToList(element.title, element.image_url, element.mal_id)
                                this.props.addToDb({title:element.title, img:element.image_url, id:element.mal_id})
                                }
                            }>add to watch</button>
                    </div>
                </div>
            )}
        )
    }

    render(){
        return(
            <div>
                <SearchComponent/>
                <h2 className="ui header"> Top Rated </h2>
                <div className="ui segment">
                    <div className="ui cards">
                        { this.renderList(this.props.animeList) }                
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{animeList:state.animeList}
}
export default connect(mapStateToProps,{topRequest,addToList, addToDb})(TopList);