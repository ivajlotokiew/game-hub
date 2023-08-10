import React from 'react'
import useGenre from '../hooks/useGenre'
import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import getCroppedImgUrl from '../services/image-url'

const GenreList = () => {
    const { data: genre, error, isLoading } = useGenre()
    return (
        <List>
            {genre.map(genre =>
                <ListItem key={genre.id} py={1}>
                    <HStack>
                        <Image boxSize='32px' src={getCroppedImgUrl(genre.image_background)} borderRadius={8} />
                        <Text fontSize='lg'>{genre.name}</Text>
                    </HStack>
                </ListItem>
            )}
        </List>
    )
}

export default GenreList