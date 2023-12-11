import Link from "next/link";
import React from "react"
import { Menu, Segment } from "semantic-ui-react";

export default function App({ Component, pageProps }) {

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
              name="Find Pokemon"
              as={Link}
              href="/pokeFind"
            />
            <Menu.Item 
              name="Team Builder"
              as={Link}
              href="/teamBuild"
            />
          </Menu>
        </Segment>
        <Component {...pageProps} />
      </>
    )
}
