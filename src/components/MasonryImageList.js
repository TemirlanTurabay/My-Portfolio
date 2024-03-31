import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function MasonryImageList() {
  return (
    <Box sx={{ width: 500, height: 450}}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: require("../images/Снимок экрана 2024-03-30 064044.png"),
  },
  {
    img: require("../images/Снимок экрана 2024-03-30 064055.png"),
  },
  {
    img: require("../images/Снимок экрана 2024-03-30 064110.png"),
  },
  {
    img: require("../images/Снимок экрана 2024-03-30 070444.png"),
  },
  {
    img: require("../images/Снимок экрана 2024-03-30 070635.png"),
  },
  {
    img: require("../images/Снимок экрана 2024-03-31 115237.png"),
  },
  {
    img: require("../images/Снимок экрана 2024-03-31 115310.png"),
  },
  {
    img: require("../images/Снимок экрана 2024-03-31 115410.png"),
  },
  {
    img: require("../images/Снимок экрана 2024-03-31 115434.png"),
  },
];