import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { getArticleList } from "../../api/article";
import type { IArticle } from "../../api/article/type";

interface IProp {
  list: IArticle[]
}

const Article: NextPage<IProp> = ({ list }) => {
  const router = useRouter();
  const onClick = (id: string) => {
    router.push(`/article/${id}`);
  };

  return (
    <div className="sm:w-8/12 mt-3 m-auto">
      <ul>
        {list.map((item: IArticle) => {
          return (
            <li className="article-item" onClick={() => onClick(item.id)} key={item.id}>
              <div className="flex-1 mr-3 overflow-hidden">
                <div className="article-item-title">
                  <span>{ item.title }</span>
                </div>
                <div className="text-gray-400 text-sm multi-truncate">
                  <span>
                    { item.description }
                  </span>
                </div>
              </div>
              <div className="shrink-0 relative w-24 h-24">
                <Image
                  src={item.cover}
                  objectFit="contain"
                  layout="fill"
                  priority={true}
                  alt="图片"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Article;

export async function getStaticProps() {
  const list = getArticleList();
  return {
    props: {
      list,
    },
  };
}
