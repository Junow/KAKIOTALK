import React from 'react';
import RoomCard from 'components/RoomCard';
import faker from 'faker';
import styled from 'styled-components';

export default {
  title: 'Component/RoomCard',
  component: RoomCard,
};

export const Default = () => {
  const userList = [
    faker.helpers.userCard().name,
    faker.helpers.userCard().name,
    faker.helpers.userCard().name,
  ];
  const lastMessage = faker.lorem.paragraph();
  const lastModified = Date.now();
  const numOfNewMessage = Math.round(Math.random() * 100);
  const Wrapper = styled.div`
    width: 25rem;
  `;
  return (
    <Wrapper>
      <RoomCard
        userList={userList}
        lastMessage={lastMessage}
        lastModified={lastModified}
        numOfNewMessage={numOfNewMessage}
        />
    </Wrapper>
  );
};
