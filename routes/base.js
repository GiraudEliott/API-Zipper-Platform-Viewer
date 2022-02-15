
import express from 'express';
const router = express.Router();


const base = [
    {
        piece: '2',
        id: '1',
        name: 'Illisible',
        image: 'http://localhost:5000/public/images/textile-2.2.png',
        available: true,
        logo: 'http://localhost:5000/public/logos/illisible.svg',
        url: 'https://www.malt.fr/profile/eliotthoarau#categorization',
    
      },
      {
          piece: '2',
          id: '1',
          name: 'Zipper Platform',
          image: 'http://localhost:5000/public/images/textile-1.2.png',
          available: true,
          logo: 'http://localhost:5000/public/logos/zipper.svg',
          url: 'https://www.malt.fr/profile/eliotthoarau#categorization',
    
        },
        {
          piece: '2',
          id: '1',
          name: 'Psychic Garden',
          image: 'http://localhost:5000/public/images/textile-3.2.png',
          available: true,
          logo: 'http://localhost:5000/public/logos/psychic.svg',
          url: 'https://www.zamnesia.fr/historique-des-commandes',
    
        },
]


router.get('/', (req, res) => {
  res.send(base)
});

export default router;