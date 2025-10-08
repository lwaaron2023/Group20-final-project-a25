import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`

const Header = styled.header`
  text-align: center;
`

const MainTitle = styled.h1`
  font-size: 100px;
  font-weight: 900;
  color: #6ca1ed;
  text-align: center;
`

const Description = styled.p`
  font-size: 1.3rem;
  color: #c2c3c7;
  max-width: 800px;
  text-align: center;
`
const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
`

const StatItem = styled.div`
  text-align: center;
`

const StatNumber = styled.div`
  font-size: 40px;
  font-weight: 900;
  color: #6ca1ed;
`

const StatLabel = styled.div`
  font-size: 1rem;
  color: #c2c3c7;
`

const Homepage = ({gameDataStorage}) => {
    const numOfGame = gameDataStorage.length;
    const authorsSet = new Set(); // count how many authors
    
    for(const game of gameDataStorage) {
        authorsSet.add(game.author);
    }

    //calculating time
    const start = new Date("2025-09-28"); // September 1, 2025
    const now = new Date();

    const diffMs = now.getTime() - start.getTime(); // milliseconds difference
    const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365); // rough years

    return (
        <>
        <Container>
            <Header>
                <MainTitle>GAME da HUB</MainTitle>
                <Description>
                    Welcome to our collaborative gaming universe! This is where our talented team showcases all the incredible
                    games we've created together. From indie adventures to innovative experiences, discover the passion and
                    creativity that drives our development journey.
                </Description>
            </Header>

            <StatsContainer>
                <StatItem>
                    <StatNumber>{numOfGame}+</StatNumber>
                    <StatLabel>GAME CREATED</StatLabel>
                </StatItem>
                <StatItem>
                    <StatNumber>{authorsSet.size}</StatNumber>
                    <StatLabel>TEAM MEMBERS</StatLabel>
                </StatItem>
                <StatItem>
                    <StatNumber>{diffYears.toFixed(1)}</StatNumber>
                    <StatLabel>YEAR ACTIVE</StatLabel>
                </StatItem>
            </StatsContainer>
        </Container>
        </>
    )
}

export default Homepage