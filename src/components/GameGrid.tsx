import React, { useEffect, useState } from "react";
import { Button, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";

interface Props {
  selectedGenre: Genre | null
}

const GameGrid = ({ selectedGenre }: Props) => {
  const [page, setPage] = useState(0)
  const [endpoint, setEndpoint] = useState('/games')
  const { data: games, error, isLoading, count } = useGames(selectedGenre, endpoint);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  const allPages = Math.ceil(count / games.length)

  useEffect(() => {
    page > 0 ? setEndpoint('/games?page=' + page) : setEndpoint('/games')
  }, [page])

  const setPrevPage = () => {
    setPage(oldPage => oldPage === 2 ? 0 : oldPage - 1)
  }

  const setNextPage = () => {
    setPage(oldPage => oldPage === 0 ? 2 : oldPage + 1)
  }

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} p='10px' spacing={3}>
        {isLoading && skeletons.map(skeleton =>
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>)}
        {games.map(game =>
          <GameCardContainer key={game.id} >
            <GameCard game={game} />
          </GameCardContainer>
        )}
      </SimpleGrid>
      <HStack justifyContent={"space-evenly"}>
        <Button isDisabled={page === 0 ? true : false} onClick={setPrevPage}>Prev</Button>
        <Text>{page === 0 ? 1 : page} of {allPages}</Text>
        <Button disabled={false} onClick={setNextPage}>Next</Button>
      </HStack>
    </>
  )
};

export default GameGrid;
