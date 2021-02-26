(this.webpackJsonpjammming=this.webpackJsonpjammming||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,a){},,function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n,s=a(1),r=a.n(s),c=a(10),i=a.n(c),o=(a(15),a(7)),l=a.n(o),u=a(8),h=a(3),d=a(4),p=a(2),m=a(6),j=a(5),b=(a(17),a(18),a(0)),f=function(t){Object(m.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).state={term:"search_term"},n.search=n.search.bind(Object(p.a)(n)),n.handleTermChange=n.handleTermChange.bind(Object(p.a)(n)),n}return Object(d.a)(a,[{key:"search",value:function(){this.props.onSearch(this.state.term)}},{key:"handleTermChange",value:function(t){this.setState({term:t.target.value})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"SearchBar",children:[Object(b.jsx)("input",{onChange:this.handleTermChange,placeholder:"Enter A Song, Album, or Artist"}),Object(b.jsx)("button",{onClick:this.search,className:"SearchButton",children:"SEARCH"})]})}}]),a}(r.a.Component),v=(a(20),a(21),a(22),function(t){Object(m.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).addTrack=n.addTrack.bind(Object(p.a)(n)),n.removeTrack=n.removeTrack.bind(Object(p.a)(n)),n}return Object(d.a)(a,[{key:"addTrack",value:function(){this.props.onAdd(this.props.track)}},{key:"removeTrack",value:function(){this.props.onRemove(this.props.track)}},{key:"renderAction",value:function(){return this.props.isRemoval?Object(b.jsx)("button",{className:"Track-action",onClick:this.removeTrack,children:"-"}):Object(b.jsx)("button",{className:"Track-action",onClick:this.addTrack,children:"+"})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Track",children:[Object(b.jsxs)("div",{className:"Track-information",children:[Object(b.jsx)("h3",{children:this.props.track.name}),Object(b.jsxs)("p",{children:[this.props.track.artist," | ",this.props.track.album]})]}),this.renderAction()]})}}]),a}(r.a.Component)),k=function(t){Object(m.a)(a,t);var e=Object(j.a)(a);function a(){return Object(h.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var t=this;return Object(b.jsx)("div",{className:"TrackList",children:this.props.tracks.map((function(e){return Object(b.jsx)(v,{track:e,onAdd:t.props.onAdd,onRemove:t.props.onRemove,isRemoval:t.props.isRemoval},e.id)}))})}}]),a}(r.a.Component),y=function(t){Object(m.a)(a,t);var e=Object(j.a)(a);function a(){return Object(h.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"SearchResults",children:[Object(b.jsx)("h2",{children:"Results"}),Object(b.jsx)(k,{tracks:this.props.searchResults,onAdd:this.props.onAdd,isRemoval:!1})]})}}]),a}(r.a.Component),O=(a(23),function(t){Object(m.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).handleNameChange=n.handleNameChange.bind(Object(p.a)(n)),n}return Object(d.a)(a,[{key:"handleNameChange",value:function(t){this.props.onNameChange(t.target.value)}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Playlist",children:[Object(b.jsx)("input",{defaultValue:"New Playlist",onChange:this.handleNameChange}),Object(b.jsx)(k,{tracks:this.props.playlistTracks,onRemove:this.props.onRemove,isRemoval:!0}),Object(b.jsx)("button",{className:"Playlist-save",onClick:this.props.onSave,children:"SAVE TO SPOTIFY"})]})}}]),a}(r.a.Component)),T={getAccessToken:function(){if(n)return n;var t=window.location.href.match(/access_token=([^&]*)/),e=window.location.href.match(/expires_in=([^&]*)/);if(t&&e){n=t[1];var a=Number(e[1]);return window.setTimeout((function(){return n=""}),1e3*a),window.history.pushState("Access Token",null,"/"),n}var s="https://accounts.spotify.com/authorize?response_type=token&client_id=".concat("2440db0c6fd64a218ccdfa355378748a","&redirect_uri=").concat("http://localhost:3000/callback/","&scope=playlist-modify-public");window.location=s},search:function(t){var e=T.getAccessToken();return fetch("https://api.spotify.com/v1/search?type=track&q=".concat(t),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(t){return t.json()})).then((function(t){var e=t.tracks;return e?e.items.map((function(t){return{id:t.id,name:t.name,artist:t.artists[0].name,album:t.album.name,uri:t.uri}})):[]}))},savePlaylist:function(t,e){return Object(u.a)(l.a.mark((function a(){var n,s,r,c;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t&&e.length){a.next=2;break}return a.abrupt("return");case 2:return n=T.getAccessToken(),s={Authorization:"Bearer ".concat(n)},a.next=6,fetch("https://api.spotify.com/v1/me",{headers:s}).then((function(t){return t.json()})).then((function(t){return t.id}));case 6:return r=a.sent,a.next=9,fetch("https://api.spotify.com/v1/users/".concat(r,"/playlists"),{method:"POST",headers:s,body:JSON.stringify({name:t})}).then((function(t){return t.json()})).then((function(t){return t.id}));case 9:return c=a.sent,a.next=12,fetch("https://api.spotify.com/v1/playlists/".concat(c,"/tracks"),{method:"POST",headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json"},body:JSON.stringify({uris:e})});case 12:case"end":return a.stop()}}),a)})))()}},x=T,N=function(t){Object(m.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).state={searchResults:[],playlistName:"New Playlist",playlistTracks:[]},n.addTrack=n.addTrack.bind(Object(p.a)(n)),n.removeTrack=n.removeTrack.bind(Object(p.a)(n)),n.updatePlaylistName=n.updatePlaylistName.bind(Object(p.a)(n)),n.savePlaylist=n.savePlaylist.bind(Object(p.a)(n)),n.search=n.search.bind(Object(p.a)(n)),n}return Object(d.a)(a,[{key:"addTrack",value:function(t){if(!this.state.playlistTracks.find((function(e){return e.id===t.id}))){var e=this.state.playlistTracks;e.push(t),this.setState({playlistTracks:e})}}},{key:"removeTrack",value:function(t){var e=this.state.playlistTracks.filter((function(e){return e.id!==t.id}));this.setState({playlistTracks:e})}},{key:"updatePlaylistName",value:function(t){this.setState({playlistName:t})}},{key:"savePlaylist",value:function(){var t=this,e=this.state.playlistTracks.map((function(t){return t.uri}));x.savePlaylist(this.state.playlistName,e).then((function(){t.setState({playlistName:"New Playlist",playlistTracks:[]})}))}},{key:"search",value:function(){var t=Object(u.a)(l.a.mark((function t(e){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.search(e);case 2:a=t.sent,this.setState({searchResults:a});case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){window.onload=function(){return x.getAccessToken()}}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h1",{children:["Ja",Object(b.jsx)("span",{className:"highlight",children:"mmm"}),"ing"]}),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(f,{onSearch:this.search}),Object(b.jsxs)("div",{className:"App-playlist",children:[Object(b.jsx)(y,{searchResults:this.state.searchResults,onAdd:this.addTrack}),Object(b.jsx)(O,{playlistName:this.state.playlistName,playlistTracks:this.state.playlistTracks,onRemove:this.removeTrack,onNameChange:this.updatePlaylistName,onSave:this.savePlaylist})]})]})]})}}]),a}(r.a.Component),g=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,25)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,r=e.getLCP,c=e.getTTFB;a(t),n(t),s(t),r(t),c(t)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),g()}],[[24,1,2]]]);
//# sourceMappingURL=main.a1cb4ae5.chunk.js.map