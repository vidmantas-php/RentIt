import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SettingsIcon from "@material-ui/icons/Settings";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };

  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Your items" {...a11yProps(0)} />
          <Tab label="Your rents" {...a11yProps(1)} />
          <Tab label="Dashboard" {...a11yProps(2)} />
          <Tab label="Watchlist" {...a11yProps(3)} />
          <Tab label="Notifications" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div>
          <div className="row w-100">
            <div className="col mb-3 col-12 text-center">
              <div className="row">
                <div className="col-md-6">
                  {/* <Pagination
                                total="10"
                                itemsPerPage="5"
                                currentPage="1"
                                onPageChange={page => setCurrentPage(page)}
                            /> */}
                </div>
              </div>

              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="row">{/* {comment.id} */}</th>
                    <td><strong>Title</strong></td>
                    <td><strong>Owner</strong></td>
                    <td><strong>Dates used</strong></td>
                    <td><strong>Amount paid</strong></td>
                    <td><strong>Agreement</strong></td>
                    <td><strong>Item status</strong></td>
                    <td><strong>Action</strong></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{/* {comment.id} */}</th>
                    <td>Camera</td>
                    <td>Bill Gates</td>
                    <td>2020.10.15 - 2020.10.19 </td>
                    <td>$12</td>
                    <td><PictureAsPdfIcon /></td>
                    <td><div className="message__border__radius active__background__color">Active</div></td>
                    <td>
                      <SettingsIcon />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">{/* {comment.id} */}</th>
                    <td>Camera</td>
                    <td>Bill Gates</td>
                    <td>2020.10.15 - 2020.10.19 </td>
                    <td>$12</td>
                    <td><PictureAsPdfIcon /></td>
                    <td><div className="message__border__radius active__background__color">Active</div></td>
                    <td>
                      <SettingsIcon />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">{/* {comment.id} */}</th>
                    <td>Camera</td>
                    <td>Bill Gates</td>
                    <td>2020.10.15 - 2020.10.19 </td>
                    <td>$12</td>
                    <td><PictureAsPdfIcon /></td>
                    <td><div className="message__border__radius inactive__background__color">Inactive</div></td>
                    <td>
                      <SettingsIcon />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">{/* {comment.id} */}</th>
                    <td>Camera</td>
                    <td>Bill Gates</td>
                    <td>2020.10.15 - 2020.10.19 </td>
                    <td>$12</td>
                    <td><PictureAsPdfIcon /></td>
                    <td><div className="message__border__radius inactive__background__color">Inactive</div></td>
                    <td>
                      <SettingsIcon />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">{/* {comment.id} */}</th>
                    <td>Camera</td>
                    <td>Bill Gates</td>
                    <td>2020.10.15 - 2020.10.19 </td>
                    <td>$12</td>
                    <td><PictureAsPdfIcon /></td>
                    <td><div className="message__border__radius active__background__color">Active</div></td>
                    <td>
                      <SettingsIcon />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Your rents
      </TabPanel>
      <TabPanel value={value} index={2}>
        Dashbord
      </TabPanel>
      <TabPanel value={value} index={3}>
        Watchlist
      </TabPanel>
      <TabPanel value={value} index={4}>
        Notifications
      </TabPanel>
    </div>
  );
}
