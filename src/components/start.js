/* eslint-disable array-callback-return */
import React from 'react';
import styled from 'styled-components';
import eurovisionwinners from './eurovisionwinners'

export const Start = () => {
  return (
    eurovisionwinners.map((contestant) => {
      if (contestant.winner === 'TRUE') {
        return (
          <Container style={{ backgroundImage: `url(${contestant.image_url})` }}>
            <Content>
              {contestant.year}
              {contestant.artist_country}
              {contestant.artist}
            </Content>
          </Container>
        )
      }
    })
  )
}

export const Content = styled.p`
color: blue;
`
const Container = styled.div`
padding: 10px;
background-repeat: no-repeat;
`