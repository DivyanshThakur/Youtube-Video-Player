import React, { Component } from 'react'
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

export class App extends Component {
    state = {videos: [], selectedVideo: null};

    componentDidMount() {
        this.onSearchSubmit('Web Development');
    }

    onSearchSubmit = async (value) => {
        const res = await youtube.get('/search', {
            params: {
                q: value
            }
        });
        this.setState({videos: res.data.items, selectedVideo: res.data.items[0]});
    }

    onVideoSelect = (video) => {
      this.setState({selectedVideo: video});
    }

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
