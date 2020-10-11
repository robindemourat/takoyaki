import React, {Component} from 'react';

import {
    Section,
    Columns,
    Column,
    Container,
    Footer,
    Navbar,
    NavbarBrand,
    NavbarItem,
    Card,
    CardContent,
    CardFooter,
    CardFooterItem,

    Delete,

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
    LevelLeft,
    LevelRight,
    LevelItem,

    Title,
} from 'bloomer';

import Brand from './Brand';
import {isCenter} from 'bloomer/lib/bulma';

import ButtonContainer from './ButtonContainer';


const ClusterComplexGroup = () => {
    return (
      <Columns>
        <Column isSize={3}>
            <ButtonContainer>
          <Button isColor="primary">Harmonize</Button>
          </ButtonContainer>
          <ButtonContainer>
          <Button isColor="warning">Drop</Button>
          </ButtonContainer>
          <ButtonContainer>
          <Button>Explore</Button>
          </ButtonContainer>
        </Column>
        <Column isSize={2}>
          <div><Delete />10</div>
          <div><Delete />3</div>
          <div><Delete />1</div>
          <div>-></div>
        </Column>
        <Column isSize={7}>
          <div>ELSEVIER</div>
          <div>Elsevier</div>
          <div>Elesvier</div>
          <div>
            <input className="input" value="Elsevier" />
          </div>
        </Column>
      </Columns>
    );
};

class MethodCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        };
    }
    render() {
        const {name, selected} = this.props;
        const {collapsed} = this.state;
        return (
          <Card style={{
                background: selected ? '#7F7F7F' : undefined,
                color: selected ? 'white' : undefined
             }}>
              <CardContent style={{padding: 0, paddingBottom: 0}}>
                  <span  onClick={() => this.setState({collapsed: !collapsed})} style={{display: 'flex', flexFlow: 'row nowrap', justifyContent: 'stretch', alignItems: 'center', padding: '.5rem'}} isSize={6}>
                    <span style={{flex: 1, fontSize: '0.75rem'}}>{name} </span>
                    <span style={{flex: 1}}><span style={{fontFamily: 'monospace', fontSize: '0.75rem'}}>(233 comp.)</span></span>
                    <span style={{cursor: 'pointer'}}>+</span>
                    </span>
                  <Content style={{transition: 'max-height .5s ease', overflow: 'hidden', margin: collapsed ? 0 : undefined, maxHeight: collapsed ? 0 : 1000}} isSize={'small'}>
                  <p>
                        Computing clusters of strings whose fingerprints are the same. This is definitely the first recipe you want to try since it is really performant and usually produces very good results.
                    </p>
                </Content>
                  {/* <p className="tech-desc">
                      <code>233</code> computations
                    </p> */}
                </CardContent>
              {/* <CardFooter style={{transition: 'max-height .5s ease', overflow: 'hidden', maxHeight: this.state.collapsed ? 0 : 1000}}>
                  <CardFooterItem>
                    Edit
                </CardFooterItem>
                  <CardFooterItem>
                    Delete
                </CardFooterItem>
                </CardFooter> */}
            </Card>
        );
    }
}

class Cluster extends Component {
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

        const methodsNames = ['Fingerprint collision', 'Cologne collision', 'Metaphone collisiion', 'Levelshtein VPTree', 'Levenshtein Naive'];

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
                  <ul style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}><BreadcrumbItem className="breadcrumb-item">working on <strong>Article title</strong>, found <strong>n</strong> columns using the <strong>Fingerprint collision</strong> method</BreadcrumbItem></ul>
                </Column>
              </Columns>
            </Navbar>
            <Columns style={{minHeight: '100vh', width: '100vw'}}>
              <Column className="left-pannel" style={{display: 'flex', flexFlow: 'column nowrap', alignItems: 'flex-end', position: 'relative'}} isSize={4}>
                <Level />
                <div style={{display: 'flex', flexFlow: 'column nowrap', alignItems: 'flex-end', marginBottom: '2rem'}}>
                  <span style={{fontSize: '.75rem', paddingRight: '.5rem', marginBottom: '.5rem', fontWeight: 800}}>Order by</span>

                  <div className="buttons has-addons">
                      <Button isColor="info" ><span className="description">number</span></Button>
                      <Button ><span className="description">distinct values</span></Button>
                      <Button ><span className="description">affected rows</span></Button>
                    </div>
                </div>


                <Column style={{
                                    display: 'flex',
                                    flexFlow: 'column nowrap',
                                    alignItems: 'flex-end',
                                    textAlign: 'left'
                                }}>
                  <div style={{display: 'flex', flexFlow: 'column nowrap', alignItems: 'flex-end'}}>
                  <span style={{fontSize: '.75rem', marginBottom: '.5rem', fontWeight: 800}}>Cluster by</span>
                  <div>
                      {
                      methodsNames.map((name, index) => (
                        <MethodCard selected={index === 0} name={name} key={index} />
                      ))
                    }
                      <div>
                      <Button
                      isColor="primary"
                      style={{
                        marginTop: '1rem'
                    }} isFullWidth>
                        Add a custom recipe
                    </Button>
                    </div>

                    </div>

                    
                </div>
                

                </Column>

                <div style={{position: 'absolute', top: 'calc(100vh - 10rem)', right: '.5rem' }}>
                    <ButtonContainer>
                        <Button isColor="primary">
                                Recluster
                        </Button>
                    </ButtonContainer>
                    <ButtonContainer>
                        <Button isColor="primary">
                                Download
                        </Button>
                    </ButtonContainer>
                  </div>

              </Column>
              <Column className="right-pannel" isSize={8}>
                <Level style={{marginBottom: '2rem'}} />

                <Column >
                  <ClusterComplexGroup />
                  <ClusterComplexGroup />
                  <ClusterComplexGroup />
                  <ClusterComplexGroup />
                  <ClusterComplexGroup />
                  <ClusterComplexGroup />

                  
                </Column>

              </Column>
            </Columns>

            <Footer>
                        Footer
                    </Footer>
          </div>
            );
    }
}

export default Cluster;
