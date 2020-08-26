import React, { Component } from 'react';

//onClick={()=>{ window.location.href='/a'}}

export default class Inbox extends Component {

    constructor(props){
        super(props);

        this.state = {
            registros: ''
        }

    }

    render(){
        return(
            <div className="container d-flex mt-4">
            <table className="table table-hover">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Folio</th>
                        <th scope="col">Recepción</th>
                        <th scope="col">Remitente</th>
                        <th scope="col">Materia</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <th scope="row">20_0001</th>
                        <td>01/01/2020</td>   
                        <td>Universidad de Concepcion</td>   
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus dui at odio laoreet, in efficitur leo rhoncus. Quisque feugiat ante et nisi aliquet iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla sodales convallis purus. Vestibulum ornare erat non justo rhoncus mattis. Vivamus ac risus mollis, aliquet ipsum at, maximus justo.</td>   
                    </tr>
                    <tr>
                        <th scope="row">20_0001</th>
                        <td>01/01/2020</td>   
                        <td>Universidad de Concepcion</td>   
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus dui at odio laoreet, in efficitur leo rhoncus. Quisque feugiat ante et nisi aliquet iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla sodales convallis purus. Vestibulum ornare erat non justo rhoncus mattis. Vivamus ac risus mollis, aliquet ipsum at, maximus justo.</td>   
                    </tr>
                    <tr>
                        <th scope="row">20_0001</th>
                        <td>01/01/2020</td>   
                        <td>Universidad de Concepcion</td>   
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus dui at odio laoreet, in efficitur leo rhoncus. Quisque feugiat ante et nisi aliquet iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla sodales convallis purus. Vestibulum ornare erat non justo rhoncus mattis. Vivamus ac risus mollis, aliquet ipsum at, maximus justo.</td>   
                    </tr>
                    <tr>
                        <th scope="row">20_0001</th>
                        <td>01/01/2020</td>   
                        <td>Universidad de Concepcion</td>   
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus dui at odio laoreet, in efficitur leo rhoncus. Quisque feugiat ante et nisi aliquet iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla sodales convallis purus. Vestibulum ornare erat non justo rhoncus mattis. Vivamus ac risus mollis, aliquet ipsum at, maximus justo.</td>   
                    </tr>
                    <tr>
                        <th scope="row">20_0001</th>
                        <td>01/01/2020</td>   
                        <td>Universidad de Concepcion</td>   
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus dui at odio laoreet, in efficitur leo rhoncus. Quisque feugiat ante et nisi aliquet iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla sodales convallis purus. Vestibulum ornare erat non justo rhoncus mattis. Vivamus ac risus mollis, aliquet ipsum at, maximus justo.</td>   
                    </tr>
                </tbody>
            </table>
        </div>
        )
    }

}