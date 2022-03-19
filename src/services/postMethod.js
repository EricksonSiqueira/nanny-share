const postData = async (data, URL) => {
  try {
    const post = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': 'Valid token',
      },
      body: JSON.stringify(data),
    });
    return post;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error on Post method: ${error.message}`);
    return false;
  }
};

export default postData;
