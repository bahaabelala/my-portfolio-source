import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from './containers/Layout/Layout';
import Aux from './hoc/Auxiliary/Auxiliary';
import TopBar from './components/TopBar/TopBar';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import ContactMe from './components/ContactMe/ContactMe';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <Aux>
        <TopBar />
        <Layout>
          <AboutMe isActive={this.props.navSections.aboutMe}/>
          <Skills isActive={this.props.navSections.skills}/>
          <Work isActive={this.props.navSections.work}/>
          <ContactMe isActive={this.props.navSections.contactMe}/>
        </Layout>
        <Navigation />
      </Aux>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    navSections: state.navSections,
  };
}

export default connect(mapStateToProps)(App);
