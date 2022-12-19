import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUsers } from "../../services/userService";
import "./userManage.scss";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
    };
  }

  async componentDidMount() {
    let response = await getAllUsers("All");
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.data,
      },() => {
        //callBack
        console.log(response.data)
      });
    }
  }

  render() {
    let arrUsers = this.state.arrUsers;
    return (
      <>
        <div className="user-container">
          <div className="text-center">Manage users</div>
          <div className="user-table mt-3 mx-1">
            <table>
              <tr>
                <th>Email</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Adress</th>
                <th>Actions</th>
              </tr>
              {arrUsers && arrUsers.map((item, index) => {
                  return (
                    <>
                      <tr>
                        <td>{item.email}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.address}</td>
                        <td>
                            <button type="button" className="btn btn-primary px-1 mx-1">Edit</button>
                            <button type="button" className="btn btn-danger px-1">Delete</button>
                        </td>
                      </tr>
                    </>
                  )})}
            </table>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
