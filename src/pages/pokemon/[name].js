import React from "react";
import { Router, useRouter } from "next/router";
import {
  Loader,
  Image,
  Grid,
  Divider,
  Header,
  List,
  Popup,
} from "semantic-ui-react";
import Link from "next/link";

export default function PokemonName() {
  const [pokemonInfo, setPokemonInfo] = React.useState({
    loading: true,
    stats: [],
    abilities: [],
  });
  const router = useRouter();

  React.useEffect(function () {
    if (pokemonInfo.name !== router.query.name && router.query.name) {
      // console.log("Load in Pokemon info");
      fetch(`https://pokeapi.co/api/v2/pokemon/${router.query.name}`)
        .then((r) => r.json())
        .then((r) => {
          setPokemonInfo(r);
        })
        .catch((e) =>
          setPokemonInfo({
            loading: false,
            name: router.query.name,
            stats: [],
            abilities: [],
          })
        );
    }
  });

  const pokemonStats =
    pokemonInfo.stats.length === 0
      ? []
      : pokemonInfo.stats.map((stat) => {
          return (
            <Grid.Column key={stat.stat.name}>
              <Header as="h3">{stat.stat.name}</Header>
              <p>{stat.base_stat}</p>
            </Grid.Column>
          );
        });

  // ------------------------------------------------------------------------TO-DO----------------------------------
  // ----------------------------------------------------------Add on hover description of abilities----------------

  // const pokemonAbility =
  //   pokemonInfo.abilities.length === 0
  //     ? []
  //     : pokemonInfo.abilities.map((ability) => {
  //         return (
  //           <List key={ability.ability.name}>
  //             <Popup
  //               trigger={<List.Item>{ability.ability.name}</List.Item>}
  //               on="hover"
  //               content={`https://pokeapi.co/api/v2/ability/${id}`}
  //             />
  //           </List>
  //         );
  //       });

  //       console.log(pokemonInfo)

  return (
    <>
      <div>
        <div>
          <div>
            <h1>Pokemon Name: {router.query.name}</h1>
            <Loader
              active={
                pokemonInfo.loading || pokemonInfo.name !== router.query.name
              }
            />
            {pokemonInfo.id ? (
              <>
                <Grid divided="vertically">
                  <Grid.Row columns={3} centered>
                    <Grid.Column>
                      <Image
                        src={pokemonInfo.sprites.other.home.front_default}
                        alt=""
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <Image
                        src={pokemonInfo.sprites.other.home.front_shiny}
                        alt=""
                      />
                    </Grid.Column>
                  </Grid.Row>

                  <Divider horizontal>Stats</Divider>

                  <Grid.Row columns="2">
                    <Grid.Column>{pokemonStats}</Grid.Column>
                    <Grid.Column>
                      <List>
                        {/* <List.Item>{pokemonAbility}</List.Item> */}
                      </List>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </>
            ) : (
              <>
                {isNaN(pokemonInfo.id) ? (
                  <h2>Searching...</h2>
                ) : (
                  <h2>Pokemon not found</h2>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
