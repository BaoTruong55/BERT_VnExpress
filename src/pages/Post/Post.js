import React from 'react';
import './Post.scss';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { Button, AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core';
import { DonutChart } from '../Category/components/DonutChart';
import { useTheme } from '@material-ui/core/styles';
import { Nodata } from '../Nodata/Nodata';

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
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export function Post() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [search, setSearch] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleSearch = () => {
    setSearch(true);
  };

  return (
    <div>
      <h1 className="h1 title">Post</h1>
      <div className="row">
        <div className="col-4 d-flex inputGroup">
          <input
            className="inputSearch input-group-text text-left"
            placeholder="Post's link"
          />
          <Button
            onClick={handleSearch}
            variant="contained"
            className="btnSearch"
          >
            Search
          </Button>
        </div>
      </div>
      {search ? (
        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h2>Bản đồ Covid-19 toàn thế giới</h2>
            <p>
              Covid-19 xuất hiện ở hơn 210 quốc gia, vùng lãnh thổ, khiến gần
              5,3 triệu người nhiễm, hơn 339.000 người chết.
            </p>
            <AppBar className="mt-5" position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label="Positive" {...a11yProps(0)} />
                <Tab label="Negative" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel className="pd-0" value={value} index={0}>
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                    </tr>
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Việt Nam ngày càng tụt sâu trên bảng xếp hạng.</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>
                        Chẳng mấy chốc nữa sẽ dịch sẽ phủ khắp thế giới. Ghê
                        quá!
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>
                        phương Tây hiện đại, văn minh thì biết lâu rồi, giờ biết
                        thêm tính bảo thủ, cứng đầu nữa, vẫn còn kỳ thị người
                        đeo khẩu trang
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>
                        ngày nay chỉ còn Ấn Độ cạnh tranh ngôi vô địch với Mỹ mà
                        thôi, xét theo dân số vì China đã bị loại
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TabPanel>
            </SwipeableViews>
          </div>
          <div className="col-md-8 col-sm-12 d-flex flex-column align-items-center">
            <h6>
              Biểu đồ thể hiện tỷ lệ Positive và Negative ở trong bài báo.
            </h6>
            <div className="chart">
              <DonutChart data={[54, 31]} />
            </div>
          </div>
        </div>
      ) : (
        <Nodata />
      )}
    </div>
  );
}
