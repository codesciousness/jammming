(this.webpackJsonpjammming=this.webpackJsonpjammming||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,s=a(1),r=a.n(s),c=a(10),i=a.n(c),o=(a(15),a(7)),l=a.n(o),u=a(8),h=a(3),d=a(4),p=a(2),m=a(6),j=a(5),b=(a(17),a(18),a(0)),v=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={term:"search_term"},n.search=n.search.bind(Object(p.a)(n)),n.handleTermChange=n.handleTermChange.bind(Object(p.a)(n)),n.handleKeyPress=n.handleKeyPress.bind(Object(p.a)(n)),n}return Object(d.a)(a,[{key:"search",value:function(){this.props.onSearch(this.state.term)}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&this.state.term&&(this.search(),e.preventDefault())}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"SearchBar",children:[Object(b.jsx)("input",{onChange:this.handleTermChange,onKeyPress:this.handleKeyPress,placeholder:"Enter A Song, Album, or Artist"}),Object(b.jsx)("button",{onClick:this.search,className:"SearchButton",children:"SEARCH"})]})}}]),a}(r.a.Component),f=(a(20),a(21),a(22),function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).addTrack=n.addTrack.bind(Object(p.a)(n)),n.removeTrack=n.removeTrack.bind(Object(p.a)(n)),n}return Object(d.a)(a,[{key:"addTrack",value:function(){this.props.onAdd(this.props.track)}},{key:"removeTrack",value:function(){this.props.onRemove(this.props.track)}},{key:"renderAction",value:function(){return this.props.isRemoval?Object(b.jsx)("button",{className:"Track-action",onClick:this.removeTrack,children:"-"}):Object(b.jsx)("button",{className:"Track-action",onClick:this.addTrack,children:"+"})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Track",children:[Object(b.jsx)("img",{src:this.props.track.image,alt:"Album Art"}),Object(b.jsxs)("div",{className:"Track-information",children:[Object(b.jsx)("a",{href:this.props.track.preview,target:"_blank",rel:"noreferrer",children:Object(b.jsx)("h3",{children:this.props.track.name})}),Object(b.jsxs)("p",{children:[this.props.track.artist," | ",this.props.track.album]})]}),this.renderAction()]})}}]),a}(r.a.Component)),k=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"TrackList",children:this.props.tracks.map((function(t){return Object(b.jsx)(f,{track:t,onAdd:e.props.onAdd,onRemove:e.props.onRemove,isRemoval:e.props.isRemoval},t.id)}))})}}]),a}(r.a.Component),y=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"SearchResults",children:[Object(b.jsx)("h2",{children:"Results"}),Object(b.jsx)(k,{tracks:this.props.searchResults,onAdd:this.props.onAdd,isRemoval:!1})]})}}]),a}(r.a.Component),O=(a(23),a(24),function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(b.jsx)("section",{className:"loading",children:Object(b.jsx)("div",{className:"loader__1",children:Object(b.jsx)("div",{className:"loader__2",children:Object(b.jsx)("div",{className:"loader__3"})})})})}}]),a}(r.a.Component)),T=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).handleNameChange=n.handleNameChange.bind(Object(p.a)(n)),n}return Object(d.a)(a,[{key:"handleNameChange",value:function(e){this.props.onNameChange(e.target.value)}},{key:"render",value:function(){return this.props.isLoading?Object(b.jsx)("div",{className:"Playlist",children:Object(b.jsx)(O,{})}):Object(b.jsxs)("div",{className:"Playlist",children:[Object(b.jsx)("input",{defaultValue:"New Playlist",onChange:this.handleNameChange}),Object(b.jsx)(k,{tracks:this.props.playlistTracks,onRemove:this.props.onRemove,isRemoval:!0}),Object(b.jsx)("button",{className:"Playlist-save",onClick:this.props.onSave,children:"SAVE TO SPOTIFY"})]})}}]),a}(r.a.Component),g={getAccessToken:function(){if(n)return n;var e=window.location.href.match(/access_token=([^&]*)/),t=window.location.href.match(/expires_in=([^&]*)/);if(e&&t){n=e[1];var a=Number(t[1]);return window.setTimeout((function(){return n=""}),1e3*a),window.history.pushState("Access Token",null,"/"),n}var s="https://accounts.spotify.com/authorize?response_type=token&client_id=".concat("2440db0c6fd64a218ccdfa355378748a","&redirect_uri=").concat("http://mycodefolio.com/jammming","&scope=playlist-modify-public");window.location=s},search:function(e){var t=g.getAccessToken();return fetch("https://api.spotify.com/v1/search?type=track&q=".concat(e),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).then((function(e){var t=e.tracks;return t?t.items.map((function(e){return{id:e.id,name:e.name,artist:e.artists[0].name,album:e.album.name,image:e.album.images[2].url,uri:e.uri,preview:e.preview_url}})):[]}))},savePlaylist:function(e,t){return Object(u.a)(l.a.mark((function a(){var n,s,r,c;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e&&t.length){a.next=2;break}return a.abrupt("return");case 2:return n=g.getAccessToken(),s={Authorization:"Bearer ".concat(n)},a.next=6,fetch("https://api.spotify.com/v1/me",{headers:s}).then((function(e){return e.json()})).then((function(e){return e.id}));case 6:return r=a.sent,a.next=9,fetch("https://api.spotify.com/v1/users/".concat(r,"/playlists"),{method:"POST",headers:s,body:JSON.stringify({name:e})}).then((function(e){return e.json()})).then((function(e){return e.id}));case 9:return c=a.sent,a.next=12,fetch("https://api.spotify.com/v1/playlists/".concat(c,"/tracks"),{method:"POST",headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json"},body:JSON.stringify({uris:t})});case 12:case"end":return a.stop()}}),a)})))()}},x=g,N=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={searchResults:[],playlistName:"New Playlist",playlistTracks:[],isLoading:!1},n.addTrack=n.addTrack.bind(Object(p.a)(n)),n.removeTrack=n.removeTrack.bind(Object(p.a)(n)),n.updatePlaylistName=n.updatePlaylistName.bind(Object(p.a)(n)),n.savePlaylist=n.savePlaylist.bind(Object(p.a)(n)),n.search=n.search.bind(Object(p.a)(n)),n}return Object(d.a)(a,[{key:"addTrack",value:function(e){if(!this.state.playlistTracks.find((function(t){return t.id===e.id}))){var t=this.state.playlistTracks;t.push(e),this.setState({playlistTracks:t})}}},{key:"removeTrack",value:function(e){var t=this.state.playlistTracks.filter((function(t){return t.id!==e.id}));this.setState({playlistTracks:t})}},{key:"updatePlaylistName",value:function(e){this.setState({playlistName:e})}},{key:"savePlaylist",value:function(){var e=this;this.setState({isLoading:!0});var t=this.state.playlistTracks.map((function(e){return e.uri}));x.savePlaylist(this.state.playlistName,t).then((function(){e.setState({playlistName:"New Playlist",playlistTracks:[],isLoading:!1})}))}},{key:"search",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.search(t);case 2:a=e.sent,this.setState({searchResults:a});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){window.onload=function(){return x.getAccessToken()}}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h1",{children:["Ja",Object(b.jsx)("span",{className:"highlight",children:"mmm"}),"ing"]}),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(v,{onSearch:this.search}),Object(b.jsxs)("div",{className:"App-playlist",children:[Object(b.jsx)(y,{searchResults:this.state.searchResults,onAdd:this.addTrack}),Object(b.jsx)(T,{playlistName:this.state.playlistName,playlistTracks:this.state.playlistTracks,onRemove:this.removeTrack,onNameChange:this.updatePlaylistName,onSave:this.savePlaylist,isLoading:this.state.isLoading})]})]})]})}}]),a}(r.a.Component),C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,26)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),C()}],[[25,1,2]]]);
//# sourceMappingURL=main.f9d2a7d4.chunk.js.map