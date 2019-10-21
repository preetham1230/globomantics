import React, { Component } from 'react';


class  HouseFilter extends Component {

    

constructor(props) {
    super(props);
    this.state = { 
        search: "",
        countries1: this.props.countries
     }
}

    onSearchChange = (e) =>{

        const country = e.target.value;

    }

    render() { 
        const search = this.state.search;
        const countries = ["Switzerland","The Netherlands"];
        console.log("country list", this.state.countries1);

        return ( 
            <form className="form-group row mt-3">
                <div className="col-md-4">
                    {this.props.selDesc}
                </div>

                <div className="col-md-4">
                    <select className="form-control" value={search} onChange={this.onSearchChange}>
                        {this.state.countries1.map((c) => <option key={c.name} value={c.name}>{c.name}</option>)}
                    </select>
                </div>
            </form>
         );
    }
}
 



export default HouseFilter ;