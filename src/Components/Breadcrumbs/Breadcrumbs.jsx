import styles from "./Breadcrumbs.module.scss";

export const BasicBreadcrumbs = () => {
  return (
    <section className={styles.breadcrumbswrapper}>
      <p>Home</p>
    </section>
  );
};

// import * as React from "react";
// import Typography from "@mui/material/Typography";
// import Breadcrumbs from "@material-ui/core";
// import Link from "@mui/material/Link";
// import { withRouter } from "react-router-dom";

// export const BasicBreadcrumbs = (props) => {
//   return (
//     <Breadcrumbs aria-label="breadcrumb" className={styles.breadcrumbswrapper}>
//       <Link underline="hover" color="inherit">
//         MUI
//       </Link>
//       <Link
//         underline="hover"
//         color="inherit"
//         href="/material-ui/getting-started/installation/"
//       >
//         Core
//       </Link>
//       <Typography color="text.primary">Breadcrumbs</Typography>
//     </Breadcrumbs>
//   );
// };
