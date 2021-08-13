import React from "react";
import ChartSocial from "./ChartSocial"

export default ({ screenSize, handleClick, chartState, handleDarkMode, darkModeState, socialMedia, user, totalFollowers }) => {
    const styles = {
        backColor: {
            position: "fixed",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            height: "100%",
            backgroundColor: `${darkModeState ? ("hsl(230, 17%, 14%)") : ("hsl(0, 0%, 100%)")}`
        },
        topBackColor: {
            position: "fixed",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            height: "29%",
            backgroundColor: `${darkModeState ? ("hsl(232, 19%, 15%)") : ("hsl(225, 100%, 98%)")}`,
            borderRadius: "0px 0px 25px 25px"
        },
        container: {
            position: "fixed",
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            padding: `${screenSize > 800 ? ("3% 10%") : ("30px")}`,
            height: "100%",
            overflow: `auto`,
        },
        navbar: {
            display: "flex",
            flex: 1.5,
            margin: `${screenSize > 800 ? ("0px 20px") : ("0px")}`,
            marginBottom: `${screenSize > 800 ? ("0px") : ("30px")}`,
        },
        textsNavbar: {
            display: "flex",
            flex: 8,
            flexDirection: "column",
        },
        titleNavbar: {
            marginBottom: `${screenSize > 800 ? ('5px') : ("10px")}`,
            fontSize: "28px",
            color: `${darkModeState ? ("hsl(0, 0%, 100%)") : ("hsl(230, 17%, 14%)")}`,
            fontFamily: "InterBold",
            lineHeight: '1.4'
        },
        subtitleNavbar: {
            margin: 0,
            fontSize: "14px",
            color: `${darkModeState ? ("hsl(228, 34%, 66%)") : ("hsl(228, 12%, 44%)")}`,
            fontFamily: "InterBold",
        },
        toogleNavbar: {
            display: "flex",
            flex: 4,
            alignItems: "center",
            justifyContent: `${screenSize > 800 ? ("flex-end") : ("center")}`,
            flexDirection: `${screenSize > 800 ? ("row") : ("column")}`,
        },
        textToogle: {
            fontSize: "14px",
            fontFamily: "InterBold",
            alignSelf: "center",
            textDecoration: "none",
            color: 'inherit',
            border: 'none',
            outline: 'none',
            padding: '12px',
            backgroundColor: `transparent`
        },
        indicators: {
            display: "flex",
            flex: 11,
            flexDirection: "column",
        },
        generalIndicators: {
            display: "flex",
            flex: 4,
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: `${screenSize > 800 ? ('no-wrap') : ("wrap")}`,
            margin: `${screenSize > 800 ? ('0px') : ("0px 0px 30px")}`,
        },
        singleGenIndicator: {
            display: "flex",
            width: `${screenSize > 800 ? ("22%") : ("80vw")}`,
            flexDirection: "column",
            alignItems: 'stretch',
            borderRadius: '5px',
            padding: '0px',
            textDecoration: "none",
            border: 'none',
            outline: 'none',
            margin: `${screenSize > 800 ? ('1.4%') : ("20px 10px")}`,
        },
        borderCardF: {
            display: "flex",
            height: '4px',
            width: '100%',
            flexDirection: "column",
            backgroundColor: "hsl(203, 89%, 53%)",
            borderRadius: '5px 5px 0px 0px',
        },
        borderCardT: {
            display: "flex",
            height: '4px',
            width: '100%',
            flexDirection: "column",
            backgroundColor: "hsl(195, 100%, 50%)",
            borderRadius: '5px 5px 0px 0px',
        },
        borderCardI: {
            display: "flex",
            height: '4px',
            width: '100%',
            flexDirection: "column",
            backgroundImage: "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
            borderRadius: '5px 5px 0px 0px',
        },
        borderCardY: {
            display: "flex",
            height: '4px',
            width: '100%',
            flexDirection: "column",
            backgroundColor: "hsl(348, 97%, 39%)",
            borderRadius: '5px 5px 0px 0px',
        },
        contentSingleIndicator: {
            display: "flex",
            height: '100%',
            flexDirection: "column",
            alignItems: 'center',
            justifyContent: 'center',
            padding: '30px',
        },
        userCard: {
            display: "flex",
            color: `${darkModeState ? ("hsl(228, 34%, 66%)") : ("hsl(228, 12%, 44%)")}`,
            margin: 0,
            alignItems: 'center',
            justifyContent: 'center',
        },
        textUser: {
            display: "flex",
            color: `${darkModeState ? ("hsl(228, 34%, 66%)") : ("hsl(228, 12%, 44%)")}`,
            margin: 0,
            fontSize: "14px",
            fontFamily: "InterBold",
            marginLeft: '10px'
        },
        numberCard: {
            display: "flex",
            color: `${darkModeState ? ("hsl(0, 0%, 100%)") : ("hsl(230, 17%, 14%)")}`,
            margin: 0,
            fontSize: "55px",
            fontFamily: "InterBold",
            marginTop: '8px'
        },
        detailCard: {
            display: "flex",
            color: `${darkModeState ? ("hsl(228, 34%, 66%)") : ("hsl(228, 12%, 44%)")}`,
            margin: 0,
            fontSize: "12px",
            fontFamily: "InterRegular",
            letterSpacing: '5px',
            marginBottom: '20px'
        },
        compareCardUp: {
            display: "flex",
            color: "hsl(163, 72%, 41%)",
            margin: 0,
            fontSize: "12px",
            fontFamily: "InterBold",
            alignItems: 'flex-end',
        },
        compareCardDown: {
            display: "flex",
            color: "hsl(356, 69%, 56%)",
            margin: 0,
            fontSize: "12px",
            fontFamily: "InterBold",
            alignItems: 'flex-end',
        },
        compareCardCenter: {
            display: "flex",
            alignItems: 'center',
            marginBottom: '6px'
        },
        numberLittleCard: {
            display: "flex",
            color: `${darkModeState ? ("hsl(0, 0%, 100%)") : ("hsl(230, 17%, 14%)")}`,
            margin: 0,
            fontSize: "30px",
            fontFamily: "InterBold",
        },
        detailIndicators: {
            display: "flex",
            flex: 7,
            flexDirection: "column",
        },
        titleDetailIndicators: {
            display: "flex",
            flex: 2,
            alignItems: 'center',
            fontSize: "24px",
            color: `${darkModeState ? ("hsl(0, 0%, 100%)") : ("hsl(228, 12%, 44%)")}`,
            fontFamily: "InterBold",
            margin: `${screenSize > 800 ? ("20px 20px 0px") : ("0px")}`,
        },
        rowDetailIndicators: {
            display: "flex",
            flex: 10,
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexWrap: `${screenSize > 800 ? ('wrap') : ("wrap")}`,
            margin: `${screenSize > 800 ? ('0px') : ("20px 0px")}`,
        },
        singleDetIndicator: {
            display: "flex",
            width: `${screenSize > 800 ? ("22%") : ("80vw")}`,
            flexDirection: "column",
            alignItems: 'space-between',
            justifyContent: 'space-between',
            borderRadius: '5px',
            padding: "25px",
            textDecoration: "none",
            border: 'none',
            outline: 'none',
            margin: `${screenSize > 800 ? ('1.4%') : ("10px")}`,
        },
        textDetailCard: {
            display: "flex",
            color: `${darkModeState ? ("hsl(228, 34%, 66%)") : ("hsl(228, 12%, 44%)")}`,
            margin: 0,
            fontSize: "14px",
            fontFamily: "InterBold",
        },
        contentSingleIndicatorLineTop: {
            display: "flex",
            alignItems: 'space-between',
            justifyContent: 'space-between',
            marginBottom: `12px`,
        },
        contentSingleIndicatorLineDown: {
            display: "flex",
            alignItems: 'space-between',
            justifyContent: 'space-between',
        },
        svgStyle: {
            width: "8px",
            height: '4px',
            alignSelf: 'center',
            marginRight: '5px'
        },
        svgStyleDown: {
            display: "flex",
            width: "8px",
            height: '4px',
            marginRight: '5px'
        },
        svgSocialStyle: {
            width: "20px",
            height: '20px',
            alignSelf: 'center',
        },
    };

    const svgFacebook = <svg xmlns="http://www.w3.org/2000/svg" style={styles.svgSocialStyle}><path fill="#178FF5" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" /></svg>
    const svgTwitter = <svg xmlns="http://www.w3.org/2000/svg" style={styles.svgSocialStyle}><path fill="#1DA1F2" d="M20 1.924a8.192 8.192 0 01-2.357.646A4.11 4.11 0 0019.448.3a8.22 8.22 0 01-2.606.996A4.096 4.096 0 0013.847 0c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 011.392.752a4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513C.76 7.616 2.122 9.395 4.095 9.79a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.849A8.25 8.25 0 010 14.41a11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.663-12.205A8.354 8.354 0 0020 1.924z" /></svg>
    const svgInstagram = <svg xmlns="http://www.w3.org/2000/svg" style={styles.svgSocialStyle}><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#DF4896" /><stop offset="50.913%" stop-color="#EE877E" /><stop offset="100%" stop-color="#FDC366" /></linearGradient></defs><path fill="url(#a)" d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.878.06 2.246.227.228 2.242.06 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" /></svg>
    const svgYoutube = <svg xmlns="http://www.w3.org/2000/svg" style={styles.svgSocialStyle}><path fill="#C4032B" d="M10 0C4.478 0 0 4.478 0 10c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.7 14.077c-1.75.12-5.652.12-7.402 0-1.896-.13-2.117-1.059-2.131-4.077.014-3.024.237-3.947 2.131-4.077 1.75-.12 5.652-.12 7.403 0 1.897.13 2.117 1.059 2.132 4.077-.015 3.024-.237 3.947-2.132 4.077zM8.334 8.048l4.098 1.949-4.098 1.955V8.048z" /></svg>
    const svgUp = <svg xmlns="http://www.w3.org/2000/svg" style={styles.svgStyle} ><path fill="#1EB589" fillRule="evenodd" d="M0 4l4-4 4 4z" /></svg>
    const svgDown = <svg xmlns="http://www.w3.org/2000/svg" style={styles.svgStyle}><path fill="#DC414C" f="evenodd" d="M0 0l4 4 4-4z" /></svg>
    const svgUpBottom = <svg xmlns="http://www.w3.org/2000/svg" style={styles.svgStyleDown} ><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" /></svg>
    const svgDownBottom = <svg xmlns="http://www.w3.org/2000/svg" style={styles.svgStyleDown}><path fill="#DC414C" fill-rule="evenodd" d="M0 0l4 4 4-4z" /></svg>

    return (
        <>
            <div style={styles.backColor} />
            {screenSize > 800 ? (<div style={styles.topBackColor} />) : (<></>)}
            <div style={styles.container}>
                <div style={styles.navbar}>
                    <div style={styles.textsNavbar}>
                        <h3 style={styles.titleNavbar}>Social Media Dashboard</h3>
                        <h3 style={styles.subtitleNavbar}>Total Followers: 23,004</h3>
                    </div>
                    <div className={darkModeState ? ("textDarkToogle") : ("textLightToogle")} style={styles.toogleNavbar}>
                        <button style={styles.textToogle} onClick={handleDarkMode}>Dark Mode</button>
                        {darkModeState === true ? (<>  <input type="checkbox" id="switch" onChange={handleDarkMode} /><label for="switch" >Toggle</label></>) : (<>  <input type="checkbox" id="switch" onChange={handleDarkMode} checked /><label for="switch" >Toggle</label></>)}
                    </div>
                </div>
                <div style={styles.indicators}>
                    {chartState === true ? (
                        <ChartSocial
                            handleClick={handleClick}
                            darkModeState={darkModeState}
                            screenSize={screenSize}
                            socialMedia={socialMedia}
                            user={user}
                            totalFollowers={totalFollowers}
                        />
                    ) : (<></>)}
                    <div style={styles.generalIndicators}>
                        <button className={darkModeState ? ("buttonDark") : ("buttonLight")} style={styles.singleGenIndicator} onClick={(e) => handleClick("Facebook", "@nathanf", "1987")}>
                            <div style={styles.borderCardF} />
                            <div style={styles.contentSingleIndicator}>
                                <div style={styles.userCard}>{svgFacebook}<h3 style={styles.textUser}>@nathanf</h3></div>
                                <div style={styles.numberCard}>1987</div>
                                <div style={styles.detailCard}>FOLLOWERS</div>
                                <div style={styles.compareCardUp}>{svgUp}12 Today</div>
                            </div>
                        </button>
                        <button className={darkModeState ? ("buttonDark") : ("buttonLight")} style={styles.singleGenIndicator} onClick={(e) => handleClick("Twitter", "@nathanf", "1044")}>
                            <div style={styles.borderCardT} />
                            <div style={styles.contentSingleIndicator}>
                                <div style={styles.userCard}>{svgTwitter}<h3 style={styles.textUser}>@nathanf</h3></div>
                                <div style={styles.numberCard}>1044</div>
                                <div style={styles.detailCard}>FOLLOWERS</div>
                                <div style={styles.compareCardUp}>{svgUp}99 Today</div>
                            </div>
                        </button>
                        <button className={darkModeState ? ("buttonDark") : ("buttonLight")} style={styles.singleGenIndicator} onClick={(e) => handleClick("Instagram", "@realnathanf", "11k")}>
                            <div style={styles.borderCardI} />
                            <div style={styles.contentSingleIndicator}>
                                <div style={styles.userCard}>{svgInstagram}<h3 style={styles.textUser}>@realnathanf</h3></div>
                                <div style={styles.numberCard}>11k</div>
                                <div style={styles.detailCard}>FOLLOWERS</div>
                                <div style={styles.compareCardUp}>{svgUp}1099 Today</div>
                            </div>
                        </button>
                        <button className={darkModeState ? ("buttonDark") : ("buttonLight")} style={styles.singleGenIndicator} onClick={(e) => handleClick("Youtube", "Nathan F.", "8239")}>
                            <div style={styles.borderCardY} />
                            <div style={styles.contentSingleIndicator}>
                                <div style={styles.userCard}>{svgYoutube}<h3 style={styles.textUser}>Nathan F.</h3></div>
                                <div style={styles.numberCard}>8239</div>
                                <div style={styles.detailCard}>SUBSCRIBERS</div>
                                <div style={styles.compareCardDown}>{svgDown}144 Today</div>
                            </div>
                        </button>
                    </div>
                    <div style={styles.detailIndicators}>
                        <h3 style={styles.titleDetailIndicators}>Overview - Today</h3>
                        <div style={styles.rowDetailIndicators}>
                            <div className={darkModeState ? ("buttonDark") : ("buttonLight")} style={styles.singleDetIndicator} onClick={(e) => handleClick("Facebook", "@nathanf", "1987")}>
                                <div style={styles.contentSingleIndicatorLineTop}>
                                    <div style={styles.textDetailCard}>Page Views</div>
                                    {svgFacebook}
                                </div>
                                <div style={styles.contentSingleIndicatorLineDown}>
                                    <div style={styles.numberLittleCard}>87</div>
                                    <div style={styles.compareCardUp}><div style={styles.compareCardCenter}>{svgUpBottom}3%</div></div>
                                </div>
                            </div>
                            <div className={darkModeState ? ("buttonDark") : ("buttonLight")} style={styles.singleDetIndicator} onClick={(e) => handleClick("Facebook", "@nathanf", "1987")}>
                                <div style={styles.contentSingleIndicatorLineTop}>
                                    <div style={styles.textDetailCard}>Likes</div>
                                    {svgFacebook}
                                </div>
                                <div style={styles.contentSingleIndicatorLineDown}>
                                    <div style={styles.numberLittleCard}>52</div>
                                    <div style={styles.compareCardDown}><div style={styles.compareCardCenter}>{svgDownBottom}2%</div>
                                    </div>
                                </div>
                            </div>
                            <div className={darkModeState ? ("buttonDark") : ("buttonLight")} style={styles.singleDetIndicator} onClick={(e) => handleClick("Instagram", "@realnathanf", "11k")}>
                                <div style={styles.contentSingleIndicatorLineTop}>
                                    <div style={styles.textDetailCard}>Likes</div>
                                    {svgInstagram}
                                </div>
                                <div style={styles.contentSingleIndicatorLineDown}>
                                    <div style={styles.numberLittleCard}>5462</div>
                                    <div style={styles.compareCardUp}><div style={styles.compareCardCenter}>{svgUpBottom}2257%</div>
                                    </div>
                                </div>
                            </div>
                            <div className={darkModeState ? ("buttonDark") : ("buttonLight")} style={styles.singleDetIndicator} onClick={(e) => handleClick("Instagram", "@realnathanf", "11k")}>
                                <div style={styles.contentSingleIndicatorLineTop}>
                                    <div style={styles.textDetailCard}>Profile Views</div>
                                    {svgInstagram}
                                </div>
                                <div style={styles.contentSingleIndicatorLineDown}>
                                    <div style={styles.numberLittleCard}>52k</div>
                                    <div style={styles.compareCardUp}><div style={styles.compareCardCenter}>{svgUpBottom}1375%</div></div>
                                </div>
                            </div>
                            <div className={darkModeState ? ("buttonDark") : ("buttonLight")} style={styles.singleDetIndicator} onClick={(e) => handleClick("Twitter", "@nathanf", "1044")}>
                                <div style={styles.contentSingleIndicatorLineTop}>
                                    <div style={styles.textDetailCard}>Retweets</div>
                                    {svgTwitter}
                                </div>
                                <div style={styles.contentSingleIndicatorLineDown}>
                                    <div style={styles.numberLittleCard}>117</div>
                                    <div style={styles.compareCardUp}><div style={styles.compareCardCenter}>{svgUpBottom}303%</div></div>
                                </div>
                            </div>
                            <div className={darkModeState ? ("buttonDark") : ("buttonLight")} style={styles.singleDetIndicator} onClick={(e) => handleClick("Twitter", "@nathanf", "1044")}>
                                <div style={styles.contentSingleIndicatorLineTop}>
                                    <div style={styles.textDetailCard}>Likes</div>
                                    {svgTwitter}
                                </div>
                                <div style={styles.contentSingleIndicatorLineDown}>
                                    <div style={styles.numberLittleCard}>507</div>
                                    <div style={styles.compareCardUp}><div style={styles.compareCardCenter}>{svgUpBottom}553%</div></div>
                                </div>
                            </div>
                            <div className={darkModeState ? ("buttonDark") : ("buttonLight")} style={styles.singleDetIndicator} onClick={(e) => handleClick("Youtube", "Nathan F.", "8239")}>
                                <div style={styles.contentSingleIndicatorLineTop}>
                                    <div style={styles.textDetailCard}>Likes</div>
                                    {svgYoutube}
                                </div>
                                <div style={styles.contentSingleIndicatorLineDown}>
                                    <div style={styles.numberLittleCard}>107</div>
                                    <div style={styles.compareCardDown}><div style={styles.compareCardCenter}>{svgDownBottom}19%</div></div>
                                </div>
                            </div>
                            <div className={darkModeState ? ("buttonDark") : ("buttonLight")} style={styles.singleDetIndicator} onClick={(e) => handleClick("Youtube", "Nathan F.", "8239")}>
                                <div style={styles.contentSingleIndicatorLineTop}>
                                    <div style={styles.textDetailCard}>Totals Views</div>
                                    {svgYoutube}
                                </div>
                                <div style={styles.contentSingleIndicatorLineDown}>
                                    <div style={styles.numberLittleCard}>1407</div>
                                    <div style={styles.compareCardDown}><div style={styles.compareCardCenter}>{svgDownBottom}12%</div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
