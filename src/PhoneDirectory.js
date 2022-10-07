import React,{Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';

export default class PhoneDirectory extends Component{
    constructor(){
        super();
        this.state={
            subscriberList:[{
                id:0,
                name: 'Virat',
                phone: 9999999999
            },
            {
                id: 1,
                name: 'Rohit',
                phone: 8888888888
            }]
        }
    }
    addSubscriberHandler = (newSubscriber)=>{
        let subscriberList = this.state.subscriberList;
        if(subscriberList.length>0){
            newSubscriber.id=subscriberList[subscriberList.length-1].id+1;
        }
        else newSubscriber.id=1;
        subscriberList.push(newSubscriber);
        this.setState({subscriberList:subscriberList});
        console.log(this.state.subscriberList);
    }
    
    render(){
        return(
            // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>
            <ShowSubscribers subscriberList={this.state.subscriberList}/>
        )
    }
}

 