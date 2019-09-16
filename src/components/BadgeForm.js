import React from 'react'

class BadgeForm extends React.Component {

    state = {
        firstName:"",
        lastName:"",
        email:"",
        jobTitle:"",
        twitter:""
      };

    // por convencion, el metodo que maneja el 
    // change del textbox se llama handleChange
    handleChange = (e) => {
        // console.log({ 
        //     name: e.target.name,    
        //     value: e.target.value 
        // })
        this.setState({  // método de la clase Component
            [e.target.name]: e.target.value, // para que actualice el valor de cada textbox
        })  
    }

    handleClick = e => {
        console.log("Me tocaste el botón")
    }
    
    handleSubmit = e => {
        e.preventDefault() 
        console.log("Form was submitted")
        console.log(this.state)
    }

    
    render (){
        return (
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Firstname</label>
                        <input onChange={this.handleChange} 
                            className="form-control" 
                            type="text" name="firstName"
                            value={this.state.firstName}    // input controlado
                        />
                    </div>
                    <div className="form-group">
                        <label>Lastname</label>
                        <input onChange={this.handleChange} 
                            className="form-control" 
                            type="text" 
                            name="lastName"
                            value={this.state.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.handleChange} 
                            className="form-control" 
                            type="email" 
                            name="email"
                            value={this.state.email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.handleChange} 
                            className="form-control" 
                            type="text" 
                            name="jobTitle"
                            value={this.state.jobTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.handleChange} 
                            className="form-control" 
                            type="text"
                            name="twitter"
                            value={this.state.twitter}
                        />
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm