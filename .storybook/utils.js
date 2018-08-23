export const addStories = (sourceObject, getStory, init) => {
  const sourceArray = Array.isArray(sourceObject)
    ? sourceObject
    : Object.keys(sourceObject)
  sourceArray.reduce((agg, cur) => agg.add(cur, () => getStory(cur)), init)
}
