import React, { Component } from 'react';
import axios from 'axios';
 
class Onemap extends Component {

    constructor () {
        super()
        this.state ={ 
            blk_no: '',
            road_name: '',
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {

        if (this.refs.postalcode !== null) {
            var input = this.refs.postalcode;
            
            axios.get('https://developers.onemap.sg/commonapi/search?searchVal='+input.value+'&returnGeom=N&getAddrDetails=Y&pageNum=1')
                .then(response => {
                    //handle success

                    if (response.data.found > 0) {
                        this.setState({ 
                            blk_no: response.data.results[0].BLK_NO, 
                            road_name: response.data.results[0].ROAD_NAME, 
                        });
                    } else {
                        this.setState({ 
                            blk_no: '',
                            road_name: '',
                        });
                    }
                })
                .catch(function (error) {
                    //handle error
                    console.log(error);
                })            
        }
    }

    render() {
        const {
            blk_no,
            road_name
        } = this.state;
        return (
            <div>
                <h2>Onemap Postal Code API Integration using AXIOS JS</h2>        
                <br />
                <form>
                    <table>
                        <tbody>
                        <tr>
                            <td>Enter Postal Code: </td>
                            <td>
                                <input type="text" ref="postalcode" className="input" />
                                <button className='button' onClick={this.handleClick}>
                                    Search
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Block:</td> 
                            <td><input type="text" ref="block" className="input" value={blk_no} /></td>
                        </tr>                    
                        <tr>
                            <td>Road Name:</td> 
                            <td><input type="text" ref="road-ame" className="input" value={road_name} /></td>
                        </tr>
                        </tbody>
                    </table>                
                </form>                

            </div>
        );
    }
}
 
export default Onemap;