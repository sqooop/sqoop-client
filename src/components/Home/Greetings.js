import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GreetingBlock = styled.div`
  display: flex;
  margin: 20px 90px;
  justify-content: space-between;
  font-size: 48px;
  .greeting {
    font-weight: 700;
  }
`;

const Greetings = ({ username }) => {
  return (
    <>
      <GreetingBlock>
        <div className="greeting">
          {username}님,
          <br />
          안녕하세요!
        </div>
      </GreetingBlock>
    </>
  );
};

Greetings.defaultProps = {
  username: 'Sqoop',
};

Greetings.propTypes = {
  username: PropTypes.string,
};

export default Greetings;
