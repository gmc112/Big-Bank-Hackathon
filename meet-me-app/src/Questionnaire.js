import React from 'react';
import './Questionnaire.css';


const hiddenQStyle = {
    display: 'none',
};

const visibleQStyle = {
    display: 'block',
};

export default class Questionnaire extends React.Component {
   constructor(props) {
       super(props);
        this.state = {
        };

        this.result = {
            formality: ' ',
            meetingType: ' ',
            noOfPeople: ' ',
            foodType: ' ',
            time: ' ',
            establishment: ' ',
            cost: ' '
        };

        this.setFormality = this.setFormality.bind(this);
        this.setMeetingType = this.setMeetingType.bind(this);
        this.setNoOfPeople = this.setNoOfPeople.bind(this);
        this.setFoodType = this.setFoodType.bind(this);
        this.setTime = this.setTime.bind(this);
        this.setEstablishment = this.setEstablishment.bind(this);
        this.setCost = this.setCost.bind(this);
   }


   setFormality(event){
       let div = document.getElementById('formality');
       if (div.style.display !== 'none') {
           div.style.display = 'none';
           document.getElementById('meetingType').style.display = 'block';
       }
       else {
           div.style.display = 'block';
       }
       this.result.formality = event.target.value;
   }

    setMeetingType(event){
        let div = document.getElementById('meetingType');
        if (div.style.display !== 'none') {
            div.style.display = 'none';
            document.getElementById('noOfPeople').style.display = 'block';
        }
        else {
            div.style.display = 'block';
        }
        this.result.meetingType = event.target.value;
    }

    setNoOfPeople(event){
        let div = document.getElementById('noOfPeople');
        if (div.style.display !== 'none') {
            div.style.display = 'none';
            document.getElementById('foodType').style.display = 'block';
        }
        else {
            div.style.display = 'block';
        }
        this.result.noOfPeople = event.target.value;
    }

    setFoodType(event){
        let div = document.getElementById('foodType');
        if (div.style.display !== 'none') {
            div.style.display = 'none';
            document.getElementById('time').style.display = 'block';
        }
        else {
            div.style.display = 'block';
        }
        this.result.foodType = event.target.value;
    }

    setTime(event){
        let div = document.getElementById('time');
        if (div.style.display !== 'none') {
            div.style.display = 'none';
            document.getElementById('establishment').style.display = 'block';
        }
        else {
            div.style.display = 'block';
        }
        this.result.time = event.target.value;
    }

    setEstablishment(event){
        let div = document.getElementById('establishment');
        if (div.style.display !== 'none') {
            div.style.display = 'none';
            document.getElementById('cost').style.display = 'block';
        }
        else {
            div.style.display = 'block';
        }
        this.result.establishment = event.target.value;
    }

    setCost(event){
        let div = document.getElementById('cost');
        if (div.style.display !== 'none') {
            div.style.display = 'none';
        }
        else {
            div.style.display = 'block';
        }
        this.result.cost = event.target.value;
    }

    render(){
       return(
           <div id="questionnaire">
               <div id="formality" className="Question" style={visibleQStyle}>What is the formality of the event?<br></br>
                   <button value="formal" onClick={this.setFormality}>Formal</button>
                   <button value="informal"onClick={this.setFormality}>Informal</button>
               </div>

               <div id="meetingType" className="Question"style={hiddenQStyle}>What is the meeting type?<br></br>
                   <button value="one2one"onClick={this.setMeetingType}>One to One</button>
                   <button value="quickie"onClick={this.setMeetingType}>Quick TakeAway</button>
                   <button value="group"onClick={this.setMeetingType}>Group Meeting</button>
                   <button value="social"onClick={this.setMeetingType}>Group Social</button>
                   <button value="noPreference"onClick={this.setMeetingType}>No Preference</button>
               </div>

               <div id="noOfPeople" className="Question" style={hiddenQStyle}>What is the number of people?<br></br>
                   <button value="low"onClick={this.setNoOfPeople}>Less than 4</button>
                   <button value="med"onClick={this.setNoOfPeople}>Between 4 and 8</button>
                   <button value="high"onClick={this.setNoOfPeople}>More than 8</button>
               </div>

               <div id="foodType" className="Question" style={hiddenQStyle}>What kind of food?<br></br>
                   <button value="italian"onClick={this.setFoodType}>Italian</button>
                   <button value="greek"onClick={this.setFoodType}>Greek</button>
                   <button value="mexican"onClick={this.setFoodType}>Mexican</button>
                   <button value="noPreference"onClick={this.setFoodType}>No Preference</button>
               </div>

               <div id="time" className="Question" style={hiddenQStyle}>what time roughly?<br></br>
                   <button value="morning"onClick={this.setTime}>Morning</button>
                   <button value="noon"onClick={this.setTime}>Noon</button>
                   <button value="evening"onClick={this.setTime}>Evening</button>
                   <button value="noPreference"onClick={this.setTime}>No Preference</button>
               </div>

               <div id="establishment" className="Question" style={hiddenQStyle}>What type of establishment?<br></br>
                   <button value="cafe"onClick={this.setEstablishment}>Cafe</button>
                   <button value="restaurant"onClick={this.setEstablishment}>Restaurant</button>
                   <button value="pub"onClick={this.setEstablishment}>Pub</button>
               </div>

               <div id="cost" className="Question" style={hiddenQStyle}>Roughly how expensive?<br></br>
                   <button value="£"onClick={this.setCost}>£</button>
                   <button value="££"onClick={this.setCost}>££</button>
                   <button value="£££"onClick={this.setCost}>£££</button>
                   <button value="noPreference"onClick={this.setCost}>No Preference</button>
               </div>
           </div>
       );

    }

}


