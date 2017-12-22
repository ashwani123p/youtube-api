import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
const API_KEY = "AIzaSyD_UZQQV-OcpZyjL0ppWCLBGyFgqNpiytg";
import VideoDetail from './components/videodetails';
class App extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            videos:[],
            selectedVideo:null
        };


    }
    VideoSearch(term){
        YTSearch({key:API_KEY,term:term},(videos)=>{
            console.log(videos);
            this.setState({videos:videos,selectedVideo:videos[0]});
        });

    }
    render(){
        return(
            <div>
                <SearchBar onChangeSearchTerm={this.VideoSearch.bind(this)}/>
                <div className={"row"}>
                    <div className={"col-8"}>
                <VideoDetail video={this.state.selectedVideo}/></div>
                    <div className={"col-4"}>
                <VideoList videos={this.state.videos}
                           onVideoSelect={(video)=>{
                               this.setState({selectedVideo:video})

                           }}/></div></div>
            </div>
        );
    }
}
ReactDOM.render(<App/>,document.querySelector('.container'));