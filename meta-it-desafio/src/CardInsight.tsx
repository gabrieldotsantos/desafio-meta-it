import * as React from 'react';

import Link from 'next/link'
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { MdAdd, MdSearch, MdMoreHoriz } from 'react-icons/md';
import { CardActions } from '@mui/material';

import { api } from '../services/api';

interface Tag {
    id: number,
    name: string,
}

interface InsightType {
    id: number,
    text: string,
    dtCreate: Date,
    dtUpdate: Date,
    tagId: Date,
    tags?: Tag,
}

const insightScrool: Array<InsightType> = [];

export default function CardInsight() {

    const [insights, setInsight] = React.useState<Array<InsightType>>();
    const [insightScrool, setInsightScrool] = React.useState<Array<InsightType>>();
    const [endScroll, setEndScroll] = React.useState<number>(2);

    const searchInsights = () => {
        api.get('Insights')
            .then(response => {
                setInsight(response.data);
                setInsightScrool(response.data.slice(0, endScroll));
            }).catch(error => {
                console.error(error);
            });
    };

    const handleClickScroll = () => {
        let end = endScroll + 3;
        setInsightScrool(insights?.slice(0, end))
        setEndScroll(end)
    }

    const handleSearch = (filtro: string) => {
        if (filtro == '') searchInsights();

        let newInsight = insights?.filter(insight => 
                insight?.text.includes(filtro)
            );

        setInsight(newInsight);
        setInsightScrool(newInsight?.slice(0, endScroll))
    }

    React.useEffect(() => {
        searchInsights()
    }, []);

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
                        backgroundColor: "#F4F4F4",
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
                            <img
                                src="images/marca-insights.jpg"
                                style={{
                                    maxWidth: "2.5em",
                                    paddingTop: "0.55em",
                                }}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Grid
                                container
                                item
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                xs={12}
                            >
                                <Avatar src="images/avatar.jpg">A</Avatar>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <Link href="/add">
                                <IconButton style={{ color: "#ED4D77" }}>
                                    <MdAdd />
                                </IconButton>
                            </Link>
                        </Grid>
                        <Grid
                            container
                            item
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            xs={12}
                            style={{ color: "#FFF" }}
                        >
                            <Grid item xs={12}>
                                <h4>Olá, Antonio!</h4>
                                <p>antonio.pino@g.globo</p>
                            </Grid>
                            <Grid item xs={12} style={{ color: "#ED4D77" }}>
                                <p>Feed de <b>Insights</b></p>
                            </Grid>
                        </Grid>
                    </Grid>
                </ div>
                <div
                    style={{
                        backgroundColor: "#F4F4F4",
                        backgroundSize: "cover",
                        textAlign: "center",
                        minHeight: "40em",
                        padding: "2.5%",
                        display: "grid",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            display: "contents",
                            alignItems: "center",
                            justifyContent: "center",
                            overflowY: "auto",
                        }}
                    >
                        {insightScrool !== undefined && insightScrool?.length > 0 && insightScrool?.map(card => {
                            return (
                                <Card style={{ marginBottom: "1em" }}>
                                    <CardContent>
                                        <Typography variant="body2">
                                            {card.text}
                                        </Typography>
                                    </CardContent>
                                    {card.tags !== undefined && card.tags?.name != null && (
                                        <CardActions style={{ display: "block" }}>
                                            <Button variant="outlined">{card.tags?.name.toUpperCase()}</Button>
                                        </CardActions>
                                    )}
                                </Card>
                            )
                        })}
                    </ div>
                    <div
                        style={{
                            bottom: "0",
                            width: "100%",
                        }}
                    >
                        {(insights != undefined && insightScrool != undefined)
                            && insights?.length > insightScrool?.length
                            && (
                            <IconButton onClick={() => handleClickScroll()} aria-label="Pesquisar" style={{ marginBottom: "1em" }}>
                                <MdMoreHoriz />
                            </IconButton>
                        )}

                        <Card>
                            <CardContent>
                                <FormControl variant="standard" style={{ width: "100%" }}>
                                    <InputLabel>Pesquise por termos ou categorias</InputLabel>
                                    <Input
                                        type='text'
                                        onChange={(e) => handleSearch(e.target.value) }
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton aria-label="Pesquisar">
                                                    <MdSearch />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
