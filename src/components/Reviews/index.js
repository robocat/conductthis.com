import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import hatImage from './hat.png';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
`;

const Link = styled.a`
  align-items: center;
  color: #fff54f;
  display: flex;
  font-family: "cubano";
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  padding: 10px 0;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Hat = styled.img`
  flex: 0 0 64px;
  height: 50px;
  margin-right: 15px;
  width: 64px
`;

const Review = ({ review }) => {
  return (
    <Link href={review.source.url} target="_blank">
      <Hat src={hatImage} />
      <span>“{review.text}” – {review.source.name}</span>
    </Link>
  );
};

const Reviews = ({ reviews }) => {
  return <Container>
    {reviews.map((review, i) => {
      return <Review key={i} review={review} />;
    })}
  </Container>
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    source: PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string,
    }).isRequired,
  })).isRequired,
};

export default Reviews;
