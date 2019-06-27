import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'


export default class Table extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };

        this.tableData =[];
        this.columns = [
            {
                Header: 'Name',
                accessor: 'name'
            },
            {
                Header: 'Dress Code',
                accessor: 'dress_code'
            },
            {
                Header: 'Good For',
                accessor: 'type_of_meeting'
            },
            {
                Header: 'Food Type',
                accessor: 'food_type'
            },
            {
                Header: 'Time Open',
                accessor: 'time_open'
            },
            {
                Header: 'Time Close',
                accessor: 'time_close'
            }
        ];
    }

    componentDidMount() {
        fetch("https://lpte2xkv6a.execute-api.eu-central-1.amazonaws.com/debug/backend")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        /*
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            {items.map(item =>(
                this.tableData.push(item.value)
            ))}
            return <ReactTable
                data={this.tableData}
                columns={this.columns}
            />
        }

         */

        this.tableData.push({
            name: "Panko",
            dress_code: "Informal",
            type_of_meeting: "Quick Takeaway",
            food_type: "Japanese",
            time_open: "10:30",
            time_close: "15:30"
        });

        return <ReactTable
            data={this.tableData}
            columns={this.columns}
        />
    }

}
