import * as React from 'react';
import Router from 'next/router';

import Link from 'next/link'
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

import { MdArrowBack,  } from 'react-icons/md';

import { api } from '../services/api';

export default function AddInsight() {
    const [insight, setInsight] = React.useState<string>("");
    const [tag, setTag] = React.useState<string>("");

    const onSubmit = () => {
        let tagLimpar = tag != '' ? tag : null;

        api.post('Insights', {
            id: 0,
            text: insight,
            dtCreate: new Date(),
            dtUpdate: new Date(),
            tagId: 0,
            tags: {
                id: 0,
                name: tagLimpar,
            }
        })
        .then(response => {
            Router.push('/')
            console.log(response);
        }).catch(error => {
            console.error(error);
        });
    };

    return (
        <>
            <div
                style={{
                    backgroundColor: "#F4F4F4",
                    position: "relative",
                    height: "100vh",
                    width: "100vw"
                }}
            >
                <div
                    style={{
                        backgroundImage: "url(images/background.jpg)",
                        textAlign: "center",
                        paddingBottom: "1em",
                    }}
                >
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        style={{ paddingTop: 10 }}
                    >
                        <Grid item xs={4}>
                            <Link href="/">
                                <IconButton style={{ color: "#ED4D77" }}>
                                    <MdArrowBack />
                                </IconButton>
                            </Link>
                        </Grid>
                        <Grid item xs={4} style={{ color: "#ED4D77" }}>
                            <p>CRIAR <br></br><b>Insights</b></p>
                        </Grid>
                        <Grid item xs={4}>
                        </Grid>
                    </Grid>
                </ div>
                <div
                    style={{
                        textAlign: "center",
                        padding: "2.5%",
                        display: "grid",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <div>
                        <Card style={{ width: "90vh" }}>
                            <CardContent>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    style={{ paddingTop: 10 }}
                                    spacing={2}
                                >
                                    <Grid item xs={12}>
                                        <FormControl variant="standard" style={{ width: "100%" }}>
                                            <InputLabel>Insight</InputLabel>
                                            <TextField
                                                placeholder="Escreva aqui o seu insight..."
                                                multiline
                                                rows={5}
                                                variant="standard"
                                                type="text"
                                                helperText="limite de caracteres: 400"
                                                inputProps={{ maxLength: 400 }}
                                                onChange={(e) => { setInsight(e.target.value) }}
                                                style={{ 
                                                    width: "100%",
                                                    paddingTop: "5%"
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl variant="standard" style={{ width: "100%" }}>
                                            <InputLabel>Categoria</InputLabel>
                                            <TextField
                                                placeholder="Adicione uma categoria(opcional)..."
                                                multiline
                                                rows={1}
                                                variant="standard"
                                                type="text"
                                                onChange={(e) => { setTag(e.target.value) }}
                                                style={{ 
                                                    width: "100%",
                                                    paddingTop: "5%"
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </ div>
                    <div
                        style={{
                            bottom: "0",
                            marginBottom: "0.5em",
                            position: "fixed",
                            width: "100%",
                        }}
                    >
                        <Button variant="contained" onClick={() => onSubmit()}><b>PUBLICAR</b></Button>
                    </div>
                </div>
            </div>
        </>
    );
}
