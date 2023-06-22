import { NavLink } from "react-router-dom";
import backgImg from ".././assets/img/102.jpg";
import React from "react";

const TableRow = (props) =>{
return(
    <tr>
    <th scope="row">{props.index + 1}</th>
    <td>
        <NavLink to={"/profile/" + props.id}>
            {props.lastname} {props.name}
            </NavLink>
        </td>
    </tr>
);
};
export class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userRow: [] };
    }
    componentDidMount(){
    this.props.function().then((users) =>{
   
    let userRow = [];
    for(let i = 0; i < users.length; i++) {
        userRow.push(<TableRow 
            id={users[i].id} 
            key={i} 
            index={i} 
            name={users[i].name} 
            lastname={users[i].lastname}
            />
            ); 
    }   
    this.setState({userRow: userRow}); 
});
}

render() {
   return (<>
    <div className="row">
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Фамилия и имя</th>
                </tr>
            </thead>
            <tbody>
                {this.state.userRow}
                </tbody>  
        </table>
    </div>
    <div className="row">
<div className="col-xl-6 p-5 text-white" style={{backgroundImage: `url(${backgImg})`}}>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ducimus quibusdam, fuga consequuntur iste mollitia dolores reiciendis veniam laboriosam quam sequi nihil modi. Minima praesentium animi reiciendis sed, unde architecto.
</div>
<div className="col-xl-6 p-5">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus culpa rerum neque cumque cupiditate! Repellat optio velit quo porro, obcaecati neque repudiandae, a iste cum ullam possimus aperiam, architecto vitae!
</div>
    </div>
    </>
);
}
}
