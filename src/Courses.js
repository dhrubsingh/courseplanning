import {data} from './data.js'
import MUIDataTable from "mui-datatables";




export default function Table()
{   
    const items = data.filter(person =>
        person.Days !== "TBA" && person.F22 === false
      );
    
 
    
    const customLabels = {
        body: {
            noMatch: "Sorry, no records found",
            toolTip: "Sort",
        },
        pagination: {
            next: "Next Page",
            previous: "Previous Page",
            rowsPerPage: "Rows per page:",
            displayRows: "of",
        },
        toolbar: {
            search: "Search",
            filterTable: "Filter Table",
        },
        filter: {
            all: "All",
            title: "FILTERS",
            reset: "RESET",
        },
        viewColumns: {
            title: "Show Columns",
            titleAria: "Show/Hide Table Columns",
        },
        selectedRows: {
            text: "row(s) selected",
            delete: "Delete",
            deleteAria: "Delete Selected Rows",
        },
    };

    const columns = [
        {
            name: "id",
            label: "Id",
            options: {
             filter: true,
             sort: true,
            }
           },
        {
         name: "name",
         label: "Name",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "profs",
         label: "Profs",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "subject",
         label: "Subject",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "acadorg",
         label: "Acadorg",
         options: {
          filter: true,
          sort: false,
         }
        },
       ];

    const rows = items.map(function(item) {
        return {id: item.Subject + " " + item.Number, 
        name: item.Name, profs: item.Profs, 
        subject: item.Subject, acadorg: item.Acadorg};
    });

    const options = {
        filterType: 'checkbox',
        fixedHeader: true,
        tableBodyHeight: '300px',
        search: false,
        download: false,
        print: false,
        viewColumns: false,
        filter: false,
        searchOpen: true,
        rowsPerPage: 200
      };
      
      
      return (
        <MUIDataTable
        title={"Course search"}
        data={rows}
        columns={columns}
        options={options}
        
      />
      );
      

}


export function List() {
    
    const items = data.filter(person =>
        person.Days !== "TBA" && person.F22 === false
      );
   
    
    const listItems = items.map(person =>
      <li>{person.Name}</li>
    );
    
    return <ul>{listItems}</ul>;
    
  }
  