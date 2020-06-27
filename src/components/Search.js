// referenced from: https://www.youtube.com/watch?v=22SAhH5JxYk&feature=emb_logo

import React, { Component } from "react";
import axios from "axios";

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query: '',
            recipes: {},
            // loading: false,
            // message: '',
            // useState() -> set inside variable in use state (React hook)
            // async and await -> learned with Darshana the other
            // response: []
        }

        // this.cancel = '';
    }

    fetchSearchResults = (query) => {
        const searchUrl = `https://api.edamam.com/search?app_id=5dd355ea&app_key=53f90bf85dc64c3b10c76408bbdee8e2&q=${query}`;

        // if (this.cancel) {
        //     this.cancel.cancel();
        // }

        // this.cancel = axios.CancelToken.source()

        axios.get(searchUrl)
        // axios.get(searchUrl, {
        //     cancelToken: this.cancel.token
        // })
        .then(response => {
            // const resultNotFoundMsg = !response.data.hits.length
            //     ? "There are no more search results. Please try a new search"
            //     : '';
            // console.log(response.data.hits)
            this.setState({
                recipes: response.data.hits,
                // message: resultNotFoundMsg,
                // loading: false
            })
        })
        // .catch(error => {
        //     if (axios.isCancel(error) || error) {
        //         this.setState({
        //             loading: false,
        //             message: 'Failed to fetch your recipes'
        //         })
        //     }
        // })
        
    }

    // instead of calling API every time we want to search something, call API for big object in the beginning and then use "search" button to dive into the stored object

    handleChange = (event) => {
        const query = event.target.value;
        console.log(query)
        this.setState({
            query,
            loading: true,
            message: ''
        }
        )}

    handleClick = () => {
        this.fetchSearchResults(this.state.query);
    }

    renderSearchResults = () => {
        const { recipes } = this.state;
        if (Object.keys(recipes).length && recipes.length) {
            return (
                <div className="resultsContainer">
                    {recipes.map((recipe) => {
                        return (
                            <ul>
                                <li key={recipe.calories}>
                                    <h1>{recipe.recipe.label}</h1>
                                    <h2>{recipe.recipe.ingredientLines}</h2>
                                    {/* {recipe.recipe.ingredientLines.map((ingredient) => {
                                        <p>{ingredient}</p>
                                    })} */}

                                </li>
                            </ul>
                        )
                    })}
                </div>
            )
        }
        // console.log(recipes.recipe.ingredientLines)
    }

    render() {
        const { query } = this.state;
        console.log(query)
        return (
            <div className="container">
                <h2 className="heading">
                    Recipe Search
                </h2>
                {/* search input */}
                <label htmlFor="searchInput" className="searchLabel">
                    <input
                    type="text"
                    name="query"
                    value={query}
                    id="searchInput"
                    placeholder="TK"
                    onChange={this.handleChange} />
                    {/* font-awesome */}
                    <i className="fas fa-search" onClick={this.handleClick}></i>
                </label>
                {this.renderSearchResults()}
                this is search!!!!! componenet yay!
            </div>
        )
    }
}
//     constructor() {
//         super();
//         this.state = {
//             recipes: [],
//             ingredients: [],
//             ingredientShowing: false
//         }
//     }

    // componentDidMount() {
    //     axios({
    //         url: "https://api.edamam.com/search",
    //         method: "GET",
    //         responseType: "json",
    //         params: {
    //             app_id: '5dd355ea',
    //             app_key: '53f90bf85dc64c3b10c76408bbdee8e2',
    //             q: "chicken"
    //         }

    //     }).then((r) => {
    //         console.log(r)
    //         this.setState({
    //             recipes: r.data.hits,
    //         })
    //     })
    // }

//     handleClick = (e) => {
//         this.setState({
//             ingredientShowing: this.state.ingredientShowing ? false : true
//         })
//     }

//     render() {
//         return (
//             <div className="App">
//                 <h1>What's for Dinner?</h1>
//                 <div>
//                     {this.state.recipes.map((recipe, index) => {
//                         return (
//                             <div>
//                                 <button key={index} onClick={this.handleClick}>{recipe.recipe.label}</button>
//                                 {this.state.ingredientShowing ?
//                                     (recipe.recipe.ingredientLines.map((ing) => {
//                                         return <p key={index}>{ing}</p>
//                                     })) : null}
//                             </div>
//                         )
//                     })
//                     }
//                 </div>
//             </div>
//         );
//     }
// }



export default Search;

// ^^^^^^^^^^^^^ OUR CODE IS UP THERE ^^^^^^^





// import React from 'react';
// import axios from 'axios';

// class Search extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             query: '',
//             loading: false,
//             message: '',
//         };
//         this.cancel = '';
//     }

//     handleOnInputChange = (event) => {
//         const query = event.target.value;

//         if (!query) {
//             this.setState({ query, results: {}, message: '' });
//         } else {
//             this.setState({ query, loading: true, message: '' }, () => {
//                 this.fetchSearchResults(1, query);
//             });
//         }
//     };

//     fetchSearchResults = (updatedPageNo = '', query) => {

//         const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';

//         // By default the limit of results is 20
//         const searchUrl = `https://pixabay.com/api/?key=12413278-79b713c7e196c7a3defb5330e&q=${query}${pageNumber}`;

//         if (this.cancel) {
//             // Cancel the previous request before making a new request
//             this.cancel.cancel();
//         }
//         // Create a new CancelToken
//         this.cancel = axios.CancelToken.source();

//         axios
//             .get(searchUrl, {
//                 cancelToken: this.cancel.token,
//             })
//             .then((res) => {
//                 const resultNotFoundMsg = !res.data.hits.length
//                     ? 'There are no more search results. Please try a new search.'
//                     : '';

//                 this.setState({
//                     results: res.data.hits,
//                     message: resultNotFoundMsg,
//                     loading: false,
//                 });
//             })
//             .catch((error) => {
//                 if (axios.isCancel(error) || error) {
//                     this.setState({
//                         loading: false,
//                         message: 'Failed to fetch results.Please check network',
//                     });
//                 }
//             });
//     };

//     renderSearchResults = () => {
//         const { results } = this.state;

//         if (Object.keys(results).length && results.length) {
//             return (
//                 <div className="results-container">
//                     {results.map((result) => {
//                         return (
//                             <a key={result.id} href={result.previewURL} className="result-items">
//                                 <h6 className="image-username">{result.user}</h6>
//                                 <div className="image-wrapper">
//                                     <img className="image" src={result.previewURL} alt={result.user} />
//                                 </div>
//                             </a>
//                         );
//                     })}
//                 </div>
//             );
//         }
//     };

//     render() {
//         const { query } = this.state;
//         return (
//             <div className="container">
//                 {/*Heading*/}
//                 <h2 className="heading">Live Search: React Application</h2>

//                 {/*Search Input*/}
//                 <label className="search-label" htmlFor="search-input">
//                     <input
//                         type="text"
//                         value={query}
//                         id="search-input"
//                         placeholder="Search..."
//                         onChange={this.handleOnInputChange}
//                     />
//                     <i className="fa fa-search search-icon" />
//                 </label>

//                 {/*Result*/}
//                 {this.renderSearchResults()}
//             </div>
//         )
//     }
// }

// export default Search;