import Image from "next/image";

export default function ChallengeCard({
  img,
  title,
  author,
  avatar,
  datetime,
  content,
  ideas,
  likes,
  ...other
}) {
  return (
    <div className="rounded-xl border-2 border-black w-[300px] overflow-hidden" {...other}>
      <Image src={img} alt="background" width={300} height={200} />
      <section className="p-6 text-sm">
        <h2 className="font-bold">{title}</h2>
        <div className="py-2 flex items-center">
          <Image src={avatar} alt="avatar" width={20} height={20} />
          <p className="px-2 font-semibold">{author}</p>
          {datetime}
        </div>
        <p className="mb-3 break-all line-clamp-2">{content}</p>
        <div className="flex text-sm">
          <div className="flex items-center pr-4">
            <Image src="/lamp.svg" alt="idea" width={12} height={12} />
            <p className="pl-2">{ideas.length} ideas</p>
          </div>
          <div className="flex items-center">
            <Image src="/heart.svg" alt="heart" width={12} height={12} />
            <p className="pl-2">{likes.length} likes</p>
          </div>
        </div>
      </section>
    </div>
  );
}
