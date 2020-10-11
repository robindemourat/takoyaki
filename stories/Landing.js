import React from 'react';

import {
    Section,
    Columns,
    Column,
    Container,
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
    Level,
} from 'bloomer';

import ButtonContainer from './ButtonContainer';
import Generator from './Generator';

import Dropzone from 'react-dropzone';

import Brand from './Brand';
import {isCenter} from 'bloomer/lib/bulma';

const Landing = ({
}) => {
    return (
      <div >
        <Navbar>
          <Columns style={{width: '100%'}}>
            <Column className="left-pannel" isSize={4}>
              <Brand />
            </Column>
            <Column
              isSize={8}
              className="right-pannel"
              style={{
                    paddingRight: '10rem',
                    display: 'flex',
                    flexFlow: 'row nowrap',
                }}>
              <ul style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}><BreadcrumbItem className="breadcrumb-item">Choose a file</BreadcrumbItem></ul>
            </Column>
          </Columns>
        </Navbar>
        <Columns style={{minHeight: '100vh', width: '100vw'}}>
          <Column className="left-pannel" style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'flex-end'}} isSize={4}>
            <Level />
            <Column style={{
                            display: 'flex',
                            flexFlow: 'column nowrap',
                            paddingRight: 0,
                            paddingTop: '.5rem'
                        }}>
              
              <ButtonContainer><Button isColor="info">
                Paste
              </Button>
              </ButtonContainer>
              <ButtonContainer><Button>
                Upload a file
              </Button>
              </ButtonContainer>
              <ButtonContainer><Button>
                From URL
              </Button>
              </ButtonContainer>
              <ButtonContainer><Button>
                Samples
              </Button>
              </ButtonContainer>
            </Column>
          </Column>
          <Column className="right-pannel" isSize={8}>
            <Level style={{marginBottom: '2rem'}} />
            <Dropzone style={{width: '100%', border: '1px dashed black', minHeight: '75vh', position: 'relative', border: 'none'}}>
              {() => (
                <section className="drop-zone-content">
                    <Generator />
                    <span className="tech-info">Drag 'n' drop some files here, or click to select files</span>
                  </section>
  )}
            </Dropzone>
            <Content className="description">
                            Copy and paste your data from other applications or websites. You can use tabular (TSV? CSV, DSV) or JSON data.
                        </Content>
          </Column>
        </Columns>
        <Footer>
          <Columns>
                <Column isSize={8} isOffset={4}>
                Footer content
                </Column>
          </Columns>
                
        </Footer>
      </div>
    );
};

export default Landing;
