const filterObjs = [
  {
    'name':'High ABV (>6.0%)',
    'state': 'highAbv',
    'filterFn': ((data) => data.filter(beer => beer.abv >= 6.0))
  },

  {
    'name': 'Classic Range',
    'state': 'classic',
    'filterFn': ((data) => data.filter(beer => beer.first_brewed.slice(3) < '2010')),
  },

  {
    'name': 'Acidic (ph < 4)',
    'state': 'acidic',
    'filterFn': ((data) => data.filter(beer => beer.ph < 4)),
  }
]

export default filterObjs;