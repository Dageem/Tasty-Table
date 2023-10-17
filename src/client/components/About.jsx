const people = [
  {
    name: "Gordon Ramsay",
    role: "Head Chef",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Gordon_Ramsay.jpg",
  },
  {
    name: "Guy Fieri",
    role: "Sous-chef",
    imageUrl:
      "https://www.ocregister.com/wp-content/uploads/migration/l0v/l0vuax-l0vtw5guyfieriphoto1white.jpg?w=879",
  },
  {
    name: "Michael Caines",
    role: "Garde manger",
    imageUrl:
      "https://www.chefspencil.com/wp-content/uploads/Michael-Caines.jpg.webp",
  },
  {
    name: "Jamie Oliver",
    role: "Chef de partie",
    imageUrl:
      "https://www.chefspencil.com/wp-content/uploads/Jamie-Oliver.jpg.webp",
  },
  {
    name: "Spongebob",
    role: "Executive chef",
    imageUrl:
      "https://play-lh.googleusercontent.com/oNGJkMtJLL9p0x9U0jaCN63Mny4wKdCOjCtRm8RazHVd3HsuT8YbEk1H00QnOfgOwYQ",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
