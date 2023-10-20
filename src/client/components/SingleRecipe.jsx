import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetRecipeByIdQuery } from "../reducers/api";

export default function SingleRecipe() {
  const { id } = useParams();
  const { data: recipe, isLoading, error } = useGetRecipeByIdQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error Loading Categories! {error.message}</p>;

  return (
    <div className="text-blue-gray-900">
      <section className="grid grid-cols-1 md:grid-cols-3 w-[95%] ml-[2.5%] md:w-[95%] md:ml-[2.5%] lg:w-[70%] lg:ml-[15%]">
        <div className="flex flex-col justify-center items-center py-5 px-1 col-span-3 lg:col-span-2">
          <h1 className="text-xl font-bold md:text-2xl">{recipe.name}</h1>
          <p>{recipe.details}</p>
          <img
            className="rounded-xl w-full md:w-3/4 lg:w-[640px] h-[640px]"
            src={recipe.imageUrl}
            alt="Recipe image"
          />
        </div>
        <div className="hidden lg:flex col-span-1 flex-col justify-center items-center">
          <img
            src="https://media.licdn.com/dms/image/C4D03AQH10ABaP0vlPw/profile-displayphoto-shrink_800_800/0/1566569501300?e=2147483647&v=beta&t=4oURRlcat1xowixQtOT6p1JmYm5rE2mW2WiAY3zaPqk"
            alt=""
            className="rounded-full w-[220px]"
          />
          <h1 className="text-purple-900 font-bold text-md">
            OUR HEAD CHEF AND TEAM
          </h1>
          <p className="text-center px-6">
            All recipes are approved by Head Chef Daniel. Whether he or his team
            created it, or one of our fantastic contributors, you know it will
            be delicious. lorem
          </p>
        </div>
      </section>

      <div className="h-[50px]"></div>
      <section className="w-[95%] ml-[2.5%] md:w-[80%] md:ml-[10%] lg:w-[70%] lg:ml-[15%]">
        <div>
          <h1 className="text-center font-bold">
            Everything about the{" "}
            <strong className="text-purple-900">{recipe.name}</strong>...
          </h1>
          <p className="">
            {recipe.desc} Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Repellat numquam laudantium, iste saepe provident sdaffeafe
            doloremque adipisci temporibus veritatis, quod deserunt, ullam at
            magni blanditiis. Iure in sint alias voluptates autem. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Eos in sit debitis eum,
            repellendus, inventore a, perspiciatis numquam saepe consequuntur
            soluta autem nam quam obcaecati error animi totam incidunt libero?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            quam pariatur. Repellendus rem, nemo quos tempore ex ipsa placeat
            sunt inventore amet reiciendis velit doloribus, fugit officia
            delectus a labore.
          </p>
        </div>
        <div></div>
      </section>
    </div>
  );
}
