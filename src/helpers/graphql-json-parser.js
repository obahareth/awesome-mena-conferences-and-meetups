let parseMeetups = data => {
  // TODO: Make this safer
  return data.meetupsJson.edges[0].node.childMeetupsJson.meetups
}

let parseConferences = data => {
  // TODO: Make this safer
  return data.conferencesJson.edges[0].node.childConferencesJson.conferences
}

export { parseMeetups, parseConferences }
