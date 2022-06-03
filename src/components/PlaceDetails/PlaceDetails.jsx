import React from 'react';
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core'
import LocationOnOutlined from '@material-ui/icons/LocationOnOutlined';
import PhoneIcon from '@material-ui/core/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const PlaceDetails = ({place}) => {
    console.log(place);
    return (
        <h1>{place.name}</h1>
    );
}

export default PlaceDetails;