const people = [
  {
    name: "Gordon Ramsay",
    role: "Head Chef",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Gordon_Ramsay.jpg",
  },
  {
    name: "Daniel Atehortua",
    role: "Sous-chef",
    imageUrl:
      "https://media.licdn.com/dms/image/C4D03AQH10ABaP0vlPw/profile-displayphoto-shrink_800_800/0/1566569501300?e=2147483647&v=beta&t=4oURRlcat1xowixQtOT6p1JmYm5rE2mW2WiAY3zaPqk",
  },
  {
    name: "Dageem Syume",
    role: "Garde manger",
    imageUrl:
      "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/172154228_2375240789277732_9178781530763136217_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7a1959&_nc_ohc=Yznci5p2Ej8AX-AChBW&_nc_ht=scontent-iad3-1.xx&oh=00_AfAeUoJjDXp9zkOn5VjwJC2q5ef4CQMPD9XykUNUeF5ZVA&oe=655A317D",
  },
  {
    name: "Jake Hogsten",
    role: "Chef de partie",
    imageUrl:
      "https://media.licdn.com/dms/image/D4E03AQG8VC0Cun6jQg/profile-displayphoto-shrink_800_800/0/1693416100929?e=1703116800&v=beta&t=FdhR_TWQO_Qh9EyQKBldOHwsGaEFPjB3cPtynarFR3o",
  },
  {
    name: "Daniel jerman",
    role: "Executive chef",
    imageUrl:
      "https://media.licdn.com/dms/image/D4E35AQGb4fQ4mWOWTQ/profile-framedphoto-shrink_800_800/0/1686318155926?e=1698433200&v=beta&t=D5QgQ8Hko_e5LHHs2DaRhg1Mh-mLEVx-FBe13j23e3s",
  },
  {
    name: "Luke Jones",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://ca.slack-edge.com/E05LYDFST6K-U039ADKHDDM-8aa8e3928383-512",
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
