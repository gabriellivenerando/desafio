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
            teste: ""
        }
    }
    
    componentDidMount = () => {
        this.setState({name: groups})
        
    };

  
    
    changeGroup = (e) => {

        let id = e.target.id;

        switch (id) {
            case "1":
                return this.setState({ group: "1" })
            case "2":
                return this.setState({ group: "2" })
            case "3":
                return this.setState({ group: "3" })
            default:
                return this.setState({ group: "Esse grupo ainda não existe no nosso sistema" })
        }
    }


    Order = (e) =>{
        
        
        let id = e.target.id;
        
        switch (id) {
            case "12":
                const {name} = this.state;
                let novoArray = [];
                novoArray = name.groupOne.map( (item) => {
                    return item.name
                })
                const teste = novoArray.sort((a,b) => a.localeCompare(b, 'pt-br'));
                console.log(teste)
                this.setState({teste: "12"})
            default:
                return this.setState({ group: "Esse grupo ainda não existe no nosso sistema" })
        }
        
    }

    render() {
        
        const { name } = this.state;
        

        if(name.groupOne === undefined) return <div></div>

        return (
            <section className="table">
                <div className="table__container">
                    <div className="table__container--btn">
                        <ButtonGroup
                            className={this.state.changeColor}
                            id="1"
                            onClick={this.changeGroup}
                            textButton="GRUPO 1"
                        />
                        <ButtonGroup
                            id="2"
                            onClick={this.changeGroup}
                            textButton="GRUPO 2"
                        />
                        <ButtonGroup
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
                                    {this.state.teste === "12" && (
                                        <>
                                            <p>oi</p>
                                        </>
                                    )}

                        {this.state.group === "2" && (
                        <>   
                            {name.groupTwo.map(item => (<p>{item.name}</p>))}
                        </>
                        )}

                        {this.state.group === "3" && (
                        <>   
                            {name.groupThree.map(item => (<p>{item.name}</p>))}
                        </>
                        )}
                    </div>
                        
                        <button id="12" onClick={this.Order}>Nome</button>
                </div>
            </section>
        )
    }

}
export default Home;