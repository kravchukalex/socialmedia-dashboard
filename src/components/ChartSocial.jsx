import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '',
        'New followers': 4,
    },
    {
        name: 'May 4',
        'New followers': 3,
    },
    {
        name: 'May 5',
        'New followers': 2,
    },
    {
        name: 'May 6',
        'New followers': 6,
    },
    {
        name: 'May 7',
        'New followers': 8,
    },
    {
        name: 'May 8',
        'New followers': 9,
    },
    {
        name: 'May 9',
        'New followers': 10,
    },
    {
        name: 'May 10',
        'New followers': 9,
    },
    {
        name: 'May 11',
        'New followers': 10,
    },
    {
        name: 'May 12',
        'New followers': 12,
    },
    {
        name: 'May 13',
        'New followers': 12,
    },
];

export default ({ screenSize, darkModeState, handleClick, socialMedia, user, totalFollowers }) => {
    const styles = {
        shadowContainer: {
            position: "fixed",
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: '#000',
            opacity: '0.5',
        },
        container: {
            position: "fixed",
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        chartContainer: {
            display: "flex",
            flexDirection: 'column',
            width: `${screenSize > 800 ? ("70%") : ("90%")}`,
            height: `${screenSize > 800 ? ("70%") : ("90%")}`,
            backgroundColor: `${darkModeState ? ("hsl(230, 17%, 14%)") : ('hsl(0, 0%, 100%)')}`,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: '18px',
        },
        chartTop: {
            display: "flex",
            width: "100%",
            height: "100%",
            flex: 4,
            flexDirection: 'column',
            backgroundColor: `${darkModeState ? ("hsl(232, 19%, 15%)") : ('hsl(225, 100%, 98%)')}`,
            alignItems: "flex-start",
            padding: `${screenSize > 800 ? ("20px 20px 20px 60px") : ("30px 30px 20px 30px")}`,
            borderRadius: '18px 18px  0px 0px',
        },
        chartClose: {
            display: "flex",
            alignSelf: "flex-end",
            color: `${darkModeState ? ("hsl(0, 0%, 100%)") : ('hsl(228, 12%, 44%)')}`,
            border: 'none',
            backgroundColor: `transparent`,
            textDecoration: "none",
            outline: 'none'
        },
        chartTitle: {
            display: "flex",
            margin: "-10px 40px 10px 0",
            fontSize: "28px",
            color: `${darkModeState ? ("hsl(0, 0%, 100%)") : ('hsl(230, 17%, 14%)')}`,
            fontFamily: "InterBold"
        },
        chartUser: {
            display: "flex",
            color: `${darkModeState ? ("hsl(228, 34%, 66%)") : ('hsl(228, 18%, 64%)')}`,
            fontFamily: "InterBold",
            fontSize: "14px",
            margin: 0,
        },
        svgSocialStyle: {
            width: "20px",
            height: '20px',
            alignSelf: 'center',
            margin: "0px 10px 0px 0px",
        },
        chartIndicators: {
            display: "flex",
            alignItems: "center",
            marginTop: "30px",
        },
        chartNumbersBlack: {
            margin: 0,
            fontSize: "40px",
            color: `${darkModeState ? ("hsl(0, 0%, 100%)") : ('hsl(228, 12%, 44%)')}`,
            fontFamily: "InterBold",
        },
        chartNumbersGreen: {
            margin: 0,
            fontSize: "40px",
            color: "hsl(163, 72%, 41%)",
            fontFamily: "InterBold",
        },
        chartNumbersDetails: {
            margin: "0px 14px",
            width: '80px',
            fontSize: "14px",
            color: `${darkModeState ? ("hsl(0, 0%, 100%)") : ('hsl(228, 12%, 44%)')}`,
            fontFamily: "InterRegular",
            lineHeight: '1.4'
        },
        chartNumbersDetailsLarge: {
            margin: "0px 14px",
            width: '120px',
            fontSize: "14px",
            color: `${darkModeState ? ("hsl(0, 0%, 100%)") : ('hsl(228, 12%, 44%)')}`,
            fontFamily: "InterRegular",
            lineHeight: '1.4'
        },
        svgStyle: {
            width: "8px",
            height: '4px',
            alignSelf: 'center',
            margin: '8px'
        },
        chartBottom: {
            display: "flex",
            flex: 8,
            flexDirection: 'column',
            width: "100%",
            height: "100%",
            alignItems: "flex-start",
            justifyContent: "space-between",
            padding: `${screenSize > 800 ? ("30px 40px 30px 22px") : ("30px 40px 30px 10px")}`,
        },
        dateChart: {
            margin: 0,
            fontSize: "18px",
            color: `${darkModeState ? ("hsl(228, 34%, 66%)") : ('hsl(228, 2%, 64%)')}`,
            fontFamily: "InterRegular",
            paddingLeft: `${screenSize > 800 ? ("35px") : ("35px")}`,
        },
    }
    return (
        <>
            <div style={styles.shadowContainer} />
            <div style={styles.container}>
                {/* {screenSize > 800 ? ( */}
                <div style={styles.chartContainer}>
                    <div style={styles.chartTop}>
                        <button style={styles.chartClose} onClick={handleClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                        <div style={styles.chartTitle}>{socialMedia} followers</div>
                        <div style={styles.chartUser}>
                            {socialMedia === "Facebook" ? (<svg xmlns="http://www.w3.org/2000/svg" style={styles.svgSocialStyle}><path fill="#178FF5" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" /></svg>) : (<></>)}
                            {socialMedia === "Twitter" ? (<svg xmlns="http://www.w3.org/2000/svg" style={styles.svgSocialStyle}><path fill="#1DA1F2" d="M20 1.924a8.192 8.192 0 01-2.357.646A4.11 4.11 0 0019.448.3a8.22 8.22 0 01-2.606.996A4.096 4.096 0 0013.847 0c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 011.392.752a4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513C.76 7.616 2.122 9.395 4.095 9.79a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.849A8.25 8.25 0 010 14.41a11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.663-12.205A8.354 8.354 0 0020 1.924z" /></svg>) : (<></>)}
                            {socialMedia === "Instagram" ? (<svg xmlns="http://www.w3.org/2000/svg" style={styles.svgSocialStyle}><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#DF4896" /><stop offset="50.913%" stop-color="#EE877E" /><stop offset="100%" stop-color="#FDC366" /></linearGradient></defs><path fill="url(#a)" d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.878.06 2.246.227.228 2.242.06 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" /></svg>) : (<></>)}
                            {socialMedia === "Youtube" ? (<svg xmlns="http://www.w3.org/2000/svg" style={styles.svgSocialStyle}><path fill="#C4032B" d="M10 0C4.478 0 0 4.478 0 10c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.7 14.077c-1.75.12-5.652.12-7.402 0-1.896-.13-2.117-1.059-2.131-4.077.014-3.024.237-3.947 2.131-4.077 1.75-.12 5.652-.12 7.403 0 1.897.13 2.117 1.059 2.132 4.077-.015 3.024-.237 3.947-2.132 4.077zM8.334 8.048l4.098 1.949-4.098 1.955V8.048z" /></svg>) : (<></>)}
                            {user}
                        </div>
                        <div style={styles.chartIndicators}>
                            <div style={styles.chartNumbersBlack}>{totalFollowers}</div>
                            <div style={styles.chartNumbersDetails}>Total followers</div>
                            {screenSize > 800 ? (<>
                                <svg xmlns="http://www.w3.org/2000/svg" style={styles.svgStyle} ><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" /></svg>
                                <div style={styles.chartNumbersGreen}>81</div>
                                <div style={styles.chartNumbersDetailsLarge}>New followers in the past 10 days</div>
                                <svg xmlns="http://www.w3.org/2000/svg" style={styles.svgStyle} ><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" /></svg>
                                <div style={styles.chartNumbersGreen}>12</div>
                                <div style={styles.chartNumbersDetailsLarge}>New followers TODAY</div>
                            </>) : (<></>)}
                        </div>
                    </div>
                    <div style={styles.chartBottom}>
                        <h3 style={styles.dateChart}>May 4 - May 13</h3>
                        <ResponsiveContainer width="100%" height="80%">
                            <LineChart width={300} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                <Line type="monotone" dataKey="New followers" stroke="hsl(243, 51%, 70%)" strokeWidth={2} activeDot={{ r: 8 }} />
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <XAxis stroke={`${darkModeState ? ("hsl(228, 34%, 66%)") : ('hsl(228, 2%, 64%)')}`} dataKey="name" />
                                <YAxis stroke={`${darkModeState ? ("hsl(228, 34%, 66%)") : ('hsl(228, 2%, 64%)')}`} />
                                <Tooltip />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                {/* ) : (
                <></>
            )} */}
            </div>
        </>
    );
};
