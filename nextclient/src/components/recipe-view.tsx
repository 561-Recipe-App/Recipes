
"use client";
import { Avatar } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RecipeApiResponse } from "@/app/recipe/[...id]/page";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

interface RecipeData {
  data: RecipeApiResponse;
}

export function RecipeView({ data }: RecipeData) {

  return (
    data && ( <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8 items-start max-w-7xl mx-auto py-6 px-4">
      <div className="relative group overflow-hidden rounded-lg shadow-lg">
        <img
          alt="Food Image"
          className="object-cover w-full h-96"
          height={400}
          src={data.image}
          style={{
            aspectRatio: "600/400",
            objectFit: "cover"
          }}
          width={600}
        />
        <div className="bg-white p-4 dark:bg-gray-950">
          <h1 className="font-bold text-3xl">{data.title}</h1>
          {/*the data.summary variable is html, embed it below*/}

          <p className="text-sm light:text-gray-700" dangerouslySetInnerHTML={{
            __html: data.summary
          }} />
        </div>
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-2">
          <Card>
            <CardTitle className="p-4">Ingredients</CardTitle>
            <CardDescription className="p-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.extendedIngredients.map((ingredient: any) => (
                  <div key={ingredient.id} className="flex items-center gap-2">
                    <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                         alt={ingredient.name} className="w-10 h-10 object-cover" />
                    <span>{ingredient.original}</span>
                  </div>))}
              </div>
            </CardDescription>
          </Card>

        </div>
        
      </div>

      <Card>
        <CardTitle className="p-4">Detailed Instructions</CardTitle>
        <CardDescription className="p-4">
          {data.analyzedInstructions[0]?.steps.map((step: any) => (
            <div key={step.number} className="mb-4">
              <h3 className="font-semibold">Step {step.number}</h3>

              <p>{step.step}</p>
              {step.ingredients.length > 0 && (
                <div>
                  <h4 className="font-semibold mt-2">Ingredients:</h4>
                  <ul>
                    {step.ingredients.map((ingredient: any) => (
                      <>
                        <li key={ingredient.id} className="flex items-center gap-2">
                          <img
                            src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                            alt={ingredient.name}
                            className="w-6 h-6 object-cover"
                          />
                          <span>{ingredient.name}</span>
                        </li>
                      </>

                    ))}
                  </ul>
                </div>
              )}
              {step.equipment.length > 0 && (
                <div>
                  <h4 className="font-semibold mt-2">Equipment:</h4>
                  <ul>
                    {step.equipment.map((equipment: any) => (
                      <li key={equipment.id} className="flex items-center gap-2">
                        <img
                          src={`https://spoonacular.com/cdn/equipment_100x100/${equipment.image}`}
                          alt={equipment.name}
                          className="w-6 h-6 object-cover"
                        />
                        <span>{equipment.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </CardDescription>
      </Card>

      <div className="w-full">
        <h2 className="font-semibold text-lg md:text-xl">Comments and Ratings</h2>
        <div className="border shadow-sm rounded-lg">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {/*@ts-ignore*/}
                    <Avatar size="xs" src="/placeholder.svg" />
                    <div>
                      <h3 className="font-medium">John Doe</h3>
                      <div className="flex items-center gap-0.5">
                        <StarIcon className="h-4 w-4 fill-primary" />
                        <StarIcon className="h-4 w-4 fill-primary" />
                        <StarIcon className="h-4 w-4 fill-primary" />
                        <StarIcon className="h-4 w-4 fill-primary" />
                        <StarIcon className="h-4 w-4 fill-muted stroke-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-medium">Delicious! My family loved it.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {/*@ts-ignore*/}
                    <Avatar size="xs" src="/placeholder.svg" />
                    <div>
                      <h3 className="font-medium">Jane Smith</h3>
                      <div className="flex items-center gap-0.5">
                        <StarIcon className="h-4 w-4 fill-primary" />
                        <StarIcon className="h-4 w-4 fill-primary" />
                        <StarIcon className="h-4 w-4 fill-primary" />
                        <StarIcon className="h-4 w-4 fill-muted stroke-muted-foreground" />
                        <StarIcon className="h-4 w-4 fill-muted stroke-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-medium">Tastes great but the sauce could use more seasoning.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="w-full">

        <div className="relative">
          <Input
            className="w-full bg-white shadow-none appearance-none md:w-full lg:w-1/2 dark:bg-gray-950"
            placeholder="Write a comment..."
            type="text"
          />
          <Button className="mt-2 md:mt-0 md:absolute right-0 top-0" type="submit">
            Submit
          </Button>
        </div>

      </div>
      <Button onClick={() => window.location.reload()}>
        Random Recipe
      </Button>
    </div>)
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
