import { ResponsivePie } from '@nivo/pie';
import { Alert, Button, Col, Row, Select } from 'antd';
import './graphic.css';

const LineChart = ({ data }) => {

  const { Option } = Select;

  const resolverData = {};
  data.forEach(item => {
    const profit = item.profit * item.eth_price
    resolverData[item.resolver] = resolverData[item.resolver] ? resolverData[item.resolver] + profit : profit;
  });

  const resolverChartData = Object.keys(resolverData).map(resolver => ({
    id: resolver,
    label: resolver,
    value: resolverData[resolver].toFixed(2),
  }));

  const ourResolverData = data.filter(item => item.resolver);

  const valueCodeData = {};
  ourResolverData.forEach(item => {
    const profit = item.profit * item.eth_price;
    valueCodeData[item.value] = valueCodeData[item.value] ? valueCodeData[item.value] + profit : profit;
  });

  const valueCodeChartData = Object.keys(valueCodeData).map(value => ({
    id: value,
    value: valueCodeData[value].toFixed(2),
  })); 

  return(
        <div className="main">
            <div className="container">
                <div className="main-block">
                    <div className='main-input-blocks'>
                      <Row gutter={1}>
                          <Col span={9}>
                          <Select
                            mode="multiple"
                            style={{ width: 400 }}
                            placeholder="Select companies"
                          >
                            <Option value="Arctic Bastion">Arctic Bastion</Option>
                            <Option value="The T Resolver">The T Resolver</Option>
                            <Option value="Seawise">Seawise</Option>
                            <Option value="1inch Labs">1inch Labs</Option>
                          </Select>
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

                    <div style={{display:'flex', justifyContent: 'space-between', height: '400px', marginTop: '45px' }}>
                    
                    <ResponsivePie
                        data={valueCodeChartData}
                        keys={['value']}
                        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                        innerRadius={0.5}
                        padAngle={0.7}
                        cornerRadius={3}
                        colors={{ scheme: 'paired' }}
                        borderWidth={1}
                        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                        radialLabelsSkipAngle={10}
                        radialLabelsTextXOffset={6}
                        radialLabelsTextColor="#333333"
                        radialLabelsLinkOffset={0}
                        radialLabelsLinkDiagonalLength={16}
                        radialLabelsLinkHorizontalLength={24}
                        radialLabelsLinkStrokeWidth={1}
                        radialLabelsLinkColor={{ from: 'color' }}
                        sliceLabelsSkipAngle={10}
                        sliceLabelsTextColor="#333333"
                    />
            
                    <ResponsivePie
                          data={resolverChartData}
                          keys={['value']}
                          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                          innerRadius={0.5}
                          padAngle={0.7}
                          cornerRadius={3}
                          colors={{ scheme: 'paired' }}
                          borderWidth={1}
                          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                          radialLabelsSkipAngle={10}
                          radialLabelsTextXOffset={6}
                          radialLabelsTextColor="#333333"
                          radialLabelsLinkOffset={0}
                          radialLabelsLinkDiagonalLength={16}
                          radialLabelsLinkHorizontalLength={24}
                          radialLabelsLinkStrokeWidth={1}
                          radialLabelsLinkColor={{ from: 'color' }}
                          sliceLabelsSkipAngle={10}
                          sliceLabelsTextColor="#333333"
                      />
                    </div>
                </div> 
            </div>
        </div>
    );
};
export default LineChart;