import React from "react"
import classes from "./DropDown.module.css"


export default function DropDown() {
    return (
        <div className={classes.AccountList}>
            <div className={classes.ListAccounts}>List of Accounts</div>
            <div className={classes.Accounts}>Accounts</div>
            <div className={classes.DropDown}>
                <select className={classes.SelectDropdown}>
                    <option className={classes.NoSelection}>Select account</option>
                    <option className={classes.Admin}>Admin</option>
                    <option className={classes.Editor}>Editor</option>
                    <option className={classes.Merchant}>Merchant</option>
                    <option className={classes.Customer}>Customer</option>
                </select>
            </div>

        </div>
    )
}
