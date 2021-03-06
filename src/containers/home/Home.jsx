import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Container from '../../components/container/Container';
import axios from 'axios';


const Home = () => {
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState('');
  const [caption, setCaption] = useState('');
  const [filter, setFilter] = useState('');

  const getPosts = async () => {
    const res = await axios.get('http://localhost:3000/api/posts');
    setPosts(res.data);
  }
  useEffect(() => {
    getPosts();
  }, []);
  const handleGoHome = () => {
    setStep(1);
  };
  const handleNextStep = () => {
    setStep(step + 1);
  };
  const postPost = async (post) => {
    const config = {
      method: 'post',
      url: `http://localhost:3000/api/posts`,
      data: post,
    }
    const res = await axios(config);
    console.log(res);
  }
  const handleSharePost = () => {
    const post = {
      username: 'nodeGirls',
      userImage: 'data:image/jpeg;base64,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',
      postImage: image,
      likes: 0,
      caption,
      filter
    }
    console.log(post);
    postPost(post);
    setStep(1);
    setTimeout(() => getPosts());
  };
  useEffect(() => console.log(filter), [filter]);
  const handleUploadImage = (ev) => {
    const files = ev.target.files
    if (!files.length) return
    const reader = new FileReader()
    reader.readAsDataURL(files[0])
    reader.onload = ev => {
      setImage(ev.target.result);
      setStep(2);
    }
    document.querySelector('#file').value = ''
  };
  const [step, setStep] = useState(1);
  const handleLike = async (post) => {
    const hasBeenLiked = !post.hasBeenLiked;
    const likes = hasBeenLiked ? post.likes + 1 : post.likes - 1;
    const config = {
      method: 'put',
      url: `http://localhost:3000/api/posts/${post.id}`,
      data: { hasBeenLiked, likes },
    }
    const res = await axios(config);
    getPosts();
  };
  return (
    <>
      <Header
        handleGoHome={handleGoHome}
        handleNextStep={handleNextStep}
        handleSharePost={handleSharePost}
        step={step}>
      </Header>
      <Container
        step={step}
        posts={posts}
        like={handleLike}
        handleCaption={setCaption}
        image={image}
        setFilter={setFilter}
      ></Container>
      <Footer
        step={step}
        handleUploadImage={handleUploadImage}
        handleGoHome={handleGoHome}
      ></Footer>
    </>
  );
};

export default Home;