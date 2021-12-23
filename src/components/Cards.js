import React from "react";
import Star from "../assets/images/star.png";

function Cards(props){
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className="Cards">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <div className="Img-Src">
                <img src={props.item.coverImg} alt="Cover Image" />
            </div>
            <div className="Card-Stats">
            <img src={Star} alt="Star" className="Card-Star"/>
            <span>{props.item.stats.rating}</span>
            <span className="Gray">({props.item.stats.reviewCount}) • </span>
            <span className="Gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="Bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}

export default Cards;