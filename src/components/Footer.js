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
                            <a href="https://github.com/slashmcdeadly"><i class="fa fa-github"></i></a>
                            <a href="https://twitter.com/SlashMcDeadly"><i class="fa fa-twitter"></i></a>
                        </div>
                        <div className="developer">
                            <p>Jenny Dinh</p>
                            <a href="https://github.com/that-jenster"><i class="fa fa-github"></i></a>
                            <a href="https://twitter.com/thatjenster"><i class="fa fa-twitter"></i></a>
                        </div>
                    </div>
                    
                    <div>
                        <div className="developer">
                            <p>Katie King</p>
                            <a href="https://github.com/kingofkaties"><i class="fa fa-github"></i></a>
                            <a href="https://twitter.com/kingofkaties"><i class="fa fa-twitter"></i></a>
                        </div>
                        <div className="developer">
                            <p>Hector Gonzalez</p>
                            <a href="https://github.com/hctrgnzlz"><i class="fa fa-github"></i></a>
                            <a href="https://twitter.com/hctrgnzlz"><i class="fa fa-twitter"></i></a>
                        </div>
                    </div>
                </footer>
            </div>
        ) 
    }
}
export default Footer;