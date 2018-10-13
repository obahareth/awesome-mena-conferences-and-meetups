const arabicData = require('../../data/conferences/ar.json').conferences
const englishData = require('../../data/conferences/en.json').conferences

function testLocalizedData(data) {
  expect(data).toBeInstanceOf(Array)

  data.forEach(conference => {
    expect(conference).toBeInstanceOf(Object)
    expect(conference).toHaveProperty(
      'identifier',
      'name',
      'description',
      'date'
    )
  })
}

describe('conferences', () => {
  test('Arabic data file', () => {
    testLocalizedData(arabicData)
  })

  test('English data file', () => {
    testLocalizedData(englishData)
  })
  it('Each conference/meetup has both an Arabic and English entry', () => {
    arabicIdentifiers = arabicData.map(c => c.identifier).sort()
    englishIdentifiers = englishData.map(c => c.identifier).sort()

    expect(arabicIdentifiers).toEqual(englishIdentifiers)
  })
})
