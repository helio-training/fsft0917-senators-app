import Senators from '../configuration/senators'

export const byParty = (party = '') =>
  Senators.filter(senator => senator.party === party)

export const getRepublicans = () => byParty('Republican')

export const getDemocrats = () => byParty('Democrat')