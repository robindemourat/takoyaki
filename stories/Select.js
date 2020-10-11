import React, {Component} from 'react';

import {
    Section,
    Columns,
    Column,
    Container,

    Card,
    CardContent,
    CardFooter,

    Footer,
    Navbar,
    NavbarBrand,
    NavbarItem,
    NavbarEnd,
    NavbarMenu,
    NavbarBurger,
    NavbarDropdown,
    NavbarStart,
    NavbarLink,
    NavbarDivider,
    Field,
    Control,
    Button,
    Content,
    BreadcrumbItem,
    Table,
    Buttons,
    Level,
} from 'bloomer';

import Brand from './Brand';
import {isCenter} from 'bloomer/lib/bulma';


const genClusterList = () => {
    const msg = [];

    for (let i = 0; i < 50; i ++) {
        msg.push(<div>the company of biologists 12</div>);
    }

    return msg.reduce((cur, next) => [...cur, next, <br />], []);
};

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableMode: true,
        };
    }

    render() {
        const {
            state: {
                tableMode = true,
            }
        } = this;
        const switchMode = () => {
            this.setState({
                tableMode: !tableMode
            });
        };

        return (
          <div >
            <Navbar>
              <Columns style={{width: '100%'}}>
                <Column isSize={4} className="left-pannel">
                  <Brand />
                </Column>
                <Column
                  isSize={8}
                  className="right-pannel"
                  style={{
                      display: 'flex',
                      flexFlow: 'row nowrap',
                  }}>
                  <ul 
                  style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                            <BreadcrumbItem className="breadcrumb-item">Select a dimension to work with</BreadcrumbItem>
                  </ul>
                </Column>
              </Columns>
            </Navbar>
            <Columns style={{minHeight: '100vh', width: '100vw'}}>
              <Column className="left-pannel" style={{display: 'flex', flexFlow: 'column nowrap', alignItems: 'flex-end'}} isSize={4}>
                <Level />
                <Column
                  style={{
                                    display: 'flex',
                                    flexFlow: 'column nowrap',
                                    paddingRight: 0,
                                    paddingTop: 0,
                                }}>
                  {/* <Button isColor="">
                    Choose another file
                  </Button> */}

                  {/* <Level style={{marginBottom: '2rem'}} /> */}
                  <div style={{display: 'flex', flexFlow: 'column nowrap', alignItems: 'flex-end'}}>
                  <span style={{fontSize: '.75rem', paddingRight: '.5rem', marginBottom: '.5rem', fontWeight: 800}}>View data as</span>
                    <Columns style={{padding: 0, margin: 0}}>
                      <div className="buttons has-addons">
                        <Button onClick={switchMode} isColor={tableMode ? 'info' : ''} >Table</Button>
                        <Button onClick={switchMode} isColor={!tableMode ? 'info' : ''}>Unique values</Button>
                      </div>
                    </Columns>
                  </div>


                </Column>

              </Column>
              <Column className="right-pannel" isSize={8}>
                <Level />

                {tableMode ?
                  <Table className={tableMode ? '' : 'separate-columns'} isStriped>
                    <thead>
                      <tr>
                        <td>
                        Publisher</td>
                        <td>
                        Journal title</td>
                        <td>
                        Article title</td>
                        <td>
                        Cost</td>
                      </tr>
                    </thead>
                    <tbody>
                      {tableMode ?
                                            [0, 10].reduce((res, current, index) => {
                                                if (index < 2) {
                                                    const values = [];
                                                    let counter = 0;
                                                    while (counter < 10) {
                                                        values.push(counter);
                                                        counter++;
                                                    }
                                                    return values;
                                                }
                                                return res;
                                            })
                                            .map(index => (
                                              <tr key={index}>
                                                <td>
                                                  The company of Biologists
                                                </td>
                                                <td>
                                                  The company of Biologists
                                                </td>
                                                <td>
                                                  The company of Biologists
                                                </td>
                                                <td>
                                                  The company of Biologists
                                                </td>
                                              </tr>
                                            ))
                                        :
                                            <tr>
                                              <td>
                                                {genClusterList()}
                                              </td>
                                              <td>
                                                {genClusterList()}
                                              </td>
                                              <td>
                                                {genClusterList()}
                                              </td>
                                              <td>
                                                {genClusterList()}
                                              </td>
                                            </tr>
                                }
                      <tr>
                        <td style={{padding: 0}}>

                          <Button isFullWidth className="is-bordered" isColor="primary">Cluster</Button>
                        </td>
                        <td style={{padding: 0}}>

                          <Button isFullWidth className="is-bordered" isColor="primary">Cluster</Button>
                        </td>
                        <td style={{padding: 0}}>

                          <Button isFullWidth className="is-bordered" isColor="primary">Cluster</Button>
                        </td>
                        <td style={{padding: 0}}>

                          <Button isFullWidth className="is-bordered" isColor="primary">Cluster</Button>
                        </td>


                      </tr>
                    </tbody>
                  </Table>

                :
                  <div
                    style={{
                    height: '50vh',
                    width: '100%',
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    overflow: 'hidden',
                    overflowX: 'auto',

                  }}>
                    {
                    [0, 10].reduce((res, current, index) => {
                      if (index < 2) {
                          const values = [];
                          let counter = 0;
                          while (counter < 10) {
                              values.push(counter);
                              counter++;
                          }
                          return values;
                      }
                      return res;
                  })
                  .map(index => (
                    <div key={index} style={{minWidth: '20vw', minHeight: '100%', paddingRight: '1rem'}}>
                      <Card style={{maxHeight: '100%', overflow: 'hidden', minHeight: '100%', }} key={index}>
                        <div
                          style={{
                            display: 'flex',
                            flexFlow: 'column nowrap',
                            alignItems: 'stretch',
                            justifyContent: 'stretch',
                            maxHeight: '100%',
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: '100%',
                            height: '100%',
                            overflow: 'hidden'
                          }}>
                          <div style={{flex: 1, position: 'relative'}}>
                            <Table
                              style={{
                              position: 'absolute',
                              left: 0,
                              top: 0,
                              width: '100%',
                              height: '100%',
                              display: 'flex',
                              flexFlow: 'column nowrap',
                              justiyContent: 'stretch',
                              alignItems: 'stretch'
                            }}>
                              <thead>
                                <tr>
                                <td>
                                  Publisher (299 values)
                                </td>
                                <td />
                              </tr>
                              </thead>
                              <tbody style={{overflow: 'auto', flex: 1}}>
                                {
                              [0, 50].reduce((res, current, index) => {
                                if (index < 2) {
                                    const values = [];
                                    let counter = 0;
                                    while (counter < 10) {
                                        values.push(counter);
                                        counter++;
                                    }
                                    return values;
                                }
                                return res;
                            })
                            .map(index2 => (
                              <tr
                                style={{
                                display: 'flex',
                                flexFlow: 'row nowrap',
                                justifyContent: 'stretch'
                              }} key={index2}>
                                <td style={{flex: 1}}>
                                  Coucou
                                </td>
                                <td>
                                  {index2}
                                </td>
                              </tr>
                            ))
                            }
                              </tbody>
                            </Table>
                          </div>
                          <Button isFullWidth className="is-bordered" isColor="primary">Cluster</Button>
                        </div>

                      </Card>
                    </div>
                  ))
                  }
                  </div>
                }

              </Column>
            </Columns>
            <Footer>
                        Footer
                    </Footer>
          </div>
            );
    }
}

export default Select;
