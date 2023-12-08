import React from 'react';
import { useNavigate } from 'react-router';

const ProductCard = (props) => {
    const navigate = useNavigate();
    return (
        <div className='card m-2 cursor-pointer' style={{width:450}} role='button'
            onClick={()=>navigate(`/product/${props.id}`)}>
            <div className='mt-2'>
                <img src={props.thumbnail} height={250} width={400} alt={props.title}
                className='border-radius-9'/>
                <div className='card-body'>
                    <h5 className='card-title'>{props.title}</h5>
                    <h6 className='mt-2'>Price: {`$${props.price}`}</h6>
                    <h6 className='mt-2'>Discount: {props.discountPercentage}%</h6>
                    <h6 className='mt-2'>Rating: {props.rating}</h6>
                    
                </div>
            </div>
        </div>
    );
};

export default ProductCard;