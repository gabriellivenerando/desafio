import React from 'react';
import ButtonGroup from '../../components/ButtonGroup';
import groups from '../../components/data/groups.json'
import './home.css';


class Home extends React.Component {
    constructor() {
        super()

        this.state = {
            group: "1",
            name: [],
            changeColorDefault: "btnGroup__action",
            changeColorTwo: "",
            changeColorThree: "",
            orderGroup: "one",
            newListOne: [],
            newListTwo: []
        }
    }
    
    componentDidMount = () => {
        this.setState({name: groups})
        
    };

  
    
    changeGroup = (e) => {

        let id = e.target.id;

        switch (id) {
            case "1":
                return this.setState({ group: "1", newListTwo: [], changeColorDefault:"btnGroup__action", changeColorTwo: "", changeColorThree: ""  })
            case "2":
                return this.setState({ group: "2", newListOne: [], changeColorDefault: "", changeColorTwo: "btnGroup__action", changeColorThree:"" })
            case "3":
                return this.setState({ group: "3", changeColorTwo: "", changeColorThree:"btnGroup__action",changeColorDefault:""})
            default:
                return this.setState({ group: "Esse grupo ainda não existe no nosso sistema" })
        }
    }


    order = () =>{
        
        const {name} = this.state; 
        let orderNameGroupOne = [];
        let orderNameGroupTwo = [];

        let newListOneOrder = [];
        let newListTwoOrder = [];
        
        
        switch (this.state.orderGroup) {
            case "one":
                    alert("um")
                orderNameGroupOne = name.groupOne.map( (item) => {
                    return item.name
                })
                newListOneOrder = orderNameGroupOne.sort((a,b) => a.localeCompare(b, 'pt-br'));
                
                return this.setState({orderGroup: "one", newListOne: newListOneOrder, group: [] })
            

            case "two":
                    alert("dois")
                orderNameGroupTwo = name.groupTwo.map( (item) => {
                    return item.name
                })
            
                newListTwoOrder = orderNameGroupTwo.sort((a,b) => a.localeCompare(b, 'pt-br'));
                return this.setState({orderGroup: "two", newListTwo: newListTwoOrder, group: []})
                
            default:
                return alert('e ai?')
        }
        
    }

    render() {
        
        const { name, newListOne, newListTwo } = this.state;
  
        
        

        if(name.groupOne === undefined) return <div></div>

        return (
            <section className="table">
                <div className="table__container">
                    <div className="table__container--btn">
                        <ButtonGroup
                            className={this.state.changeColorDefault}
                            id="1"
                            onClick={this.changeGroup}
                            textButton="GRUPO 1"
                        />
                        <ButtonGroup
                            className={this.state.changeColorTwo}
                            id="2"
                            onClick={this.changeGroup}
                            textButton="GRUPO 2"
                        />
                        <ButtonGroup
                            className={this.state.changeColorThree}
                            id="3"
                            onClick={this.changeGroup}
                            textButton="GRUPO 3"
                        />
                    </div>
                    <div className="table__container--names">
                        {this.state.group === "1" && (
                            <> 
                                {name.groupOne.map(item => (
                                <ul>
                                    <li>{item.name}</li>
                                </ul>
                                ))}
                                
                            </>
                        )}
                        
                        {this.state.orderGroup === "one" && (
                            <>
                                {newListOne.map(item => (
                                    <ul>
                                        <li>{item}</li>
                                    </ul>
                                ))}
                            </>
                        )}
                        

                        {this.state.group === "2" && (
                        <>   
                            {name.groupTwo.map(item => (<p>{item.name}</p>))}
                        </>
                        )}

                        {this.state.orderGroup === "two" && (
                            <>
                                {newListTwo.map(item => (
                                    <ul>
                                        <li>{item}</li>
                                    </ul>
                                ))}
                            </>
                        )}

                        {this.state.group === "3" && (
                        <>   
                            {name.groupThree.map(item => (<p>{item.name}</p>))}
                        </>
                        )}
                    </div>
                        <div className="btnOrderTypes__container">
                            <div className="btnOrderTypes__nameColor">
                                <h6>ORDENAR POR:</h6>
                                <button className="btnOrderTypes_name" onClick={this.order}>Nome</button>
                                <button className="btnOrderTypes_color"onClick={this.order}>Cor</button>
                            </div>
                            <div>
                            <button className="btnOrderTypes_random" >Embaralhar</button>
                            </div>

                        </div>
                </div>
            </section>
        )
    }

}
export default Home;