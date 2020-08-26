import React, {Component} from 'react';

export default class NewDocument extends Component {

    constructor(props){
        super(props);

        this.state = {
            folio: '',
            numero: '',
            emision: '',
            remitente: '',
            detalle: ''
        }
    }

    onChange = e => {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        this.addRegistros();
    }

    addRegistros = () => {
        const newRegistro = {
            folio: this.state.folio,
            numero: this.state.numero
        }
    }

    
    render(){
        return(
           <div className="container mt-4">
               <form onSubmit={this.onSubmit}>
               <div className="row">
                    <div className="col">
                    
                            <div className="form-group">
                                <label htmlFor="folio">Folio</label>
                                <input type="text" className="form-control" id="folio" name="folio" onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="numero">Numero</label>
                                <input type="text" className="form-control" id="numero" name="numero" onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="emision">Emision</label>
                                <input type="date" className="form-control" id="emision" name="emision" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="remitente">Remitente</label>
                                <select className="form-control" id="remitente">
                                    <option>1</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="detalle">Detalle</label>
                                <textarea className="form-control" id="detalle" name="detalle"></textarea>
                            </div>
                    
                    </div>
                    <div className="col">

                    </div>   
               </div>
               <button type="submit" className="btn btn-primary">Submit</button>
               </form>
           </div>
        )
    }

}