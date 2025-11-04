import { description, title, url } from "@/lib/metadata";
import { Metadata } from "next";
import Quiz from "@/components/quiz";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return {
    other: {
      "fc:miniapp": JSON.stringify({
        version: "next",
        imageUrl: `${url}/icon.png`,
        ogTitle: title,
        ogDescription: description,
        ogImageUrl: `${url}/icon.png`,
        button: {
          title: "Launch Mini App",
          action: {
            type: "launch_miniapp",
            name: title,
            url: url,
            splashImageUrl: `${url}/icon.png`,
            iconUrl: `${url}/icon.png`,
            splashBackgroundColor: "#000000",
            description: description,
            primaryCategory: "utility",
            tags: [],
          },
        },
      }),
    },
  };
}

export default function Home() {
  return (
    <main className="flex flex-col gap-4 place-items-center px-4 py-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-muted-foreground mb-6">{description}</p>
      <Quiz />
    </main>
  );
}
