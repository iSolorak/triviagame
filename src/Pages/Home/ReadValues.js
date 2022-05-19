import React from "react";
import styles from "./ReadValues.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
class ValueScan extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employee: [] };
    this.headers = [
      { key: "username", label: "UserName" },
      { key: "score", label: "Score" },
    ];
    this.state = { checkedBoxes: [] };
    this.deleteEmployee = this.deleteEmployees.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }

  deleteEmployees = (event) => {
    event.preventDefault();
    if (window.confirm("Are you sure, want to delete the selected employee?")) {
      alert(this.state.checkedBoxes + " Succesfully Deleted");
    }
  };

  toggleCheckbox = (e, item) => {
    if (e.target.checked) {
      let arr = this.state.checkedBoxes;
      arr.push(item.id);

      this.setState = { checkedBoxes: arr };
    } else {
      let items = this.state.checkedBoxes.splice(
        this.state.checkedBoxes.indexOf(item.id),
        1
      );

      this.setState = {
        checkedBoxes: items,
      };
    }
    console.log(this.state.checkedBoxes);
  };

  componentDidMount() {
    fetch("http://localhost/demo/mysql/login_read.php/")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result) => {
        // Work with JSON data here
        console.log(result);
        this.setState({
          employee_rs: result,
        });
      })
      .catch((err) => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });
  }

  render() {
    const employeeFound =
      this.state.employee_rs && this.state.employee_rs.length;
    if (employeeFound) {
      return (
        <div className={styles.container}>
          <span style={{ fontSize: 30 }}>Leaderboard</span>
          {/* <h1>User High Scores</h1> */}
          <div id="msg"></div>

          <table class="table table-striped table-dark">
            <thead>
              <tr>
                {this.headers.map(function (h) {
                  return <th key={h.key}>{h.label}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {this.state.employee_rs.map(
                function (item, index) {
                  return (
                    <tr key={index}>
                      <td>{item.username}</td>
                      <td>{item.score}</td>
                    </tr>
                  );
                }.bind(this)
              )}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <div id="container">No product found</div>;
    }
  }
}
export default ValueScan;
