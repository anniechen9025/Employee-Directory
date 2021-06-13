import React, { Component } from "react";
import Table from "../components/Table"
import Search from "../components/SearchForm"
import API from "../utils/API";

class Directory extends Component {
    state = {
        image: "",
        Employees: [],
        FilterEmployees: [],
        result: {},
    };

    // When the component mounts, load the next dog to be displayed
    componentDidMount() {
        this.getAllEmployees();
    }

    getAllEmployees = () => {
        API.getAllEmployees()
            .then(res =>
                this.setState({
                    Employees: res.data.results,
                    FilterEmployees: res.data.results,
                })
            )
            .catch(err => console.log(err));
    };

    getFilterEmployees = (event) => {
        const filterValue = event.target.value
        const filtered = this.state.Employees.filter(employee =>{
            let empValues = Object.values(employee).join('').toLowerCase()
            return empValues.indexOf(filterValue.toLowerCase()) !== -1
        })
        this.setState({FilterEmployees:filtered})
    }

    sortEmployees = () => {
        const sorted = this.state.FilterEmployees.sort((a,b)=>{
            if(a.name.first < b.name.first){
                return -1
            }else if(a.name.first > b.name.first){
                return 1
            }
            else{
                return 0
            }
        })
        const sortedReverse = sorted.reverse()
    }

    render() {
        return (
            <div>
                {/* {result} */}
                <Search getFilterEmployees = {this.getFilterEmployees}/>
                <Table Employees = {this.state.FilterEmployees}/>
            </div>
        );
    }
}

export default Directory;
