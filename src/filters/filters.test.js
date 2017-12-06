import { byParty, getRepublicans, getDemocrats } from './'


it('filters by the appropriate party', () => {
  const PARTY = 'Republican'

  const results = byParty(PARTY)
  expect(results.length).toBeGreaterThan(0)

  expect(results[0].party).toEqual(PARTY)
})

it('filters by republican party', () => {
  const results = getRepublicans()
  expect(results.length).toBeGreaterThan(0)

  expect(results[0].party).toEqual('Republican')
})

it('filters by democratic party', () => {
  const results = getDemocrats()
  expect(results.length).toBeGreaterThan(0)

  expect(results[0].party).toEqual('Democrat')
})