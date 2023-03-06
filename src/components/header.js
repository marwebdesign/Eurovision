/* eslint-disable array-callback-return */
import React from 'react';
import styled from 'styled-components';
import eurovisionwinners from './eurovisionwinners'

export const Header = () => {
  // const [winners, setWinners] = useState([''])
  console.log(eurovisionwinners[499].year)
  // fetch(eurovisionwinners)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data)
  //   })

  return (
    eurovisionwinners.map((contestant) => {
      if (contestant.winner === 'TRUE') {
        return (
          <Heading>
            {contestant.year}
            {contestant.artist_country}
          </Heading>
        )
      }
    })
  )
}

export const Heading = styled.h1`
color: red;
`