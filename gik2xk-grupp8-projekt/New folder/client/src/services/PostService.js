import axios from './api';

export async function getAll(endpoint = '/posts') {
  try {
    const response = await axios.get(endpoint);

    if (response.status === 200) return response.data;
    else {
      console.log(response);
      return [];
    }
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
  }
}

export async function getOne(id) {
  try {
    const response = await axios.get(`/posts/${id}`);
    if (response.status === 200) return response.data;
    else {
      console.log(response.data);
      return null;
    }
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
  }
}

export async function create(post) {
  try {
    const response = await axios.post('/posts', post);
    if (response.status === 200) return response.data;
    else {
      console.log(response.data);
      return null;
    }
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
  }
}

export async function update(post) {
  try {
    const response = await axios.put('/posts', post);
    if (response.status === 200) return response.data;
    else {
      console.log(response.data);
      return null;
    }
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
  }
}

export async function remove(id) {
  try {
    const response = await axios.delete('/posts', { data: { id } });
    if (response.status === 200) return response.data;
    else {
      console.log(data);
      return null;
    }
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
  }
}

export async function addComment(postId, comment) {
  try {
    const response = await axios.post(`/posts/${postId}/addComment`, comment);
    if (response.status === 200) return response.data;
    else {
      console.log(data);
      return null;
    }
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
  }
}
