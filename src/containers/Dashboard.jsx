import React from "react";
import Dashboard from "../components/Dashboard";

class DashboardClient extends React.Component {
    constructor(props) {
        super();
        this.state = {
            chartState: false,
            darkMode: true,
            windowWidth: window.innerWidth,

            socialMedia: '',
            user: '',
            totalFollowers: '',
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleDarkMode = this.handleDarkMode.bind(this);
    }

    // Window size and scroll 

    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth });
    };
    componentDidMount() {
        window.scrollTo(0, 0);
        window.addEventListener("resize", this.handleResize);
    }
    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }

    // Handle Charts and Dark Mode

    handleClick(socialMedia, user, totalFollowers) {
        if (this.state.chartState === true) {
            this.setState({
                chartState: false,
                socialMedia: '',
                user: '',
                totalFollowers: '',
            })
        } else {
            this.setState({
                chartState: true,
                socialMedia: socialMedia,
                user: user,
                totalFollowers: totalFollowers,
            })
        }
    }

    handleDarkMode() {
        this.setState({ darkMode: !this.state.darkMode })
    }

    render() {
        return (
            <div>
                <Dashboard
                    screenSize={this.state.windowWidth}
                    handleClick={this.handleClick}
                    handleDarkMode={this.handleDarkMode}
                    chartState={this.state.chartState}
                    darkModeState={this.state.darkMode}
                    socialMedia={this.state.socialMedia}
                    user={this.state.user}
                    totalFollowers={this.state.totalFollowers}
                />
            </div>
        );
    }
}

export default DashboardClient;
