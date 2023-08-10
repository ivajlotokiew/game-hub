import React from 'react'
import { Button, HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import getCroppedImgUrl from '../services/image-url'
import { Spinner } from '@chakra-ui/react'
import useGenre, { Genre } from '../hooks/useGenre';

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data: genre, error, isLoading } = useGenre()

    if (error) return null
    if (isLoading) return <Spinner />

    return (
        <List>
            {genre.map(genre =>
                <ListItem key={genre.id} py={1}>
                    <HStack>
                        <Image boxSize='32px' src={getCroppedImgUrl(genre.image_background)} borderRadius={8} />
                        <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} variant='link' fontSize='lg' onClick={() => onSelectGenre(genre)} >{genre.name}</Button>
                    </HStack>
                </ListItem>
            )}
        </List>
    )
}

export default GenreList