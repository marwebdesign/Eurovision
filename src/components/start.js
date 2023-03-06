/* eslint-disable array-callback-return */
import React from 'react';
import styled from 'styled-components';
import eurovisionwinners from './eurovisionwinners'

export const Start = () => {
  return (
    eurovisionwinners.map((contestant) => {
      if (contestant.winner === 'TRUE') {
        return (
          <Content>
            {contestant.year}
            {contestant.artist_country}
          </Content>
        )
      }
    })
  )
}

export const Content = styled.p`
color: blue;
`