function splitArray<T>(array: Array<T>, numParts: number) {
  const result: Array<Array<T>> = [];

  for (let i = 0; i < numParts; i++) {
    if (!result[i % numParts]) {
      result[i % numParts] = [];
    }
    result[i % numParts].push(array[i]);
  }
  return result;
}

export default splitArray;
