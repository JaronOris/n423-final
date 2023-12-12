import React from "react";
import Link from "next/link";
import { Image, Button, Popup, Grid } from "semantic-ui-react";

export default function PokeCard({ src, onClick }) {
    return (
        <Grid.Column>
					<Popup 
						trigger={<Image src={src} />}
						on="click"
						content={
							<Button 
								content="Add to team"
								icon="plus"
								color="blue"
								onClick={onClick}
								fluid
							/>
						}
					/>
        </Grid.Column>
    )
} 