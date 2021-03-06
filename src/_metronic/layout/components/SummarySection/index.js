import React, { useMemo } from "react";
import { Grid, Typography, CircularProgress } from "@material-ui/core";
import CustomCard from "../CustomCard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import { useStyles } from "./style";

const SummarySection = ({ homeDetails }) => {
  const classes = useStyles();
  console.log(homeDetails.data);
  const CARDS_DATA = useMemo(
    () => [
      {
        title: "عدد الطلبات الكلي",
        value: homeDetails.data?.totalOrdersCount,
        icon: LocalAtmIcon,
        className: classes.fourthCard
      },
      {
        title: "مجموع المبيعات الكلية",
        value: homeDetails.data?.totalOrdersPrice,
        icon: ShoppingCartIcon,
        className: classes.secondCard
      },
      {
        title: "عدد الطلبات اليومي",
        value: homeDetails.data?.todayOrders
          ? homeDetails.data.todayOrders.length
          : null,
        icon: AttachMoneyIcon,
        className: classes.thirdCard
      },
      {
        title: " مجموع المبيعات اليومي",
        value: homeDetails.data?.todayOrdersPrice,
        icon: AttachMoneyIcon,
        className: classes.thirdCard
      },
      {
        title: "عدد المستخدمين النشيطين",
        value: homeDetails.data?.activeUsersCount,
        icon: AttachMoneyIcon,
        className: classes.thirdCard
      },
      {
        title: "عدد المستخدمين غير النشيطين",
        value: homeDetails.data?.inactiveUsersCount,
        icon: LocalAtmIcon,
        className: classes.fourthCard
      }
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [homeDetails]
  );

  const renderCardValue = value =>
    value || value === 0 ? value : <CircularProgress size={30} />;

  return (
    <>
      <Typography variant="h5" gutterBottom>
        احصائيات المبيعات
      </Typography>
      <Grid
        container
        justify="center"
        spacing={3}
        className={classes.summarySectionContainer}
      >
        {CARDS_DATA.map(card => (
          <Grid key={card.title} item xs={12} sm={6} lg={3}>
            <CustomCard
              title={card.title}
              value={renderCardValue(card.value)}
              styleClass={card.className}
              icon={card.icon}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SummarySection;
