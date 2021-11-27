// import Link from "next/link";
import { useRouter } from "next/router";
import ChallengeCard from "../components/ChallengeCard";
import challenges from "../utils/challenges.json";

export default function Home() {
  const router = useRouter();
  const handleOpenDetails = (id) => {
    router.push({
      pathname: "/challenge/[id]",
      query: { id },
    });
  };

  return (
    <div className="py-14 px-40">
      <h1 className="font-bold text-3xl">Challenges</h1>
      <section className="flex flex-wrap justify-between gap-8 pt-8">
        {challenges.map((challenge) => (
          // <Link href="/details" key={challenge.id}>
          <ChallengeCard
            {...challenge}
            key={challenge.id}
            onClick={() => handleOpenDetails(challenge.id)}
          />
          // </Link>
        ))}
      </section>
    </div>
  );
}
