import React from 'react';
import ButtonGroup from '../../components/ButtonGroup';
import groups from '../../components/data/groups.json';
import ButtonOrder from '../../components/ButtonOrder';
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
            newListTwo: [],
            newListThree: [],
            listTest: [],
            newRandomList: "one"
        }
    }

    componentDidMount = () => {
        this.setState({ name: groups })

    };



    changeGroup = (e) => {

        let id = e.target.id;

        switch (id) {
            case "1":
                return this.setState({ group: "1", newListTwo: [], changeColorDefault: "btnGroup__action", changeColorTwo: "", changeColorThree: "", orderGroup: "one" })
            case "2":
                return this.setState({ group: "2", newListOne: [], changeColorDefault: "", changeColorTwo: "btnGroup__action", changeColorThree: "", orderGroup: "two" })
            case "3":
                return this.setState({ group: "3", changeColorTwo: "", changeColorThree: "btnGroup__action", changeColorDefault: "", orderGroup: "three" })
            default:
                return this.setState({ group: "Esse grupo ainda não existe no nosso sistema" })
        }
    }


    order = () => {

        const { name } = this.state;
        let orderNameGroupOne = [];
        let orderNameGroupTwo = [];
        let orderNameGroupThree = [];

        let newListOneOrder = [];
        let newListTwoOrder = [];
        let newListThreeOrder = [];


        switch (this.state.orderGroup) {
            case "one":
                orderNameGroupOne = name.groupOne.map((item) => {
                    return { name: item.name,
                            className: item.className
                        }
                    })

                newListOneOrder = orderNameGroupOne.sort((a, b) => a.name.localeCompare(b.name, 'pt-br'));
                return this.setState({ orderGroup: "one", newListOne: newListOneOrder, group: [] })


            case "two":
                orderNameGroupTwo = name.groupTwo.map((item) => {
                    return { name: item.name,
                        className: item.className
                    }
                })

                newListTwoOrder = orderNameGroupTwo.sort((a, b) => a.localeCompare(b, 'pt-br'));
                return this.setState({ orderGroup: "two", newListTwo: newListTwoOrder, group: [] })
            case "three":
                orderNameGroupThree = name.groupThree.map((item) => {
                    return { name: item.name,
                        className: item.className
                    }
                })

                newListThreeOrder = orderNameGroupThree.sort((a, b) => a.localeCompare(b, 'pt-br'));
                return this.setState({ orderGroup: "three", newListThree: newListThreeOrder, group: [] })

            default:
                return alert('e ai?')
        }

    }

    orderColor = () =>{

    }


    // randomList = () => {

    //     const { name, listTest } = this.state;

    //     switch (this.state.newRandomList) {
    //         case "one":
    //             let testeArray = name.groupOne.map((item) => {
    //                 return item.name
    //             })
                
    //             this.setState({ listTest: testeArray })
                
    //             let currentIndex = listTest.length;
    //             let randomIndex;
    //             let temporaryValue;
               
                
    //             while (0 !== currentIndex) {
    //                 randomIndex = Math.floor(Math.random() * currentIndex);
    //                 currentIndex -= 1;
    //                 temporaryValue = listTest[currentIndex];
    //                 listTest[currentIndex] = listTest[randomIndex];
    //                 listTest[randomIndex] = temporaryValue;
    //             }
    //             return this.randomList(listTest)
                
            
                
    //             case "two":
    //             return alert('random- two')
    //         default:
    //             return alert('erro')
    //         }
    // }

    
    // RGBToHSL = (r, g, b)=>{
    //     r /= 255;
    //     g /= 255;
    //     b /= 255;
    //     // return console.log(r, g, b)

    //     let min = Math.min(r, g, b),
    //     max = Math.max(r, g, b),
    //     delta = max - min,
    //     h = 0,
    //     s = 0,
    //     l = 0;

    //     if(delta === 0){
    //         h = 0;
    //     }else if(max === r){
    //         h = ((g - b) / delta) % 6;
    //     }else if(max === g){
    //         h = (b - r) / delta + 2;
    //     }else{
    //         h = (r - g) / delta + 4;
    //     }

    //     h = Math.round(h * 60);
    //     if(h < 0){
    //         h += 360;
    //     }

    //     l = (max + min) / 2;

    //     s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    //     s = +(s * 100).toFixed(1);
    //     l = +(l * 100).toFixed(1);

    //     return [h, s, l];
    // }
    
    // orderColor = () =>{
       
    // }




    render() {

        const { name, newListOne, newListTwo, newListThree, listTest } = this.state;
        console.log(listTest)

        

        if (name.groupOne === undefined) return <div></div>

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
                                        <li className={item.className}>{item.name}</li>
                                    </ul>
                                ))}
                            </>
                        )}

                        {this.state.orderGroup === "one" && (
                            <>
                                {newListOne.map(item => (
                                    <ul>
                                        <li className={item.className}>{item}</li>
                                    </ul>
                                ))}
                            </>
                        )}

                        
                        {this.state.group === "2" && (
                            <>
                                {name.groupTwo.map(item => (
                                    <ul>
                                        <li className={item.className}>{item.name}</li>
                                    </ul>
                                ))}
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
                            {name.groupThree.map(item => (
                                <ul>
                                    <li className={item.className}>{item.name}</li>
                                </ul>
                            ))}
                        </>
                        )}

                        {this.state.orderGroup === "three" && (
                            <>
                                {newListThree.map(item => (
                                    <ul>
                                        <li className={item.className}>{item}</li>
                                    </ul>
                                ))}
                            </>
                        )}
                    </div>

                    <div className="btnOrderTypes__container">
                        <div className="btnOrderTypes__nameColor">
                            <h6>ORDENAR POR:</h6>
                            <ButtonOrder className="btnOrderTypes_name" onClick={this.order} textButton="Nome"/>
                            <ButtonOrder className="btnOrderTypes_color" onClick={this.orderColor} textButton="Cor"/>
                        </div>
                        <div>
                            <ButtonOrder className="btnOrderTypes_random" onClick={this.randomList} textButton="Embaralhar"/>
                        </div>

                    </div>
                </div>
            </section>
        )
    }

}
export default Home;