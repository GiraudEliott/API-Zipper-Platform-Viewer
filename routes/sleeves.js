import express from 'express';
const router = express.Router();

const sleeves = [
    {
        piece: '3',
        id: '1',
        name: 'Illisible',
        image: 'http://localhost:5000/public/images/textile-2.3.png',
        available: true,
        logo: 'http://localhost:5000/public/logos/illisible.svg',
        url: 'https://www.malt.fr/profile/eliotthoarau#categorization',
    
      },
      {
          piece: '3',
          id: '1',
          name: 'Zipper Platform',
          image: 'http://localhost:5000/public/images/textile-1.1.png',
          available: true,
          logo: 'http://localhost:5000/public/logos/zipper.svg',
          url: 'https://www.malt.fr/profile/eliotthoarau#categorization',
    
        },
        {
          piece: '3',
          id: '1',
          name: 'Psychic Garden',
          image: 'http://localhost:5000/public/images/textile-3.3.png',
          available: true,
          logo: 'http://localhost:5000/public/logos/psychic.svg',
          url: 'https://www.malt.fr/profile/eliotthoarau#categorization',
    
        },
]

router.get('/', (req, res) => {
  res.send(sleeves)
});

export default router;