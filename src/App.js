import React from 'react';
import Axios from "axios";
import classes from "./App.module.css"
import Topbar from "./Components/Topbar/Topbar"
import AccountHomepage from "./Components/Accounts/AccountHomepage"

class App extends React.Component {
  state = {
    accounPageData: {},
    dashboardData: {},
    productData: {}
  }
  apiUrl = "https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json"

  componentDidMount() {
    Axios.get(this.apiUrl).
      then((response) => {
        this.setState({ accounPageData: { ...response.data.accountsPage }, dashboardData: { ...response.data.dashboardPage }, productData: { ...response.data.productsPage } })
      })
      .catch((err) => {
        console.log("Server unavailable")
      })
  }
  render() {
    return (
      <div className="App">
        <Topbar />
        <AccountHomepage accountData={this.state.accounPageData} />



      </div>
    );

  }

}

export default App;
