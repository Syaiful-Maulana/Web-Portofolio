const getAge = (dateString: string) => {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const about = {
  picture: '/avatar.jpg',
  description: [
    `I live in Kudus, Indonesia. I was born in Kudus, 4 Juni 2001. I'm ${getAge(
      '2001-06-04'
    )} years old. I'm an Informatics Student from Universitas Muria Kudus. `,
    'My main tech stack is Golang,Node.js, PostgreSQL, and MySQL',
    'Coding has been my passion and hobby since I was 17 years old, and I love computer since I was a kid.',
    'Besides coding, I love listening to music. My favorite genres are Pop and Sholawat | I like playing games too. My favorite genre is First PUBG Mobile and Mobile Legend',
  ],
};
