// // referenced from: https://www.youtube.com/watch?v=22SAhH5JxYk&feature=emb_logo

import React, { Component } from "react";
import axios from "axios";

class Search extends Component {

    constructor(props) {
        super(props)

        this.state = {
            query: '',
            recipes: [],
        }
    }

    handleChange = (event) => {
        const query = event.target.value;
        // console.log(query)
        this.setState({
            query
        }
        )
    }

    handleClick = (query) => {
        this.fetchSearchResults(this.state.query);
    }

    fetchSearchResults = (query) => {
        axios({
            url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
            method: 'GET',
            dataResponse: 'json'
        }).then(response => {
            // console.log(response);
            // save the part of the object we need (from response) in the state
            const meals = response.data.meals;
            this.setState({
                recipes: meals
            });
            // console.log(this.state.recipes)
            this.renderSearchResults()

        })}
        
    renderSearchResults = () => {
        const { recipes } = this.state;
        console.log("rendersearachresults")
        console.log(recipes)
        // recipes.map((recipe) => {
            return (
                <div>

                    <p>HIIIIII</p>
                    <li>
                        {console.log(recipes[0])}
                        {recipes.map((recipe) => {
                            console.log(recipe)
                            return (
                                <p>{recipe.strMeal}</p>
                            )
                        })}
                    </li>
                </div>
            )
        // })
    }

    render() {
        const { query } = this.state;
        // console.log(query)
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
                this is search!!!!! componenet yay!
                <div className="resultsContainer">
                    <ul>
                        {this.renderSearchResults()}
                    </ul>
                </div>


            </div>
        )
    }
}

export default Search;
// //     constructor() {
// //         super();
// //         this.state = {
// //             recipes: [],
// //             ingredients: [],
// //             ingredientShowing: false
// //         }
// //     }

//     // componentDidMount() {
//     //     axios({
//     //         url: "https://api.edamam.com/search",
//     //         method: "GET",
//     //         responseType: "json",
//     //         params: {
//     //             app_id: '5dd355ea',
//     //             app_key: '53f90bf85dc64c3b10c76408bbdee8e2',
//     //             q: "chicken"
//     //         }

//     //     }).then((r) => {
//     //         console.log(r)
//     //         this.setState({
//     //             recipes: r.data.hits,
//     //         })
//     //     })
//     // }

// //     handleClick = (e) => {
// //         this.setState({
// //             ingredientShowing: this.state.ingredientShowing ? false : true
// //         })
// //     }

// //     render() {
// //         return (
// //             <div className="App">
// //                 <h1>What's for Dinner?</h1>
// //                 <div>
// //                     {this.state.recipes.map((recipe, index) => {
// //                         return (
// //                             <div>
// //                                 <button key={index} onClick={this.handleClick}>{recipe.recipe.label}</button>
// //                                 {this.state.ingredientShowing ?
// //                                     (recipe.recipe.ingredientLines.map((ing) => {
// //                                         return <p key={index}>{ing}</p>
// //                                     })) : null}
// //                             </div>
// //                         )
// //                     })
// //                     }
// //                 </div>
// //             </div>
// //         );
// //     }
// // }



// export default Search;

// // ^^^^^^^^^^^^^ OUR CODE IS UP THERE ^^^^^^^





// // import React from 'react';
// // import axios from 'axios';

// // class Search extends React.Component {

// //     constructor(props) {
// //         super(props);

// //         this.state = {
// //             query: '',
// //             loading: false,
// //             message: '',
// //         };
// //         this.cancel = '';
// //     }

// //     handleOnInputChange = (event) => {
// //         const query = event.target.value;

// //         if (!query) {
// //             this.setState({ query, results: {}, message: '' });
// //         } else {
// //             this.setState({ query, loading: true, message: '' }, () => {
// //                 this.fetchSearchResults(1, query);
// //             });
// //         }
// //     };

// //     fetchSearchResults = (updatedPageNo = '', query) => {

// //         const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';

// //         // By default the limit of results is 20
// //         const searchUrl = `https://pixabay.com/api/?key=12413278-79b713c7e196c7a3defb5330e&q=${query}${pageNumber}`;

// //         if (this.cancel) {
// //             // Cancel the previous request before making a new request
// //             this.cancel.cancel();
// //         }
// //         // Create a new CancelToken
// //         this.cancel = axios.CancelToken.source();

// //         axios
// //             .get(searchUrl, {
// //                 cancelToken: this.cancel.token,
// //             })
// //             .then((res) => {
// //                 const resultNotFoundMsg = !res.data.hits.length
// //                     ? 'There are no more search results. Please try a new search.'
// //                     : '';

// //                 this.setState({
// //                     results: res.data.hits,
// //                     message: resultNotFoundMsg,
// //                     loading: false,
// //                 });
// //             })
// //             .catch((error) => {
// //                 if (axios.isCancel(error) || error) {
// //                     this.setState({
// //                         loading: false,
// //                         message: 'Failed to fetch results.Please check network',
// //                     });
// //                 }
// //             });
// //     };

// //     renderSearchResults = () => {
// //         const { results } = this.state;

// //         if (Object.keys(results).length && results.length) {
// //             return (
// //                 <div className="results-container">
// //                     {results.map((result) => {
// //                         return (
// //                             <a key={result.id} href={result.previewURL} className="result-items">
// //                                 <h6 className="image-username">{result.user}</h6>
// //                                 <div className="image-wrapper">
// //                                     <img className="image" src={result.previewURL} alt={result.user} />
// //                                 </div>
// //                             </a>
// //                         );
// //                     })}
// //                 </div>
// //             );
// //         }
// //     };

// //     render() {
// //         const { query } = this.state;
// //         return (
// //             <div className="container">
// //                 {/*Heading*/}
// //                 <h2 className="heading">Live Search: React Application</h2>

// //                 {/*Search Input*/}
// //                 <label className="search-label" htmlFor="search-input">
// //                     <input
// //                         type="text"
// //                         value={query}
// //                         id="search-input"
// //                         placeholder="Search..."
// //                         onChange={this.handleOnInputChange}
// //                     />
// //                     <i className="fa fa-search search-icon" />
// //                 </label>

// //                 {/*Result*/}
// //                 {this.renderSearchResults()}
// //             </div>
// //         )
// //     }
// // }

// // export default Search;




// componentDidMount(): provide dropdown menu with meal categories
// when user selects a dropdown option, save that option to state
// display below only the meals that match that state ("category" component)
// when user clicks a meal, expand to show meal description ("meal" component)
// in expanded meal component, allow "open" events to show components with ingredients and steps ("steps" and "ingredients" component)
// if user clicks "add meal to my party", add meal id to firebase


// import React, { Component } from "react";
// import Form from "./Form";
// import axios from "axios";
// import "./App.css";
// class SearchingTwo extends Component {
//     constructor() {
//         super();
//         this.state = {
//             wizards: [],
//             deathEaters: [],
//         };
//     }
//     componentDidMount() {
//         // axios call
//         axios({
//             url: "https://www.potterapi.com/v1/characters",
//             method: "GET",
//             responseType: "JSON",
//             params: {
//                 key: "$2a$10$qMWYaBkHrfo60ggVDtmyQuXvf8vPp0AfdEQjgv.pF3I/T7IRcG/wy",
//             },
//         }).then((wizards) => {
//             wizards = wizards.data;
//             this.setState({
//                 // wizards: wizards,
//                 wizards,
//             });
//         });
//     }
//     filterWizards = (event, userSelection) => {
//         event.preventDefault();
//         // based on the what the user selects,
//         // filter all wizards down to only the user selected group/faction
//         const copyOfWizards = [...this.state.wizards]; // copy of wizards state
//         const deathEaters = copyOfWizards
//             .filter((wiz) => wiz[userSelection])
//             .filter((wizard) => wizard.deathEater);
//         this.setState({
//             deathEaters,
//             //deathEaters: deathEaters
//         });
//     };
//     render() {
//         return (
//             <div className="App">
//                 <h1>Find The Death Eaters!</h1>
//                 <Form filterWizards={this.filterWizards} />
//                 {/* SHOW DEATH EATERS HERE */}
//                 {this.state.deathEaters.length > 0 ? (
//                     this.state.deathEaters.map((jerk) => {
//                         return <h2 key={jerk._id}>{jerk.name}</h2>;
//                     })
//                 ) : (
//                         <p>NO Death Eaters Found!</p>
//                     )}
//             </div>
//         );
//     }
// }
// export default SearchingTwo;
// get API data when the component mounts and store in state
// create dropdown for user to select a wizard faction
// store that user selection in state
// based on the what the user selects, filter all wizards down to only the user selected group/faction
// filter again to find any death eaters
// store the located death eaters in state
// render the death eaters to the page