import React from 'react';
import './FormEmployee.css';


class FormMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            poster: '',
            comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    com

    onChange(e) {
        //console.log(e.target.name)
        //console.log(e.target.value)
        this.setState({
          [e.target.name]: e.target.value,
          
        });
        
    }
    submitForm(e) {
        e.preventDefault();
        console.log(this.state);
        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };
        const url = " https://post-a-form.herokuapp.com/api/movies/";

        fetch(url, config)

        .then(res => 
            res.json()
        )
        .then(res => {
            
            if (res.error) {
                alert(res.error);
            } else {
                alert(`Added movie with the ID ${res}!`);
            }
         
        })
        .catch(e => {
            console.error(e);
            alert("Error during the movie data addition");
        });
    }
      
      

    render(){
       
        return (
            <div className="FormMovie">
                <h1>Movie entry</h1>
                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Information about the movie</legend>
                        <div className="form-data">
                            <label htmlFor="name">Name of the film</label>
                            <input
                            type="text"
                            id="title"
                            name="title"
                            onChange={this.onChange}
                            value={this.state.title}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="posterurl">Poster url</label>
                            <input
                            type="text"
                            id="poster"
                            name="poster"
                            onChange={this.onChange}
                            value={this.state.poster}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="comment">Make a comment about the movie:</label>
                            <input
                            type="comment"
                            id="comment"
                            name="comment"
                            onChange={this.onChange}
                            value={this.state.comment}
                            />
                        </div>
                        <hr />
                        <div className="form-data">
                            <input type="submit" value="Send" />
                        </div>
                    </fieldset>
                </form>
            </div>

        );
    }
};

export default FormMovie;