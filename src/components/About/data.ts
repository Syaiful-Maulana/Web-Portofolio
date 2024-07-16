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
    'My main tech stack is Golang,Node.js, Laravel, PostgreSQL, MySQL, Redis, and MongoDB',
    'Experienced Software Engineer with extensive skills in both backend and frontend technologies, specializing in GO, PHP, JavaScript, Laravel, Node.js, SQL, and NoSQL. Adept at developing and optimizing high-performance software applications. Possess strong frontend capabilities in HTML, CSS, JavaScript, and jQuery, with a proven ability to create engaging and responsive user interfaces. Currently focusing on advancing my career in backend and web development.',
  ],
};
