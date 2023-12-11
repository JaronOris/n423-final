import Link from "next/link";
import React from "react"
import { Menu, Segment, Input, Button } from "semantic-ui-react";

export default function App({ Component, pageProps }) {
  const [pokemonSearch, setPokemonSearch] = React.useState("");

  function updateSearch(e, { value }) {
    setPokemonSearch(value);
  }

    return (
      <>
        <Segment inverted>
          <Menu inverted>
            <Menu.Item 
              name="Home" 
              as={Link} 
              href="/" 
            />
            <Menu.Item 
              name="Team Builder"
              as={Link}
              href="/teamBuild"
            />
            <Menu.Item>
              <Input 
                name="pokemonSearch"
                onChange={updateSearch}
                value={pokemonSearch}
              />
              <Button as={Link} href={`/pokemon/${pokemonSearch}`}>
                Search
              </Button>
            </Menu.Item>
          </Menu>
        </Segment>
        <Component {...pageProps} />
      </>
    )
}
