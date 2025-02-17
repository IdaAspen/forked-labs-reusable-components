import React from 'react';
import styled from 'styled-components/macro';

export const Card = ({
  title,
  secondaryText,
  thumbnailUrl,
  coverImage,
  className,
  children,
}) => (
  <Container className={className}>
    {coverImage && <CoverImage src={coverImage} />}
    <Content>
      <TitleBar>
        {thumbnailUrl && <Thumbnail url={thumbnailUrl} />}
        <div>
          {title && <Title>{title}</Title>}
          {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
        </div>
      </TitleBar>
      {children && <ChildrenContent>{children}</ChildrenContent>}
    </Content>
  </Container>
);

const Container = styled.div`
  box-shadow: 0 1px 1px 0 rgb(66 66 66 / 8%), 0 1px 3px 1px rgb(66 66 66 / 16%);

  border-radius: 6px;
  background-color: #ffff;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const SecondaryText = styled.p`
  margin: 0;
  color: #6b6b6b;
`;

const Thumbnail = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  margin-right: 10px;
`;
const TitleBar = styled.div`
  display: flex;
  align-items: center;
`;

const CoverImage = styled.img`
  width: 100%;
  border-radius: 6px 6px 0 0;
`;

const Content = styled.div`
  padding: 20px;
`;
const ChildrenContent = styled.div`
  border-top: 1px solid #ccc;
  margin-top: 20px;
  padding-top: 10px;
`;
