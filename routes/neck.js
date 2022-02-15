import express from 'express';
const router = express.Router();




const neck = [
    {
      piece: '1',
      name: 'Illisible',
      image: 'http://localhost:5000/public/images/textile-2.1.png',
      available: true,
      logo: 'http://localhost:5000/public/logos/illisible.svg',
      url: 'https://www.malt.fr/profile/eliotthoarau#categorization',
    },
    {
        piece: '1',
        name: 'Zipper Platform',
        image: 'http://localhost:5000/public/images/textile-1.3.png',
        available: true,
        logo: 'http://localhost:5000/public/logos/zipper.svg',
        url: 'https://www.malt.fr/profile/eliotthoarau#categorization',
      },
      {
        piece: '1',
        name: 'Psychic Garden',
        image: 'http://localhost:5000/public/images/textile-3.1.png',
        available: true,
        logo: 'http://localhost:5000/public/logos/psychic.svg',
        url: 'https://www.malt.fr/profile/eliotthoarau#categorization',
      },
]

router.get('/', (req, res) => {
  res.send(neck)
});

export default router;
