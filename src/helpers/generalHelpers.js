import React from "react";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PhoneIcon from "@material-ui/icons/Phone";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import BlockIcon from "@material-ui/icons/Block";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

export const getUserFullName = user => {
  return `${user?.firstName || "😥"} ${user?.secondName || "😥"}`;
};

export const getFirstCharactersOfUserName = user => {
  return `${user?.firstName[0] || "😥"} ${user?.secondName[0] || "😥"}`;
};

export const getUserInfoList = userData => {
  return [
    {
      primary: "DOB",
      secondary: userData.dateBirth,
      avatar: <CalendarTodayIcon color="primary" />,
      id: 1
    },
    {
      primary: "Phone number",
      secondary: `${userData.phoneZipCode} - ${userData.phoneNumber}`,
      avatar: <PhoneIcon color="primary" />,
      id: 2
    },
    {
      primary: "Wallet",
      secondary: (
        <span style={userData.wallet < 0 ? { color: "red" } : {}}>
          {userData.wallet}
        </span>
      ),
      avatar: <AttachMoneyIcon color="primary" />,
      id: 3
    },
    {
      primary: userData.verified ? "Verified" : "UnVerified",
      avatar: (
        <VerifiedUserIcon
          style={userData.verified ? { color: "green" } : { color: "red" }}
        />
      ),
      id: 4
    },
    {
      primary: userData.suspend ? "Suspended" : "Not Suspended",
      avatar: (
        <BlockIcon
          color="primary"
          style={userData.suspend ? { color: "red" } : {}}
        />
      ),
      id: 5
    }
  ];
};
