import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <div className="footer">
                <h4>Copyright @ Team Foodie 2020</h4>
                <footer>
                    <div>
                        <div className="developer">
                            <p>Scott Carter</p>
                            <a><i class="fa fa-github"></i></a>
                            <a><i class="fa fa-twitter"></i></a>
                        </div>
                        <div className="developer">
                            <p>Hector Gonzalez</p>
                            <a><i class="fa fa-github"></i></a>
                            <a><i class="fa fa-twitter"></i></a>
                        </div>
                    </div>
                    
                    <div>
                        <div className="developer">
                            <p>Katie King</p>
                            <a><i class="fa fa-github"></i></a>
                            <a><i class="fa fa-twitter"></i></a>
                        </div>
                        <div className="developer">
                            <p>Jenny Dinh</p>
                            <a><i class="fa fa-github"></i></a>
                            <a><i class="fa fa-twitter"></i></a>
                        </div>
                    </div>
                </footer>
            </div>
        ) 
    }
}
export default Footer;