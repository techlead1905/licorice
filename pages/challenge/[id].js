import { useRouter } from "next/router";
import Image from "next/image";
import challenges from "../../utils/challenges.json";
import allIdeas from "../../utils/ideas.json";

export default function Challenge() {
  const router = useRouter();
  const { img, title, content, author, avatar, datetime, ideas, likes } =
    challenges.find((item) => item.id === router.query.id);
  const challengeIdeas = allIdeas.filter((item) => ideas.includes(item.id));

  return (
    <div className="w-[400px] mx-auto py-9">
      <h2 className="text-3xl font-bold pb-6">{title}</h2>
      <Image
        src={img}
        alt="background"
        width={400}
        height={272}
        className="rounded-lg"
      />
      <div className="py-4 flex items-center justify-between w-full text-lg">
        <div className="flex items-center">
          <Image src={avatar} alt="avatar" width={24} height={24} />
          <p className="pl-3">{author}</p>
        </div>
        <span className="text-[#404040]">{datetime}</span>
      </div>
      <button className="bg-black py-2 px-4 rounded-lg">
        <div className="flex items-center text-white text-lg">
          <p className="pr-7">Like Challenge</p>
          <Image src="/heart.svg" alt="idea" width={16} height={16} />
          <p className="pl-2">+{ideas.length}</p>
        </div>
      </button>
      <section>
        <h3 className="pt-9 pb-1.5 font-bold text-sm">Description</h3>
        <p className="text-lg">{content}</p>
      </section>
      <button className="text-white bg-black text-lg py-2 px-10 rounded-lg mt-4 mb-10">Submit idea</button>
      <section>
        <div className="flex justify-between pb-5">
          <h3 className="text-sm font-bold">Ideas</h3>
          <div className="flex text-sm">
            <p className="pr-2 opacity-30">Latest</p>
            <p>Most liked</p>
          </div>
        </div>
        {challengeIdeas.map((idea) => (
          <div key={idea.id} className="flex items-center pb-8">
            <Image src={idea.img} alt="idea" width={120} height={120} />
            <div className="pl-5">
              <p className="text-lg">{idea.content}</p>
              <div className="py-3 flex justify-between">
                <div className="flex items-center">
                  <Image src={avatar} alt="avatar" width={20} height={20} />
                  <p className="px-2 font-semibold">{idea.author}</p>
                  {idea.datetime}
                </div>
                <div className="flex items-center">
                  <Image src="/heart.svg" alt="heart" width={12} height={12} />
                  <p className="pl-2">{idea.likes}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
