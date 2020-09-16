import React from 'react'
import classes from "./AllInfo.module.css"

function AllInfo(props) {
    return (
        <div className={classes.InfoMainContainer}>
            <div className={classes.PicContainer} >
                <h3 className={classes.ChangeAvatar}>Change Avatar</h3>
                <div className={classes.ImageContainer}>
                    <img className={classes.Image} src={props.allData.profilePic ? props.allData.profilePic : "https://templatemo.com/templates/templatemo_524_product_admin/img/avatar.png"} alt="profile-Picture" />
                </div>
                <div className={classes.UploadButton}>UPLOAD NEW PHOTO</div>

            </div>
            <div className={classes.PersonalDetails}>
                <h3 className={classes.AccountSettings}>Account Settings</h3>
                <div className={classes.AllInfoContainer}>

                    <div className={classes.SingleInfoRow}>
                        <div className={classes.PersonalInfoData}>
                            <h4 className={classes.InfoTitle}>Account Name</h4>
                            <input type="text" className={classes.InfoData} value={props.allData.name} />
                        </div>

                        <div className={classes.PersonalInfoData}>
                            <h4 className={classes.InfoTitle}>Account Email</h4>
                            <input type="email" className={classes.InfoData} value={props.allData.email} />
                        </div>
                    </div>

                    <div className={classes.SingleInfoRow}>
                        <div className={classes.PersonalInfoData}>
                            <h4 className={classes.InfoTitle}>Password</h4>
                            <input type="password" className={classes.InfoData} value={props.allData.password} />
                        </div>

                        <div className={classes.PersonalInfoData}>
                            <h4 className={classes.InfoTitle}>Re-type Password</h4>
                            <input type="password" className={classes.InfoData} value={props.allData.password} />
                        </div>
                    </div>

                    <div className={classes.SingleInfoRow}>
                        <div className={classes.PersonalInfoData}>
                            <h4 className={classes.InfoTitle}>Phone</h4>
                            <input type="text" className={[classes.InfoData, classes.PhoenInfo].join(" ")} value={props.allData.phone} />
                        </div>

                        <div className={classes.UpdateProfile}>
                            UPDATE YOUR PROFILE
                        </div>
                    </div>


                </div>
                <div className={classes.DeleteAccount}>
                    DELETE YOUR ACCOUNT
                </div>
            </div>
        </div>
    )
}

export default AllInfo
