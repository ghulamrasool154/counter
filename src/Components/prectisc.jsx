import React, { Component } from 'react'



class Counter extends Component {

    
    
    state ={
        count : 0,
        // names : [45,0]
        // names : ['name ', 'name2', 'name3']
        //  names : ["Liam","Noah","Oliver","Elijah","William","James","Benjamin","Lucas","Henry","Alexander","Mason","Michael","Ethan","Daniel","Jacob","Logan","Jackson","Levi","Sebastian","Mateo","Jack","Owen","Theodore","Aiden","Samuel","Joseph","John","David","Wyatt","Matthew","Luke","Asher","Carter","Julian","Grayson","Leo","Jayden","Gabriel","Isaac","Lincoln","Anthony","Hudson","Dylan","Ezra","Thomas","Charles","Christopher","Jaxon","Maverick","Josiah","Isaiah","Andrew","Elias","Joshua","Nathan","Caleb","Ryan","Adrian","Miles","Eli"]
        // img : 'https://picsum.photos/200'
    }
    // countstyles = {
    //     fontSize : 20,
    //     fontWeight : "Bold",
    //     backgroundColor : "red"
    // }
    // buttonStyles = {
    //     backgroundColor : 'red',
    //     color : "white"
    // }
    // conditionFuc(){
    //     if(this.state.names.length === 0) return <h1>No name please update</h1>;
    //     return  <ul> {this.state.names.map((nme, key) => <li key={key}>{nme}</li>)}   </ul>; 
    // }
   
    // constructor (){
    //     super();
    //     this.handlEvents = this.handlEvents.bind(this);
    // }
    
    // handlEvents (){
    //     console.log(this)
    // }


        handlEvents = product =>{
                // console.log(this.state.count ++)
                console.log(product);
                this.setState({ count : this.state.count + 1})
        }

        // doHanlde = ()=>{
        //     this.handlEvents({ product_id : 1});
        // }

    render() { 
            let classes_changing = "badge  m-2 bg-";
            classes_changing += this.state.count === 0 ? "warning" : "primary";
        return <div> 

            <button  className='btn  bg-secondary' onClick={ () =>{
                this.handlEvents({ product_id : 1});
            }} >Incremenet</button>  
            <span className={classes_changing}> {this.increment()} </span>


                    {/* {(this.state.names.length === 0 && <h1 className='head'>Please Enter Your Name</h1>) } 
            {/* <span className='m-3'>{this.state.count}</span> */}
                        {/* {this.conditionFuc()} */} 
                    {/* <span className={this.serclass()}> {this.increment()} </span>
                    <button  className='btn  bg-secondary'>Incremenet</button>
                    <ul>      {this.state.names.map((nme, key) => <li key={key}>{nme}</li>)}    </ul> */}
                    {/* <img src={this.state.img} alt="" /> */}
                    {/* <img src="https://picsum.photos/200" alt="" /> */}
                    {/* <span style={{padding: '30px'}}> {this.increment()} </span> */}
                    {/* <span style={ this.countstyles } className='badge bg-primary m-2'> {this.increment()} </span>
                    <button style={this.buttonStyles} className='btn  bg-secondary'>Incremenet</button>  */}
            </div>;
    }
    // this is callss mehtod  
    // serclass() {
    //     let classes_changing = "badge  m-2 bg-";
    //     classes_changing += this.state.count === 0 ? "warning" : "primary";
    //     return classes_changing;
    // }
     increment(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    //     // const count = this.state.count;
    //     // return count === 0 ? "zero " : count;
    //     // return this.state.count === 0 ?" Zaro": this.state.count;
    }
}
export default Counter ;