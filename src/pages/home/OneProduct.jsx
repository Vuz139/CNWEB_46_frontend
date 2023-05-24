import React from "react";
import './oneProduct.css';

function OneProduct(props){


    return (
        <div className="sp">
            <img className="anhSp" src={props.information.image} alt="normal" />
            <div className="thong_tin" >
                <p className="description" >{props.information.description}</p>
                <p className="cost" >${props.information.costProduct}</p>
                <div>
                    <p className="rate" >{props.information.ratings}</p>
                    <p className="sell" >đã bán {props.information.sell}</p>
                </div>
            </div>
        </div>
    )
    
}
export default OneProduct;