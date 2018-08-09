class Utils {
  static mergeReports(Reports, streamData) {
    // generate an array of ids of streamData
    const streamDataIds = streamData.map(Report => Report._id);

    return Reports
      // consider streamData as the source of truth
      // first take existing Reports which are not present in stream data
      .filter(({ _id }) => !streamDataIds.includes(_id))
      // then add Reports from stream data
      .concat(streamData)
      // remove Reports which are deleted in stream data
      .filter(Report => !Report._deleted)
      // finally sort on the basis of creation timestamp
      .sort((a, b) => a.createdAt - b.createdAt);
  }
}

export default Utils;
