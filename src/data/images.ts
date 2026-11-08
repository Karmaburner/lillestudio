export interface ImageData {
  id: string
  src: string
  /** Beskrivelse av hva bildet viser. Brukes som alt-tekst. */
  alt: string
  category: string
  categoryLabel: string
  /** Fotografens kommentar. Vises i lightboxen, men er ikke alt-tekst. */
  comment: string
  tags: string[]
}

export const allImages: ImageData[] = [
  {
    id: 'alternativ-barnebilde',
    src: '/images/alternativ_barnebilde.webp',
    alt: 'Barn fotografert innendørs i naturlig lys',
    category: 'barn-familie',
    categoryLabel: '#BarnOgFamilie',
    comment: 'Naturlig og ekte, akkurat slik barn er best.',
    tags: ['#barnefoto', '#naturlig', '#øyeblikk'],
  },
  {
    id: 'parbilde-farger',
    src: '/images/parbilde_farger.webp',
    alt: 'Par tett sammen i fargebilde',
    category: 'bryllup',
    categoryLabel: '#Bryllupsfoto',
    comment: 'Kjærligheten i farger.',
    tags: ['#kjærlighet', '#bryllup', '#farger', '#stemning'],
  },
  {
    id: 'babykrybbe',
    src: '/images/babykrybbe.webp',
    alt: 'Nyfødt baby som sover i en krybbe',
    category: 'barn-familie',
    categoryLabel: '#BarnOgFamilie',
    comment: 'De aller første dagene, tidløs skjønnhet.',
    tags: ['#nyfødtfoto', '#baby', '#sovende', '#tidløs'],
  },
  {
    id: 'parbilder',
    src: '/images/parbilder.webp',
    alt: 'Par som ser på hverandre utendørs',
    category: 'bryllup',
    categoryLabel: '#Bryllupsfoto',
    comment: 'To hjerter, ett bilde.',
    tags: ['#bryllup', '#par', '#portrett'],
  },
  {
    id: 'babygitar',
    src: '/images/babygitar.webp',
    alt: 'Baby som ligger ved siden av en gitar',
    category: 'barn-familie',
    categoryLabel: '#BarnOgFamilie',
    comment: 'Fremtidens rockestjerne.',
    tags: ['#baby', '#musikk', '#kreativ', '#lek'],
  },
  {
    id: 'gronnbaby',
    src: '/images/grønnbaby.webp',
    alt: 'Baby omgitt av grønt stoff',
    category: 'barn-familie',
    categoryLabel: '#BarnOgFamilie',
    comment: 'Grønn og herlig.',
    tags: ['#baby', '#farger', '#nyfødtfoto'],
  },
  {
    id: 'harley',
    src: '/images/harley.webp',
    alt: 'Harley Davidson-motorsykkel fotografert i studio',
    category: 'bedrift',
    categoryLabel: '#Bedrift',
    comment: 'Lekker Harley fra en kreativ shoot.',
    tags: ['#harley', '#reklame', '#kreativ', '#motorsykkel'],
  },
  {
    id: 'harley2',
    src: '/images/harley2.webp',
    alt: 'Nærbilde av detaljer på en Harley Davidson',
    category: 'bedrift',
    categoryLabel: '#Bedrift',
    comment: 'Råskap på to hjul.',
    tags: ['#harley', '#davidson', '#reklame', '#kraft'],
  },
  {
    id: 'konfirmanten',
    src: '/images/konfirmanten.webp',
    alt: 'Konfirmant i finstasen fotografert i halvfigur',
    category: 'konfirmant',
    categoryLabel: '#Konfirmant',
    comment: 'En stor dag fortjener store bilder.',
    tags: ['#konfirmant', '#portrett', '#stolt'],
  },
  {
    id: 'familie',
    src: '/images/familie.webp',
    alt: 'Familie samlet tett inntil hverandre',
    category: 'barn-familie',
    categoryLabel: '#BarnOgFamilie',
    comment: 'Familien, det viktigste vi har.',
    tags: ['#familie', '#kjærlighet', '#øyeblikk'],
  },
  {
    id: 'barn-svarthvitt',
    src: '/images/barn1_svarthvitt.webp',
    alt: 'Portrett av barn i svart-hvitt',
    category: 'barn-familie',
    categoryLabel: '#BarnOgFamilie',
    comment: 'Svart-hvitt fanger følelsen perfekt.',
    tags: ['#barnefoto', '#svarthvitt', '#tidløs'],
  },
  {
    id: 'barnmednavneskilt',
    src: '/images/barnmednavneskilt.webp',
    alt: 'Nyfødt baby ved siden av et navneskilt',
    category: 'barn-familie',
    categoryLabel: '#BarnOgFamilie',
    comment: 'Velkommen til verden.',
    tags: ['#nyfødtfoto', '#navn', '#baby'],
  },
  {
    id: 'barn-skateboard',
    src: '/images/barn_skateboard.webp',
    alt: 'Barn med skateboard utendørs',
    category: 'barn-familie',
    categoryLabel: '#BarnOgFamilie',
    comment: 'Born to skate.',
    tags: ['#barnefoto', '#skateboard', '#action', '#lek'],
  },
  {
    id: 'sovebaby',
    src: '/images/sovebaby_svarthvit.webp',
    alt: 'Sovende baby i svart-hvitt',
    category: 'barn-familie',
    categoryLabel: '#BarnOgFamilie',
    comment: 'Fred og ro, den første søvnen.',
    tags: ['#nyfødtfoto', '#sovende', '#svarthvitt'],
  },
  {
    id: 'svarthvit',
    src: '/images/svarthvit.webp',
    alt: 'Portrett av voksen person i svart-hvitt',
    category: 'portrett',
    categoryLabel: '#Portrett',
    comment: 'Karakter i hvert drag.',
    tags: ['#portrett', '#svarthvitt', '#ansikt', '#uttrykk'],
  },
  {
    id: 'alternativbaby',
    src: '/images/alternativbaby.webp',
    alt: 'Baby fotografert tett på',
    category: 'barn-familie',
    categoryLabel: '#BarnOgFamilie',
    comment: 'Liten, men allerede full av personlighet.',
    tags: ['#baby', '#nyfødtfoto', '#portrett'],
  },
  {
    id: 'b1',
    src: '/images/b1.webp',
    alt: 'Nyfødt baby som sover på magen',
    category: 'barn-familie',
    categoryLabel: '#BarnOgFamilie',
    comment: 'Dypt i drømmeland.',
    tags: ['#barnefoto', '#naturlig', '#ro'],
  },
  {
    id: 'babyleonore',
    src: '/images/babyleonore.webp',
    alt: 'Baby fotografert i studio',
    category: 'barn-familie',
    categoryLabel: '#BarnOgFamilie',
    comment: 'Et navn som passer et eventyr.',
    tags: ['#baby', '#nyfødtfoto', '#personlighet'],
  },
]

export const kategorier = [
  { id: 'alle', label: 'Alle' },
  { id: 'barn-familie', label: 'Barn & familie' },
  { id: 'konfirmant', label: 'Konfirmant' },
  { id: 'bryllup', label: 'Bryllupsfoto' },
  { id: 'portrett', label: 'Portrett' },
  { id: 'bedrift', label: 'Bedrift & reklame' },
]

export function bildeMedId(id: string): ImageData | undefined {
  return allImages.find(b => b.id === id)
}
