module.exports.POST_TYPES = {
  TWITTER: {
    type: 'twitter'
  },
  INSTAGRAM: {
    type: 'instagram'
  }
};

module.exports.LOCATIONS = {
  FENWAY: {
    keyword: 'fenway',
    lat: '42.3464',
    lon: '-71.0976',
    radius: '2mi'
  },
  BRIGHTCOVE: {
    keyword: 'fortpoint',
    lat: '42.3528',
    lon: '-71.0529',
    radius: '2mi'
  }
};

module.exports.CURRENT_LOCATION = module.exports.LOCATIONS.FENWAY;