import React, {useState} from 'react';
import {Box, Center, CircularProgress, Image} from "@chakra-ui/react";


const imageSizes = {
    md: {
        height: 270,
        width: 180,
        url: 'w220_and_h330_face'
    },
    lg: {
        height: 540,
        width: 360,
        url: 'w500'
    },
}

const MoviePoster = ({src, alt, size, ...props}) => {

    const [loaded, setLoaded] = useState(false)

    const onLoad = () => {
        setLoaded(true)
    }

    let url

    if (!src) {
        url = `https://via.placeholder.com/${imageSizes[size].width}x${imageSizes[size].height}?text=Image+not+found`
    } else {
        url = 'https://image.tmdb.org/t/p/' + imageSizes[size].url + src
    }
    return (
        <Box h={imageSizes[size].height} w={imageSizes[size].width}>
            {
                !loaded && <Center h="100%"><CircularProgress isIndeterminate color="red.300"/></Center>
            }
            {
                <Image
                    style={!loaded ? {display: 'none'}: {}}
                    src={url}
                    alt={alt}
                    onLoad={onLoad}
                    {...props}
                />
            }
        </Box>
    );
};

export default MoviePoster;