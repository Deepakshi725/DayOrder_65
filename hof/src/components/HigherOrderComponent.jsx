import React, { Component } from 'react';


class HigherOrderComponent extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ]
        }
    }

    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    renderItemsByUserType = (userType) => {
        const filteredData = this.state.userData.filter(item => item.user_type === userType);
        const mapRows = filteredData.map(item => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    renderItemsStartingWithJ = () => {
        const filteredData = this.state.userData.filter(item => item.name.startsWith('J'));
        const mapRows = filteredData.map(item => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    renderItemsByAgeRange = (minAge, maxAge) => {
        const filteredData = this.state.userData.filter(item => item.age > minAge && item.age <= maxAge);
        const mapRows = filteredData.map(item => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                    <span>Age: {item.age}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    getTotalDesignerExperience = () => {
        const designerData = this.state.userData.filter(item => item.user_type === 'Designer');
        const totalExperience = designerData.reduce((acc, item) => acc + item.years, 0);
        return totalExperience;
    };

    render(){
        return (
           <React.Fragment>
                <h1>Higher Order Component</h1>                

                <div className="display-box">
                    <h3>Display all items</h3>
                    <ul>{this.renderItems()}</ul>
                </div>
                <div className="display-box">
                    <h3>Display based on user type</h3>
                    <ul>{this.renderItemsByUserType('Designer')}</ul>
                </div>
                <div className="display-box">
                    <h3>Filter all data with J</h3>
                    <ul>{this.renderItemsStartingWithJ()}</ul>
                </div>
                <div className="display-box">
                    <h3>Display all data based on age greater than 28 and age less than or equal to 50</h3>
                    <ul>{this.renderItemsByAgeRange(28, 50)}</ul>
                </div>

                <div className="display-box">
                    <h3>Find the total years of the designers</h3>
                    <p>{this.getTotalDesignerExperience()} years</p>
                </div>

            </React.Fragment>
        );
    }

}

export default HigherOrderComponent;