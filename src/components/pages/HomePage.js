import React from 'react';
import Layout from '../layout/Layout';

const HomePage = (props) => {

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

//comment