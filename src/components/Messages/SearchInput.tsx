import React from 'react'
import { Header, Input } from 'semantic-ui-react'

export const SearchInput = () => {
    return (
        <Header floated="right">
            <Input
            size="mini"
            icon="search"
            name="searchTerm"
            placeholder="Search Messages"
            >
            </Input>
        </Header>
    )
}

export default SearchInput;
