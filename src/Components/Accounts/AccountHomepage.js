import React from "react"
import classes from "./AccountHomepage.module.css"
import DropDown from "./DropDown/DropDown"
import AllInfo from "./AllInfo/AllInfo"

class AccountHomepage extends React.Component {
    state = {

    }

    render() {
        return (
            <div className={classes.AccountPageContainer}>
                <div className={classes.EmptyVoid}></div>
                <DropDown />
                <AllInfo />

            </div>
        )
    }
}

export default AccountHomepage
