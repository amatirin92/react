import React from "react"
import React from "react-dom"

class FormComponent extends Component {
    render(){
        return({
            <div>
                <form action ="">
                    <input name="email" placeholder="Email"/>
                    <input name="firstname" placeholder="First Name"/>
                    <input name="lastname" placeholder="Last Name"/>
                    <button>Submit</button>
                </form>
                
            </div>
        })
    }
}