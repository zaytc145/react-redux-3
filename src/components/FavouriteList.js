import React from 'react';
import { connect } from 'react-redux';
import { loadDataFromDb } from "../actions";

class FavouriteList extends React.Component{
    
    componentDidMount = () => {
        this.props.loadDataFromDb()
    }
    
    renderList = () => {
        if(this.props.favoriteAnimeList){
            return this.props.favoriteAnimeList.map((el) =>{
                return(
                    <div className="item" key={el.id}>
                        <img className="ui mini  middle aligned image" src={el.img}></img>
                        <div className="content">
                            <a className="header">{el.title}</a>
                        </div>
                    </div>
                )
            }
        )}
    }
    
    render(){
        return(
            <div className="ui segment">
                <div className="ui relaxed divided selection list" >
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        favoriteAnimeList:state.favouriteList
    }
}

export default connect(mapStateToProps,{loadDataFromDb})(FavouriteList);