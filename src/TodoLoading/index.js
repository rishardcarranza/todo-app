import React from "react";
import ContentLoader from "react-content-loader";
import "./TodoLoading.css";

function TodoLoading(props) {
    return (
        <ContentLoader 
            speed={2}
            width={400}
            height={75}
            viewBox="0 0 350 50"
            backgroundColor="#303246"
            foregroundColor="#ffffff"
        >
            <rect x="48" y="12" rx="3" ry="3" width="256" height="9" /> 
            <circle cx="28" cy="21" r="11" /> 
            <rect x="48" y="27" rx="3" ry="3" width="202" height="7" />
        </ContentLoader>
    ); 
}

export { TodoLoading };