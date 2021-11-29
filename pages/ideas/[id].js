import { useRouter } from "next/router";
import allIdeas from "../../utils/ideas.json";

export default function Idea() {
  const router = useRouter();
  const { img, title, content, author, avatar, datetime, likes } = allIdeas.find((item) => item.id === router.query.id);
  return <>{likes}</>;
}
