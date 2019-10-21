import React from 'react';
import House from './house';


const FeaturedHouse = (props) => {
    
        if(props.house) {
            return (
                <div>
                    <div className="featuredHouse">
                        <h3 className="col-md-12 text-center">
                            FeaturedHouse
                        </h3>


                    </div>
                    <House house= {props.house} />
                </div>
            );
        }

        return ( <div>No FeaturedHouse at thsi time</div>);

     
}
 
export default FeaturedHouse;