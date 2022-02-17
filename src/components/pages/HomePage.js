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
        <Layout>
            
        </Layout>
    )
};

export default HomePage;