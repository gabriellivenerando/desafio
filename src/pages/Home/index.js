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

    render() {

        const { name } = this.state;
        console.log("name", name)
       

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
                                    <p>Grupo 1</p>   
                                    {name.map(item => { 
                                        return <p>{name.groupOne}</p>
                                    })} 
                            </>
                        )}

                          
                        {this.state.group === "2" && (
                            <p>Grupo 2</p>
                        )}

                        {this.state.group === "3" && (
                            <p>Grupo 3</p>
                        )}

                    </div>
                   
                </div>
            </section>
        )
    }

}
export default Home;