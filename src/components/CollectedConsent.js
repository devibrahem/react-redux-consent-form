import React, { useState } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  tabelcell: {
    fontWeight: "Bold",
  },
}));

// const rows = [
//   {
//     id: 1,
//     name: "Ibrahenm",
//     email: "Ibrahem@gmail.com",
//     consentFor: ["I Don't know", "I Don't know", "I Don't know"],
//   },
//   {
//     id: 2,
//     name: "Bastawi",
//     email: "Bastawi@gmail.com",
//     consentFor: ["I Don't know", "I Don't know", "I Don't know"],
//   },
//   {
//     id: 3,
//     name: "Hassan",
//     email: "Hassan@gmail.com",
//     consentFor: ["I Don't know", "I Don't know", "I Don't know"],
//   },
//   {
//     id: 4,
//     name: "Hussein",
//     email: "Hussein@gmail.com",
//     consentFor: ["I Don't know", "I Don't know", "I Don't know"],
//   },
//   {
//     id: 5,
//     name: "Ahmed",
//     email: "Ahmed@gmail.com",
//     consentFor: ["I Don't know", "I Don't know", "I Don't know"],
//   },
//   {
//     id: 6,
//     name: "Mohammed",
//     email: "Mohammed@gmail.com",
//     consentFor: ["I Don't know", "I Don't know", "I Don't know"],
//   },
// ];

function CollectedConsent({ consents }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <Container maxWidth="md">
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow hover>
                  <TableCell className={classes.tabelcell}>Name</TableCell>
                  <TableCell className={classes.tabelcell}>Email</TableCell>
                  <TableCell className={classes.tabelcell}>
                    Consent Given for
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {consents.slice(page * 2, page * 2 + 2).map((consentItem) => {
                  return (
                    <TableRow hover key={consentItem.name}>
                      <TableCell>{consentItem.name}</TableCell>
                      <TableCell>{consentItem.email}</TableCell>
                      <TableCell>
                        {consentItem.consent.map((consent) => consent + ", ")}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[2]}
            component="div"
            count={consents.length}
            rowsPerPage={2}
            page={page}
            onChangePage={handleChangePage}
          />
        </Paper>
      </Container>
    </>
  );
}
const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(CollectedConsent);
