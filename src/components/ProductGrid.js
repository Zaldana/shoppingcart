import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { cartContext, useShoppingCart } from '../context/cartContext';


export default function ProductGrid(props) {

    const {
        addItemToCart
    } = useShoppingCart();

    const {
        product,
    } = props;

    const {
        id,
        title,
        brand,
        price,
        description,
        image,
    } = product;

    const handleAddToCartButton = () => {
        addItemToCart(product)
    }

    return (
        <Card sx={{ mx: 'auto', maxWidth: 345 }} style={{ paddingTop: '10px' }}>
            <CardHeader
                action={
                    <Typography>${price / 100}</Typography>
                }
                title={title}
                subheader={brand}
            />
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt={title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button variant="text" onClick={handleAddToCartButton}>Add to cart</Button>
            </CardActions>
        </Card>
    );
}

