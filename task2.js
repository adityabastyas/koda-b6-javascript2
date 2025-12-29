const we = {
  name: "John",
  are: {
    the: {
      best: "Koda",
    },
    age: 33,
  },
};

const {
  name,
  are: {
    the: { best },
  },
} = we;
console.log(best);

const hello = {
  hai: "Adit",
  world: "Hello World",
};

const { hai, world } = hello;
console.log(world);

const obj = {
  str: [
    "halo",
    "adit",
    "bastyas",
    [
      "mulya",
      [
        "semangat",
        "belajar",
        { man: [{ tech: { academy: "Tech Academy" } }, "ngoding"] },
      ],
    ],
  ],
};
const {
  str: [
    halo,
    adit,
    bastyas,
    [
      mulya,
      [
        semangats,
        belajar,
        {
          man: [
            {
              tech: { academy },
            },
          ],
        },
      ],
    ],
  ],
} = obj;
console.log(academy);

const my = [
  {
    favorite: ["ganbarimasu", "kaizen", "benkyou", { fruit: { is: "Apple" } }],
  },
  "aditya",
];

const [
  {
    favorite: [
      ganbarimasu,
      kaizen,
      benkyou,
      {
        fruit: { is },
      },
    ],
  },
  aditya,
] = my;
console.log(is);
