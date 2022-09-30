import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { uid } = router.query;

  return <p className="flex flex-col">{uid}</p>;
};

export default Post;
