import { ResponsiveLine } from '@nivo/line';
import { Alert, Button, Col, Row, Select, Space } from 'antd';
import './graphic.css';

const LineChart = ({ data }) => {
  const formattedData = data.map(item => ({
    x: item.block_time,
    y: (item.eth_price * item.profit).toFixed(2)
  }));

  const options = [
    {
      label: 'Arctic Bastion',
      value: 'Arctic Bastion',
      desc: 'Arctic Bastion'
    },
    {
      label: 'The T Resolver',
      value: 'The T Resolver',
      desc:  'The T Resolver'
    },
    {
      label: 'Seawise',
      value: 'Seawise',
      desc:  'Seawise'
    }
  ];


  return(
        <div className="main">
            <div className="container">
                <div className="main-block">
                    <div className='main-input-blocks'>
                      <Row gutter={1}>
                          <Col span={9}>
                          <Select
                            mode="multiple"
                            style={{
                              width: 400,
                            }}
                            placeholder="select one country"
                            defaultValue={['Arctic Bastion', 'The T Resolver', 'Seawise']}
                            options={options}
                            optionRender={(option) => (
                              <Space>
                                <span role="img" aria-label={option.data.label}>
                                  {option.data.desc}
                                </span>
                              </Space>
                            )}
                          />
                          </Col>
                          <Col span={9}>
                          <Select
                                defaultValue="Value"
                                style={{
                                  width: 400,
                                  textAlign: 'center'
                                }}
                                options={[
                                  {
                                    value: 'Resolvers 2',
                                    label: 'Resolvers 2',
                                  }
                                ]}
                              />
                          </Col>
                      </Row>
                      <Row gutter={1} style={{ marginTop: '26px' }}>
                          <Col span={9}>
                          <Select
                                defaultValue="Resolvers"
                                style={{
                                  width: 400,
                                  textAlign: 'center'
                                }}
                                options={[
                                  {
                                    value: 'Resolvers 3',
                                    label: 'Resolvers 3',
                                  }
                                ]}
                              />
                          </Col>
                          <Col span={9}>
                          <Select
                                defaultValue="Value"
                                style={{
                                  width: 400,
                                  textAlign: 'center'
                                }}
                                options={[
                                  {
                                    value: 'Resolvers 4',
                                    label: 'Resolvers 4',
                                  }
                                ]}
                              />
                          </Col>
                      </Row>
                    </div>

                    <div className='main-graphic-buttons'>
                      <button className='button-main-lapse-time'>24h</button>
                      <button className='button-main-lapse-time'>2d</button>
                      <button className='button-main-lapse-time'>3d</button>
                      <button className='button-main-lapse-time'>7d</button>
                      <button className='button-main-lapse-time'>14d</button>
                      <button className='button-main-lapse-time'>30d</button>
                    </div>

                    <Alert message="last update 56 minutes ago" banner className='alert-style' />
                    
                    <Button className='btn-start' type="primary">start</Button>

                    <div style={{height: '680px', marginTop: '45px'}}>
                    <ResponsiveLine
                      data={[{ id: 'profit', data: formattedData }]}
                      margin={{ top: 50, right: 90, bottom: 50, left: 60 }}
                      xScale={{ type: 'point' }}
                      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                      axisTop={null}
                      axisRight={null}
                      axisBottom={{
                        orient: 'bottom',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: -45,
                        legendOffset: 36,
                        legendPosition: 'middle'
                      }}
                      axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Profit',
                        legendOffset: -40,
                        legendPosition: 'middle'
                      }}
                      colors={{ scheme: 'category10' }}
                      pointSize={10}
                      pointColor={{ theme: 'background' }}
                      pointBorderWidth={2}
                      pointBorderColor={{ from: 'serieColor' }}
                      pointLabelYOffset={-12}
                      useMesh={true}
                      legends={[
                        {
                          anchor: 'bottom-right',
                          direction: 'column',
                          justify: false,
                          translateX: 100,
                          translateY: 0,
                          itemsSpacing: 0,
                          itemDirection: 'left-to-right',
                          itemWidth: 80,
                          itemHeight: 20,
                          itemOpacity: 0.75,
                          symbolSize: 12,
                          symbolShape: 'circle',
                          symbolBorderColor: 'rgba(0, 0, 0, .5)',
                          effects: [
                            {
                              on: 'hover',
                              style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                              }
                            }
                          ]
                        }
                      ]}
                    />
                    </div>
                </div> 
            </div>
        </div>
    );
};
export default LineChart;