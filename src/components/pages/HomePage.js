import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { fetchProducts } from '../../fetchData';
import Layout from '../layout/Layout';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const HomePage = (props) => {

    const [ productData, setProductData ] = useState();

    useEffect(() => {
        fetchProducts().then(data => setProductData(data))
    }, [])

    if (!productData) {
        return null;
    }

    return (
        <Layout color="red">
            <Box p={4}>
                {productData.map(product => (
                    <Box
                        key={product.id}
                        mb={4}
                        display="flex"
                        alignItems="center"
                    >
                        <Card sx={{ mx: 'auto', maxWidth: 800, maxHeight: 500 }} style={{ paddingTop: '10px' }}>
                            <CardHeader
                                action={
                                    <Typography>${product.price / 100}</Typography>
                                }
                                title={product.title}
                                subheader={product.brand}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={product.image}
                                alt={product.title}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {product.description}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Button variant="text">Add to cart</Button>
                                <IconButton aria-label="add to favorites" sx={{ marginLeft: 'auto' }}>
                                    <FavoriteIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Layout>
    )
};

export default HomePage;