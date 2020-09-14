import React from "react"
import classes from "./Topbar.module.css"


export default function Topbar() {
    return (
        <header className={classes.TopBar}>
            <div className={classes.Description}>
                PRODUCT ADMIN
        </div>
            <div className={classes.MenuIcon}>
                <span className={classes.IconPack}><i className="fas fa-tachometer-alt"></i></span>
                <span className={classes.IconPack}><i class="fas fa-shopping-cart"></i></span>
                <span className={classes.IconPack}><i class="fas fa-user-alt"></i></span>
            </div>
            <div className={classes.LoginDetail}>
                Admin,Logout
        </div>
        </header>
    )
}
