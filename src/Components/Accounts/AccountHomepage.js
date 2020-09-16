import React from "react"
import classes from "./AccountHomepage.module.css"
import DropDown from "./DropDown/DropDown"
import AllInfo from "./AllInfo/AllInfo"

class AccountHomepage extends React.Component {
    state = {
        active: {},

    }
    componentDidMount() {
        console.log(this.props)
    }

    componentDidUpdate() {
    }

    changeReflector = (e) => {
        let newUser = e.target.value
        this.setState({ active: { ...this.props.accountData[newUser] } })
    }

    render() {
        return (
            <div className={classes.AccountPageContainer}>
                <div className={classes.EmptyVoid}></div>
                <div className={classes.AccountList}>
                    <div className={classes.ListAccounts}>List of Accounts</div>
                    <div className={classes.Accounts}>Accounts</div>
                    <div className={classes.DropDown}>
                        <select onChange={this.changeReflector} className={classes.SelectDropdown}>
                            <option className={classes.NoSelection}>Select account</option>
                            <option className={classes.Admin}>Admin</option>
                            <option className={classes.Editor}>Editor</option>
                            <option className={classes.Merchant}>Merchant</option>
                            <option className={classes.Customer}>Customer</option>
                        </select>
                    </div>

                </div>
                {/* <DropDown /> */}
                <AllInfo allData={this.state.active} />

            </div>
        )
    }
}

export default AccountHomepage
