import { Button, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatforms'

interface Props {
    onSelectPlatform: (platform: Platform) => void
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
    const { data: platforms, error } = usePlatforms("/platforms/lists/parents")

    if (error) return null
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Platofrms</MenuButton>
            <MenuList>
                {platforms.map(platform => <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector