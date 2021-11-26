import React from 'react';
import styled from 'styled-components/macro';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ProfileImage } from './components/ProfileImage/ProfileImage';
// import { SearchBar } from './components/SearchBar/SearchBar';
import { SearchBarStyled } from './components/SearchBar/SearchBarStyled';
import { Card } from './components/Card/Card';

const ThinnerCard = styled(Card)`
  width: 400px;
`;

export const App = () => {
  return (
    <div>
      <Header title="Get ready for adventure!" backgroundColor="#282627" />
      {/* <SearchBar /> */}
      <SearchBarStyled />
      <ThinnerCard
        coverImage="https://www.placecage.com/g/500/300"
        thumbnailUrl="https://www.placecage.com/g/100/100"
        title="This is the title"
        secondaryText="Second title"
        children
      />
      <Card title="Only a title" secondaryText="Second title" />
      <Card>
        <h3>Hello from children!</h3>
      </Card>

      <ProfileImage
        image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
        textColor="#EBFF00"
        name="Grace Johnson"
      />

      {/* <Footer
        links={['About', 'Careers', 'Pricing', 'Feedback', 'Roadmap']}
        color="#282627"
      /> */}
    </div>
  );
};
