(this.webpackJsonpfirst=this.webpackJsonpfirst||[]).push([[0],{10:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1JT9u",Modal:"Modal_Modal__10-Nr"}},22:function(e,t,a){e.exports={App:"App_App__PXMa2"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3Zu9d"}},24:function(e,t,a){e.exports={button:"Button_button__2BEvG"}},27:function(e,t,a){e.exports=a(72)},32:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),c=a.n(o),l=(a(32),a(11)),i=a(3),s=a(4),u=a(6),m=a(5),h=a(7),p=a(22),g=a.n(p),d=a(8),f=a.n(d),b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={query:""},a.handleChange=function(e){a.setState({query:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.query),a.setState({query:""})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.query;return r.a.createElement("header",{className:f.a.Searchbar},r.a.createElement("form",{className:f.a.SearchForm,onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:f.a.SearchForm_button},r.a.createElement("span",{className:f.a.SearchForm_button_label},"Search")),r.a.createElement("input",{className:f.a.SearchForm_input,type:"text",name:"query",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleChange})))}}]),t}(n.Component),y=a(23),_=a.n(y),v=a(1),S=a.n(v),I=a(9),E=a.n(I),k=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.onImgClick;return r.a.createElement("li",{className:E.a.ImageGalleryItem,onClick:function(){return n(a)}},r.a.createElement("img",{src:t,alt:"img",className:E.a.ImageGalleryItem_image}))};k.propType={webformatURL:S.a.string.isRequired,largeImageURL:S.a.string.isRequired,onImgClick:S.a.func.isRequired};var O=k,C=function(e){var t=e.items,a=e.onImgClick;return r.a.createElement("ul",{className:_.a.ImageGallery},t.map((function(e){return r.a.createElement(O,Object.assign({key:e.id},e,{onImgClick:a}))})))},j=a(24),F=a.n(j),w=function(e){var t=e.onClick;return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),r.a.createElement("button",{type:"button",className:F.a.button,onClick:t},"Load more")},G=a(25),N=a.n(G),U="15289703-43002e1369874935da9758818",x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return N.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(U,"&image_type=photo&orientation=horizontal&per_page=12\n        ")).then((function(e){return e.data.hits}))},M=a(26),R=a.n(M);a(71);function q(){return r.a.createElement(R.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}var A=function(e){var t=e.text;return r.a.createElement("h2",null,"Woops, something went wrong: ",t)},B=a(10),L=a.n(B),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).backdropRef=Object(n.createRef)(),a.handleKeyPress=function(e){"Escape"===e.code&&a.props.onClose()},a.handleBackdropClick=function(e){var t=a.backdropRef.current;t&&e.target!==t||a.props.onClose()},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props.imgUrl;return r.a.createElement("div",{className:L.a.Overlay,ref:this.backdropRef,onClick:this.handleBackdropClick},r.a.createElement("div",{className:L.a.Modal},r.a.createElement("img",{src:e,alt:"img"})))}}]),t}(n.Component),Q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={images:[],loading:!1,searchQuery:"",page:1,largeImageUrl:"",isOpen:!1,error:null},a.openModal=function(e){a.setState({largeImageUrl:e,isOpen:!0})},a.closeModal=function(){return a.setState({largeImageUrl:"",isOpen:!1})},a.fetchImages=function(){var e=a.state,t=e.searchQuery,n=e.page;a.setState({loading:!0}),x(t,n).then((function(e){return a.setState((function(t){return{images:[].concat(Object(l.a)(t.images),Object(l.a)(e)),page:t.page+1}}))})).catch((function(e){return a.setState({error:e})})).finally((function(){return a.setState({loading:!1})}))},a.handleSearchFormSubmit=function(e){a.state.searchQuery!==e&&a.setState({searchQuery:e,images:[],page:1})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this.state.searchQuery;t.searchQuery!==a&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.loading,n=e.isOpen,o=e.largeImageUrl,c=e.error;return r.a.createElement("div",{className:g.a.App},r.a.createElement(b,{onSubmit:this.handleSearchFormSubmit}),t.length>0&&r.a.createElement(C,{items:t,onImgClick:this.openModal}),a&&r.a.createElement(q,null),n&&r.a.createElement(P,{imgUrl:o,onClose:this.closeModal}),c&&r.a.createElement(A,{text:c.message}),t.length>0&&!a&&r.a.createElement(w,{onClick:this.fetchImages}))}}]),t}(n.Component);c.a.render(r.a.createElement(Q,null),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__EPaXs",SearchForm:"Searchbar_SearchForm__3iX1u",SearchForm_button:"Searchbar_SearchForm_button__2cp0F",SearchForm_button_label:"Searchbar_SearchForm_button_label__3DKnU",SearchForm_input:"Searchbar_SearchForm_input__34J3u"}},9:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2ZZcc",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__2B0Vd"}}},[[27,1,2]]]);
//# sourceMappingURL=main.3dd472b6.chunk.js.map