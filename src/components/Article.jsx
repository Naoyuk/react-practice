import {ToggleOpen} from './index';

const Article = (props) => {
  return (
    <div className='article'>
      {/*<Title title={props.title} />*/}
      {/*<Content content={props.content} />*/}
      {/*<PublishButton isPublished={isPublished} onClick={() => publishArticle()} />*/}
      {/*<Counter />*/}
      <ToggleOpen />
    </div>
  );
};

export default Article;
