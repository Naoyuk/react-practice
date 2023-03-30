import {useState} from 'react';
import {Content, Title, PublishButton, Counter, ToggleOpen} from './index';

const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false)
  const publishArticle = () => {
    setIsPublished(true)
  }
  return (
    <div className='article'>
      <Title title={props.title} />
      <Content content={props.content} />
      <PublishButton isPublished={isPublished} onClick={() => publishArticle()} />
      <Counter />
      <ToggleOpen />
    </div>
  );
};

export default Article;
