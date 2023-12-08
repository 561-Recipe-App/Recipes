import { Card } from "@/components/ui/card";
import Link from "next/link";

export function RecipeCard({ id, title, image }: any) {
  return (
    <Card className="flex flex-col justify-between bg-gradient-to-r from-white-300 via-white-200 to-white-200 dark:from-gray-900 dark:via-gray-800
      dark:to-gray-700 flex items-center">
      <div className=" max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden dark:bg-zinc-900">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center">
            <div className="mx-3">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">{title}</h3>
            </div>
          </div>
          <div className="flex items-center">
            <svg
              className=" h-6 w-6 text-red-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <svg
              className=" h-6 w-6 text-gray-500 dark:text-gray-400 ml-4"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
        </div>
        <div className="relative">
          <Link href={`/recipe/${id}/${title}`}>

            <img
              alt="Food image"
              className="object-cover w-full h-64"
              height="400"
              src={image}
              style={{
                aspectRatio: "800/400",
                objectFit: "cover"
              }}
              width="800"
            />
          </Link>

        </div>

      </div>
    </Card>
  );
}
